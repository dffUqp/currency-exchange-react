import React from 'react';
import ContentLoader from 'react-content-loader';

const ExchangerBlockSkeleton = ({ props }) => {
  return (
    <ContentLoader
      speed={2}
      width="100%"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="0" y="3" rx="0" ry="0" width="536" height="56" />
      <rect x="0" y="70" rx="0" ry="0" width="536" height="56" />
    </ContentLoader>
  );
};

export default ExchangerBlockSkeleton;
