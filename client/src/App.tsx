import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Redirect, Route, Switch, useLocation } from "wouter";
import { useEffect } from "react";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import SiteLayout from "./components/SiteLayout";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import ServiceAreas from "./pages/ServiceAreas";
import ServiceAreaDetail from "./pages/ServiceAreaDetail";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import AdminLeads from "./pages/AdminLeads";
import WhatIsWholesaler from "./pages/WhatIsWholesaler";
import ForRealtors from "./pages/ForRealtors";
import SchemaMarkup from "./components/SchemaMarkup";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Foreclosure from "./pages/Foreclosure";
import InheritedHomes from "./pages/InheritedHomes";
import SellAsIs from "./pages/SellAsIs";
import DealsPage from "./pages/portal/DealsPage";
import DealDetailPage from "./pages/portal/DealDetailPage";
import AdminPage from "./pages/portal/AdminPage";
import ProfilePage from "./pages/portal/ProfilePage";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, [location]);
  return null;
}

function Router() {
  return (
    <SiteLayout>
      <ScrollToTop />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/how-it-works" component={HowItWorks} />
        <Route path="/about" component={About} />
        <Route path="/reviews" component={Reviews} />
        <Route path="/service-areas" component={ServiceAreas} />
        <Route path="/service-areas/:slug" component={ServiceAreaDetail} />
        <Route path="/what-is-a-wholesaler" component={WhatIsWholesaler} />
        <Route path="/for-realtors" component={ForRealtors} />
        <Route path="/foreclosure" component={Foreclosure} />
        <Route path="/inherited-homes" component={InheritedHomes} />
        <Route path="/sell-as-is" component={SellAsIs} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route path="/contact" component={Contact} />
        <Route path="/admin/leads" component={AdminLeads} />
        <Route path="/privacy" component={PrivacyPolicy} />
        <Route path="/terms" component={TermsOfService} />
        <Route path="/portal/deals/:id" component={DealDetailPage} />
        <Route path="/portal/deals" component={DealsPage} />
        <Route path="/portal/admin" component={AdminPage} />
        <Route path="/portal/profile" component={ProfilePage} />
        <Route path="/portal"><Redirect to="/portal/deals" /></Route>
        <Route path="/404" component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <SchemaMarkup />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
