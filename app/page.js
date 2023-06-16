import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import fetchWeather from "@/utils/WeatherApi";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <MainContent />
      </Main>
      <Footer />
    </>
  );
}
