import React from 'react';
import ContentLoader from 'react-content-loader';

const HeaderSkeleton = ({ props }) => {
  return (
    <ContentLoader
      speed={2}
      width={180}
      height={25}
      viewBox="0 0 180 25"
      backgroundColor="#d9d9d9"
      foregroundColor="#ededed"
      {...props}
    >
      <rect x="0" y="0" rx="4" ry="4" width="175" height="24" />
    </ContentLoader>
  );
};

export default HeaderSkeleton;
