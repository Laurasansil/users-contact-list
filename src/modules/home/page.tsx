import React from 'react';
import { Outlet } from 'react-router-dom';

import Sidebar from './components/Sidebar';

const Home: React.FC = () => {
  return (
    <div className="flex w-full h-full bg-light-gray">
      {/* Note: Using flex to assemble the layout */}
      {/* Note: Sidebar has a fixed */}
      <div className="flex-none w-96">
        <Sidebar />
      </div>
      {/* Note: The nested routes will be rendered here */}
      {/* Note: The outlet grows to fill the space */}
      <div className="flex-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default Home;
