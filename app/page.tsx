import Hero from "@/components/Hero";
import About from "@/components/About";
import AudaLogoIcon from "@/components/AudaLogo";

export default function Home() {
  return (
    <main className="flex justify-center flex-col items-center bg-black">
      <div>
        <AudaLogoIcon />
        <Hero />
      </div>
    </main>
  );
}
