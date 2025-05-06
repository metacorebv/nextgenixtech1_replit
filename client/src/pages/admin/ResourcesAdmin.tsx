import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getQueryFn, apiRequest } from '../../lib/queryClient';
import { Resource } from '../../lib/types';
import { useToast } from '../../hooks/use-toast';
import { resourceFilters } from '../../lib/data';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface ResourceFormData {
  title: string;
  slug: string;
  description: string;
  content: string;
  imageUrl: string;
  categories: string[];
  type: "article" | "whitepaper" | "case-study";
  publishedAt: string;
}

const ResourcesAdmin = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('all');
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [isViewDialogOpen, setIsViewDialogOpen] = useState(false);
  const [selectedResourceId, setSelectedResourceId] = useState<number | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [formData, setFormData] = useState<ResourceFormData>({
    title: '',
    slug: '',
    description: '',
    content: '',
    imageUrl: '',
    categories: [],
    type: 'article',
    publishedAt: new Date().toISOString().split('T')[0],
  });

  const queryClient = useQueryClient();
  
  // Fetch resources
  const { data: apiData, isLoading, error } = useQuery({
    queryKey: ['/api/resources'],
    queryFn: getQueryFn<{ data: Resource[] }>({ on401: 'returnNull' }),
    refetchOnWindowFocus: false,
  });

  const resources = apiData?.data || [];

  // Filter resources by type based on active tab
  const filteredResources = activeTab === 'all' 
    ? resources 
    : resources.filter(resource => resource.type === activeTab);

  // Handlers for creating, updating, and deleting resources
  const createMutation = useMutation({
    mutationFn: (data: ResourceFormData) => 
      apiRequest('/api/admin/resources', { method: 'POST', body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/resources'] });
      toast({
        title: "Success!",
        description: "Resource created successfully.",
      });
      setIsAddDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create resource. Please try again.",
        variant: "destructive",
      });
      console.error('Create error:', error);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: Partial<ResourceFormData> }) => 
      apiRequest(`/api/admin/resources/${id}`, { method: 'PATCH', body: JSON.stringify(data) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/resources'] });
      toast({
        title: "Success!",
        description: "Resource updated successfully.",
      });
      setIsEditDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update resource. Please try again.",
        variant: "destructive",
      });
      console.error('Update error:', error);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest(`/api/admin/resources/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/resources'] });
      toast({
        title: "Success!",
        description: "Resource deleted successfully.",
      });
      setIsDeleteDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete resource. Please try again.",
        variant: "destructive",
      });
      console.error('Delete error:', error);
    }
  });

  const handleEdit = (resource: Resource) => {
    setSelectedResourceId(resource.id);
    setFormData({
      title: resource.title,
      slug: resource.slug,
      description: resource.description,
      content: resource.content,
      imageUrl: resource.imageUrl,
      categories: resource.categories,
      type: resource.type,
      publishedAt: new Date(resource.publishedAt).toISOString().split('T')[0],
    });
    setSelectedCategories(resource.categories);
    setIsEditDialogOpen(true);
  };

  const handleView = (resource: Resource) => {
    setSelectedResourceId(resource.id);
    setFormData({
      title: resource.title,
      slug: resource.slug,
      description: resource.description,
      content: resource.content,
      imageUrl: resource.imageUrl,
      categories: resource.categories,
      type: resource.type,
      publishedAt: new Date(resource.publishedAt).toISOString().split('T')[0],
    });
    setIsViewDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setSelectedResourceId(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedResourceId) {
      deleteMutation.mutate(selectedResourceId);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      slug: '',
      description: '',
      content: '',
      imageUrl: '',
      categories: [],
      type: 'article',
      publishedAt: new Date().toISOString().split('T')[0],
    });
    setSelectedCategories([]);
    setSelectedResourceId(null);
  };

  const openAddDialog = () => {
    resetForm();
    setIsAddDialogOpen(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev => {
      const newCategories = prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category];
      
      setFormData(prevForm => ({
        ...prevForm,
        categories: newCategories
      }));
      
      return newCategories;
    });
  };
  
  const generateSlug = () => {
    if (formData.title) {
      const slug = formData.title
        .toLowerCase()
        .replace(/[^\w\s]/gi, '')
        .replace(/\s+/g, '-');
      setFormData(prev => ({ ...prev, slug }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.title || !formData.description || !formData.type) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    // Generate slug if empty
    if (!formData.slug) {
      generateSlug();
    }
    
    if (isEditDialogOpen && selectedResourceId) {
      updateMutation.mutate({ id: selectedResourceId, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    }).format(date);
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'article': return 'Article';
      case 'whitepaper': return 'Whitepaper';
      case 'case-study': return 'Case Study';
      default: return type;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'article': return 'bg-sky-100 text-sky-700';
      case 'whitepaper': return 'bg-emerald-100 text-emerald-700';
      case 'case-study': return 'bg-purple-100 text-purple-700';
      default: return 'bg-neutral-100 text-neutral-700';
    }
  };

  const contentPreview = (content: string, maxLength = 150) => {
    if (!content) return '';
    // Check if it's a Notion URL
    if (content.includes('notion.so')) {
      return `[Embedded Notion document: ${content}]`;
    }
    
    // Remove HTML tags if present
    const textContent = content.replace(/<[^>]*>?/gm, '');
    
    return textContent.length > maxLength
      ? `${textContent.substring(0, maxLength)}...`
      : textContent;
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="title">Title *</Label>
        <Input
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="AI Readiness in Healthcare: A 2025 Roadmap"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="slug">URL Slug *</Label>
          <div className="flex">
            <Input
              id="slug"
              name="slug"
              value={formData.slug}
              onChange={handleChange}
              placeholder="ai-readiness-healthcare-2025"
              className="rounded-r-none"
              required
            />
            <Button 
              type="button" 
              variant="outline" 
              onClick={generateSlug}
              className="rounded-l-none border-l-0"
            >
              Generate
            </Button>
          </div>
          <p className="text-xs text-neutral-500">
            Used in the resource URL: /resources/<strong>{formData.slug || 'slug'}</strong>
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="type">Content Type *</Label>
          <Select
            value={formData.type}
            onValueChange={(value) => handleSelectChange('type', value)}
          >
            <SelectTrigger>
              <SelectValue placeholder="Select content type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="article">Article</SelectItem>
              <SelectItem value="whitepaper">Whitepaper</SelectItem>
              <SelectItem value="case-study">Case Study</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="description">Description *</Label>
        <Textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="A brief description of the resource (displayed in listings)"
          rows={3}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="imageUrl">Featured Image URL *</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
          required
        />
        <p className="text-xs text-neutral-500">
          For best results, use a 16:9 ratio image (1200×675 pixels minimum)
        </p>
        
        {formData.imageUrl && (
          <div className="mt-2 relative rounded-md overflow-hidden h-32 bg-neutral-100">
            <img
              src={formData.imageUrl}
              alt="Featured image preview"
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://placehold.co/1200x675/F3F4F6/A1A1AA?text=Invalid+Image+URL';
              }}
            />
          </div>
        )}
      </div>

      <div className="space-y-2">
        <Label>Categories *</Label>
        <div className="flex flex-wrap gap-2 mt-2">
          {resourceFilters.filter(filter => filter.id !== 'all').map(category => (
            <Badge
              key={category.id}
              variant={selectedCategories.includes(category.id) ? "default" : "outline"}
              className="cursor-pointer"
              onClick={() => handleCategoryToggle(category.id)}
            >
              {category.label}
            </Badge>
          ))}
        </div>
        {selectedCategories.length === 0 && (
          <p className="text-xs text-destructive mt-1">
            Please select at least one category
          </p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="publishedAt">Publication Date *</Label>
        <Input
          id="publishedAt"
          name="publishedAt"
          type="date"
          value={formData.publishedAt}
          onChange={handleChange}
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content">Content *</Label>
        <div className="flex items-center mb-2">
          <p className="text-xs text-neutral-500 flex-1">
            Enter full content, HTML, or a Notion page URL
          </p>
        </div>
        <Textarea
          id="content"
          name="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Enter full content or paste a Notion URL"
          rows={10}
          required
        />
      </div>
    </form>
  );

  return (
    <div className="container-custom py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold">Resources Manager</h1>
          <p className="text-neutral-600">
            Manage articles, whitepapers, and case studies that appear in the Resources section.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" asChild>
            <Link href="/admin">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Dashboard
            </Link>
          </Button>
          <Button onClick={openAddDialog}>
            <i className="fas fa-plus mr-2"></i>
            Add Resource
          </Button>
        </div>
      </div>

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab} className="mb-8">
        <TabsList>
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="article">Articles</TabsTrigger>
          <TabsTrigger value="whitepaper">Whitepapers</TabsTrigger>
          <TabsTrigger value="case-study">Case Studies</TabsTrigger>
        </TabsList>
      </Tabs>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="rounded-lg bg-destructive/10 p-6 text-center">
          <h3 className="mb-2 text-lg font-medium">Error Loading Resources</h3>
          <p className="text-neutral-600">
            There was a problem loading the resources. Please refresh the page or try again later.
          </p>
        </div>
      ) : filteredResources.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
            <i className="fas fa-file-alt text-2xl text-neutral-400"></i>
          </div>
          <h3 className="mb-2 text-lg font-medium">No Resources Yet</h3>
          <p className="mb-4 text-neutral-600">
            {activeTab === 'all' 
              ? "You haven't added any resources yet. Resources help showcase your expertise and drive engagement."
              : `You haven't added any ${activeTab === 'case-study' ? 'case studies' : activeTab + 's'} yet.`}
          </p>
          <Button onClick={openAddDialog}>
            <i className="fas fa-plus mr-2"></i>
            Add Your First {activeTab === 'all' ? 'Resource' : getTypeLabel(activeTab)}
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredResources.map((resource) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="border rounded-xl overflow-hidden"
            >
              <div className="relative h-40 bg-neutral-100">
                {resource.imageUrl ? (
                  <img 
                    src={resource.imageUrl} 
                    alt={resource.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/1200x675/F3F4F6/A1A1AA?text=Missing+Image';
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-neutral-100">
                    <i className="fas fa-image text-neutral-400 text-3xl"></i>
                  </div>
                )}
                <Badge className={`absolute top-3 right-3 ${getTypeColor(resource.type)}`}>
                  {getTypeLabel(resource.type)}
                </Badge>
              </div>
              
              <div className="p-5">
                <div className="flex flex-wrap gap-1 mb-2">
                  {resource.categories.slice(0, 3).map((category, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {resourceFilters.find(f => f.id === category)?.label || category}
                    </Badge>
                  ))}
                  {resource.categories.length > 3 && (
                    <Badge variant="outline" className="text-xs">
                      +{resource.categories.length - 3} more
                    </Badge>
                  )}
                </div>
                
                <h3 className="text-lg font-semibold mb-1 line-clamp-2">{resource.title}</h3>
                <p className="text-sm text-neutral-600 mb-3 line-clamp-2">{resource.description}</p>
                
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neutral-500">
                    Published: {formatDate(resource.publishedAt)}
                  </span>
                  
                  <div className="flex gap-1">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleView(resource)}
                      title="View"
                    >
                      <i className="fas fa-eye text-neutral-500"></i>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleEdit(resource)}
                      title="Edit"
                    >
                      <i className="fas fa-edit text-neutral-500"></i>
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="h-8 w-8"
                      onClick={() => handleDelete(resource.id)}
                      title="Delete"
                    >
                      <i className="fas fa-trash text-destructive"></i>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Add New Resource</DialogTitle>
          </DialogHeader>
          {renderForm()}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit} disabled={createMutation.isPending}>
              {createMutation.isPending ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></div>
                  Saving...
                </>
              ) : (
                <>Add Resource</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>Edit Resource</DialogTitle>
          </DialogHeader>
          {renderForm()}
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsEditDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleSubmit} disabled={updateMutation.isPending}>
              {updateMutation.isPending ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></div>
                  Updating...
                </>
              ) : (
                <>Update Resource</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* View Dialog */}
      <Dialog open={isViewDialogOpen} onOpenChange={setIsViewDialogOpen}>
        <DialogContent className="sm:max-w-[800px]">
          <DialogHeader>
            <DialogTitle>View Resource</DialogTitle>
          </DialogHeader>
          <div className="space-y-6">
            <div>
              <div className="rounded-md overflow-hidden h-48 bg-neutral-100 mb-4">
                {formData.imageUrl ? (
                  <img
                    src={formData.imageUrl}
                    alt={formData.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <i className="fas fa-image text-neutral-400 text-3xl"></i>
                  </div>
                )}
              </div>
              
              <h2 className="text-2xl font-bold mb-2">{formData.title}</h2>
              
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className={getTypeColor(formData.type)}>
                  {getTypeLabel(formData.type)}
                </Badge>
                {formData.categories.map((category, idx) => (
                  <Badge key={idx} variant="outline">
                    {resourceFilters.find(f => f.id === category)?.label || category}
                  </Badge>
                ))}
              </div>
              
              <p className="text-sm text-neutral-500 mb-4">
                Published: {formatDate(formData.publishedAt)}
              </p>
              
              <p className="text-neutral-700 mb-6">{formData.description}</p>
              
              <div className="border-t pt-4">
                <h3 className="text-lg font-semibold mb-2">Content Preview</h3>
                {formData.content.includes('notion.so') ? (
                  <div className="p-4 bg-neutral-50 rounded-md border">
                    <p className="text-sm">
                      <i className="fab fa-notion mr-2"></i>
                      Notion document embedded: <a href={formData.content} target="_blank" rel="noopener noreferrer" className="text-primary underline">View in Notion</a>
                    </p>
                  </div>
                ) : (
                  <div className="p-4 bg-neutral-50 rounded-md border max-h-64 overflow-y-auto">
                    <p className="whitespace-pre-wrap">{contentPreview(formData.content, 1000)}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsViewDialogOpen(false)}>Close</Button>
            <Button variant="outline" onClick={() => {
              setIsViewDialogOpen(false);
              handleEdit(resources.find(r => r.id === selectedResourceId)!);
            }}>
              Edit
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[450px]">
          <DialogHeader>
            <DialogTitle>Confirm Deletion</DialogTitle>
          </DialogHeader>
          <div className="py-4">
            <p className="text-neutral-700">
              Are you sure you want to delete this resource? This action cannot be undone.
            </p>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDeleteDialogOpen(false)}>Cancel</Button>
            <Button variant="destructive" onClick={confirmDelete} disabled={deleteMutation.isPending}>
              {deleteMutation.isPending ? (
                <>
                  <div className="animate-spin mr-2 h-4 w-4 border-2 border-b-transparent rounded-full"></div>
                  Deleting...
                </>
              ) : (
                <>Delete Resource</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ResourcesAdmin;