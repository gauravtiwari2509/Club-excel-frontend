import Navbar from "@/components/navbar"
import "@/styles/globals.css"
import "@/styles/Home.module.css"
import Footer from "@/components/footer"

export default function App({ Component, pageProps }) {
  return (
    <>
      {" "}
      <Navbar />
      <Component {...pageProps} />
      <div>
        <Footer />
      </div>
    </>
  )
}
