import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import { Home } from "@/pages/Home";
import Marble from "@/pages/Marble"; // ✅ Default export
import Retailers from "@/pages/Retailers"; // ✅ Default export
import Wood from "@/pages/Wood"
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import "@/i18n";

function AppRoutes() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/Marble" component={Marble} />
      <Route path="/Wood" component={Wood} />
      <Route path="/Retailers" component={Retailers} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
    const { i18n } = useTranslation();
    useEffect(() => {
    const savedLang = localStorage.getItem("lang");
    if (savedLang) {
      i18n.changeLanguage(savedLang.toLowerCase());
    }
  }, [i18n]);
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {/* ✅ THIS is the key fix */}
        <WouterRouter base="/">
          <AppRoutes />
        </WouterRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
