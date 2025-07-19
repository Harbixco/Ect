import React, { ReactNode } from 'react';

interface BlueBannerProps {
  children: ReactNode;
}

const BlueBanner: React.FC<BlueBannerProps> = ({ children }) => {
  return (
    <div className="mb-5 h-auto w-full bg-primary">
      <div className="mx-auto w-4/5 py-8">
        {children}
      </div>
    </div>
  );
};

export default BlueBanner;