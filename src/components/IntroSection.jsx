import React from 'react';
import GlitchText from './GlitchText';
import DecryptedText from './DecryptedText';
import Particles from './Particles';

const IntroSection = () => {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col items-center justify-center space-y-6 px-4 text-center overflow-hidden">
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={200}
          particleSpread={14}
          speed={0.9}
          particleBaseSize={100}
          moveParticlesOnHover={false}
          alphaParticles={false}
          disableRotation={true}
        />
      </div>

      {/* Main Content on top of particles */}
      <div className="relative z-10">
        {/* Hi I'm + Name */}
        <div className="flex flex-wrap justify-center items-center font-bold mb-4">
          <span className="text-[2.5rem] md:text-[3rem] mr-4 leading-none font-sans">Hi I'm</span>
          <GlitchText
            speed={1}
            enableShadows={true}
            enableOnHover={false}
            className="text-[2.5rem] md:text-[3rem] leading-none font-sans"
          >
            M.B.Chellarao
          </GlitchText>
        </div>

        {/* Decrypted Subtitle */}
        <DecryptedText
          text="An aspiring Full Stack Developer passionate about building sleek web experiences"
          speed={20}
          maxIterations={12}
          sequential={true}
          revealDirection="center"
          characters="01"
          animateOn="view"
          className="text-white"
          encryptedClassName="text-pink-500"
          parentClassName="text-lg md:text-xl font-medium tracking-wide max-w-3xl"
        />
      </div>
    </div>
  );
};

export default IntroSection;
