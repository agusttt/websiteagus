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
        <div className="card-profession absolute right-[-18px] bottom-[-6px] rounded-3xl z-10">
          <div className="profession-content w-full flex items-end relative">
            <div className="p-4 text-right">
              <div className="relative top-[48px] 2xl:left-[-30%] xl:left-[-30%] lg:left-[12.5%] md:left-[12.5%] sm:left-[-32%] max-sm:left-[-32%]">
                <h2 className="greeting-name">👋 Hi, I'm</h2>
                <h2 className="greeting-name">Agus Susilo</h2>
              </div>

              {/* === Title Fade Slider === */}
              <div className="relative top-[52px] fade-wrapper mt-2 ml-auto pb-[10px] profession">
                {roles.map((role, i) => (
                  <h2
                    key={`role-${i}`}
                    className={`fade-item ${
                      i === activeIndex ? 'active' : ''
                    }`}
                  >
                    <span className="font-normal text-gray-600 flex justify-start">
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
        <div className="wrapper 2xl:px-[30px] xl:px-[30px] lg:px-[30px] md:px-[30px] sm:px-[10px] max-sm:px-[10px]">
          <div className="text-center 2xl:mt-[7.4%] xl:mt-[5.6%] lg:mt-[4.8%] md:mt-[4.6%] sm:mt-[4.6%] max-:mt-[4%]">
            <h2 className="heading-hero">
              <span className="text-head-gradient">Alchemizing</span> the intersection of
            </h2>
            <h2 className="heading-hero">
              data, aesthetics, and <span className="text-head-gradient">functionality</span>
            </h2>
          </div>

          <div className="w-full flex items-center justify-center 2xl:mt-6 xl:mt-5.5 lg:mt-3.5 md:mt-5 sm:mt-5.5 max-sm:mt-5.5 initialize">
            <Image
              src="/images/loading-time-sand.png"
              width={68}
              height={68}
              alt="Loading icon"
              className="rotate-clockwise"
            />
            <p className="ml-4">Initializing design + logic</p>
          </div>

          <div className="flex justify-center items-center mx-auto h-[74px] 2xl:w-[640px] xl:w-[640px] lg:w-[432px] md:w-[386px] sm:w-[90%] max-sm:w-[90%] text-center text-gray-600 2xl:mt-4 xl:mt-3 lg:mt-1.5 md:mt-3 sm:mt-3 max-sm:mt-3">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
              className="companynameheading-5"
            >
              Data: <span className="text-gray-600 leading-normal">[{currentText}]</span>
            </motion.p>
          </div>

          <div className="w-full flex justify-center 2xl:mt-6 xl:mt-6 lg:mt-5 md:mt-5 sm:mt-4.5 max-sm:mt-4.5">
            <Link
              href="/"
              className="group relative flex items-center justify-center overflow-hidden rounded-[40px] border-2 border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] 2xl:px-8.5 xl:px-7 lg:px-7 md:px-7 sm:px-7 max-sm:px-7 2xl:py-5 xl:py-3.5 lg:py-3.5 md:py-4.5 sm:py-4.5 max-sm:py-4.5 transition-all duration-500 hover:shadow-md"
            >
              <span className="relative z-10 2xl:mr-2 xl:mr-2 lg:mr-2 md:mr-2 sm:mr-2 max-sm:mr-1.5 2xl:text-lg xl:text-lg lg:text-[15.5px] sm:text-[15px] max-sm:text-[15px] font-semibold text-gray-50 uppercase group-hover:text-white">
                DISCOVER MY CREATIVE LOGIC
              </span>
              <div className="relative z-10 flex 2xl:h-[30px] xl:h-[30px] lg:h-[28px] md:h-[28px] sm:h-[26px] max-sm:h-[26px] 2xl:w-[30px] xl:w-[30px] lg:w-[28px] md:w-[28px] sm:w-[26px] max-sm:w-[26px] items-center justify-center rounded-full bg-gray-50 p-2 opacity-70 group-hover:bg-white group-hover:opacity-100">
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