import React from 'react';

import Lottie from 'react-lottie';
import animationData from '../lotties/38825-robot-hello.json';
// Animation by Mohamed Achraf El Ghayani on Lottiefiles: https://lottiefiles.com/38825-robot-hello#
import { ProfileText, CredText } from 'styling/styling';

export const Profile = () => {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
    rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <>
      <ProfileText>Welcome! Your're logged in.</ProfileText>
        <Lottie
          options={defaultOptions}
          height={300}
          width={250} 
        />
        <CredText>Animation by Mohamed Achraf El Ghayani on Lottiefiles</CredText>
    </>
  );
};
