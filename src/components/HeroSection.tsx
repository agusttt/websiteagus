'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const phrases = [
    ' "User Needs Analysis", "Business Goals Oriented", "Feasibility Tech Integration", "Data Matrices"',
  ];
  const [currentText, setCurrentText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const phrase = phrases[phraseIndex];
      if (charIndex < phrase.length) {
        setCurrentText((prev) => prev + phrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCharIndex(0);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 1500);
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [charIndex, phraseIndex]);

  const roles = ['Product Designer', 'UI/UX Designer', 'Website Developer', 'Frontend Developer'];
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % roles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <>
      <style jsx>{`
        .fade-wrapper {
          position: relative;
          height: 46px;
          overflow: hidden;
        }
        .fade-item {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          opacity: 0;
          transform: translateY(36px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .fade-item.active {
          opacity: 1;
          transform: translateY(0px);
        }
        .fade-item.exiting {
          opacity: 0;
          transform: translateY(-36px);
        }
      `}</style>

      <section className="relative w-full h-screen flex items-center bg-[#fcfcfb] overflow-hidden">
        {/* === Side Card === */}
        <div className="w-[480px] h-[320px] absolute right-[-18px] bottom-[-5px] rounded-3xl z-10">
          <div className="w-full flex items-end relative">
            <div className="p-4 text-right">
              <div className="relative top-[48px] left-[-30%] text-[32px] font-bold leading-[36px]">
                <h2 className="">👋 Hi, I'm</h2>
                <h2 className="">Agus Susilo</h2>
              </div>

              {/* === Title Fade Slider === */}
              <div className="relative top-[52px] w-[320px] fade-wrapper mt-2 ml-auto pb-[10px]">
                {roles.map((role, i) => (
                  <h2
                    key={`role-${i}`}
                    className={`fade-item ${
                      i === activeIndex ? 'active' : ''
                    }`}
                  >
                    <span className="text-[28px] font-normal leading-[36px] text-gray-600 flex justify-start">
                      {role}
                    </span>
                  </h2>
                ))}
              </div>

              <Image
                className="absolute mt-[-24%] z-[-1] right-[-24px]"
                src="/images/image-photo-agussusilo0893.png"
                width={332}
                height={332}
                alt="Agus Susilo Product Designer UI/UX"
              />
            </div>
          </div>
        </div>

        {/* === Hero Section === */}
        <div className="wrapper px-[30px]">
          <div className="text-center">
            <h2 className="heading-hero">
              <span className="text-head-gradient">Alchemizing</span> the intersection of
            </h2>
            <h2 className="heading-hero">
              data, aesthetics, and <span className="text-head-gradient">functionality</span>
            </h2>
          </div>

          <div className="w-full flex items-center justify-center mt-6">
            <Image
              src="/images/loading-time-sand.png"
              width={68}
              height={68}
              alt="Loading icon"
              className="rotate-clockwise"
            />
            <p className="ml-4 text-[40px]">Initializing design + logic</p>
          </div>

          <div className="flex justify-center items-center mx-auto h-[74px] w-[640px] text-center text-gray-600 mt-4">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="companynameheading-5"
            >
              Data: <span className="text-gray-600">[{currentText}]</span>
            </motion.p>
          </div>

          <div className="w-full flex justify-center mt-6">
            <Link
              href="/"
              className="group relative flex items-center justify-center overflow-hidden rounded-[40px] border-2 border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] 2xl:px-8.5 xl:px-8.5 lg:px-8.5 md:px-8.5 sm:px-8.5 max-sm:px-8.5 2xl:py-5 xl:py-5 lg:py-5 md:py-5 sm:py-5 max-sm:py-5 transition-all duration-500 hover:shadow-md"
            >
              <span className="relative z-10 mr-2 text-lg font-semibold text-gray-50 uppercase group-hover:text-white">
                DISCOVER MY CREATIVE LOGIC
              </span>
              <div className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-50 p-2 opacity-70 group-hover:bg-white group-hover:opacity-100">
                <svg viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" className="fill-[#ec56ec]">
                  <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;