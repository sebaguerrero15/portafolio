import Head from "next/head"
import Navbar from "./navbar"
import Footer from "./footer"


const Layout = ({children , title, description}) => {
  return (
    <>
    <Head>
        <title>{`S.Guerrero | ${title}`}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/r2d2icon.ico" />
    </Head>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default Layout