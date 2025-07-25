"use client";

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
// PERUBAHAN: Impor useState untuk melacak state aktif
import { motion, useScroll, MotionValue, useAnimate } from 'framer-motion';

// Data untuk testimoni (tidak ada perubahan)
const testimonialsData = [
  {
    text: "Working with Agus Susilo was seamless. His design thinking and user-first mindset brought real clarity to our project. A reliable and creative partner!",
    name: "Kusumo Seno Aji",
    role: "Manager Risk Management",
    avatar: "/images/client-profile-001.jpg",
    rating: "5.0",
    corporate: "/images/logo_pegadaian_indonesia.png",
  },
  {
    text: "The collaboration was outstanding. The final product exceeded our expectations in every way. Truly a professional and insightful designer.",
    name: "Siti Lestari",
    role: "Product Owner",
    avatar: "/images/client-profile-002.jpg",
    rating: "5.0",
    corporate: "/images/logo_pegadaian_indonesia.png",
  },
  {
    text: "A fantastic experience from start to finish. The attention to detail and creative solutions were top-notch. Highly recommended for any UI/UX project.",
    name: "Budi Santoso",
    role: "Head of Digital",
    avatar: "/images/client-profile-002.jpg",
    rating: "4.9",
    corporate: "/images/logo_pegadaian_indonesia.png",
  },
  {
    text: "Another great testimonial to show the slider functionality. Agus is a true professional with a keen eye for modern design trends.",
    name: "Rina Wulandari",
    role: "Marketing Director",
    avatar: "/images/avatar-001.jpg",
    rating: "4.8",
    corporate: "/images/logo_pegadaian_indonesia.png",
  }
];

// Komponen kartu testimoni
const TestimonialCard = ({
  text,
  name,
  role,
  avatar,
  rating,
  corporate,
  index,
  activeIndex // PERUBAHAN: Menerima activeIndex, bukan scrollYProgress
}: {
  text: string;
  name: string;
  role: string;
  avatar: string;
  rating: string;
  corporate: string;
  index: number;
  activeIndex: number; // PERUBAHAN: Tipe prop baru
}) => {
  // Menentukan apakah kartu ini sedang aktif
  const isActive = index === activeIndex;

  return (
    <motion.div
      animate={{ scale: isActive ? 1 : 0.8 }}
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
      style={{ transformOrigin: 'top' }}
      // ✅ PERUBAHAN DI SINI: className dibuat dinamis
      className={`w-[450px] md:w-[500px] flex flex-col flex-shrink-0 rounded-[30px] border-[8px] transition-colors duration-300 ${
        isActive ? 'border-gray-200' : 'border-[#f6f7f8]'
      }`}
    >
      <div className="relative w-full aspect-video rounded-tr-[21px] rounded-tl-[21px] overflow-hidden bg-gray-200">
        <Image
          src={avatar}
          alt={`Testimonial from ${name}`}
          layout="fill"
          objectFit="cover"
          className="transition-transform duration-300 group-hover:scale-105"
          onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x281?text=Image'; }}
        />
        <div className="bg-[rgba(255,255,255,0.38)] z-3 shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-[6px] border border-[rgba(255,255,255,0.29)] absolute flex bottom-[15px] right-[15px] w-[100px] p-[10px] rounded-2xl">
          <div className="flex items-center gap-1.5">
            <span className="text-4xl font-bold text-gray-900">{rating}</span>
            <FaStar className="text-[#ec9d14] text-2xl" />
          </div>
        </div>
        <div className="absolute z-3 text-[22px] font-semibold bottom-[24px] left-[15px] text-white">
          <p>Level Satisfaction</p>
        </div>
        <div className="z-2 absolute min-h-[120px] bottom-[-15px] left-0 w-full bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.52)_100%)]"></div>
      </div>
      
      <div className="mt-4">
        <motion.div
          animate={{ maxHeight: isActive ? 200 : 0 }}
          transition={{ duration: 0.4, ease: 'easeInOut' }}
          className="overflow-hidden"
        >
          <motion.p
            animate={{ opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3, delay: isActive ? 0.1 : 0 }}
            className="text-gray-700 leading-relaxed text-[20px] font-medium px-[18px] pb-[15px] [&>p]:mb-[5px]"
          >
            "{text}"
          </motion.p>
        </motion.div>
        <div className="mt-2 px-[18px] pb-[15px] flex justify-between items-center gap-5">
          <div>
            <p className="text-[24px] text-base font-bold text-gray-900">{name}</p>
            <p className="text-[20px] text-gray-500">{role}</p>
          </div>
          <div className="!w-[110px]">
            <Image
            src={corporate}
            alt={`Testimonial from ${name}`}
            layout="fill"
            className="transition-transform duration-300 max-w-full !relative"
            onError={(e) => { e.currentTarget.src = 'https://placehold.co/500x281?text=Image'; }}
          />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Komponen Utama Testimonials
const Testimonials = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  // PERUBAHAN: Menambahkan state untuk activeIndex
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const [scope, animate] = useAnimate();

  // PERUBAHAN: useEffect pertama hanya untuk MENDETEKSI perubahan indeks
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      const numItems = testimonialsData.length;
      const newActiveIndex = Math.round(latest * (numItems - 1));
      
      if (newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress, activeIndex]);

  // PERUBAHAN: useEffect kedua untuk MEREAKSI perubahan indeks (menjalankan animasi snap)
  useEffect(() => {
    const numItems = testimonialsData.length;
    const totalTravel = 190; // Total pergerakan dari 30% ke -160%
    const step = totalTravel / (numItems - 1);
    const targetXPercent = 30 - (activeIndex * step);

    animate(
      scope.current,
      { x: `${targetXPercent}%` },
      { type: "spring", stiffness: 100, damping: 20, duration: 0.5 }
    );
  }, [activeIndex, animate, scope]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-gray-50">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="wrapper mx-auto px-4 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Kolom Kiri: Informasi */}
            <div className="lg:col-span-12">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight mb-8 text-center">
                Proof of Client Satisfaction
              </h2>
            </div>
            <div className="h-[64vh] flex items-end lg:col-span-4 relative z-3 [&::before]:content-[''] [&::before]:absolute
  [&::before]:top-0
  [&::before]:left-[-20px]
  [&::before]:h-[90vh]
  [&::before]:w-[314px]
  [&::before]:z-[6]
  [&::before]:bg-[linear-gradient(to_right,rgba(249,250,251,1)_0%,rgba(249,250,251,1)_15%,rgba(249,250,251,0)_100%)]
">
              <div className="relative z-6 flex items-center gap-4">
                <div className="flex -space-x-3">
                  <Image src="/images/avatar-001.jpg" width={48} height={48} alt="Client 1" className="rounded-full border-2 border-white" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48?text=??'; }}/>
                  <Image src="/images/avatar-002.jpg" width={48} height={48} alt="Client 2" className="rounded-full border-2 border-white" onError={(e) => { e.currentTarget.src = 'https://placehold.co/48x48?text=??'; }}/>
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-800 font-bold border-2 border-white">
                    90+
                  </div>
                </div>
              </div>
              <p className="relative z-6 mt-3 text-base text-gray-600 font-medium">Happy clients</p>
              <p className="relative z-6 mt-4 text-gray-500 leading-relaxed">
                Here are some heartfelt testimonials from clients who experienced the impact of thoughtful who collaborated with me to tackle challenges together.
              </p>
            </div>

            {/* Kolom Kanan berisi track horizontal yang dianimasikan */}
            <div className="lg:col-span-8 relative [&::after]:content-[' '] [&::after]:w-[286px] [&::after]:absolute  
  [&::after]:content-[' '] [&::after]:w-[286px]
  [&::after]:absolute
  [&::after]:top-0
  [&::after]:right-[-18px]
  [&::after]:h-[90vh]
  [&::after]:z-[5]
  [&::after]:bg-[linear-gradient(to_left,rgba(249,250,251,1)_0%,rgba(249,250,251,0)_100%)]
  [&::after]:content-['']">
              <motion.div ref={scope} className="flex gap-1 items-start h-[598px] pt-[10px] pb-[10px]">
                {/* ✅ Perbaikan: .map langsung di dalam motion.div */}
                {testimonialsData.map((testimonial, index) => (
                  
                  // ✅ Perbaikan: div pembungkus ada DI DALAM map, dengan key dan className yang benar
                  <div key={index} className={index === 0 ? '2xl:ml-[-21%] xl:ml-[-14%] lg:ml-[-96px] md:ml-[-86px]' : ''} >
                    <TestimonialCard
                      // key tidak lagi di sini karena sudah dipindah ke div pembungkus
                      index={index}
                      activeIndex={activeIndex}
                      {...testimonial}
                    />
                  </div>

                ))}
              </motion.div>



              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
