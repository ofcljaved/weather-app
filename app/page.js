import EarthCanvas from "@/components/EarthCanvas";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MainContent from "@/components/MainContent";

export default function Home() {
  return (
    <>
      <Header />
      <main className="grid grid-cols-2 w-4/5 justify-self-center">
        <MainContent />
        <EarthCanvas />
      </main>
      <Footer />
    </>
  );
}
