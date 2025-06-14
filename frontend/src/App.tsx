
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CivicReporting from "./pages/CivicReporting";
import RecyclingRewards from "./pages/RecyclingRewards";
import IssueMap from "./pages/IssueMap";
import Leaderboard from "./pages/Leaderboard";
import WalletIntegration from "./pages/WalletIntegration";
import Profile from "./pages/Profile";
import Notifications from "./pages/Notifications";
import Analytics from "./pages/Analytics";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/civic-reporting" element={<CivicReporting />} />
            <Route path="/recycling-rewards" element={<RecyclingRewards />} />
            <Route path="/issue-map" element={<IssueMap />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/wallet-integration" element={<WalletIntegration />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/analytics" element={<Analytics />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
