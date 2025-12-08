import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { API } from "../envVars";

const defaultQueryFn = async ({
  queryKey,
}: {
  queryKey: readonly unknown[];
}) => {
  console.log(API);
  const response = await fetch(`${API}/${queryKey[0]}`);
  const data = await response.json();
  return data;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: defaultQueryFn,
    },
  },
});

const QueryProvider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

export default QueryProvider;
