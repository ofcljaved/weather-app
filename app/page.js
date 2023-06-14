import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Main from "@/components/Main";
import MainContent from "@/components/MainContent";
import SearchDialog from "@/components/SearchDialog";

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <MainContent />
      </Main>
      <Footer />
      <SearchDialog />
    </>
  );
}
