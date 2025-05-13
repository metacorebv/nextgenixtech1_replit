import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Link } from "wouter";
import ContactSection from "@/components/ContactSection";
import { useEffect } from "react";

const DigitalMarketingPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Helmet>
        <title>Digital Marketing & Social Media | NextGenixTech</title>
        <meta name="description" content="AI-powered digital marketing solutions that deliver real leads and measurable ROI, not just vanity metrics." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 md:py-28 bg-[color:var(--card)]/50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6"
            >
              Digital Marketing & Social Media
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-xl md:text-2xl text-[color:var(--muted-foreground)] mb-8"
            >
              Real leads, not vanity metrics
            </motion.p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                AI-Powered Marketing That Delivers Results
              </h2>
              <p className="text-lg mb-6">
                In today's crowded digital landscape, standing out requires more than just creative content—it demands data-driven strategies and AI-powered optimization. NextGenixTech's digital marketing solutions help businesses cut through the noise and connect with their target audience in meaningful ways.
              </p>
              <p className="text-lg mb-6">
                Our AI-native approach analyzes customer behavior patterns, optimizes content for maximum engagement, and continuously refines campaigns based on real-time performance data. We focus on metrics that matter—leads, conversions, and revenue—not just likes and impressions.
              </p>
              <p className="text-lg">
                Whether you're looking to establish a strong social media presence, optimize your SEO strategy, or create targeted ad campaigns, our team combines technical expertise with creative thinking to deliver marketing solutions that drive real business growth.
              </p>
            </div>
            <div className="bg-[color:var(--card)] p-8 rounded-2xl border border-[color:var(--border)] shadow-lg">
              <h3 className="text-2xl font-heading font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">AI-Driven Content Optimization</h4>
                    <p className="text-[color:var(--muted-foreground)]">Machine learning algorithms that analyze engagement patterns and optimize content strategy in real-time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Predictive Analytics</h4>
                    <p className="text-[color:var(--muted-foreground)]">Forecast campaign performance and identify emerging trends before your competitors</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">Automated Multi-Channel Campaigns</h4>
                    <p className="text-[color:var(--muted-foreground)]">Seamlessly coordinate messaging across social media, email, and web platforms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="mr-4 mt-1 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium">ROI-Focused Reporting</h4>
                    <p className="text-[color:var(--muted-foreground)]">Transparent metrics that connect marketing activities directly to business outcomes</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Offered Section */}
      <section className="py-16 md:py-24 bg-[color:var(--card)]/30">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center">Our Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Social Media Management</h3>
              <p className="text-[color:var(--muted-foreground)]">AI-powered content creation, scheduling, and engagement monitoring across all major platforms.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">SEO Optimization</h3>
              <p className="text-[color:var(--muted-foreground)]">Technical SEO audits, keyword research, and content optimization to improve organic visibility.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">PPC & Paid Media</h3>
              <p className="text-[color:var(--muted-foreground)]">Targeted ad campaigns with continuous optimization for maximum ROI across search and social platforms.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Email Marketing</h3>
              <p className="text-[color:var(--muted-foreground)]">Personalized email campaigns with AI-driven segmentation and content optimization.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Content Marketing</h3>
              <p className="text-[color:var(--muted-foreground)]">Strategic content creation and distribution to establish thought leadership and drive engagement.</p>
            </div>
            <div className="bg-[color:var(--card)] p-6 rounded-xl border border-[color:var(--border)] shadow-md">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Analytics & Reporting</h3>
              <p className="text-[color:var(--muted-foreground)]">Comprehensive performance tracking with actionable insights to continuously improve marketing ROI.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
              <p className="text-lg mb-8">
                Book a free digital marketing audit and discover how our AI-powered approach can help you achieve measurable results.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
                  Book Your Free Audit
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default DigitalMarketingPage;