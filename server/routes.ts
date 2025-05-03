import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertResourceSchema, insertIndustryPageSchema, insertTestimonialSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes - all prefixed with /api
  const apiRouter = app.route('/api');
  
  // Health check endpoint
  app.get('/api/health', (_req: Request, res: Response) => {
    res.json({ status: 'ok' });
  });
  
  // Contact submissions
  app.post('/api/contact', async (req: Request, res: Response) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const newSubmission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        message: 'Contact submission received', 
        data: newSubmission 
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: 'Validation error', 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });
  
  // Get contact submissions (admin only)
  app.get('/api/admin/contact-submissions', async (_req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const submissions = await storage.getContactSubmissions();
      res.json({ data: submissions });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Update contact submission status (admin only)
  app.patch('/api/admin/contact-submissions/:id', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const id = parseInt(req.params.id);
      const { status } = req.body;
      
      if (!status || typeof status !== 'string') {
        return res.status(400).json({ message: 'Status is required' });
      }
      
      const updatedSubmission = await storage.updateContactSubmissionStatus(id, status);
      
      if (!updatedSubmission) {
        return res.status(404).json({ message: 'Submission not found' });
      }
      
      res.json({ data: updatedSubmission });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Resources (articles, whitepapers, case studies)
  app.get('/api/resources', async (req: Request, res: Response) => {
    try {
      const { type, category } = req.query;
      const filters: { type?: string, category?: string } = {};
      
      if (type && typeof type === 'string') {
        filters.type = type;
      }
      
      if (category && typeof category === 'string') {
        filters.category = category;
      }
      
      const resources = await storage.getResources(filters);
      res.json({ data: resources });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.get('/api/resources/:slug', async (req: Request, res: Response) => {
    try {
      const resource = await storage.getResourceBySlug(req.params.slug);
      
      if (!resource) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      
      res.json({ data: resource });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Create resource (admin only)
  app.post('/api/admin/resources', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const validatedData = insertResourceSchema.parse(req.body);
      const newResource = await storage.createResource(validatedData);
      res.status(201).json({ data: newResource });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: 'Validation error', 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });
  
  // Update resource (admin only)
  app.patch('/api/admin/resources/:id', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const id = parseInt(req.params.id);
      const updatedResource = await storage.updateResource(id, req.body);
      
      if (!updatedResource) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      
      res.json({ data: updatedResource });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete resource (admin only)
  app.delete('/api/admin/resources/:id', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteResource(id);
      
      if (!success) {
        return res.status(404).json({ message: 'Resource not found' });
      }
      
      res.json({ message: 'Resource deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Industry pages
  app.get('/api/industry-pages', async (req: Request, res: Response) => {
    try {
      const published = req.query.published === 'true' ? true : undefined;
      const pages = await storage.getIndustryPages(published);
      res.json({ data: pages });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  app.get('/api/industry-pages/:slug', async (req: Request, res: Response) => {
    try {
      const page = await storage.getIndustryPageBySlug(req.params.slug);
      
      if (!page) {
        return res.status(404).json({ message: 'Industry page not found' });
      }
      
      res.json({ data: page });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Create industry page (admin only)
  app.post('/api/admin/industry-pages', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const validatedData = insertIndustryPageSchema.parse(req.body);
      const newPage = await storage.createIndustryPage(validatedData);
      res.status(201).json({ data: newPage });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: 'Validation error', 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });
  
  // Update industry page (admin only)
  app.patch('/api/admin/industry-pages/:id', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const id = parseInt(req.params.id);
      const updatedPage = await storage.updateIndustryPage(id, req.body);
      
      if (!updatedPage) {
        return res.status(404).json({ message: 'Industry page not found' });
      }
      
      res.json({ data: updatedPage });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete industry page (admin only)
  app.delete('/api/admin/industry-pages/:id', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteIndustryPage(id);
      
      if (!success) {
        return res.status(404).json({ message: 'Industry page not found' });
      }
      
      res.json({ message: 'Industry page deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Testimonials
  app.get('/api/testimonials', async (req: Request, res: Response) => {
    try {
      const active = req.query.active === 'true' ? true : undefined;
      const testimonials = await storage.getTestimonials(active);
      res.json({ data: testimonials });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Create testimonial (admin only)
  app.post('/api/admin/testimonials', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const validatedData = insertTestimonialSchema.parse(req.body);
      const newTestimonial = await storage.createTestimonial(validatedData);
      res.status(201).json({ data: newTestimonial });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: 'Validation error', 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: 'Internal server error' });
      }
    }
  });
  
  // Update testimonial (admin only)
  app.patch('/api/admin/testimonials/:id', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const id = parseInt(req.params.id);
      const updatedTestimonial = await storage.updateTestimonial(id, req.body);
      
      if (!updatedTestimonial) {
        return res.status(404).json({ message: 'Testimonial not found' });
      }
      
      res.json({ data: updatedTestimonial });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete testimonial (admin only)
  app.delete('/api/admin/testimonials/:id', async (req: Request, res: Response) => {
    // Note: This would normally have authentication middleware
    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteTestimonial(id);
      
      if (!success) {
        return res.status(404).json({ message: 'Testimonial not found' });
      }
      
      res.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
