import React, { PropsWithChildren } from 'react';

export const AppLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <h1>Star Wars Code Test</h1>
      {children}
    </div>
  );
};
