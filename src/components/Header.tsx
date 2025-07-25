"use client";
import Lenis from "@studio-freight/lenis";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

function Header() {
    // Efek Lenis smooth scroll (tidak berubah)
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smooth: true,
            gestureDirection: "vertical",
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    // State disederhanakan, kita hanya butuh 'isSolid'
    const [isSolid, setIsSolid] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            // 'isSolid' akan menjadi true jika scroll lebih dari 110px
            setIsSolid(scrollTop > 110); 
        };

        window.addEventListener("scroll", handleScroll);

        // Cleanup
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []); // Dependency array kosong sudah benar

    return (
        // Kelas 'solidheader' ditambahkan berdasarkan state 'isSolid'
        <div className={`header ${isSolid ? "solidheader" : ""}`}>
            <div className="wrapper relative z-24">
                <div className="flex items-center justify-between 2xl:py-1.5 xl:py-1.5 lg:py-1.5 md:py-2.5 sm:py-2.5 max-sm:py-2.5 max-sm:px-3 sm:px-3 md:px-4.5 lg:px-1.5 xl:px-1.5 2xl:px-1.5">
                    <div className="w-[132px] [&>a>img]:max-w-[100%]">
                        <Link href="/">
                            <Image
                                src="/images/logo-g-color.png"
                                alt="Logo Header agussusilo0893"
                                width={174}
                                height={48}
                            />
                        </Link>
                    </div>
                    <div className="2xl:flex xl:flex lg:flex md:flex sm:hidden max-sm:hidden [&>ul>li>a]:font-Geist w-auto [&>ul]:flex [&>ul>li]:px-4.5 [&>ul>li>a]:text-[38px] [&>ul>li>a]:tracking-[-0.86px] [&>ul>li>a]:font-semibold [&>ul>li>a]:text-gray-950 [&>ul>li>a]:transition-all [&>ul>li>a]:duration-300 [&>ul>li>a]:hover:bg-gradient-to-r [&>ul>li>a]:hover:from-[#498afe] [&>ul>li>a]:hover:to-[#ff43e9] [&>ul>li>a]:hover:bg-clip-text [&>ul>li>a]:hover:font-semibold [&>ul>li>a]:hover:text-transparent">
                        <ul>
                            <li><Link href="/">about</Link></li>
                            <li><Link href="/">case study</Link></li>
                            <li><Link href="/">exploration</Link></li>
                            <li><Link href="/">resume</Link></li>
                        </ul>
                    </div>
                    <div className="w-auto 2xl:flex xl:flex lg:flex md:flex sm:hidden max-sm:hidden">
                        <Link
                            href="/"
                            className="group relative flex w-[178px] items-center justify-between overflow-hidden rounded-[32px] border-2 border-solid border-gray-800 px-6 py-3 shadow-none transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:rounded-[32px] before:bg-gradient-to-r before:from-[rgba(32,79,240,1)] before:to-[rgba(227,22,98,1)] before:p-[2px] hover:border-[rgba(0,0,0,0.01)] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md [&::before]:opacity-0 [&::before]:content-[''] hover:[&::before]:z-2 hover:[&::before]:opacity-100"
                        >
                            <span className="absolute inset-[2.5px] rounded-[32px] bg-gradient-to-r from-[#498afe] to-[#ff43e9] opacity-0 transition-opacity duration-500 group-hover:z-3 group-hover:opacity-100"></span>
                            <span className="relative z-10 mr-1.5 text-lg font-semibold text-gray-950 uppercase transition-colors duration-500 group-hover:text-white">
                                Let's Talk
                            </span>
                            <div className="relative z-10 flex h-[30px] w-[30px] items-center justify-center rounded-[15px] bg-gray-950 p-2 transition-colors duration-500 group-hover:bg-white">
                                <svg
                                    viewBox="0 0 448 512"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="max-w-full fill-white transition-colors duration-500 group-hover:fill-[#ec56ec]"
                                >
                                    <path d="M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"></path>
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
            {/* MODIFIKASI: Terapkan kelas 'is-visible' saat 'isSolid' bernilai true */}
            <div className={`liquidGlass-effect ${isSolid ? "is-visible" : ""}`}></div>
            <div className={`liquidGlass-tint ${isSolid ? "is-visible" : ""}`}></div>
            <div className={`liquidGlass-shine ${isSolid ? "is-visible" : ""}`}></div>
        </div>
    );
}

export default Header;