import FirstSection from "@/components/base/FirstSection";
import NavBar from "@/components/base/NavBar";
import SecondSection from "@/components/base/SecondSection";

export default function Home() {
  return (
    <div className="container  ">
      <NavBar />
      <FirstSection />
      <SecondSection />
    </div>
  );
}
