import { QueryClient, QueryClientProvider } from 'libs/react-query';

import type { FC, PropsWithChildren } from 'react';

const rootQueryClient = new QueryClient();

export const ReactQueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return <QueryClientProvider client={rootQueryClient}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
