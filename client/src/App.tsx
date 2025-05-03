import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
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

function Router() {
  return (
    <AnimatePresence mode="wait">
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/why-choose-us" component={WhyChooseUsPage} />
        <Route path="/resources" component={ResourcesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/industries/fintech" component={FintechPage} />
        <Route path="/industries/healthcare" component={HealthcarePage} />
        <Route path="/industries/legaltech" component={LegaltechPage} />
        <Route path="/industries/logistics" component={LogisticsPage} />
        <Route component={NotFound} />
      </Switch>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
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
    </QueryClientProvider>
  );
}

export default App;
