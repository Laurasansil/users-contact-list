import 'tailwindcss/tailwind.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Home } from '@/modules/home';
import { Profile, NoUserSelected } from '@/modules/profile';
import { SelectedUserProvider } from '@/modules/user';
import { ROUTES } from './constants';

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
    // Note: profile is a nested route
    children: [
      {
        path: ROUTES.HOME,
        element: <NoUserSelected />,
      },
      {
        path: ROUTES.PROFILE,
        element: <Profile />,
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SelectedUserProvider>
        <RouterProvider router={router} />
      </SelectedUserProvider>
    </QueryClientProvider>
  );
}

export default App;
