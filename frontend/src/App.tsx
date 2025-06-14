import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
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
import { AuthProvider } from "./context/AuthContext";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth } from "./authSlice"; // <-- Ensure this is correctly imported

const queryClient = new QueryClient();

const App = () => {
  const dispatch = useDispatch();
  const { isAuthenticated, user, loading } = useSelector((state: any) => state.auth);

  useEffect(() => {
    dispatch(checkAuth());
  }, [dispatch]);

  console.log(user);
  console.log(isAuthenticated);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AuthProvider>
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
                <Route
                  path="/login"
                  element={
                    isAuthenticated ? <Navigate to="/" /> : <Login />
                  }
                />
                <Route
                  path="/signup"
                  element={
                    isAuthenticated ? <Navigate to="/" /> : <Signup />
                  }
                />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Layout>
          </AuthProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
