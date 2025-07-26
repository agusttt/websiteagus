"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { GrInstagram } from "react-icons/gr";
import { PiDribbbleLogoBold } from "react-icons/pi";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
const Player = dynamic(
	() => import("@lottiefiles/react-lottie-player").then((mod) => mod.Player),
	{ ssr: false },
);

interface Props {}

function Footer(props: any) {
	const {} = props;
	return (
		<div className="relative w-full bg-white">
			<div className="absolute right-[-5%] bottom-[10%] w-[320px] [&>img]:max-w-full">
				<Image
					src="/images/bg-footer-agussusilo0893-product-designer-ui-ux-designer-website-designer.png"
					alt="bg footer agussusilo0893 product designer ui-ux designer website designer web developer freelance indonesia depok jawa-tengah"
					width={286}
					height={286}
				/>
			</div>
			<div className="absolute z-2 opacity-50 left-[-5%] top-[-24%] 2xl:w-[1280px] xl:w-[1080px] lg:w-[980px] md:w-[640px] sm:w-[360px] max-sm:w-[274px] [&>img]:max-w-full">
				<img src="/images/footer-bg-1.png" alt="footer agus susilo product designer UI/UX Designer Jakarta, Indonesia" />
			</div>
			<div className="wrapper relative z-4">
				<div className="flex flex-wrap max-sm:mx-[5px] sm:mx-[15px] md:mx-[15px] lg:-mx-[15px] xl:-mx-[15px] 2xl:-mx-[15px]">
					<div className="px-[15px] max-sm:w-full max-sm:py-[76px] sm:w-full sm:py-[76px] md:w-full md:py-[98px] lg:w-[60%] lg:py-[120px] xl:w-[60%] xl:py-[120px] 2xl:w-[62%] 2xl:py-[120px]">
						<div className="w-full [&>h2]:mb-1.5 [&>h2]:font-regular [&>h2]:tracking-[-1.24px] [&>h2]:last:mb-8 max-sm:[&>h2]:last:-mt-4 sm:[&>h2]:last:-mt-4 md:[&>h2]:last:mt-3.5 lg:[&>h2]:last:mt-3.5 xl:[&>h2]:last:mt-3.5 2xl:[&>h2]:last:mt-3.5">
							<h2 className="footerheading-2">Got an Idea to Realize?</h2>
						</div>
						<div className="w-full flex justify-between items-center">
							<div className="w-[54%] 2xl:[&>h3]:text-[78px] 2xl:[&>h3]:leading-[91px] xl:[&>h3]:text-[65px] xl:[&>h3]:leading-[67px] [&>h3]:tracking-[-1.32px] [&>h3]:font-semibold">
								<h3>Let’s make it</h3>
								<h3>happen</h3>
							</div>
							<div className="w-[46%]">
								<div className="flex justify-start items-center">
									<motion.div
										initial={{ opacity: 0, y: 14 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 2.8, ease: "easeOut" }}
										className="flex justify-start items-center"
									>
										<Player
											autoplay
											loop
											src="/lottie/Fire.json"
											className="w-[210px] h-[210px]"
										/>
									</motion.div>
								</div>
							</div>
						</div>
					</div>
					<div className="relative z-4 px-[15px] max-sm:w-full max-sm:py-[76px] sm:w-full sm:py-[76px] md:w-full md:py-[98px] lg:w-[36%] lg:py-[120px] xl:w-[36%] xl:py-[120px] 2xl:xl:w-[36%]">
						<div className="flex 2xl:w-full xl:w-full lg:w-full md:w-[64%] sm:w-full max-sm:w-full items-center justify-between">
							<div className="[&>h2]:text-[32px] [&>h2]:font-extrabold [&>h2]:text-gray-950 [&>h2]:last-of-type:text-[24px] [&>h2]:last-of-type:font-normal [&>h2]:last-of-type:text-gray-600 [&>h3]:mb-6 [&>h3]:text-[20px] [&>h3]:text-gray-500">
								<h2>Agus Susilo</h2>
								<h2>UI/UX Designer</h2>
							</div>
							<div className="relative [&::before]:absolute [&::before]:right-[4px] [&::before]:bottom-[10px] [&::before]:z-3 [&::before]:h-[18px] [&::before]:w-[18px] [&::before]:rounded-[9px] [&::before]:bg-green-500 [&::before]:content-['']">
								<div className="relative h-[98px] w-[98px] overflow-hidden rounded-[50px] bg-gradient-to-r from-[#498afe] to-[#ff43e9] [&>img]:absolute [&>img]:inset-x-0 [&>img]:bottom-[-24%] [&>img]:left-[-16%] [&>img]:max-w-[136%]">
									<Image
										src="/images/image-photo-agussusilo0893.png"
										width={132}
										height={132}
										alt="Agus Susilo Product Designer UI/UX Frontend Developer find on instagram agussusilo0893"
									/>
								</div>
							</div>
						</div>
						<div className="flex w-full max-sm:flex-col max-sm:items-start max-sm:justify-start sm:flex-col sm:items-start sm:justify-start md:flex-row md:items-center md:justify-start lg:flex-row lg:items-center lg:justify-between xl:flex-row xl:items-center xl:justify-between">
							<div className="max-sm:w-full sm:w-full md:w-auto md:mr-5 lg:w-auto xl:w-auto [&>h5]:text-[20px] [&>h5]:text-gray-700">
								<h5>Follow me on:</h5>
							</div>
							<div className="my-4 flex [&>ul>li]:mr-2 [&>ul>li:last-child]:mr-0">
								<ul className="flex">
									<li>
										<Link
											className="group transition-colors duration-500 ease-in-out hover:bg-[#ff0033] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md"
											href="/"
										>
											<div className="flex h-[45px] w-[45px] items-center justify-center rounded-[24.5px] border border-[2.5px] border-[#ff0033] bg-white p-2 transition-colors duration-500 ease-in-out hover:bg-[#ff0033] [&>svg]:max-w-full">
												<svg
													id="Layer_1"
													className="transition-colors duration-500 ease-in-out"
													data-name="Layer 1"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 26.84 18.51"
												>
													<path
														className="fill-[#ff0033] transition-colors duration-500 ease-in-out group-hover:!fill-white"
														d="M13.4,18.51s8.41,0,10.49-.56c1.17-.31,2.06-1.22,2.37-2.34.57-2.05.57-6.38.57-6.38,0,0,0-4.29-.57-6.33-.31-1.15-1.19-2.04-2.37-2.34-2.09-.56-10.49-.56-10.49-.56,0,0-8.39,0-10.46.56C1.78.87.88,1.76.55,2.91c-.55,2.04-.55,6.33-.55,6.33,0,0,0,4.32.55,6.38.33,1.12,1.23,2.03,2.39,2.34,2.08.56,10.46.56,10.46.56Z"
													/>
													<path
														className="fill-[#ffffff] transition-colors duration-500 ease-in-out group-hover:!fill-[#ff0033]"
														d="M17.58,9.25l-6.94-3.93v7.87l6.94-3.93Z"
													/>
												</svg>
											</div>
										</Link>
									</li>
									<li>
										<Link
											className="group transition-colors duration-500 ease-in-out hover:bg-[#0a66c2] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md"
											href="/"
										>
											<div className="flex h-[45px] w-[45px] items-center justify-center rounded-[24.5px] border border-[2.5px] border-[#0a66c2] bg-white p-2.5 transition-colors duration-500 ease-in-out hover:bg-[#0a66c2] [&>svg]:max-w-full">
												<svg
													id="Layer_1"
													data-name="Layer 1"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 25.68 24.55"
												>
													<g
														id="_7935ec95c421cee6d86eb22ecd125aef"
														data-name="7935ec95c421cee6d86eb22ecd125aef"
													>
														<path
															className="fill-[#0a66c2] transition-colors duration-500 ease-in-out group-hover:!fill-white"
															d="M5.83,24.55V7.99s-5.51,0-5.51,0v16.56s5.51,0,5.51,0h0ZM3.08,5.72c1.92,0,3.11-1.27,3.11-2.86C6.16,1.24,5,0,3.11,0,1.23,0,0,1.24,0,2.86s1.19,2.86,3.04,2.86h.04,0ZM8.88,24.55s.07-15.01,0-16.56h5.51s0,2.4,0,2.4h-.04c.72-1.13,2.03-2.79,5-2.79,3.62,0,6.34,2.37,6.34,7.46v9.5s-5.5,0-5.5,0v-8.86c0-2.23-.8-3.75-2.79-3.75-1.52,0-2.43,1.02-2.82,2.01-.15.35-.18.85-.18,1.34v9.25s-5.51,0-5.51,0h0Z"
														/>
													</g>
												</svg>
											</div>
										</Link>
									</li>
									<li>
										<Link
											className="group transition-colors duration-500 ease-in-out"
											href="/"
										>
											<div className="instagram-gradient relative flex h-[45px] w-[45px] items-center justify-center rounded-[24.5px] p-3 [&::before]:absolute [&::before]:inset-x-0 [&::before]:mx-auto [&::before]:h-[40px] [&::before]:w-[40px] [&::before]:rounded-[21.75px] [&::before]:bg-white [&::before]:text-center [&::before]:duration-500 [&::before]:content-[''] group-hover:[&::before]:opacity-0 group-hover:[&::before]:transition-opacity [&>svg]:max-w-full">
												<GrInstagram className="absolute inset-x-0 z-3 mx-auto text-center text-[24px] text-white opacity-0 duration-500 group-hover:opacity-100 group-hover:transition-opacity" />
												<Image
													className="absolute inset-x-0 z-4 mx-auto text-center opacity-100 duration-500 group-hover:opacity-0 group-hover:transition-opacity"
													src="/images/icon-instagram-color.png"
													width={24}
													height={24}
													alt="instagram agussusilo0893"
												/>
											</div>
										</Link>
									</li>
									<li>
										<Link
											className="group transition-colors duration-500 ease-in-out hover:bg-[#0a66c2] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md"
											href="/"
										>
											<div className="flex h-[45px] w-[45px] items-end justify-center rounded-[24.5px] border border-[2.5px] border-[#24292f] bg-white p-0.5 transition-colors duration-500 ease-in-out hover:bg-[#24292f] [&>svg]:w-[40px]">
												<svg
													version="1.1"
													className="relative bottom-[-7.10px]"
													id="Layer_1"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 50 50"
												>
													<path
														className="fill-[#24292f] transition-colors duration-500 ease-in-out group-hover:!fill-white"
														d="M38.5,6c-0.2-0.5-0.6-0.9-1.1-1l0,0l0,0l0,0l0,0l0,0c0,0,0,0-0.1,0c-0.1,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.5-0.1 c-0.4,0-0.9,0-1.5,0.1c-1,0.2-2.3,0.7-4,1.8C31.1,6.8,31,6.9,30.9,7c-0.1,0-0.2-0.1-0.3-0.1c-3-0.7-6.1-0.7-9.1,0 c-0.1,0-0.2,0.1-0.3,0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-1.6-1.1-3-1.6-4-1.8c-0.6-0.1-1.1-0.2-1.5-0.1c-0.2,0-0.4,0-0.5,0.1 c-0.1,0-0.1,0-0.2,0c0,0,0,0-0.1,0l0,0l0,0l0,0l0,0l0,0c-0.5,0.2-0.9,0.5-1.1,1c-0.8,1.8-1,3.9-0.6,5.8c0,0.1,0,0.2,0.1,0.3 c-0.1,0.1-0.2,0.2-0.2,0.3c-1.1,1.8-1.7,3.9-1.7,6c0,4.6,1.4,7.8,3.6,9.8c1.3,1.2,2.8,1.9,4.3,2.3c0.2,0.1,0.3,0.1,0.5,0.1 c0,0.1,0,0.2-0.1,0.3c-0.1,0.4-0.2,0.8-0.2,1.1c0,0,0,0.1,0,0.1l-0.1,1.4l0,2.1c0,0,0-2,0-2c-0.1,0-0.2,0-0.4,0.1 c-0.4,0-0.7,0-1.1-0.1c-0.4-0.1-0.7-0.3-1-0.5s-0.5-0.5-0.7-0.8l0,0c-0.5-0.9-1.2-1.6-2-2.1c-0.8-0.6-1.7-0.9-2.7-1.1 c-1-0.1-2,0.6-2.1,1.6c-0.1,1,0.6,2,1.6,2.1c0.4,0.1,0.8,0.2,1.1,0.4c0.3,0.2,0.6,0.5,0.8,0.9c0.4,0.7,1,1.4,1.6,1.9 c0.7,0.5,1.5,0.9,2.3,1.2c0.8,0.2,1.7,0.3,2.5,0.2c0,0.5,0,6.7,0,6.9c0.9,0.6,2.5,0.8,2.5,0.8l8.5,0l2.9-0.8v-11 c0-0.8,0-1.6-0.2-2.4c0-0.1-0.1-0.2-0.1-0.3c0.1,0,0.2-0.1,0.3-0.1c1.5-0.4,3.1-1.1,4.4-2.3c2.3-2,3.6-5.2,3.6-9.8 c0-2.2-0.6-4.3-1.7-6c-0.1-0.1-0.1-0.2-0.2-0.3c0-0.1,0-0.2,0.1-0.3C39.5,9.9,39.3,7.8,38.5,6z"
													/>
												</svg>
											</div>
										</Link>
									</li>
									<li>
										<Link
											className="group transition-colors duration-500 ease-in-out hover:bg-[#ec4989] hover:shadow-[0_1px_10px_rgba(151,164,175,.29)] hover:shadow-md"
											href="/"
										>
											<div className="group-transition-colors group-duration-500 group-ease-in-out flex h-[45px] w-[45px] items-center justify-center rounded-[24.5px] border border-[2.5px] border-[#ec4989] bg-white p-2 group-hover:bg-[#ec4989] [&>svg]:max-w-full">
												<PiDribbbleLogoBold className="group-transition-colors group-duration-500 group-ease-in-out text-[32px] text-[#ec4989] group-hover:text-white" />
											</div>
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className="w-full">
							<Link
								href="mailto:agussusilo0893@gmail.com"
								className="group relative flex items-center justify-center overflow-hidden"
							>
								<div className="mt-5 mb-3 w-[86%] [&>span]:text-gray-600 2xl:[&>span]:text-[20px] xl:[&>span]:text-[20px] md:[&>span]:text-[18px] sm:[&>span]:text-[18px] max-sm:[&>span]:text-[18px] [&>h3]:text-gray-800 2xl:[&>h3]:text-[23px] xl:[&>h3]:text-[23px] md:[&>h3]:text-[22px] sm:[&>h3]:text-[20px] max-sm:[&>h3]:text-[20px]">
									<span>Contact me via mail:</span>
									<h3>agussusilo0893@gmail.com</h3>
								</div>
								<div className="w-[14%]">-</div>
							</Link>
						</div>
						<div className="w-full mt-6">
							<div className="2xl:text-[22px] xl:text-[20px] lg:text-[20px] md:text-[19px] sm:text-[18px] max-sm:text-[17px] text-gray-600">
								<p>
									Seeking a design or some idea on product design? Feel free to
									reach out for an exciting collaboration!
								</p>
							</div>
						</div>
						<div className="w-full mt-6">
							<div className="w-auto">
								<Link
									href="/"
									className="group relative flex items-center justify-center overflow-hidden rounded-[40px] border-2 border-gray-50 bg-gradient-to-r from-[#498afe] to-[#ff43e9] 2xl:px-8.5 xl:px-8.5 lg:px-8.5 md:px-8.5 sm:px-8.5 max-sm:px-8.5 2xl:py-5 xl:py-5.5 lg:py-5.5 md:py-5 sm:py-5 max-sm:py-5 transition-all duration-500 hover:shadow-md max-sm:w-full sm:w-full md:w-[324px] lg:w-[324px] xl:w-[324px]"
								>
									<span className="relative z-10 mr-2 text-lg font-semibold text-gray-50 uppercase group-hover:text-white">
										Schedule a Free Call
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
					</div>
					<div className="w-full absolute bottom-[22%] [&>h2]:font-bold [&>h2]:border-gray-900 2xl:[&>h2]:text-[124px] xl:[&>h2]:text-[115px] lg:[&>h2]:text-[110px] md:[&>h2]:text-[100px] sm:[&>h2]:text-[94px] max-sm:[&>h2]:text-[80px]">
						<h2 className="hire-text-stroke ">HIRE ME HIRE ME</h2>
					</div>
					<div className="relative z-2 pt-4 flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col max-sm:flex-col justify-between items-center pb-10 max-sm:w-full sm:w-full md:w-full lg:w-full xl:w-full 2xl:xl:w-full">
						<div className="2xl:w-8/12 xl:w-8/12 lg:w-8/12 md:w-full sm:w-full max-sm:w-full [&>p>a]:hover:!font-regular text-center text-[20px] text-gray-600 [&>a]:transition-all [&>p>a]:!underline [&>p>a]:!underline-offset-1 [&>p>a]:duration-300 [&>p>a]:hover:bg-gradient-to-r [&>p>a]:hover:from-[#498afe] [&>p>a]:hover:to-[#ff43e9] [&>p>a]:hover:bg-clip-text [&>p>a]:hover:text-transparent [&>p>a]:hover:!underline [&>p>a]:hover:!underline-offset-1">
							<div className="w-full flex 2xl:justify-start xl:justify-start lg:justify-start md:justify-start sm:justify-start max-sm:justify-start">
								<p>
									&copy;&nbsp;&nbsp;Copyright{" "}
									<span className="font-semibold text-gray-700">
										© 2025 Copyright DSGN + CODE Agus Susilo. All rights
										reserved.
									</span>{" "}
								</p>
							</div>
						</div>
						<div className="2xl:w-4/12 xl:w-4/12 lg:w-4/12 md:w-full sm:w-full max-sm:w-full">
							<div className="w-full flex [&>p]:flex [&>p]:items-center 2xl:justify-end xl:justify-end lg:justify-end md:justify-start sm:justify-center max-sm:justify-center text-[20px] text-gray-600">
								<p>
									Made with {"  "}
									<span>
										<Image
											className="mx-1"
											src="/images/hearth.png"
											width={40}
											height={40}
											alt="Agus Susilo Product Designer UI/UX Frontend Developer find on instagram agussusilo0893"
										/>
									</span>
									{"  "}
									from Indonesia
									<span>
										{"  "}
										<Image
											className="mx-1"
											src="/images/indonesia-flag.png"
											width={40}
											height={40}
											alt="Agus Susilo Product Designer UI/UX Frontend Developer find on instagram agussusilo0893"
										/>
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
