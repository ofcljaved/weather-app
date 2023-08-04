import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";

const Home = async ({ searchParams }) => {
  console.log(searchParams);
  return (
    <>
      <Header />
      <Main>
        <MainContent />
      </Main>
      <Footer />
    </>
  );
};

export default Home;
