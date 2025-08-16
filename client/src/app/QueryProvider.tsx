import { QueryClientProvider } from "@tanstack/react-query";

import { QueryClient } from "@tanstack/react-query";

const defaultQueryFn = async ({
  queryKey,
}: {
  queryKey: readonly unknown[];
}) => {
  const response = await fetch(`http://localhost:3000/${queryKey[0]}`);
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
