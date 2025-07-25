"use client";
// PERUBAHAN: Hapus Framer Motion, kembali ke React dasar
import React from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";

// Komponen ItemSlider diganti dengan komponen ListItem
// agar lebih semantik dengan tag <li>
function LogoListItem({ src }: { src: string }) {
  return (
    // flex-shrink-0 mencegah logo menyusut
    <div className="!flex flex-shrink-0 items-center justify-center h-[76px] w-auto mx-8 px-4 py-2 bg-transparent rounded-lg">
      <Image
        src={src}
        alt={`Logo Klien`}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: "auto", height: "100%" }}
        className="object-contain"
      />
    </div>
  );
}

function Clients() {
  const logos = [
    "/images/logo_yappika.png",
    "/images/logo-indikator-black.png",
    "/images/logo-main-prakarsa.png",
    "/images/logo_pegadaian_indonesia.png",
    "/images/KLOGOBLUERED.png",
    "/images/logo-bukusekolahku.png",
    "/images/logoh_baywalkmall.png",
    "/images/logo_mcci.png",
    "/images/logo-sabtacular.png",
    "/images/dtpeduli-colorized.png",
    "/images/emporium-pluit.png",
    "/images/erlanggaexam-logo-small.png",
    "/images/indonesiaRe.png",
    "/images/fastrac.png",
    "/images/play-10.png",
    "/images/Daemeter_Logo.png",
    "/images/logo-erlangga-png-resources-blue.png",
    "/images/mfi-logo-blue.png",
    "/images/biofin.png",
    "/images/naturalfarm.png",
  ];


  return (
    <>
      <style jsx global>{`

      `}</style>

      <div className="flex 2xl:h-[calc(100vh-76px)] xl:h-[calc(100vh-76px)] lg:h-[calc(100vh-76px)] md:h-auto sm:h-auto max-sm:h-auto w-full items-center">
        <div className="wrapper max-sm:overflow-hidden w-full">
          <div className="flex flex-wrap max-sm:mx-[15px] sm:mx-[15px] md:mx-[15px] lg:-mx-[15px] xl:-mx-[15px] 2xl:-mx-[15px]">
            {/* Bagian Atas dengan Statistik (tidak diubah) */}
            <div className="relative flex flex-wrap w-full justify-center gap-10">
              <div className="gradient absolute top-[6%] left-[2.64%] bg-[linear-gradient(hsl(222,84%,60%),hsl(164,79%,71%))]"></div>
              <div className="relative my-4 min-h-[114px] 2xl:w-[276px] xl:w-[276px] lg:w-[276px] md:w-6/12 sm:w-full max-sm:w-full overflow-hidden rounded-3xl border border-gray-200 bg-transparent px-[20px] py-[20px] shadow-[0_6px_6px_rgba(0,0,0,0.2),_0_0_20px_rgba(0,0,0,0.1)]">
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>
                <div className="glass-content">
                  <div className="flex justify-between">
                    <div className="mr-2.5 flex h-[86px] w-[86px] items-center justify-center rounded-2xl [&>img]:max-w-full">
                      <Image src="/images/icon-milestone.png" alt="Icon Milestone" width={74} height={74} />
                    </div>
                    <div className="leading-[51.5px] [&>h3]:mb-0 [&>h3]:text-[50px] [&>h3]:font-extrabold [&>h4]:text-[25px] [&>h4]:leading-[24px] [&>h4]:font-medium [&>h4]:tracking-[5.64px] [&>h4]:text-gray-600">
                      <h3>10<span>+</span></h3>
                      <h4>Years</h4>
                    </div>
                  </div>
                  <div className="relative -mt-4 flex [&>h3]:text-[25px] [&>h3]:leading-[24px] [&>h3]:font-medium [&>h3]:tracking-[0.76px] [&>h3]:text-gray-600">
                    <h3>of experience</h3>
                  </div>
                </div>
              </div>
              <div className="relative my-4 min-h-[114px] w-[332px] overflow-hidden rounded-3xl border border-gray-200 bg-transparent px-[20px] py-[20px] shadow-[0_6px_6px_rgba(0,0,0,0.2),_0_0_20px_rgba(0,0,0,0.1)]">
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>
                <div className="glass-content">
                  <div className="flex items-center justify-between">
                    <div className="leading-[51.5px] [&>h3]:mb-0 [&>h3]:text-[50px] [&>h3]:font-extrabold [&>h4]:text-[25px] [&>h4]:leading-[24px] [&>h4]:font-medium [&>h4]:tracking-[5.64px] [&>h4]:text-gray-600">
                      <h3>14<span>+</span></h3>
                    </div>
                    <div className="ml-1.5 flex h-[86px] w-[86px] items-center justify-center rounded-2xl [&>img]:max-w-full">
                      <Image src="/images/icon-folder.png" alt="Icon Folder" width={74} height={74} />
                    </div>
                    <div className="flex h-[86px] w-[86px] items-center justify-center rounded-2xl [&>img]:max-w-full">
                      <Image src="/images/icon-sticky-2.png" alt="Icon Sticky" width={74} height={74} />
                    </div>
                  </div>
                  <div className="relative -mt-4 flex [&>h3]:text-[25px] [&>h3]:leading-[24px] [&>h3]:font-medium [&>h3]:tracking-[1.76px] [&>h3]:text-gray-600">
                    <h3>Websites Created</h3>
                  </div>
                </div>
              </div>
              <div className="relative my-4 min-h-[114px] 2xl:w-[276px] xl:w-[276px] lg:w-[276px] md:w-6/12 sm:w-full max-sm:w-full overflow-hidden rounded-3xl border border-gray-200 bg-transparent px-[20px] py-[20px] shadow-[0_6px_6px_rgba(0,0,0,0.2),_0_0_20px_rgba(0,0,0,0.1)]">
                <div className="glass-filter"></div>
                <div className="glass-overlay"></div>
                <div className="glass-specular"></div>
                <div className="glass-content">
                  <div className="flex justify-between">
                    <div className="mr-2.5 flex h-[86px] w-[86px] items-center justify-center rounded-2xl [&>img]:max-w-full">
                      <Image src="/images/icon-clients-users.png" alt="Icon Clients" width={74} height={74} />
                    </div>
                    <div className="flex w-auto items-center">
                      <div className="leading-[51.5px] [&>h3]:mb-0 [&>h3]:text-[50px] [&>h3]:font-extrabold [&>h4]:text-[25px] [&>h4]:leading-[24px] [&>h4]:font-medium [&>h4]:tracking-[5.64px] [&>h4]:text-gray-600">
                        <h3 className="relative pr-[30px]">5.0<FaStar className="absolute top-[32%] right-[-2px] text-2xl text-yellow-500" /></h3>
                        <h4>Proven</h4>
                      </div>
                    </div>
                  </div>
                  <div className="relative -mt-4 flex [&>h3]:text-[25px] [&>h3]:leading-[24px] [&>h3]:font-medium [&>h3]:tracking-[0.76px] [&>h3]:text-gray-600">
                    <h3>Client Satisfaction</h3>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bagian Judul (tidak diubah) */}
            <div className="relative z-3 flex w-full justify-center">
              <div className="2xl:w-3/4 xl:w-3/4 lg:w-3/4 md:w-full sm:w-full max-sm:w-full flex items-center py-4.5 max-sm:mx-[15px] sm:mx-[15px] md:mx-[15px] md:w-5/6 lg:-mx-[15px] xl:-mx-[15px] xl:w-3/4 2xl:-mx-[15px]">
                <div className="2xl:px-[15px] xl:px-[15px] lg:px-[15px] md:px-[10px] sm:px-0 max-sm:px-0 max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:w-full">
                  <div className="text-center 2xl:leading-[54.5px] xl:leading-[54.5px] lg:leading-[53px] md:leading-[50px] sm:leading-[42px] max-sm:leading-[41px] [&>h2]:mt-8 [&>h2]:mb-1.5 [&>h2]:mb-8 2xl:[&>h2]:text-[50px] xl:[&>h2]:text-[50px] lg:[&>h2]:text-[48px] md:[&>h2]:text-[48px] sm:[&>h2]:text-[32px] max-sm:[&>h2]:text-[31.64px] [&>h2]:font-extrabold [&>h2]:tracking-[-0.24px] [&>h2]:text-gray-950 max-sm:[&>h2]:px-0 sm:[&>h2]:px-0 md:[&>h2]:px-15 lg:[&>h2]:px-20 xl:[&>h2]:px-20 2xl:[&>h2]:px-24">
                    <h2>Partnerships That Go Beyond Trust Looks Like Harmony</h2>
                  </div>
                </div>
              </div>
            </div>

            {/* PERUBAHAN: Bagian Slider diganti dengan Marquee CSS dan struktur ul/li */}
            <div className="marquee-container mt-[60px]">
              <ul className="marquee-track">
                {/* Render list pertama */}
                {logos.map((logo, index) => (
                  <li key={`logo-a-${index}`}>
                    <LogoListItem src={logo} />
                  </li>
                ))}
                {/* Render list kedua (duplikat) untuk loop yang mulus */}
                {logos.map((logo, index) => (
                  <li key={`logo-b-${index}`} aria-hidden="true">
                    <LogoListItem src={logo} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Clients;
