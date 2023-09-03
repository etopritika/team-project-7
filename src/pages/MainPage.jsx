import AuthSection from '../components/AuthSection/AuthSection';
import Description from '../components/Description/Description';
import ReviewSlider from '../components/ReviewsSlider/ReviewsSlider';

import React, { useEffect } from 'react';

const BackgroundColorManager = ({ color }) => {
  useEffect(() => {
    document.body.style.backgroundColor = color;
    return () => {
      document.body.style.backgroundColor = '';
    };
  }, [color]);

  return null;
};

export default function MainPage() {
  return (
    <>
      <BackgroundColorManager color="#fff" />
      <AuthSection />
      <Description />
      <ReviewSlider />
    </>
  );
}
