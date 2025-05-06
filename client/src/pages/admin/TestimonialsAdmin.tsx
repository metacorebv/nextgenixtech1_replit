import { useState } from 'react';
import { Link } from 'wouter';
import { motion } from 'framer-motion';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getQueryFn, apiRequest } from '../../lib/queryClient';
import { Testimonial } from '../../lib/types';
import { useToast } from '../../hooks/use-toast';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

interface TestimonialFormData {
  name: string;
  position: string;
  company: string;
  testimonial: string;
  metric?: string;
  metricTitle?: string;
  imageUrl?: string;
  isActive: boolean;
}

const TestimonialsAdmin = () => {
  const { toast } = useToast();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const [selectedTestimonialId, setSelectedTestimonialId] = useState<number | null>(null);
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: '',
    position: '',
    company: '',
    testimonial: '',
    metric: '',
    metricTitle: '',
    imageUrl: '',
    isActive: true
  });

  const queryClient = useQueryClient();
  
  // Fetch testimonials
  const { data: apiData, isLoading, error } = useQuery({
    queryKey: ['/api/testimonials'],
    queryFn: getQueryFn<{ data: Testimonial[] }>({ on401: 'returnNull' }),
    refetchOnWindowFocus: false,
  });

  const testimonials = apiData?.data || [];

  // Handlers for creating, updating, and deleting testimonials
  const createMutation = useMutation({
    mutationFn: (data: TestimonialFormData) => 
      apiRequest('/api/admin/testimonials', { 
        method: 'POST', 
        body: JSON.stringify(data) 
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      toast({
        title: "Success!",
        description: "Testimonial created successfully.",
      });
      setIsAddDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to create testimonial. Please try again.",
        variant: "destructive",
      });
      console.error('Create error:', error);
    }
  });

  const updateMutation = useMutation({
    mutationFn: ({ id, data }: { id: number, data: Partial<TestimonialFormData> }) => 
      apiRequest(`/api/admin/testimonials/${id}`, { 
        method: 'PATCH', 
        body: JSON.stringify(data) 
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      toast({
        title: "Success!",
        description: "Testimonial updated successfully.",
      });
      setIsEditDialogOpen(false);
      resetForm();
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to update testimonial. Please try again.",
        variant: "destructive",
      });
      console.error('Update error:', error);
    }
  });

  const deleteMutation = useMutation({
    mutationFn: (id: number) => 
      apiRequest(`/api/admin/testimonials/${id}`, { method: 'DELETE' }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['/api/testimonials'] });
      toast({
        title: "Success!",
        description: "Testimonial deleted successfully.",
      });
      setIsDeleteDialogOpen(false);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete testimonial. Please try again.",
        variant: "destructive",
      });
      console.error('Delete error:', error);
    }
  });

  const handleUpdateStatus = (id: number, isActive: boolean) => {
    updateMutation.mutate({ 
      id, 
      data: { isActive: !isActive }
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSwitchChange = (checked: boolean) => {
    setFormData(prev => ({ ...prev, isActive: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.position || !formData.company || !formData.testimonial) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (isEditDialogOpen && selectedTestimonialId) {
      updateMutation.mutate({ id: selectedTestimonialId, data: formData });
    } else {
      createMutation.mutate(formData);
    }
  };

  const handleEdit = (testimonial: Testimonial) => {
    setSelectedTestimonialId(testimonial.id);
    setFormData({
      name: testimonial.name,
      position: testimonial.position,
      company: testimonial.company,
      testimonial: testimonial.testimonial,
      metric: testimonial.metric,
      metricTitle: testimonial.metricTitle,
      imageUrl: testimonial.imageUrl,
      isActive: testimonial.isActive
    });
    setIsEditDialogOpen(true);
  };

  const handleDelete = (id: number) => {
    setSelectedTestimonialId(id);
    setIsDeleteDialogOpen(true);
  };

  const confirmDelete = () => {
    if (selectedTestimonialId) {
      deleteMutation.mutate(selectedTestimonialId);
    }
  };

  const resetForm = () => {
    setFormData({
      name: '',
      position: '',
      company: '',
      testimonial: '',
      metric: '',
      metricTitle: '',
      imageUrl: '',
      isActive: true
    });
    setSelectedTestimonialId(null);
  };

  const openAddDialog = () => {
    resetForm();
    setIsAddDialogOpen(true);
  };

  const renderForm = () => (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="position">Position *</Label>
          <Input
            id="position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="CTO"
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="company">Company *</Label>
        <Input
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          placeholder="Acme Corp"
          required
        />
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="metric">Metric</Label>
          <Input
            id="metric"
            name="metric"
            value={formData.metric}
            onChange={handleChange}
            placeholder="37%"
          />
          <p className="text-sm text-neutral-500">
            The key metric achieved (e.g., "37%", "2x", "$500K")
          </p>
        </div>
        <div className="space-y-2">
          <Label htmlFor="metricTitle">Metric Title</Label>
          <Input
            id="metricTitle"
            name="metricTitle"
            value={formData.metricTitle}
            onChange={handleChange}
            placeholder="Reduced Cloud Costs"
          />
          <p className="text-sm text-neutral-500">
            What the metric represents (e.g., "Reduced Cloud Costs")
          </p>
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="imageUrl">Profile Image URL</Label>
        <Input
          id="imageUrl"
          name="imageUrl"
          value={formData.imageUrl}
          onChange={handleChange}
          placeholder="https://example.com/image.jpg"
        />
        <p className="text-sm text-neutral-500">
          For best results, use a square image (256x256 px minimum)
        </p>
      </div>

      <div className="space-y-2">
        <Label htmlFor="testimonial">Testimonial Text *</Label>
        <Textarea
          id="testimonial"
          name="testimonial"
          value={formData.testimonial}
          onChange={handleChange}
          placeholder="Their services helped us achieve remarkable results..."
          rows={4}
          required
        />
      </div>

      <div className="flex items-center space-x-2">
        <Switch
          id="isActive"
          checked={formData.isActive}
          onCheckedChange={handleSwitchChange}
        />
        <Label htmlFor="isActive">Active</Label>
        <p className="text-sm text-neutral-500 ml-2">
          Only active testimonials are displayed on the website
        </p>
      </div>
    </form>
  );

  return (
    <div className="container-custom py-12">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-heading font-bold">Testimonials Manager</h1>
          <p className="text-neutral-600">
            Manage client testimonials that appear in the "Real Results for Real Businesses" section.
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
            Add Testimonial
          </Button>
        </div>
      </div>

      {isLoading ? (
        <div className="flex justify-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
      ) : error ? (
        <div className="rounded-lg bg-destructive/10 p-6 text-center">
          <h3 className="mb-2 text-lg font-medium">Error Loading Testimonials</h3>
          <p className="text-neutral-600">
            There was a problem loading the testimonials. Please refresh the page or try again later.
          </p>
        </div>
      ) : testimonials.length === 0 ? (
        <div className="rounded-lg border border-dashed p-8 text-center">
          <div className="mx-auto mb-4 w-16 h-16 rounded-full bg-neutral-100 flex items-center justify-center">
            <i className="fas fa-quote-right text-2xl text-neutral-400"></i>
          </div>
          <h3 className="mb-2 text-lg font-medium">No Testimonials Yet</h3>
          <p className="mb-4 text-neutral-600">
            You haven't added any testimonials yet. Testimonials help build trust with potential clients.
          </p>
          <Button onClick={openAddDialog}>
            <i className="fas fa-plus mr-2"></i>
            Add Your First Testimonial
          </Button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className={`border rounded-xl p-5 ${testimonial.isActive ? 'bg-white' : 'bg-neutral-50 border-dashed'}`}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-heading font-semibold text-lg flex items-center">
                    {testimonial.name}
                    {!testimonial.isActive && (
                      <Badge variant="outline" className="ml-2 text-xs text-neutral-500">Inactive</Badge>
                    )}
                  </h3>
                  <p className="text-sm text-neutral-600">{testimonial.position}, {testimonial.company}</p>
                </div>
                <div className="flex gap-1">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleUpdateStatus(testimonial.id, testimonial.isActive)}
                    title={testimonial.isActive ? "Deactivate" : "Activate"}
                  >
                    <i className={`fas ${testimonial.isActive ? 'fa-eye-slash text-neutral-500' : 'fa-eye text-primary'}`}></i>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleEdit(testimonial)}
                  >
                    <i className="fas fa-edit text-neutral-500"></i>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8"
                    onClick={() => handleDelete(testimonial.id)}
                  >
                    <i className="fas fa-trash text-destructive"></i>
                  </Button>
                </div>
              </div>

              {(testimonial.metric || testimonial.metricTitle) && (
                <div className="mb-2 flex items-baseline gap-2">
                  {testimonial.metric && (
                    <span className="text-xl font-bold text-primary">{testimonial.metric}</span>
                  )}
                  {testimonial.metricTitle && (
                    <span className="text-sm font-medium">{testimonial.metricTitle}</span>
                  )}
                </div>
              )}

              <p className="text-neutral-700 text-sm italic mb-4">"{testimonial.testimonial.length > 120 
                ? `${testimonial.testimonial.substring(0, 120)}...` 
                : testimonial.testimonial}"</p>

              <div className="flex items-center mt-3">
                <div className="h-10 w-10 rounded-full overflow-hidden bg-neutral-200 flex-shrink-0 border border-neutral-300">
                  {testimonial.imageUrl ? (
                    <img 
                      src={testimonial.imageUrl} 
                      alt={testimonial.name} 
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <i className="fas fa-user text-neutral-400"></i>
                    </div>
                  )}
                </div>
                <div className="ml-2">
                  <p className="text-xs text-neutral-500">Added on {new Date(testimonial.createdAt).toLocaleDateString()}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Add Dialog */}
      <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Add New Testimonial</DialogTitle>
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
                <>Add Testimonial</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog open={isEditDialogOpen} onOpenChange={setIsEditDialogOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Edit Testimonial</DialogTitle>
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
                <>Update Testimonial</>
              )}
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
              Are you sure you want to delete this testimonial? This action cannot be undone.
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
                <>Delete Testimonial</>
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default TestimonialsAdmin;