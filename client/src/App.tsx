import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Hellcat from "./pages/Hellcat";
import Challenger from "./pages/Challenger";
import Bronco from "./pages/Bronco";
import Charger from "./pages/Charger";
import F8Duo from "./pages/F8Duo";
import McoDelivery from "./pages/McoDelivery";
import Terms from "./pages/Terms";
import HalfDay from "./pages/HalfDay";
import Compare from "./pages/Compare";
import Blog from "./pages/Blog";
import BlogScenicDrives from "./pages/BlogScenicDrives";
import BlogHellcatVsChallenger from "./pages/BlogHellcatVsChallenger";
import Dashboard from "./pages/Dashboard";
import AgreementList from "./pages/AgreementList";
import AgreementSign from "./pages/AgreementSign";
import Privacy from "./pages/Privacy";
import StructuredData from "./components/StructuredData";
import SmsWidget from "./components/SmsWidget";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/orlando-hellcat-rental" component={Hellcat} />
      <Route path="/orlando-hellcat-rental/" component={Hellcat} />
      <Route path="/challenger-rt-rental" component={Challenger} />
      <Route path="/challenger-rt-rental/" component={Challenger} />
      <Route path="/orlando-bronco-rental" component={Bronco} />
      <Route path="/orlando-bronco-rental/" component={Bronco} />
      <Route path="/orlando-charger-rental" component={Charger} />
      <Route path="/orlando-charger-rental/" component={Charger} />
      <Route path="/f8-duo-wedding" component={F8Duo} />
      <Route path="/f8-duo-wedding/" component={F8Duo} />
      <Route path="/mco-car-delivery" component={McoDelivery} />
      <Route path="/mco-car-delivery/" component={McoDelivery} />
      <Route path="/terms" component={Terms} />
      <Route path="/terms/" component={Terms} />
      <Route path="/half-day-experience" component={HalfDay} />
      <Route path="/half-day-experience/" component={HalfDay} />
      <Route path="/compare" component={Compare} />
      <Route path="/compare/" component={Compare} />
      <Route path="/blog" component={Blog} />
      <Route path="/blog/" component={Blog} />
      <Route path="/blog/best-scenic-drives-orlando" component={BlogScenicDrives} />
      <Route path="/blog/hellcat-vs-challenger" component={BlogHellcatVsChallenger} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/dashboard/" component={Dashboard} />
      <Route path="/admin/agreements" component={AgreementList} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/privacy/" component={Privacy} />
      <Route path="/404" component={NotFound} />
      <Route path="/agreement/:bookingId" component={AgreementSign} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <StructuredData />
          <Toaster />
          <Router />
          <SmsWidget />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
