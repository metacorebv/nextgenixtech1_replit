import { 
  users, 
  contactSubmissions, 
  resources, 
  industryPages, 
  testimonials,
  type User, 
  type InsertUser,
  type ContactSubmission,
  type InsertContactSubmission,
  type Resource,
  type InsertResource,
  type IndustryPage,
  type InsertIndustryPage,
  type Testimonial,
  type InsertTestimonial
} from "@shared/schema";

// Interface for all storage operations
export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submissions
  createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission>;
  getContactSubmissions(): Promise<ContactSubmission[]>;
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission | undefined>;
  
  // Resources
  createResource(resource: InsertResource): Promise<Resource>;
  getResources(filters?: { type?: string, category?: string }): Promise<Resource[]>;
  getResourceBySlug(slug: string): Promise<Resource | undefined>;
  updateResource(id: number, resource: Partial<InsertResource>): Promise<Resource | undefined>;
  deleteResource(id: number): Promise<boolean>;
  
  // Industry pages
  createIndustryPage(page: InsertIndustryPage): Promise<IndustryPage>;
  getIndustryPages(published?: boolean): Promise<IndustryPage[]>;
  getIndustryPageBySlug(slug: string): Promise<IndustryPage | undefined>;
  updateIndustryPage(id: number, page: Partial<InsertIndustryPage>): Promise<IndustryPage | undefined>;
  deleteIndustryPage(id: number): Promise<boolean>;
  
  // Testimonials
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
  getTestimonials(active?: boolean): Promise<Testimonial[]>;
  getTestimonial(id: number): Promise<Testimonial | undefined>;
  updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined>;
  deleteTestimonial(id: number): Promise<boolean>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private resources: Map<number, Resource>;
  private industryPages: Map<number, IndustryPage>;
  private testimonialsList: Map<number, Testimonial>;
  private currentUserId: number;
  private currentContactSubmissionId: number;
  private currentResourceId: number;
  private currentIndustryPageId: number;
  private currentTestimonialId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.resources = new Map();
    this.industryPages = new Map();
    this.testimonialsList = new Map();
    this.currentUserId = 1;
    this.currentContactSubmissionId = 1;
    this.currentResourceId = 1;
    this.currentIndustryPageId = 1;
    this.currentTestimonialId = 1;
    
    // Initialize with admin user
    this.createUser({
      username: "admin",
      password: "password123",
      isAdmin: true
    });
  }

  // User operations
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentUserId++;
    const createdAt = new Date();
    const user: User = { 
      ...insertUser, 
      id, 
      createdAt, 
      isAdmin: insertUser.isAdmin ?? null 
    };
    this.users.set(id, user);
    return user;
  }
  
  // Contact submissions
  async createContactSubmission(submission: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.currentContactSubmissionId++;
    const createdAt = new Date();
    const status = "new";
    const contactSubmission: ContactSubmission = { ...submission, id, createdAt, status };
    this.contactSubmissions.set(id, contactSubmission);
    return contactSubmission;
  }
  
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }
  
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }
  
  async updateContactSubmissionStatus(id: number, status: string): Promise<ContactSubmission | undefined> {
    const submission = this.contactSubmissions.get(id);
    if (!submission) return undefined;
    
    const updatedSubmission = { ...submission, status };
    this.contactSubmissions.set(id, updatedSubmission);
    return updatedSubmission;
  }
  
  // Resources
  async createResource(resource: InsertResource): Promise<Resource> {
    const id = this.currentResourceId++;
    const createdAt = new Date();
    const updatedAt = new Date();
    const newResource: Resource = { 
      ...resource, 
      id, 
      createdAt, 
      updatedAt
    };
    this.resources.set(id, newResource);
    return newResource;
  }
  
  async getResources(filters?: { type?: string, category?: string }): Promise<Resource[]> {
    let resources = Array.from(this.resources.values());
    
    if (filters) {
      if (filters.type) {
        resources = resources.filter(r => r.type === filters.type);
      }
      
      if (filters.category) {
        resources = resources.filter(r => r.categories.includes(filters.category as string));
      }
    }
    
    return resources;
  }
  
  async getResourceBySlug(slug: string): Promise<Resource | undefined> {
    return Array.from(this.resources.values()).find(
      (resource) => resource.slug === slug,
    );
  }
  
  async updateResource(id: number, resource: Partial<InsertResource>): Promise<Resource | undefined> {
    const existingResource = this.resources.get(id);
    if (!existingResource) return undefined;
    
    const updatedResource = { 
      ...existingResource, 
      ...resource, 
      updatedAt: new Date() 
    };
    
    this.resources.set(id, updatedResource);
    return updatedResource;
  }
  
  async deleteResource(id: number): Promise<boolean> {
    return this.resources.delete(id);
  }
  
  // Industry pages
  async createIndustryPage(page: InsertIndustryPage): Promise<IndustryPage> {
    const id = this.currentIndustryPageId++;
    const createdAt = new Date();
    const updatedAt = new Date();
    const newPage: IndustryPage = { ...page, id, createdAt, updatedAt };
    this.industryPages.set(id, newPage);
    return newPage;
  }
  
  async getIndustryPages(published?: boolean): Promise<IndustryPage[]> {
    let pages = Array.from(this.industryPages.values());
    
    if (published !== undefined) {
      pages = pages.filter(p => p.isPublished === published);
    }
    
    return pages;
  }
  
  async getIndustryPageBySlug(slug: string): Promise<IndustryPage | undefined> {
    return Array.from(this.industryPages.values()).find(
      (page) => page.slug === slug,
    );
  }
  
  async updateIndustryPage(id: number, page: Partial<InsertIndustryPage>): Promise<IndustryPage | undefined> {
    const existingPage = this.industryPages.get(id);
    if (!existingPage) return undefined;
    
    const updatedPage = { 
      ...existingPage, 
      ...page, 
      updatedAt: new Date() 
    };
    
    this.industryPages.set(id, updatedPage);
    return updatedPage;
  }
  
  async deleteIndustryPage(id: number): Promise<boolean> {
    return this.industryPages.delete(id);
  }
  
  // Testimonials
  async createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial> {
    const id = this.currentTestimonialId++;
    const createdAt = new Date();
    const newTestimonial: Testimonial = { ...testimonial, id, createdAt };
    this.testimonialsList.set(id, newTestimonial);
    return newTestimonial;
  }
  
  async getTestimonials(active?: boolean): Promise<Testimonial[]> {
    let testimonials = Array.from(this.testimonialsList.values());
    
    if (active !== undefined) {
      testimonials = testimonials.filter(t => t.isActive === active);
    }
    
    return testimonials;
  }
  
  async getTestimonial(id: number): Promise<Testimonial | undefined> {
    return this.testimonialsList.get(id);
  }
  
  async updateTestimonial(id: number, testimonial: Partial<InsertTestimonial>): Promise<Testimonial | undefined> {
    const existingTestimonial = this.testimonialsList.get(id);
    if (!existingTestimonial) return undefined;
    
    const updatedTestimonial = { 
      ...existingTestimonial, 
      ...testimonial 
    };
    
    this.testimonialsList.set(id, updatedTestimonial);
    return updatedTestimonial;
  }
  
  async deleteTestimonial(id: number): Promise<boolean> {
    return this.testimonialsList.delete(id);
  }
}

export const storage = new MemStorage();
