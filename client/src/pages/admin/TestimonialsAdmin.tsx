import { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getQueryFn, apiRequest } from '../../lib/queryClient';
import { Testimonial } from '../../lib/types';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { motion, AnimatePresence } from 'framer-motion';

const testimonialSchema = z.object({
  name: z.string().min(1, "Name is required"),
  position: z.string().min(1, "Position is required"),
  company: z.string().min(1, "Company is required"),
  testimonial: z.string().min(10, "Testimonial must be at least 10 characters"),
  metric: z.string().optional(),
  metricTitle: z.string().optional(),
  imageUrl: z.string().optional(),
  isActive: z.boolean().default(true),
});

type TestimonialFormValues = z.infer<typeof testimonialSchema>;

const TestimonialsAdmin = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);
  const queryClient = useQueryClient();

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestimonialFormValues>({
    resolver: zodResolver(testimonialSchema),
    defaultValues: {
      isActive: true,
    }
  });

  const { data: testimonials, isLoading, error } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: getQueryFn<{ data: Testimonial[] }>({ on401: "throw" }),
  });

  const createMutation = useMutation({
    mutationFn: (data: TestimonialFormValues) => 
      apiRequest('/api/admin/testimonials', 'POST', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      setIsAdding(false);
      reset();
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: TestimonialFormValues }) => 
      apiRequest(`/api/admin/testimonials/${id}`, 'PATCH', data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      setEditingId(null);
      reset();
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest(`/api/admin/testimonials/${id}`, 'DELETE'),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
    }
  });

  const onSubmit = (data: TestimonialFormValues) => {
    if (editingId !== null) {
      updateMutation.mutate({ id: editingId, data });
    } else {
      createMutation.mutate(data);
    }
  };

  const startEdit = (testimonial: Testimonial) => {
    setEditingId(testimonial.id);
    reset({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      testimonial: testimonial.testimonial,
      metric: testimonial.metric || "",
      metricTitle: testimonial.metricTitle || "",
      imageUrl: testimonial.imageUrl || "",
      isActive: testimonial.isActive,
    });
    setIsAdding(true);
  };

  const cancelEdit = () => {
    setIsAdding(false);
    setEditingId(null);
    reset();
  };

  return (
    <div className="container-custom py-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-heading font-bold mb-2">Testimonials Management</h1>
        <p className="text-neutral-600">Add, edit, or remove client testimonials displayed on the website.</p>
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
              <i className="fas fa-plus mr-2"></i> Add New Testimonial
            </motion.button>
          )}
        </div>
        
        <div className="text-sm text-neutral-500">
          {testimonials?.data?.length || 0} testimonials found
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
              {editingId !== null ? 'Edit Testimonial' : 'Add New Testimonial'}
            </h2>
            
            <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Name*</label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Client name"
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Position*</label>
                  <input
                    type="text"
                    {...register('position')}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Job title"
                  />
                  {errors.position && <p className="text-red-500 text-xs mt-1">{errors.position.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Company*</label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Company name"
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Image URL</label>
                  <input
                    type="text"
                    {...register('imageUrl')}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="https://example.com/image.jpg"
                  />
                  {errors.imageUrl && <p className="text-red-500 text-xs mt-1">{errors.imageUrl.message}</p>}
                </div>
                
                <div className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    id="isActive"
                    {...register('isActive')}
                    className="h-4 w-4 text-primary focus:ring-primary border-neutral-300 rounded"
                  />
                  <label htmlFor="isActive" className="text-sm font-medium">Active (displayed on website)</label>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Metric (e.g., "37%", "1000+")</label>
                  <input
                    type="text"
                    {...register('metric')}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="37%"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Metric Title</label>
                  <input
                    type="text"
                    {...register('metricTitle')}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Reduced Cloud Costs"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Testimonial*</label>
                  <textarea
                    {...register('testimonial')}
                    rows={5}
                    className="w-full p-2 border border-neutral-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="What the client said about our services..."
                  ></textarea>
                  {errors.testimonial && <p className="text-red-500 text-xs mt-1">{errors.testimonial.message}</p>}
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
                    ) : editingId !== null ? 'Update Testimonial' : 'Save Testimonial'}
                  </button>
                </div>
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
          <p>Error loading testimonials. Please try again.</p>
        </div>
      ) : testimonials?.data?.length === 0 ? (
        <div className="text-center py-10 bg-neutral-50 rounded-xl border border-neutral-200">
          <div className="text-5xl mb-4 text-neutral-300">
            <i className="fas fa-comment-alt"></i>
          </div>
          <h3 className="text-lg font-medium mb-1">No testimonials yet</h3>
          <p className="text-neutral-500 mb-4">Add your first client testimonial to display on the website</p>
          {!isAdding && (
            <button
              onClick={() => setIsAdding(true)}
              className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              Add Testimonial
            </button>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.data?.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`bg-white border ${testimonial.isActive ? 'border-neutral-200' : 'border-red-200 bg-red-50'} rounded-xl shadow-sm overflow-hidden`}
            >
              <div className="p-5">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="font-medium text-lg">{testimonial.name}</h3>
                    <p className="text-neutral-500 text-sm">{testimonial.position}, {testimonial.company}</p>
                  </div>
                  {!testimonial.isActive && (
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
                      Inactive
                    </span>
                  )}
                </div>
                
                {(testimonial.metric || testimonial.metricTitle) && (
                  <div className="mb-3 bg-neutral-50 p-3 rounded-lg">
                    {testimonial.metric && (
                      <span className="font-bold text-lg text-primary">{testimonial.metric}</span>
                    )}
                    {testimonial.metricTitle && (
                      <span className="ml-1 text-neutral-700">{testimonial.metricTitle}</span>
                    )}
                  </div>
                )}
                
                <p className="text-neutral-600 text-sm line-clamp-3 mb-4">
                  &ldquo;{testimonial.testimonial}&rdquo;
                </p>
                
                <div className="flex justify-between pt-4 border-t border-neutral-100">
                  <button
                    onClick={() => startEdit(testimonial)}
                    className="text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    <i className="fas fa-edit mr-1"></i> Edit
                  </button>
                  
                  <button
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this testimonial?')) {
                        deleteMutation.mutate(testimonial.id);
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
          This page allows you to manage client testimonials displayed on the website. Here's how to use it:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-neutral-600">
          <li><strong>Adding testimonials:</strong> Click the "Add New Testimonial" button and fill out the form.</li>
          <li><strong>Metrics:</strong> The metric and metric title are optional but create visual impact (e.g., "37%" as metric, "Reduced Cloud Costs" as title).</li>
          <li><strong>Active status:</strong> Only testimonials marked as "Active" will appear on the public website.</li>
          <li><strong>Images:</strong> For best results, use square profile images with a minimum size of 256x256 pixels.</li>
          <li><strong>Editing/Deleting:</strong> Use the edit and delete buttons on each testimonial card to modify or remove entries.</li>
        </ul>
      </div>
    </div>
  );
};

export default TestimonialsAdmin;