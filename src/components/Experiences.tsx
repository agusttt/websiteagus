"use client";
import { useEffect, useRef } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { FiCalendar } from "react-icons/fi";

// Komponen terpisah untuk teks melingkar "AVAILABLE FOR NEW PROJECT"
const CircularTextSVG = () => {
  return (
    <svg width="200" height="200" viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        {/* Path lingkaran untuk teks. stroke dan fill diatur none agar path tidak terlihat. */}
        <path id="donut-path" d="M 20 100 A 80 80 0 0 1 180 100 A 80 80 0 0 1 20 100" className="stroke-none fill-none"/>
      </defs>
      {/* Elemen teks yang akan mengikuti path */}
      <text className="text-base fill-white" textAnchor="middle"> {/* text-base untuk font-size 16px, fill-black untuk warna teks */}
        {/* textPath menghubungkan teks ke path dengan id "donut-path" */}
        <textPath className="relative z-4 textes font-semibold" xlinkHref="#donut-path" startOffset="50%"> {/* startOffset 50% untuk memusatkan teks pada lingkaran */}
         ✦ AVAILABLE FOR NEW PROJECT ✦ AVAILABLE FOR NEW PROJECT
        </textPath>
      </text>
    </svg>
  );
};

function Experiences() {
  // textRef dan useEffect yang terkait dihapus karena teks melingkar sekarang ditangani oleh SVG.

  const OpenToWorkSVG = () => {
    return (
      <div className="w-40 h-40">
        <svg viewBox="0 0 200 200" className="w-full h-full">
          <defs>
            {/* Path lingkaran untuk teks "Open to Work" */}
            <path
              id="circlePath"
              d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" // Radius 75
            />
          </defs>
          <text
            fill="#16a34a"
            fontSize="18" // Ukuran font diperbesar agar lebih jelas melingkar
            fontWeight="bold"
            letterSpacing="2"
            className="uppercase"
          >
            <textPath href="#circlePath" startOffset="50"> {/* startOffset disesuaikan */}
              Open to Work
            </textPath>
          </text>
        </svg>
        {/* Pastikan gambar ini ada di direktori public/profile.jpg */}
        <img
          src="/profile.jpg"
          alt="Profile"
          className="absolute left-1/2 top-1/2 w-28 h-28 rounded-full object-cover -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    );
  };

  return (
    <div className="bg-experiences flex 2xl:h-[calc(100vh-76px)] xl:h-auto md:h-auto sm:h-auto max-sm:h-auto w-full bg-white pt-14">
      <div className="wrapper">
        <div className="flex flex-wrap max-sm:mx-[5px] sm:mx-[15px] md:mx-[15px] lg:-mx-[15px] xl:-mx-[15px] 2xl:-mx-[15px]">
          <div className="w-full px-[15px]">
            <div className="2xl:[&>h2]:text-[50px] xl:[&>h2]:text-[36px] lg:[&>h2]:text-[34px] md:[&>h2]:text-[32px] sm:[&>h2]:text-[32px] max-sm:[&>h2]:text-[32px] [&>h2]:tracking-[-0.24px] [&>h2]:text-gray-950 [&>h2]:font-bold 2xl:[&>h2]:mb-8 xl:[&>h2]:mb-8 lg:[&>h2]:mb-6 md:[&>h2]:mb-5 sm:[&>h2]:mb-5 max-sm:[&>h2]:mb-5 text-center leading-normal">
              <h2>About Me</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap max-sm:mx-[15px] sm:mx-[15px] md:mx-[15px] lg:-mx-[15px] xl:-mx-[15px] 2xl:-mx-[15px]">
          <div className="relative mt-0 mb-4 flex h-auto min-h-[286px] w-full flex-wrap items-center overflow-hidden rounded-4xl 2xl:px-[15px] lg:px-[15px] md:px-[0px] max-sm:px-[5px] max-sm:py-3 sm:px-[5px] sm:py-3 md:py-2.5 lg:py-1.5 xl:py-1.5">
            <div className="flex w-full flex-wrap items-start justify-between rounded-4xl max-sm:flex-col max-sm:pt-0 max-sm:pb-8.5 sm:flex-col sm:pt-0 sm:pb-8.5 md:flex-col md:pt-6.5 lg:flex-row lg:pt-6.5 lg:pb-9.5 xl:flex-row xl:pt-6.5 xl:pb-9.5">
              <div className="z-3 overflow-hidden rounded-4xl bg-[#ffffff] pb-[24px] max-sm:order-1 max-sm:w-full sm:order-1 sm:w-full md:order-1 md:w-full lg:order-1 lg:w-[37%] xl:order-1 xl:w-[33%] 2xl:xl:w-[32%] box-shadow:0px_4px_16px_rgba(17,17,26,0.6) border border-1 border-gray-200">
                <Link
                  className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                  href="/"
                >
                  <div className="picturecard relative flex min-h-[296px] w-full justify-center overflow-hidden [&>img]:absolute [&>img]:inset-x-0 [&>img]:right-[auto] [&>img]:bottom-[-22%] [&>img]:left-[auto] [&>img]:max-w-[136%]">
                    <Image className="z-3"
                      src="/images/image-photo-agussusilo0893.png"
                      width={372}
                      height={372}
                      alt="Agus Susilo Product Designer UI/UX Frontend Developer find on instagram agussusilo0893"
                    />
                    <Image className="z-4 circle-green-trans"
                      src="/images/circle-green-transparent.png"
                      width={372}
                      height={372}
                      alt="Agus Susilo Product Designer UI/UX Frontend Developer find on instagram agussusilo0893"
                    />
                    <Image className="absolute z-6"
                      src="/images/image-photo-agussusilo0893-head.png"
                      width={372}
                      height={372}
                      alt="Agus Susilo Product Designer UI/UX Frontend Developer find on instagram agussusilo0893"
                    />                    
                    <div className="circles">
                      <div className="logos"></div>
                      <div className="textes z-4 absolute">
                        {/* Mengganti p tag dengan komponen CircularTextSVG */}
                        <CircularTextSVG/>
                      </div>
                    </div>

                    <div className="circleGreen"></div>
                  </div>
                </Link>
                <div className="flex w-auto gap-7.5 pt-[28px] pr-[24px] pl-[24px]">
                  <div className="[&>h2]:mb-6 [&>h2]:leading-[33px] [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>p]:mb-2 [&>p]:text-[20px] [&>p]:text-gray-600">
                    <h2 className="showcaseheading-2">Hi, 👋 I'm Agus Susilo</h2>
                    <p>
                      I breathe life into pixels as a product designer &amp; front-end
                      developer from 🇮🇩 Indonesia.
                    </p>
                  </div>
                </div>
                <div className="flex w-auto pt-[24px] pr-[24px] pl-[24px]">
                  <Link
                    href="/"
                    className="group relative mx-auto mb-1.5 flex items-center justify-center overflow-hidden rounded-[32px] border-2 border-solid border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] px-6 py-3.5 shadow-none transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:rounded-[32px] before:bg-gradient-to-r before:from-[rgba(32,79,240,1)] before:to-[rgba(227,22,98,1)] before:p-[2px] hover:border-[rgba(255,255,255,1)] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-full [&::before]:content-[''] hover:[&::before]:z-2"
                  >
                    <div className="flex w-auto items-center justify-between">
                      <div className="">
                        <span className="absolute inset-[2.5px] rounded-[32px] bg-gradient-to-r from-[#498afe] to-[#ff43e9] opacity-0 transition-opacity duration-500 group-hover:z-3 group-hover:opacity-100"></span>
                        <span className="discover relative z-10 mr-1.5 text-lg font-semibold text-gray-50 uppercase transition-colors duration-500 group-hover:text-white">
                          Discover more about me
                        </span>
                      </div>
                      <div className="relative z-10 ml-1.5 flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-gray-50 p-2 opacity-70 transition-colors duration-500 group-hover:bg-white group-hover:opacity-100">
                        <svg
                          viewBox="0 0 448 512"
                          xmlns="http://www.w3.org/2000/svg"
                          className="max-w-full fill-[#ec56ec] transition-colors duration-500 group-hover:fill-[#ec56ec]"
                        >
                          <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="min-h-[602px] flex flex-col justify-center items-center border rounded-tl-3xl rounded-4xl max-sm:order-2 max-sm:w-full max-sm:pr-[0px] max-sm:pl-[0px] sm:order-2 sm:w-full sm:pr-[15px] sm:pl-[15px] md:order-2 md:w-full md:pr-[32px] md:pl-[32px] lg:order-2 lg:w-[60%] lg:pr-[48px] lg:pl-[48px] xl:order-2 xl:w-[64%] xl:pr-[56px] xl:pl-[56px] 2xl:pr-[64px] 2xl:pl-[64px] 2xl:w-[64%] py-3.5 2xl:mt-0 xl:mt-0 lg:mt-0 md:mt-[48px] sm:mt-[48px] max-sm:mt-[32px]">
                <div className="w-full [&>h2]:leading-[33px] [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>p]:mb-2 [&>p]:text-[20px] [&>p]:text-gray-600 [&>p]:mb-2.5 2xl:px-0 xl:px-0 lg:px-0 md:px-[15px] max-sm:px-[15px] sm:px-[15px]">
                  <h2 className="showcaseheading-2 mt-4 mb-2">Work Experience</h2>
                  <p className="companynameheading-5">Beyond the Timeline: 12+ Years Shaping Digital Realities</p>
                </div>
                <div className="flex items-center border-b-2 border-gray-200 py-4.5 max-sm:mx-[0px] sm:mx-[0px] md:mx-auto max-sm:w-full sm:w-full md:w-full lg:mx-auto lg:w-full xl:-mx-auto xl:w-full 2xl:-mx-auto">
                  <div className="max-sm:w-[69%] max-sm:px-[15px] sm:w-[69%] sm:px-[15px] md:w-[62%] md:px-0 lg:w-[62%] lg:px-0 xl:w-[62%] 2xl:w-[62%]">
                    <div className="w-full [&>h2]:mb-3 [&>h2]:font-bold">
                      <h2 className="jobtitleheading-2">UI/UX Designer</h2>
                    </div>
                    <div className="flex w-full flex-wrap items-center">
                      <div className="text-center max-sm:w-[15px] sm:w-[15px] lg:mr-2.5 md:mr-2.5 sm:mr-2.5 max-sm:mr-2.5 md:w-[18px] lg:w-[18px]">
                        <HiOutlineOfficeBuilding className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[15px] text-gray-600" />
                      </div>
                      <div className="2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-[85%] max-sm:w-[85%] justify-start [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="companynameheading-5">Komunigrafik</h5>
                      </div>
                    </div>
                    <div className="2xl:!hidden lg:!hidden md:!hidden sm:!flex max-sm:!flex w-full items-center justify-start mt-3.5 [&>h5]:mb-0 [&>h5]:text-gray-600">
                      <FiCalendar className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[15px] text-gray-600 lg:mr-2.5 md:mr-2.5 sm:mr-[5px] max-sm:mr-[5px]" />
                      <h5 className="periodeofwork-heading-5">Mar 2013 - Jan 2025</h5>
                    </div>
                  </div>
                  <div className="relative z-3 max-sm:w-[31.5%] max-sm:px-[15px] sm:w-[32%] sm:px-[15px] md:w-[38%] md:px-0 lg:w-[38%] lg:px-0 xl:w-[38%] 2xl:xl:w-[38%]">
                    <div className="flex w-full flex-wrap justify-end">
                      <div className="mb-3 flex w-full items-center justify-end [&>h4]:flex [&>h4]:w-auto [&>h4]:items-center">
                        <h4 className="typeofwork-heading-5">Full time</h4>
                      </div>
                      <div className="flex w-full items-center justify-end [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="periodeofwork-heading-5 xl:!flex lg:!flex md:!flex sm:!hidden max-sm:!hidden">
                          Mar 2013 - Jan 2025
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center border-b-2 border-gray-200 py-4.5 max-sm:mx-[0px] sm:mx-[0px] md:mx-auto md:w-full lg:mx-auto lg:w-full xl:-mx-auto xl:w-full 2xl:-mx-auto">
                  <div className="max-sm:w-[69%] max-sm:px-[15px] sm:w-[69%] sm:px-[15px] md:w-[62%] md:px-0 lg:w-[62%] lg:px-0 xl:w-[62%] 2xl:w-[62%]">
                    <div className="w-full [&>h2]:mb-3 [&>h2]:font-bold">
                      <h2 className="jobtitleheading-2">Frontend Developer</h2>
                    </div>
                    <div className="flex w-full flex-wrap items-center">
                      <div className="text-center max-sm:mr-2.5 max-sm:w-[15px] sm:mr-2.5 sm:w-[15px] md:mr-2.5 md:w-[18px] lg:mr-2.5 lg:w-[18px]">
                        <HiOutlineOfficeBuilding className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[15px] text-gray-600" />
                      </div>
                      <div className="2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-[85%] max-sm:w-[85%] justify-start [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="companynameheading-5">
                          Klob.id - PT Dayalima Abisatya
                        </h5>
                      </div>
                      <div className="2xl:!hidden lg:!hidden md:!hidden sm:!flex max-sm:!flex w-full items-center justify-start mt-3.5 [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <FiCalendar className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[15px] text-gray-600 lg:mr-2.5 md:mr-2.5 sm:mr-[5px] max-sm:mr-[5px]" />
                        <h5 className="periodeofwork-heading-5">Jun 2018 - Sep 2018</h5>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-3 max-sm:w-[31.5%] max-sm:px-[15px] sm:w-[32%] sm:px-[15px] md:w-[38%] md:px-0 lg:w-[38%] lg:px-0 xl:w-[38%] 2xl:xl:w-[38%]">
                    <div className="flex w-full flex-wrap justify-end">
                      <div className="mb-3 flex w-full items-center justify-end [&>h4]:flex [&>h4]:w-auto [&>h4]:items-center">
                        <h4 className="typeofwork-heading-5">Freelance</h4>
                      </div>
                      <div className="flex w-full items-center justify-end [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="periodeofwork-heading-5 xl:!flex lg:!flex md:!flex sm:!hidden max-sm:!hidden">
                          Jun 2018 - Sep 2018
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center border-b-2 border-gray-200 py-4.5 max-sm:mx-[0px] sm:mx-[0px] md:mx-auto md:w-full lg:mx-auto lg:w-full xl:-mx-auto xl:w-full 2xl:-mx-auto">
                  <div className="max-sm:w-[69%] max-sm:px-[15px] sm:w-[69%] sm:px-[15px] md:w-[62%] md:px-0 lg:w-[62%] lg:px-0 xl:w-[62%] 2xl:w-[62%]">
                    <div className="w-full [&>h2]:mb-3 [&>h2]:font-bold">
                      <h2 className="jobtitleheading-2">Illustrator Contributor</h2>
                    </div>
                    <div className="flex w-full flex-wrap items-center">
                      <div className="text-center max-sm:mr-2.5 max-sm:w-[15px] sm:mr-2.5 sm:w-[15px] md:mr-2.5 md:w-[18px] lg:mr-2.5 lg:w-[18px]">
                        <HiOutlineOfficeBuilding className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[15px] text-gray-600" />
                      </div>
                      <div className="2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-[85%] max-sm:w-[85%] justify-start [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="companynameheading-5">
                          Adobe Stock &amp; Shutterstock
                        </h5>
                      </div>
                      <div className="2xl:!hidden lg:!hidden md:!hidden sm:!flex max-sm:!flex w-full items-center justify-start mt-3.5 [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <FiCalendar className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[15px] text-gray-600 lg:mr-2.5 md:mr-2.5 sm:mr-[5px] max-sm:mr-[5px]" />
                        <h5 className="periodeofwork-heading-5">Feb 2016 - Nov 2020</h5>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-3 max-sm:w-[31.5%] max-sm:px-[15px] sm:w-[32%] sm:px-[15px] md:w-[38%] md:px-0 lg:w-[38%] lg:px-0 xl:w-[38%] 2xl:xl:w-[38%]">
                    <div className="flex w-full flex-wrap justify-end">
                      <div className="mb-3 flex w-full items-center justify-end [&>h4]:flex [&>h4]:w-auto [&>h4]:items-center">
                        <h4 className="typeofwork-heading-5">Freelance</h4>
                      </div>
                      <div className="flex w-full items-center justify-end [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="periodeofwork-heading-5 xl:!flex lg:!flex md:!flex sm:!hidden max-sm:!hidden">
                          Feb 2016 - Nov 2020
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center border-b-2 border-white py-4.5 max-sm:mx-[5px] max-sm:mb-[5px] sm:mx-[5px] md:mx-auto md:w-full lg:mx-auto lg:w-full xl:-mx-auto xl:w-full 2xl:-mx-auto">
                  <div className="px-[15px] max-sm:w-[69%] max-sm:px-[15px] sm:w-[69%] sm:px-[15px] md:w-[62%] md:px-0 lg:w-[62%] lg:px-0 xl:w-[62%] 2xl:w-[62%]">
                    <div className="w-full [&>h2]:mb-3 [&>h2]:font-bold">
                      <h2 className="jobtitleheading-2">Web Designer</h2>
                    </div>
                    <div className="flex w-full flex-wrap items-center">
                      <div className="text-center max-sm:mr-2.5 max-sm:w-[15px] sm:mr-2.5 sm:w-[15px] md:mr-2.5 md:w-[18px] lg:mr-2.5 lg:w-[18px]">
                        <HiOutlineOfficeBuilding className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[16px] text-gray-600" />
                      </div>
                      <div className="2xl:w-auto xl:w-auto lg:w-auto md:w-auto sm:w-[85%] max-sm:w-[85%] justify-start [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="companynameheading-5">Web Wisesa</h5>
                      </div>
                      <div className="2xl:!hidden lg:!hidden md:!hidden sm:!flex max-sm:!flex w-full items-center justify-start mt-3.5 [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <FiCalendar className="2xl:text-[20px] xl:text-[20px] lg:text-[20px] md:text-[18px] sm:text-[16px] max-sm:text-[15px] text-gray-600 lg:mr-2.5 md:mr-2.5 sm:mr-[5px] max-sm:mr-[5px]" />
                        <h5 className="periodeofwork-heading-5">Nov 2012 - Feb 2013</h5>
                      </div>
                    </div>
                  </div>
                  <div className="relative z-3 max-sm:w-[31.5%] max-sm:px-[15px] sm:w-[32%] sm:px-[15px] md:w-[38%] md:px-0 lg:w-[38%] lg:px-0 xl:w-[38%] 2xl:xl:w-[38%]">
                    <div className="flex w-full flex-wrap justify-end">
                      <div className="mb-3 flex w-full items-center justify-end [&>h4]:flex [&>h4]:w-auto [&>h4]:items-center">
                        <h4 className="typeofwork-heading-5">Freelance</h4>
                      </div>
                      <div className="flex w-full items-center justify-end [&>h5]:mb-0 [&>h5]:text-gray-600">
                        <h5 className="periodeofwork-heading-5 xl:!flex lg:!flex md:!flex sm:!hidden max-sm:!hidden">
                          Nov 2012 - Feb 2013
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
