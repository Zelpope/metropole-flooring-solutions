import React from "react";
import { Routes, Route } from "react-router-dom";

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";               // <-- NEW
import FloatingWhatsApp from "@/components/FloatingWhatsapp";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";
import ApaItuFloorHardener from "./pages/Blogs/apa-itu-floor-hardener-panduan-lengkap";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />

        {/* Navbar always visible */}
        <Navbar />

        {/* Global scroll handler */}
        <ScrollToTop />

        {/* Page content */}
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Index />} />

            <Route
              path="/blogs/apa-itu-floor-hardener-panduan-lengkap"
              element={<ApaItuFloorHardener />}
            />

            <Route path="*" element={<Index />} />
          </Routes>
        </main>

        {/* Footer always visible */}
        <Footer />                     

        <FloatingWhatsApp />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
