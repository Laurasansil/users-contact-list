import React from 'react';

import Text from '@/components/Text';

type NoUserSelectedProps = {};

const NoUserSelected: React.FC<NoUserSelectedProps> = () => {
  return (
    <div className="flex h-full w-full items-center justify-center content-center">
      <Text className="text-3xl"> Select a user :D</Text>
    </div>
  );
};

export default NoUserSelected;
