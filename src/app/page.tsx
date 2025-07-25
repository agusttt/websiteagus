import HelloWorld from "@/components/HelloWorld";
import HeroSection from "@/components/HeroSection";
import ShowcaseHome from "@/components/ShowcaseHome";
import Clients from "@/components/Clients";
import Experiences from "@/components/Experiences";
import Explorations from "@/components/Explorations";
import Testimonials from "@/components/Testimonials";

export default function Home() {
	return (
		<div className="">
			<HeroSection />
			<Experiences />
			<ShowcaseHome />
			<Explorations />
			<Clients />
			<Testimonials />
		</div>
	);
}
