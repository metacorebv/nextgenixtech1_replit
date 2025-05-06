import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getQueryFn, apiRequest } from '../../lib/queryClient';
import { Resource } from '../../lib/types';
import { resourceFilters, resourceTypeFilters } from '../../lib/data';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';

const resourceSchema = z.object({
  title: z.string().min(1, "Title is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  content: z.string().min(50, "Content must be at least 50 characters"),
  imageUrl: z.string().min(1, "Image URL is required"),
  categories: z.array(z.string()).min(1, "At least one category is required"),
  type: z.enum(["article", "whitepaper", "case-study"], {
    errorMap: () => ({ message: "Type must be article, whitepaper, or case-study" }),
  }),
  publishedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/, "Format must be YYYY-MM-DDTHH:MM"),
});

type ResourceFormValues = z.infer<typeof resourceSchema>;

const ResourcesAdmin = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, setValue, watch, formState: { errors } } = useForm<ResourceFormValues>({
    resolver: zodResolver(resourceSchema),
    defaultValues: {
      categories: [],
      type: "article",
      publishedAt: new Date().toISOString().slice(0, 16),
    }
  });

  const { data: resources, isLoading, error } = useQuery({
    queryKey: ['/api/resources'],
    queryFn: getQueryFn<{ data: Resource[] }>({ on401: "throw" }),
  });

  const createMutation = useMutation({
    mutationFn: (data: ResourceFormValues) => 
      apiRequest('/api/admin/resources', 'POST', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/resources'] });
      setIsAdding(false);
      reset();
      setSelectedCategories([]);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: ResourceFormValues }) => 
      apiRequest(`/api/admin/resources/${id}`, 'PATCH', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/resources'] });
      setEditingId(null);
      reset();
      setSelectedCategories([]);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest(`/api/admin/resources/${id}`, 'DELETE'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/resources'] });
    }
  });

  const onSubmit = (data: ResourceFormValues) => {
    if (editingId !== null) {
      updateMutation.mutate({ id: editingId, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const startEdit = (resource: Resource) => {
    setEditingId(resource.id);
    reset({
      title: resource.title,
      slug: resource.slug,
      description: resource.description,
      content: resource.content,
      imageUrl: resource.imageUrl,
      categories: resource.categories,
      type: resource.type as "article" | "whitepaper" | "case-study",
      publishedAt: new Date(resource.publishedAt).toISOString().slice(0, 16),
    });
    setSelectedCategories(resource.categories);
    setIsAdding(true);
  };

  const cancelEdit = () => {
    setIsAdding(false);
    setEditingId(null);
    reset();
    setSelectedCategories([]);
  };

  const handleCategoryChange = (category: string) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category];
    
    setSelectedCategories(updatedCategories);
    setValue('categories', updatedCategories);
  };

  const generateSlug = () => {
    const title = watch('title');
    if (title) {
      const slug = title
        .toLowerCase()
        .replace(/[^\w\s-]/g, '') // Remove special chars
        .replace(/\s+/g, '-') // Replace spaces with -
        .replace(/-+/g, '-'); // Replace multiple - with single -
      
      setValue('slug', slug);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  };

  return (
    <div className="container-custom py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-heading font-bold mb-2">Content Management</h1>
        <p className="text-neutral-600">Add, edit, or remove articles, case studies, and whitepapers.</p>
      </motion.div>

      <div className="mb-6 flex justify-between items-center">
        <div>
          {!isAdding && (
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-primary text-white px-5 py-2 rounded-lg font-medium flex items-center"
              onClick={() => setIsAdding(true)}
            >
              <i className="fas fa-plus mr-2"></i> Add New Content
            </motion.button>
          )}
        </div>
        
        <div className="text-sm text-neutral-500">
          {resources?.data?.length || 0} resources found
        </div>
      </div>

      <AnimatePresence>
        {isAdding && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-neutral-100 p-6 rounded-xl shadow-md mb-8 overflow-hidden"
          >
            <h2 className="text-xl font-heading font-bold mb-4">
              {editingId !== null ? 'Edit Content' : 'Add New Content'}
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Title*</label>
                    <input
                      type="text"
                      {...register('title')}
                      onBlur={generateSlug}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Title of your content"
                    />
                    {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Slug*</label>
                    <div className="flex">
                      <input
                        type="text"
                        {...register('slug')}
                        className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="url-friendly-title"
                      />
                      <button
                        type="button"
                        onClick={generateSlug}
                        className="ml-2 px-3 py-2 bg-neutral-200 rounded-lg hover:bg-neutral-300 transition-colors"
                        title="Generate from title"
                      >
                        <i className="fas fa-sync-alt"></i>
                      </button>
                    </div>
                    {errors.slug && <p className="text-red-500 text-xs mt-1">{errors.slug.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Image URL*</label>
                    <input
                      type="text"
                      {...register('imageUrl')}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="https://example.com/image.jpg"
                    />
                    {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Published Date*</label>
                    <input
                      type="datetime-local"
                      {...register('publishedAt')}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    />
                    {errors.publishedAt && <p className="text-red-500 text-xs mt-1">{errors.publishedAt.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Type*</label>
                    <select
                      {...register('type')}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    >
                      <option value="article">Article</option>
                      <option value="whitepaper">Whitepaper</option>
                      <option value="case-study">Case Study</option>
                    </select>
                    {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Categories*</label>
                    <div className="grid grid-cols-2 gap-2">
                      {resourceFilters
                        .filter(filter => filter.id !== 'all')
                        .map(category => (
                          <div key={category.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`category-${category.id}`}
                              checked={selectedCategories.includes(category.id)}
                              onChange={() => handleCategoryChange(category.id)}
                              className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                            />
                            <label
                              htmlFor={`category-${category.id}`}
                              className="ml-2 text-sm text-neutral-700"
                            >
                              {category.label}
                            </label>
                          </div>
                        ))}
                    </div>
                    {errors.categories && <p className="text-red-500 text-xs mt-1">{errors.categories.message}</p>}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Description* (Short summary)</label>
                    <textarea
                      {...register('description')}
                      rows={3}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Brief description that will appear in cards and listings"
                    ></textarea>
                    {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium mb-1">Content* (Full article or case study)</label>
                    <textarea
                      {...register('content')}
                      rows={10}
                      className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                      placeholder="Full content that will be displayed on the detailed page"
                    ></textarea>
                    <p className="text-xs text-neutral-500 mt-1">For Notion integration, paste the Notion page link or export here.</p>
                    {errors.content && <p className="text-red-500 text-xs mt-1">{errors.content.message}</p>}
                  </div>
                </div>
              </div>
              
              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={cancelEdit}
                  className="px-4 py-2 text-neutral-700 bg-neutral-200 rounded-lg hover:bg-neutral-300 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  disabled={createMutation.isPending || updateMutation.isPending}
                >
                  {createMutation.isPending || updateMutation.isPending ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Saving...
                    </span>
                  ) : editingId !== null ? 'Update Content' : 'Publish Content'}
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {isLoading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
          <p>Error loading resources. Please try again.</p>
        </div>
      ) : resources?.data?.length === 0 ? (
        <div className="text-center py-10 bg-neutral-50 rounded-xl border border-neutral-200">
          <div className="text-5xl mb-4 text-neutral-300">
            <i className="fas fa-file-alt"></i>
          </div>
          <h3 className="text-lg font-medium mb-1">No content yet</h3>
          <p className="text-neutral-500 mb-4">Add your first article, case study, or whitepaper</p>
          {!isAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Add Content
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources?.data?.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-neutral-200 rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-40 overflow-hidden">
                {resource.imageUrl ? (
                  <img 
                    src={resource.imageUrl} 
                    alt={resource.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-neutral-200 flex items-center justify-center">
                    <i className="fas fa-image text-neutral-400 text-4xl"></i>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium 
                    ${resource.type === 'article' ? 'bg-blue-100 text-blue-800' : 
                      resource.type === 'whitepaper' ? 'bg-purple-100 text-purple-800' : 
                      'bg-green-100 text-green-800'}`}
                  >
                    {resource.type === 'article' ? 'Article' : 
                     resource.type === 'whitepaper' ? 'Whitepaper' : 'Case Study'}
                  </span>
                  {resource.categories.slice(0, 2).map((category, idx) => (
                    <span key={idx} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                      {resourceFilters.find(f => f.id === category)?.label || category}
                    </span>
                  ))}
                  {resource.categories.length > 2 && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-800">
                      +{resource.categories.length - 2} more
                    </span>
                  )}
                </div>
                
                <h3 className="font-medium text-lg mb-1">{resource.title}</h3>
                <p className="text-neutral-500 text-xs mb-2">Published: {formatDate(resource.publishedAt)}</p>
                <p className="text-neutral-600 text-sm line-clamp-2 mb-4">{resource.description}</p>
                
                <div className="flex justify-between pt-4 border-t border-neutral-100">
                  <button
                    onClick={() => startEdit(resource)}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <i className="fas fa-edit mr-1"></i> Edit
                  </button>
                  
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this resource?')) {
                        deleteMutation.mutate(resource.id);
                      }
                    }}
                    className="text-sm text-red-600 hover:text-red-800 transition-colors"
                    disabled={deleteMutation.isPending}
                  >
                    {deleteMutation.isPending ? (
                      <span>Deleting...</span>
                    ) : (
                      <><i className="fas fa-trash-alt mr-1"></i> Delete</>
                    )}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      <div className="mt-10 bg-neutral-50 border border-neutral-200 rounded-lg p-6">
        <h2 className="text-xl font-heading font-bold mb-2">Admin Instructions</h2>
        <p className="text-neutral-600 mb-4">
          This page allows you to manage content resources displayed on the website. Here's how to use it:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600">
          <li><strong>Adding content:</strong> Click the "Add New Content" button and fill out the form with all required fields.</li>
          <li><strong>Notion integration:</strong> For content from Notion, you can paste the Notion page URL or exported content into the content field.</li>
          <li><strong>Categories:</strong> Select at least one category that applies to your content to help with filtering and organization.</li>
          <li><strong>Slug:</strong> This becomes part of the URL (e.g., /resources/your-slug). Use the auto-generate button to create a slug from the title.</li>
          <li><strong>Types:</strong> Choose whether your content is an article, whitepaper, or case study to ensure proper categorization.</li>
          <li><strong>Images:</strong> For best results, use high-quality landscape images with a 16:9 aspect ratio.</li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesAdmin;