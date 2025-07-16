import { Toaster } from "@/components/atoms";
import { Sonner } from "@/components/atoms";
import { TooltipProvider } from "@/components/atoms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Curriculum from "./pages/Curriculum";
import Theory from "./pages/Theory";
import Exercises from "./pages/Exercises";
import Assistant from "./pages/Assistant";
import Progress from "./pages/Progress";
import NotFound from "./pages/NotFound";

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
