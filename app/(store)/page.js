import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import fetchWeather from "@/utils/WeatherApi";

const Home = async ({ searchParams }) => {
  const { city, state, country } = searchParams;

  const weather =
    city && state && country && (await fetchWeather(city, state, country));
  return (
    <>
      <Header />
      <Main weather={weather}>
        <MainContent />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
