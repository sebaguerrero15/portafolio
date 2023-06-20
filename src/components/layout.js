import Head from "next/head"
import Navbar from "./navbar"
import Footer from "./footer"


const Layout = ({children , title, description}) => {
  return (
    <>
    <Head>
        <title>{`S.Guerrero | ${title}`}</title>
        <meta name="description" content={description} />
    </Head>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default Layout