import { Switch, Route, useLocation } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

import Home from "@/pages/Home";
import ServicesPage from "@/pages/ServicesPage";
import WhyChooseUsPage from "@/pages/WhyChooseUsPage";
import ResourcesPage from "@/pages/ResourcesPage";
import ContactPage from "@/pages/ContactPage";
import FintechPage from "@/pages/industries/FintechPage";
import HealthcarePage from "@/pages/industries/HealthcarePage";
import LegaltechPage from "@/pages/industries/LegaltechPage";
import LogisticsPage from "@/pages/industries/LogisticsPage";
import NotFound from "@/pages/not-found";

// Service pages
import CloudSmartPage from "@/pages/services/cloud-smart";
import AIFirstPage from "@/pages/services/ai-first";
import OutcomeBasedPage from "@/pages/services/outcome-based";
import SecurityDeliveryPage from "@/pages/services/security-delivery";
import HealthcareExpertisePage from "@/pages/services/healthcare";
import LegalTechPage from "@/pages/services/legaltech";
import DigitalMarketingPage from "@/pages/services/digital-marketing";

// Admin pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import TestimonialsAdmin from "@/pages/admin/TestimonialsAdmin";
import ResourcesAdmin from "@/pages/admin/ResourcesAdmin";

function Router() {
  const [location] = useLocation();
  const isAdminPage = location.startsWith('/admin');
  
  return (
    <AnimatePresence mode="wait">
      <Switch>
        {/* Public routes */}
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/services/cloud-smart" component={CloudSmartPage} />
        <Route path="/services/ai-first" component={AIFirstPage} />
        <Route path="/services/outcome-based" component={OutcomeBasedPage} />
        <Route path="/services/security-delivery" component={SecurityDeliveryPage} />
        <Route path="/services/healthcare" component={HealthcareExpertisePage} />
        <Route path="/services/legaltech" component={LegalTechPage} />
        <Route path="/services/digital-marketing" component={DigitalMarketingPage} />
        <Route path="/why-choose-us" component={WhyChooseUsPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/industries/fintech" component={FintechPage} />
        <Route path="/industries/healthcare" component={HealthcarePage} />
        <Route path="/industries/legaltech" component={LegaltechPage} />
        <Route path="/industries/logistics" component={LogisticsPage} />
        
        {/* Admin routes */}
        <Route path="/admin" component={AdminDashboard} />
        <Route path="/admin/testimonials" component={TestimonialsAdmin} />
        <Route path="/admin/resources" component={ResourcesAdmin} />
        
        {/* Fallback route */}
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <motion.div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">
              <Router />
            </main>
            <Footer />
            <FloatingCTA />
          </motion.div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
