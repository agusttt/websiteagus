import React from "react";
import Link from "next/link";
import Image from "next/image";
interface Props {}

function ShowcaseHome(props: Props) {
    const {} = props;
    return (
        <div className="w-full max-sm:py-[76px] sm:py-[76px] md:py-[98px] lg:py-[120px] xl:py-[120px] 2xl:py-[120px]">
            <div className="wrapper">
                <div className="flex flex-wrap max-sm:mx-[15px] sm:mx-[15px] md:mx-[15px] lg:-mx-[15px] xl:-mx-[15px] 2xl:-mx-[15px]">
                    <div className="w-full px-[15px]">
                        <div className="text-center leading-[54.5px] [&>h2]:mb-1.5 [&>h2]:mb-8 [&>h2]:text-[50px] [&>h2]:font-extrabold [&>h2]:tracking-[-0.24px] [&>h2]:text-gray-950">
                            <h2>Mutual Visions Realized</h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center max-sm:mx-[5px] sm:mx-[15px] md:mx-[15px] lg:-mx-[15px] xl:-mx-[15px]">
                    <div className="relative mt-4 mb-4 flex min-h-[286px] w-full flex-wrap items-center overflow-hidden rounded-4xl 2xl:px-[15px] xl:px-[15px] md:px-[0px] sm:px-[15px] max-sm:px-[15px] max-sm:py-3 sm:py-3 md:py-2.5 lg:py-1.5 xl:py-1.5">
                        <div className="flex w-full flex-wrap items-center rounded-4xl bg-[#eff4ff] max-sm:flex-col max-sm:pt-0 max-sm:pb-8.5 sm:flex-col sm:pt-0 sm:pb-8.5 md:flex-col md:pt-8.5 lg:flex-row lg:pt-9.5 lg:pb-9.5 xl:flex-row md:flex-row xl:pt-9.5 xl:pb-8.5 xl:pb-9.5">
                            <div className="z-3 rounded-tl-4xl rounded-bl-4xl bg-[#eff4ff] max-sm:order-2 max-sm:w-full max-sm:pr-[24px] max-sm:pl-[24px] sm:order-2 sm:w-full sm:pr-[24px] sm:pl-[24px] md:order-1 md:w-[100%] md:pr-[32px] md:pl-[32px] lg:order-1 lg:w-[44%] lg:pr-[30px] lg:pl-[36px] xl:order-1 xl:w-[44%] xl:pr-[30px] 2xl:xl:w-[44%]z-3 rounded-tl-4xl rounded-bl-4xl bg-[#eff4ff] max-sm:order-2 max-sm:w-full max-sm:pr-[24px] max-sm:pl-[24px] sm:order-2 sm:w-full sm:pr-[24px] sm:pl-[24px] md:order-1 md:w-[100%] md:pr-[24px] md:pl-[24px] lg:order-1 md:order-2 lg:w-[44%] lg:pr-[30px] lg:pl-[36px] xl:order-1 xl:w-[44%] xl:pr-[30px] 2xl:xl:w-[44%] md:mt-6.5">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <h2 className="showcaseheading-2">
                                        Visualisasi Real-Time Dua Warna
                                        Demokrasi di Pemilu Presiden 2019
                                    </h2>
                                    <p>
                                        Sebuah representasi visual dari &#10095;
                                        193 juta data pemilu presiden 2019 skala
                                        nasional yang menangkap arah pilihan
                                        rakyat Indonesia secara geospasial dan
                                        real-time
                                    </p>
                                </Link>
                                <div className="flex w-auto gap-7.5">
                                    <Link
                                        className="[&>h2]:leading-[33px] [&>h3]:mb-0 [&>h3]:text-[30px] [&>h3]:text-gray-950 [&>p]:mb-6 [&>p]:text-[20px]"
                                        href="/"
                                    >
                                        <h3>
                                            193M<span>+</span>
                                        </h3>
                                        <p>Voter Data</p>
                                    </Link>
                                    <Link
                                        className="[&>h2]:leading-[33px] [&>h3]:mb-0 [&>h3]:text-[30px] [&>h3]:text-gray-950 [&>p]:mb-6 [&>p]:text-[20px]"
                                        href="/"
                                    >
                                        <h3>100%</h3>
                                        <p>Live Visualized</p>
                                    </Link>
                                </div>
                                <Link
                                    href="/"
                                    className="group relative mb-1.5 flex items-center justify-center overflow-hidden rounded-[32px] border-2 border-solid border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] px-6 py-3.5 shadow-none transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:rounded-[32px] before:bg-gradient-to-r before:from-[rgba(32,79,240,1)] before:to-[rgba(227,22,98,1)] before:p-[2px] hover:border-[rgba(255,255,255,1)] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md max-sm:w-full sm:w-full md:w-[256px] lg:w-[256px] xl:w-[256px] [&::before]:content-[''] hover:[&::before]:z-2"
                                >
                                    <div className="flex w-auto items-center justify-between">
                                        <div className="">
                                            <span className="absolute inset-[2.5px] rounded-[32px] bg-gradient-to-r from-[#498afe] to-[#ff43e9] opacity-0 transition-opacity duration-500 group-hover:z-3 group-hover:opacity-100"></span>
                                            <span className="relative z-10 mr-1.5 text-lg font-semibold text-gray-50 uppercase transition-colors duration-500 group-hover:text-white">
                                                View Case Study
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
                            <div className="rounded-tl-3xl rounded-tr-3xl bg-[#eff4ff] max-sm:order-1 max-sm:w-full max-sm:pr-[0px] max-sm:pl-[0px] sm:order-1 sm:w-full sm:pr-[0px] sm:pl-[0px] md:w-[100%] md:pr-[32px] md:pl-[32px] lg:order-2 md:order-1 lg:w-[56%] lg:pr-[36px] lg:pl-[30px] xl:order-2 xl:w-[56%] xl:pr-[36px] xl:pl-[30px] 2xl:w-[56%]">
                                <div className="sm:rounded-br-0 sm:rounded-bl-0 max-sm:rounded-br-0 max-sm:rounded-bl-0 group w-full overflow-hidden bg-gradient-to-r from-[#E2E5E9] to-[#D1D5DB] max-sm:mb-8.5 max-sm:min-h-[180px] max-sm:rounded-tl-3xl max-sm:rounded-tr-3xl sm:mb-8.5 sm:min-h-[180px] sm:rounded-tl-3xl sm:rounded-tr-3xl md:mb-0 md:min-h-[214px] md:rounded-tl-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl lg:mb-0 lg:min-h-[342px] lg:rounded-tl-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-bl-3xl xl:mb-0 xl:min-h-[348px] xl:rounded-tl-3xl xl:rounded-tr-3xl xl:rounded-br-3xl xl:rounded-bl-3xl">
                                    <Link
                                        className="w-full [&>img]:max-w-full"
                                        href="/"
                                    >
                                        <Image
                                            src="/images/card-showcase-quick-count-pemilu-2019.jpg"
                                            alt="Visualisasi Real Time Dua Warna Demokrasi di Pemilu Presiden Indonesia 2019 Two Color Real Time Visualization of Democracy,  Dasboard Application Quick Count in the 2019 Indonesian Presidential Election by agussusilo0893 agus susilo ui/ux designer product"
                                            width={824}
                                            height={564}
                                            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-4 mb-4 flex min-h-[286px] w-full flex-wrap items-center overflow-hidden rounded-4xl 2xl:px-[15px] xl:px-[15px] md:px-[0px] sm:px-[15px] max-sm:px-[15px] max-sm:py-3 sm:py-3 md:py-2.5 lg:py-1.5 xl:py-1.5">
                        <div className="flex w-full flex-wrap items-center rounded-4xl bg-[#eff4ff] max-sm:flex-col max-sm:pt-0 max-sm:pb-8.5 sm:flex-col sm:pt-0 sm:pb-8.5 md:flex-col md:pt-8.5 lg:flex-row lg:pt-9.5 lg:pb-9.5 xl:flex-row xl:pt-9.5 xl:pb-8.5 xl:pb-9.5">
                            <div className="z-3 rounded-tl-4xl rounded-bl-4xl bg-[#eff4ff] max-sm:order-2 max-sm:w-full max-sm:pr-[24px] max-sm:pl-[24px] sm:order-2 sm:w-full sm:pr-[24px] sm:pl-[24px] md:order-1 md:w-[100%] md:pr-[32px] md:pl-[32px] lg:order-1 lg:w-[44%] lg:pr-[30px] lg:pl-[36px] xl:order-1 xl:w-[44%] xl:pr-[30px] 2xl:xl:w-[44%]z-3 rounded-tl-4xl rounded-bl-4xl bg-[#eff4ff] max-sm:order-2 max-sm:w-full max-sm:pr-[24px] max-sm:pl-[24px] sm:order-2 sm:w-full sm:pr-[24px] sm:pl-[24px] md:order-1 md:w-[100%] md:pr-[24px] md:pl-[24px] lg:order-1 md:order-2 lg:w-[44%] lg:pr-[30px] lg:pl-[36px] xl:order-1 xl:w-[44%] xl:pr-[30px] 2xl:xl:w-[44%] md:mt-6.5">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <h2 className="showcaseheading-2">
                                        Bagaimana Desain yang Ramah Menggerakkan
                                        Kepedulian bersama Dtpeduli
                                    </h2>
                                    <p>
                                        Transformasi digital sisi ramah design
                                        yang membangunkan niat baik ke aksi
                                        nyata saling membantu bersama dtpeduli
                                        LAZNAS lembaga penghimpunan dana untuk
                                        sosial
                                    </p>
                                </Link>
                                <div className="flex w-auto gap-7.5">
                                    <Link
                                        className="[&>h2]:leading-[33px] [&>h3]:mb-0 [&>h3]:text-[30px] [&>h3]:text-gray-950 [&>p]:mb-6 [&>p]:text-[20px]"
                                        href="/"
                                    >
                                        <h3>
                                            193<span>+</span>
                                        </h3>
                                        <p>Succes Campaign</p>
                                    </Link>
                                    <Link
                                        className="[&>h2]:leading-[33px] [&>h3]:mb-0 [&>h3]:text-[30px] [&>h3]:text-gray-950 [&>p]:mb-6 [&>p]:text-[20px]"
                                        href="/"
                                    >
                                        <h3>
                                            1K<span>+</span>
                                        </h3>
                                        <p>Transaction/ month</p>
                                    </Link>
                                </div>
                                <Link
                                    href="/"
                                    className="group relative mb-1.5 flex items-center justify-center overflow-hidden rounded-[32px] border-2 border-solid border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] px-6 py-3.5 shadow-none transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:rounded-[32px] before:bg-gradient-to-r before:from-[rgba(32,79,240,1)] before:to-[rgba(227,22,98,1)] before:p-[2px] hover:border-[rgba(255,255,255,1)] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md max-sm:w-full sm:w-full md:w-[256px] lg:w-[256px] xl:w-[256px] [&::before]:content-[''] hover:[&::before]:z-2"
                                >
                                    <div className="flex w-auto items-center justify-between">
                                        <div className="">
                                            <span className="absolute inset-[2.5px] rounded-[32px] bg-gradient-to-r from-[#498afe] to-[#ff43e9] opacity-0 transition-opacity duration-500 group-hover:z-3 group-hover:opacity-100"></span>
                                            <span className="relative z-10 mr-1.5 text-lg font-semibold text-gray-50 uppercase transition-colors duration-500 group-hover:text-white">
                                                View Case Study
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
                            <div className="rounded-tl-3xl rounded-tr-3xl bg-[#eff4ff] max-sm:order-1 max-sm:w-full max-sm:pr-[0px] max-sm:pl-[0px] sm:order-1 sm:w-full sm:pr-[0px] sm:pl-[0px] md:w-[100%] md:pr-[32px] md:pl-[32px] lg:order-2 md:order-1 lg:w-[56%] lg:pr-[36px] lg:pl-[30px] xl:order-2 xl:w-[56%] xl:pr-[36px] xl:pl-[30px] 2xl:w-[56%]">
                                <div className="sm:rounded-br-0 sm:rounded-bl-0 max-sm:rounded-br-0 max-sm:rounded-bl-0 group w-full overflow-hidden bg-gradient-to-r from-[#E2E5E9] to-[#D1D5DB] max-sm:mb-8.5 max-sm:min-h-[180px] max-sm:rounded-tl-3xl max-sm:rounded-tr-3xl sm:mb-8.5 sm:min-h-[180px] sm:rounded-tl-3xl sm:rounded-tr-3xl md:mb-0 md:min-h-[214px] md:rounded-tl-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl lg:mb-0 lg:min-h-[342px] lg:rounded-tl-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-bl-3xl xl:mb-0 xl:min-h-[348px] xl:rounded-tl-3xl xl:rounded-tr-3xl xl:rounded-br-3xl xl:rounded-bl-3xl">
                                    <Link
                                        className="w-full [&>img]:max-w-full"
                                        href="/"
                                    >
                                        <Image
                                            src="/images/card-showcase-laznas-dtpeduli.jpg"
                                            alt="Bagaimana Desain yang Ramah Menggerakkan Kepedulian bersama Dtpeduli - Lembaga Amil Zakat Nasional (LAZNAS) atau lembaga nirlaba milik masyarakat yang bergerak di bidang penghimpunan dan pendayagunaan dana zakat dan donasi infaq sedekah, How Friendly Design Drives Concern with Dtpeduli - National Zakat Collection Institution (LAZNAS) or a non-profit institution owned by the community engaged in the collection and utilization of zakat funds and infaq and alms donations by agussusilo0893 agus susilo ui/ux designer product"
                                            width={824}
                                            height={564}
                                            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative mt-4 mb-4 flex min-h-[286px] w-full flex-wrap items-center overflow-hidden rounded-4xl 2xl:px-[15px] xl:px-[15px] md:px-[0px] sm:px-[15px] max-sm:px-[15px] max-sm:py-3 sm:py-3 md:py-2.5 lg:py-1.5 xl:py-1.5">
                        <div className="flex w-full flex-wrap items-center rounded-4xl bg-[#eff4ff] max-sm:flex-col max-sm:pt-0 max-sm:pb-8.5 sm:flex-col sm:pt-0 sm:pb-8.5 md:flex-col md:pt-8.5 lg:flex-row lg:pt-9.5 lg:pb-9.5 xl:flex-row xl:pt-9.5 xl:pb-8.5 xl:pb-9.5">
                            <div className="z-3 rounded-tl-4xl rounded-bl-4xl bg-[#eff4ff] max-sm:order-2 max-sm:w-full max-sm:pr-[24px] max-sm:pl-[24px] sm:order-2 sm:w-full sm:pr-[24px] sm:pl-[24px] md:order-1 md:w-[100%] md:pr-[32px] md:pl-[32px] lg:order-1 lg:w-[44%] lg:pr-[30px] lg:pl-[36px] xl:order-1 xl:w-[44%] xl:pr-[30px] 2xl:xl:w-[44%]z-3 rounded-tl-4xl rounded-bl-4xl bg-[#eff4ff] max-sm:order-2 max-sm:w-full max-sm:pr-[24px] max-sm:pl-[24px] sm:order-2 sm:w-full sm:pr-[24px] sm:pl-[24px] md:order-1 md:w-[100%] md:pr-[24px] md:pl-[24px] lg:order-1 md:order-2 lg:w-[44%] lg:pr-[30px] lg:pl-[36px] xl:order-1 xl:w-[44%] xl:pr-[30px] 2xl:xl:w-[44%] md:mt-6.5">
                                <Link
                                    className="text-gray-950 [&>h2]:mb-6 [&>h2]:font-bold [&>h2]:tracking-[-0.92px] [&>h3]:text-[20px] [&>p]:mb-6 [&>p]:text-[20px] [&>p]:leading-[27px] [&>p]:text-gray-500"
                                    href="/"
                                >
                                    <h2 className="showcaseheading-2">
                                        Designing Trustworthy and Inclusive
                                        Financial Services for Pegadaian
                                        Indonesia BUMN (SOE)
                                    </h2>
                                    <p>
                                        mendorong stabilitas finansial melalui
                                        desain yang informatif dan terarah
                                        dengan berfokus menciptakan solusi
                                        keuangan yang mudah diakses terpercaya,
                                        dan mendukung goal nasabah dan bisnis
                                        perusahaan
                                    </p>
                                </Link>
                                <div className="flex w-auto gap-7.5">
                                    <Link
                                        className="[&>h2]:leading-[33px] [&>h3]:mb-0 [&>h3]:text-[30px] [&>h3]:text-gray-950 [&>p]:mb-6 [&>p]:text-[20px]"
                                        href="/"
                                    >
                                        <h3>
                                            193<span>+</span>
                                        </h3>
                                        <p>Succes Campaign</p>
                                    </Link>
                                    <Link
                                        className="[&>h2]:leading-[33px] [&>h3]:mb-0 [&>h3]:text-[30px] [&>h3]:text-gray-950 [&>p]:mb-6 [&>p]:text-[20px]"
                                        href="/"
                                    >
                                        <h3>
                                            1K<span>+</span>
                                        </h3>
                                        <p>Transaction/ month</p>
                                    </Link>
                                </div>
                                <Link
                                    href="/"
                                    className="group relative mb-1.5 flex items-center justify-center overflow-hidden rounded-[32px] border-2 border-solid border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] px-6 py-3.5 shadow-none transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:rounded-[32px] before:bg-gradient-to-r before:from-[rgba(32,79,240,1)] before:to-[rgba(227,22,98,1)] before:p-[2px] hover:border-[rgba(255,255,255,1)] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md max-sm:w-full sm:w-full md:w-[256px] lg:w-[256px] xl:w-[256px] [&::before]:content-[''] hover:[&::before]:z-2"
                                >
                                    <div className="flex w-auto items-center justify-between">
                                        <div className="">
                                            <span className="absolute inset-[2.5px] rounded-[32px] bg-gradient-to-r from-[#498afe] to-[#ff43e9] opacity-0 transition-opacity duration-500 group-hover:z-3 group-hover:opacity-100"></span>
                                            <span className="relative z-10 mr-1.5 text-lg font-semibold text-gray-50 uppercase transition-colors duration-500 group-hover:text-white">
                                                View Case Study
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
                            <div className="rounded-tl-3xl rounded-tr-3xl bg-[#eff4ff] max-sm:order-1 max-sm:w-full max-sm:pr-[0px] max-sm:pl-[0px] sm:order-1 sm:w-full sm:pr-[0px] sm:pl-[0px] md:w-[100%] md:pr-[32px] md:pl-[32px] lg:order-2 md:order-1 lg:w-[56%] lg:pr-[36px] lg:pl-[30px] xl:order-2 xl:w-[56%] xl:pr-[36px] xl:pl-[30px] 2xl:w-[56%]">
                                <div className="sm:rounded-br-0 sm:rounded-bl-0 max-sm:rounded-br-0 max-sm:rounded-bl-0 group w-full overflow-hidden bg-gradient-to-r from-[#E2E5E9] to-[#D1D5DB] max-sm:mb-8.5 max-sm:min-h-[180px] max-sm:rounded-tl-3xl max-sm:rounded-tr-3xl sm:mb-8.5 sm:min-h-[180px] sm:rounded-tl-3xl sm:rounded-tr-3xl md:mb-0 md:min-h-[214px] md:rounded-tl-3xl md:rounded-tr-3xl md:rounded-br-3xl md:rounded-bl-3xl lg:mb-0 lg:min-h-[342px] lg:rounded-tl-3xl lg:rounded-tr-3xl lg:rounded-br-3xl lg:rounded-bl-3xl xl:mb-0 xl:min-h-[348px] xl:rounded-tl-3xl xl:rounded-tr-3xl xl:rounded-br-3xl xl:rounded-bl-3xl">
                                    <Link
                                        className="w-full [&>img]:max-w-full"
                                        href="/"
                                    >
                                        <Image
                                            src="/images/card-showcase-pegadaian.jpg"
                                            alt="Bagaimana Desain yang Ramah Menggerakkan Kepedulian bersama Dtpeduli - Lembaga Amil Zakat Nasional (LAZNAS) atau lembaga nirlaba milik masyarakat yang bergerak di bidang penghimpunan dan pendayagunaan dana zakat dan donasi infaq sedekah, How Friendly Design Drives Concern with Dtpeduli - National Zakat Collection Institution (LAZNAS) or a non-profit institution owned by the community engaged in the collection and utilization of zakat funds and infaq and alms donations by agussusilo0893 agus susilo ui/ux designer product"
                                            width={824}
                                            height={564}
                                            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
                                        />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShowcaseHome;
