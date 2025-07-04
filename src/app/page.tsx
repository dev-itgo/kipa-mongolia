import Header from "@/components/header";
import FixedBanner from "@/components/fixed";
import Footer from "@/components/footer";
import KeyVisual from "@/components/main/KeyVisual";
import AppForm from "@/components/main/AppForm";
// import MainTimer from "@/components/main/MainTimer";
import MainIntro from "@/components/main/MainIntro";
import MainPoints from "@/components/main/MainPoints";
import MainDoctors from "@/components/main/MainDoctors";
import MainFaq from "@/components/main/MainFaq";
import MainReviews from "@/components/main/MainReviews";

export default function Home() {
  return (
    <div className="pb-40 md:pb-24">
      <Header />
      <main className="">
        <KeyVisual />
        <div className="container-2xl mt-20 flex h-auto flex-col gap-10 xl:flex-row">
          <div className="flex-1 xl:max-w-[820px]">
            {/* <MainTimer /> */}
            <MainIntro />
            <MainPoints />
            <MainDoctors />
            <MainReviews />
            <MainFaq />
          </div>
          <div className="h-auto">
            <AppForm />
          </div>
        </div>
      </main>
      <Footer />
      <FixedBanner />
    </div>
  );
}
