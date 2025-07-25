'use client';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  // === Typing animation ===
  const phrases = [
    'User Needs Analysis, Business Goals Oriented, Feasibility Tech Integration, Data Matrices',
  ];
  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const phrase = phrases[index];
      if (charIndex < phrase.length) {
        setCurrentText((prev) => prev + phrase[charIndex]);
        setCharIndex((prev) => prev + 1);
      } else {
        setTimeout(() => {
          setCurrentText('');
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % phrases.length);
        }, 1500);
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, [charIndex, index]);

  // === Vertical Sync Sliders ===
  const roles = [
    'Product Designer',
    'UI/UX Designer',
    'Website Developer',
    'Frontend Developer',
    'Product Designer', // ⬅️ clone for seamless loop
  ];

  const sliderMain = useRef<Slider>(null);
  const sliderNav = useRef<Slider>(null);

  const [mainIndex, setMainIndex] = useState(0);

  const settingsMain = {
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: false,
    autoplay: true,
    autoplaySpeed: 2500,
    focusOnSelect: false,
    speed: 700,
    beforeChange: (_old: number, next: number) => {
      setMainIndex(next);
      if (next === roles.length - 1) {
        setTimeout(() => {
          sliderMain.current?.slickGoTo(0, true);
          sliderNav.current?.slickGoTo(0, true);
        }, 10);
      }
    },
    asNavFor: sliderNav.current,
  };

  const settingsNav = {
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    infinite: true,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    dots: false,
    focusOnSelect: true,
    speed: 700,
    asNavFor: sliderMain.current,
  };

  return (
    <>
      <style jsx global>{`
        .slick-nav .slick-slide {
          cursor: pointer;
          opacity: 0.5;
          transform: scale(0.85);
          transition: all 300ms ease;
        }
        .slick-nav .slick-current {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      <section className="relative w-full h-screen flex items-center bg-[#fcfcfb] overflow-hidden">
        {/* === Side Card with Sliders === */}
        <div className="w-[480px] h-[320px] absolute right-0 bottom-[-5px] rounded-3xl border border-gray-200 z-10">
          <div className="w-full flex items-end relative">
            <div className="p-4 text-right">
              <div className="text-[32px] font-bold leading-[36px]">
                <h2>👋 Hi, I'm</h2>
                <h2>Agus Susilo</h2>
              </div>

              {/* === Slider Group === */}
              <div className="flex items-center justify-end gap-4 mt-4 h-[120px] relative z-10">
                <div className="w-[50px] h-full slick-nav">
                  <Slider {...settingsNav} ref={sliderNav}>
                    {[1, 2, 3, 4, 1].map((num, i) => (
                      <div
                        key={`num-${i}`}
                        className="!flex items-center justify-center h-[40px]"
                      >
                        <h3 className="text-xl font-bold text-gray-700">{num}</h3>
                      </div>
                    ))}
                  </Slider>
                </div>

                <div className="flex-1 overflow-visible h-[120px] w-[380px]">
                  <Slider {...settingsMain} ref={sliderMain}>
                    {roles.map((role, i) => (
                      <div key={`role-${i}`} className="h-[120px] flex items-center justify-center">
                        <h2 className="text-[28px] font-semibold text-gray-700 text-center">
                          {role}
                        </h2>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              <Image
                className="absolute mt-[-64px] z-[-1] right-[-24px]"
                src="/images/image-photo-agussusilo0893.png"
                width={332}
                height={332}
                alt="Agus Susilo Product Designer UI/UX"
              />
            </div>
          </div>
        </div>

        {/* === Central Hero Text === */}
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

          <div className="text-center text-gray-600 mt-4">
            <p className="companynameheading-5">
              Data: <span className="text-gray-600">[{currentText}]</span>
            </p>
          </div>

          <div className="w-full flex justify-center mt-6">
            <Link
              href="/"
              className="group relative flex items-center justify-center overflow-hidden rounded-[40px] border-2 border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] px-8.5 py-5 transition-all duration-500 hover:shadow-md"
            >
              <span className="relative z-10 mr-2 text-lg font-semibold text-gray-50 uppercase group-hover:text-white">
                DISCOVER MY CREATIVE LOGIC
              </span>
              <div className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-gray-50 p-2 opacity-70 group-hover:bg-white group-hover:opacity-100">
                <svg
                  viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-[#ec56ec]"
                >
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