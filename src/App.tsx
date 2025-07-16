import { Toaster } from "@/components/atoms";
import { Sonner } from "@/components/atoms";
import { TooltipProvider } from "@/components/atoms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./modules/index/screens";
import Curriculum from "./modules/curriculum/screens";
import Theory from "./modules/theory/screens";
import Exercises from "./modules/exercises/screens";
import Assistant from "./modules/assistant/screens";
import Progress from "./modules/progress/screens";
import NotFound from "./modules/not-found/screens";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/theory" element={<Theory />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="/progress" element={<Progress />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
