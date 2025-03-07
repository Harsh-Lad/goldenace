"use client"
import type { NextPage } from 'next';
import ScrollAnimation from '../components/ScrollAnimation';
import { useState, useEffect } from 'react';
import loadingGif from '@/public/logobreathe.gif';
import Image from 'next/image';
import wLogo from '@/public/wLogo.png';
const Home: NextPage = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 2500); // Start fading out after 2.5 seconds
    const timer2 = setTimeout(() => setLoading(false), 3000); // Simulate loading time
    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      {loading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh',
            background: 'black',
            transition: 'opacity 0.5s ease-in-out',
            opacity: fadeOut ? 0 : 1,
          }}
        >
          <Image src={loadingGif} alt="loading gif" className="w-1/2 h-auto" />
        </div>
      ) : (
        <>
          <ScrollAnimation />
          <div style={{
                  position: 'absolute',
                  top: '100vh',
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backdropFilter: 'blur(10px)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  borderRadius: '10px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  zIndex: 1,
                }} /> 
          <Image src={wLogo} alt={'hello world'} className="absolute top-10 left-10 w-20 h-auto"  />
          
          <div style={{ height: '450vh', padding: '20px' }}>
            {/* Content goes here */}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;