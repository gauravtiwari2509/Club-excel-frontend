import Navbar from "@/components/navbar"
import "@/styles/globals.css"
import "@/styles/Home.module.css"
import Footer from "@/components/footer"
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import LoadingBar from "react-top-loading-bar";

export default function App({ Component, pageProps }) {
  const [progress, setProgress] = useState(0);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setProgress(40);
    });

    router.events.on('routeChangeComplete', () => {
      setProgress(100);
    });
  }, []);

  return (
    <>
                <LoadingBar color='violet' progress={progress} waitingTime={400} onLoaderFinished={() => setProgress(0)} />

      <Navbar />
      <Component {...pageProps} />
      <div>
        <Footer />
      </div>
    </>
  )
}
