"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Explorations() {
    const wrapperRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [pageHeight, setPageHeight] = useState(0);

    useEffect(() => {
        const scroll = scrollRef.current;
        const wrapper = wrapperRef.current;
        if (!scroll || !wrapper) return;

        const handleResize = () => {
            const totalScrollWidth = scroll.scrollWidth;
            const visibleWidth = wrapper.offsetWidth;
            const heightNeeded =
                totalScrollWidth - visibleWidth + window.innerHeight;
            wrapper.style.height = `${heightNeeded}px`;
            setPageHeight(heightNeeded);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const scroll = scrollRef.current;
        if (!wrapper || !scroll) return;

        const handleScroll = () => {
            const rectTop = wrapper.getBoundingClientRect().top;
            if (rectTop <= 0) {
                scroll.scrollLeft = -rectTop;
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div ref={wrapperRef} className="relative w-full h-screen">                
            <div
                ref={scrollRef}
                className="wrapper sticky flex flex-col top-[40px] xl:pt-[64px] lg:pt-[64px] md:pt-[64px] sm:pt-[56px] max-sm:pt-[56px] flex h-auto min-h-[496px] w-full overflow-hidden 2xl:px-10 xl:px-10 lg:px-10 md:px-[15px] sm:px-[10px] max-sm:px-[10px]"
            >                     
            <div className="w-full sticky xl:top-[-56px] lg:top-[-56px] md:top-[-56px] sm:top-[-24px] max-sm:top-[-24px] mx-auto left-0 right-0 text-center">
                <div className="flex flex-wrap max-sm:mx-[5px] sm:mx-[15px] md:mx-[15px] lg:-mx-[15px] xl:-mx-[15px] 2xl:-mx-[15px]">
                    <div className="w-full px-[15px]">
                        <div className="2xl:[&>h2]:text-[50px] xl:[&>h2]:text-[36px] lg:[&>h2]:text-[34px] md:[&>h2]:text-[32px] sm:[&>h2]:text-[32px] max-sm:[&>h2]:text-[32px] [&>h2]:tracking-[-0.24px] [&>h2]:text-gray-950 [&>h2]:font-bold 2xl:[&>h2]:mb-8 xl:[&>h2]:mb-8 lg:[&>h2]:mb-6 md:[&>h2]:mb-5 sm:[&>h2]:mb-5 max-sm:[&>h2]:mb-6 text-center leading-normal">
                            <h2>Exploration</h2>
                        </div>
                    </div>
                </div>                    
            </div>                         
                <motion.div
                    className="w-full flex cursor-grab space-x-6 active:cursor-grabbing [&>.card-explore]:ml-[40px] 2xl:[&>.card-explore:first-child]:ml-[-24px] xl:[&>.card-explore:first-child]:ml-[124px] md:[&>.card-explore:first-child]:ml-[86px] sm:[&>.card-explore:first-child]:ml-[15px] max-sm:[&>.card-explore:first-child]:ml-[15px] [&>.card-explore:last-child]:mr-[64px]"
                    drag="x"
                    dragConstraints={{ left: -1000, right: 0 }}
                    dragElastic={0.1}
                >                  
                    <motion.div
                        
                        className="card-explore m-auto flex min-h-[534px] h-screen xl:w-[416px] lg:w-[416px] md:w-[405px] sm:w-[336px] max-sm:w-[330px] shrink-0 snap-start items-center justify-center text-3xl font-bold text-white gap-0"
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: 0 }}
                    >
                        <div className="w-full flex flex-col xl:mt-3.5 lg:mt-3.5 md:mt-3.5 sm:mt-[-136px] max-sm:mt-[-136px]">
                            <div className="w-full flex min-h-[220px] rounded-4xl overflow-hidden">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <div className="w-full">
                                        <Image
                                            src="/images/card-exploration-Yuksehat-allergy-app.jpg"
                                            width={424}
                                            height={294}
                                            alt="YukSehat Aplikasi Kesehatan with monitors allergen levels to improve home air quality and protect you from unexpected allergy triggers"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full">
                                <div className="w-full">
                                    <Link className="[&>h2]:text-[30px] [&>h2]:font-extrabold [&>h2]:text-gray-950 [&>h2]:mt-3.5 [&>h2]:mb-6 [&>h2]:font-semibold [&>h2]:tracking-[-0.92px] [&>h3]:text-[18px] [&>h3]:font-normal [&>h3]:text-gray-600 [&>h3]:mt-5" href="/">
                                        <h3>Mobile App Design</h3>
                                        <h2 className="">Building a Collaborative Allergy Shield: How Yuksehat Lets Users Map Allergies & Share Relief"</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        
                        className="card-explore m-auto flex min-h-[534px] h-screen xl:w-[416px] lg:w-[416px] md:w-[405px] sm:w-[336px] max-sm:w-[330px] shrink-0 snap-start items-center justify-center text-3xl font-bold text-white gap-0"
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: 0 }}
                    >
                        <div className="w-full flex flex-col xl:mt-3.5 lg:mt-3.5 md:mt-3.5 sm:mt-[-136px] max-sm:mt-[-136px]">
                            <div className="w-full flex min-h-[220px] rounded-4xl overflow-hidden">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <div className="w-full">
                                        <Image
                                            src="/images/card-exploration-character-HUT-RI.jpg"
                                            width={424}
                                            height={294}
                                            alt="Playful Cartoon Characters: Traditional Games of Indonesian Independence Day!"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full">
                                <div className="w-full">
                                    <Link className="[&>h2]:text-[30px] [&>h2]:font-extrabold [&>h2]:text-gray-950 [&>h2]:mt-3.5 [&>h2]:mb-6 [&>h2]:font-semibold [&>h2]:tracking-[-0.92px] [&>h3]:text-[18px] [&>h3]:font-normal [&>h3]:text-gray-600 [&>h3]:mt-5" href="/">
                                        <h3>Cartoon Illustration</h3>
                                        <h2 className="">Playful Cartoon Characters: Traditional Games of Indonesian Independence Day!</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        
                        className="card-explore m-auto flex min-h-[534px] h-screen xl:w-[416px] lg:w-[416px] md:w-[405px] sm:w-[336px] max-sm:w-[330px] shrink-0 snap-start items-center justify-center text-3xl font-bold text-white gap-0"
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: 0 }}
                    >
                        <div className="w-full flex flex-col xl:mt-3.5 lg:mt-3.5 md:mt-3.5 sm:mt-[-136px] max-sm:mt-[-136px]">
                            <div className="w-full flex min-h-[220px] rounded-4xl overflow-hidden">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <div className="w-full">
                                        <Image
                                            src="/images/card-exploration-Yuksehat-allergy-app.jpg"
                                            width={424}
                                            height={294}
                                            alt="YukSehat Aplikasi Kesehatan with monitors allergen levels to improve home air quality and protect you from unexpected allergy triggers"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full">
                                <div className="w-full">
                                    <Link className="[&>h2]:text-[30px] [&>h2]:font-extrabold [&>h2]:text-gray-950 [&>h2]:mt-3.5 [&>h2]:mb-6 [&>h2]:font-semibold [&>h2]:tracking-[-0.92px] [&>h3]:text-[18px] [&>h3]:font-normal [&>h3]:text-gray-600 [&>h3]:mt-5" href="/">
                                        <h3>Mobile App Design</h3>
                                        <h2 className="">Building ErlanggExamSiswa: Icons Set, UI Components & Learning Illustrations</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        
                        className="card-explore m-auto flex min-h-[534px] h-screen xl:w-[416px] lg:w-[416px] md:w-[405px] sm:w-[336px] max-sm:w-[330px] shrink-0 snap-start items-center justify-center text-3xl font-bold text-white gap-0"
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: 0 }}
                    >
                        <div className="w-full flex flex-col xl:mt-3.5 lg:mt-3.5 md:mt-3.5 sm:mt-[-136px] max-sm:mt-[-136px]">
                            <div className="w-full flex min-h-[220px] rounded-4xl overflow-hidden">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <div className="w-full">
                                        <Image
                                            src="/images/card-exploration-Yuksehat-allergy-app.jpg"
                                            width={424}
                                            height={294}
                                            alt="YukSehat Aplikasi Kesehatan with monitors allergen levels to improve home air quality and protect you from unexpected allergy triggers"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full">
                                <div className="w-full">
                                    <Link className="[&>h2]:text-[30px] [&>h2]:font-extrabold [&>h2]:text-gray-950 [&>h2]:mt-3.5 [&>h2]:mb-6 [&>h2]:font-semibold [&>h2]:tracking-[-0.92px] [&>h3]:text-[18px] [&>h3]:font-normal [&>h3]:text-gray-600 [&>h3]:mt-5" href="/">
                                        <h3>Mobile App Design</h3>
                                        <h2 className="">Building a Collaborative Allergy Shield: How Yuksehat Lets Users Map Allergies & Share Relief"</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        
                        className="card-explore m-auto flex min-h-[534px] h-screen xl:w-[416px] lg:w-[416px] md:w-[405px] sm:w-[336px] max-sm:w-[330px] shrink-0 snap-start items-center justify-center text-3xl font-bold text-white gap-0"
                        initial={{ opacity: 1, scale: 1 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0, delay: 0 }}
                    >
                        <div className="w-full flex flex-col xl:mt-3.5 lg:mt-3.5 md:mt-3.5 sm:mt-[-136px] max-sm:mt-[-136px]">
                            <div className="w-full flex min-h-[220px] rounded-4xl overflow-hidden">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <div className="w-full">
                                        <Image
                                            src="/images/card-exploration-Yuksehat-allergy-app.jpg"
                                            width={424}
                                            height={294}
                                            alt="YukSehat Aplikasi Kesehatan with monitors allergen levels to improve home air quality and protect you from unexpected allergy triggers"
                                        />
                                    </div>
                                </Link>
                            </div>
                            <div className="w-full">
                                <div className="w-full">
                                    <Link className="[&>h2]:text-[30px] [&>h2]:font-extrabold [&>h2]:text-gray-950 [&>h2]:mt-3.5 [&>h2]:mb-6 [&>h2]:font-semibold [&>h2]:tracking-[-0.92px] [&>h3]:text-[18px] [&>h3]:font-normal [&>h3]:text-gray-600 [&>h3]:mt-5" href="/">
                                        <h3>Mobile App Design</h3>
                                        <h2 className="">Building a Collaborative Allergy Shield: How Yuksehat Lets Users Map Allergies & Share Relief"</h2>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </motion.div>                                                                                
                </motion.div>
            </div>
        </div>
    );
}
