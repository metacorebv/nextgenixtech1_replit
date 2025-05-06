import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  company: z.string().min(1, { message: "Company is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});

type FormValues = z.infer<typeof formSchema>;

const ContactSection = () => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { toast } = useToast();

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
      company: "",
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

  return (
    <section id="contact" className="py-20 bg-neutral-900 text-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            ref={ref}
            variants={containerVariants}
            initial="hidden"
            animate={controls}
            className="text-center mb-12"
          >
            <motion.h2 
              variants={itemVariants}
              className="text-3xl md:text-4xl font-heading font-bold"
            >
              Let's Start Your Digital Transformation
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="mt-4 text-warm-gray-300 max-w-2xl mx-auto"
            >
              Book your free tech audit and get your first MVP project delivered, on us.
            </motion.p>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="bg-neutral-800 rounded-2xl p-8 shadow-lg"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-warm-gray-200">Name</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="John Smith" 
                            className="bg-neutral-900 border-warm-gray-600 text-white placeholder:text-warm-gray-400" 
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
                        <FormLabel className="text-warm-gray-200">Email</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="john@company.com" 
                            type="email" 
                            className="bg-neutral-900 border-warm-gray-600 text-white placeholder:text-warm-gray-400" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-warm-gray-200">Company</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="Company Inc." 
                          className="bg-neutral-900 border-warm-gray-600 text-white placeholder:text-warm-gray-400" 
                          {...field} 
                        />
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
                      <FormLabel className="text-warm-gray-200">Challenge/Project Details</FormLabel>
                      <FormControl>
                        <Textarea 
                          placeholder="Tell us about your project or challenge..." 
                          rows={4} 
                          className="bg-neutral-900 border-warm-gray-600 text-white placeholder:text-warm-gray-400" 
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
                    className="px-6 py-3 rounded-2xl text-neutral-900 bg-accent hover:bg-accent/90 transition-colors"
                  >
                    Submit Request
                  </Button>
                </div>
                
                <p className="mt-4 text-center text-warm-gray-300 text-sm">We respond with a personalized audit in 24 hours.</p>
              </form>
            </Form>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            className="mt-12 text-center"
          >
            <p className="text-warm-gray-300">Prefer to schedule a call?</p>
            <a 
              href="#" 
              className="mt-4 inline-flex items-center px-6 py-3 border border-warm-gray-500 text-base font-medium rounded-2xl text-white hover:bg-warm-gray-700 transition-colors"
            >
              <i className="far fa-calendar-alt mr-2"></i> Book a Meeting
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
