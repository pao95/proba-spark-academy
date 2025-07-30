import { Toaster } from "@/components/atoms";
import { Sonner } from "@/components/atoms";
import { TooltipProvider } from "@/components/atoms";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Curriculum from "./modules/curriculum/screens";
import Assistant from "./modules/assistant/screens";
import NotFound from "./modules/not-found/screens";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Curriculum />} />
          <Route path="/assistant" element={<Assistant />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
