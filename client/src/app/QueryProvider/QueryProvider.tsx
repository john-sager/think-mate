import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./queryConfig";

const QueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryProvider;
