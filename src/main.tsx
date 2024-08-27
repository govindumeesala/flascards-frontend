import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { Toaster } from "./components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <Toaster />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>
);
