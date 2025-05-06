import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(7, { message: "Please enter a valid phone number." }),
  company: z.string().min(1, { message: "Company is required." }),
  revenue: z.string().optional(),
  budget: z.string().optional(),
  readiness: z.string().min(1, { message: "Please select your readiness to start." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      revenue: "",
      budget: "",
      readiness: "",
      message: "",
    },
  });

  const onSubmit = (data: FormValues) => {
    // Here you would typically send the data to your backend
    console.log(data);
    
    toast({
      title: "Request Submitted",
      description: "We'll get back to you with a personalized audit within 24 hours.",
    });
    
    form.reset();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  // Calendar mock data
  const currentMonth = "May 2025";
  const availableDates = [7, 8, 14, 15, 21, 22, 28, 29];

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-5xl font-heading font-bold"
            >
              Join the <span className="text-gradient bg-gradient-to-r from-primary via-secondary to-accent inline-block">NoCode AI Army</span>
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-neutral-300 max-w-2xl mx-auto text-lg"
            >
              🤔 Not Ready to Book? Ask Us Anything — No Strings Attached
            </motion.p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div 
              variants={itemVariants}
              className="bg-neutral-800 rounded-xl p-8 shadow-lg border border-neutral-700"
            >
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-200">Full Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="John Smith" 
                              className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-200">Email</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="you@example.com" 
                              type="email" 
                              className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-200">Phone Number</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="+1 (555) 123-4567" 
                              className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="company"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-200">Company</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Your Company" 
                              className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="revenue"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-200">Monthly Revenue (optional)</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-neutral-900 border-neutral-700 text-white">
                                <SelectValue placeholder="Select revenue range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                              <SelectItem value="pre-revenue">Pre-revenue</SelectItem>
                              <SelectItem value="1-10k">$1K - $10K</SelectItem>
                              <SelectItem value="10-50k">$10K - $50K</SelectItem>
                              <SelectItem value="50-100k">$50K - $100K</SelectItem>
                              <SelectItem value="100k+">$100K+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="text-neutral-200">Tech/AI Investment Budget</FormLabel>
                          <Select onValueChange={field.onChange} value={field.value}>
                            <FormControl>
                              <SelectTrigger className="bg-neutral-900 border-neutral-700 text-white">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent className="bg-neutral-800 border-neutral-700 text-white">
                              <SelectItem value="exploring">Just exploring options</SelectItem>
                              <SelectItem value="under-5k">Under $5K</SelectItem>
                              <SelectItem value="5-20k">$5K - $20K</SelectItem>
                              <SelectItem value="20-50k">$20K - $50K</SelectItem>
                              <SelectItem value="50k+">$50K+</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="readiness"
                    render={({ field }) => (
                      <FormItem className="space-y-3">
                        <FormLabel className="text-neutral-200">Readiness to start</FormLabel>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            value={field.value}
                            className="flex flex-col space-y-1"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="immediately" id="immediately" className="border-neutral-600" />
                              <Label htmlFor="immediately" className="text-neutral-300">Ready to start immediately</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="1month" id="1month" className="border-neutral-600" />
                              <Label htmlFor="1month" className="text-neutral-300">Within 1 month</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="3months" id="3months" className="border-neutral-600" />
                              <Label htmlFor="3months" className="text-neutral-300">Within 3 months</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="unsure" id="unsure" className="border-neutral-600" />
                              <Label htmlFor="unsure" className="text-neutral-300">Not sure yet</Label>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-neutral-200">Project Details</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Tell us about your project goals, challenges, or questions..." 
                            rows={4} 
                            className="bg-neutral-900 border-neutral-700 text-white placeholder:text-neutral-400" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="text-center">
                    <Button 
                      type="submit" 
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-white w-full"
                    >
                      Submit Request
                    </Button>
                  </div>
                </form>
              </Form>
            </motion.div>
            
            {/* Calendly-style calendar */}
            <motion.div
              variants={itemVariants}
              className="bg-neutral-800 rounded-xl overflow-hidden shadow-lg border border-neutral-700 flex flex-col"
            >
              <div className="bg-white text-neutral-900 p-6">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-neutral-900">Marcin T</h3>
                  <div className="text-2xl font-heading font-bold">10 Minute Meeting</div>
                  
                  <div className="flex items-center mt-4 text-neutral-600">
                    <span className="flex items-center mr-6">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                      <span>10 min</span>
                    </span>
                    
                    <span className="flex items-center bg-blue-100 text-blue-800 px-3 py-1 rounded">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      <span>Phone call</span>
                    </span>
                  </div>
                </div>
                
                <p className="text-neutral-600">
                  Schedule a quick 10 minute call with us to make sure this is the right fit.
                </p>
              </div>
              
              <div className="flex-grow p-6 bg-gradient-to-br from-neutral-800 to-neutral-900 text-white relative">
                <div className="absolute top-0 right-0 bg-neutral-700 text-white py-1 px-3 rounded-bl-lg text-xs font-medium transform rotate-12 translate-x-2 -translate-y-2">
                  Powered by Calendly
                </div>
                
                <div className="text-center mb-4">
                  <h4 className="text-lg font-medium mb-2">Select a Date & Time</h4>
                  <div className="flex justify-between items-center">
                    <button className="text-neutral-300 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <span className="text-lg font-medium">{currentMonth}</span>
                    <button className="text-neutral-300 hover:text-white">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 mb-4 text-center">
                  <div className="text-neutral-400 text-sm">MON</div>
                  <div className="text-neutral-400 text-sm">TUE</div>
                  <div className="text-neutral-400 text-sm">WED</div>
                  <div className="text-neutral-400 text-sm">THU</div>
                  <div className="text-neutral-400 text-sm">FRI</div>
                  <div className="text-neutral-400 text-sm">SAT</div>
                  <div className="text-neutral-400 text-sm">SUN</div>
                </div>
                
                <div className="grid grid-cols-7 gap-1 text-center">
                  {Array.from({ length: 31 }, (_, i) => i + 1).map(day => (
                    <div key={day} className="py-2">
                      {availableDates.includes(day) ? (
                        <button 
                          className="w-10 h-10 rounded-full hover:bg-primary/50 transition-colors mx-auto flex items-center justify-center text-blue-400"
                          onClick={() => setSelectedDate(new Date(2025, 4, day))}
                        >
                          {day}
                        </button>
                      ) : (
                        <span className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${
                          day === 1 ? "text-neutral-400" : "text-neutral-500"
                        }`}>
                          {day}
                        </span>
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="mt-8">
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium">Time zone</span>
                    <div className="ml-2 flex items-center text-blue-400 text-sm">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
                      </svg>
                      Central European Time (22:52)
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex justify-between items-center text-xs text-neutral-400">
                  <button className="hover:text-white">Cookie settings</button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
