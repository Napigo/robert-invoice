import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { appTheme } from "@/themes";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "@/common/ErrorBoundary";
import { ErrorDialog } from "@/common/ErrorDialog";
import { App } from "./App";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export const AppContainer: React.FC = () => {
  return (
    <ChakraProvider theme={appTheme}>
      <Router>
        <ErrorBoundary
          renderFallbackComponent={(err) => (
            <ErrorDialog err={err} closeable={true} />
          )}
        >
          <Provider store={store}>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </Provider>
        </ErrorBoundary>
      </Router>
    </ChakraProvider>
  );
};
