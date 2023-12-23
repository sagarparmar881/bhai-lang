import Head from "next/head";

import Code from "../components/Code";
import Documentation from "../components/Documentation";
import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Docs() {
  return (
    <div className="bg-background">
      <Head>
        <title>Gujjulang - Ek gujju-gheli programming ni bhasha.</title>
        <meta property="og:title" content="Gujjulang - Ek gujju-gheli programming ni bhasha" key="title" />
        <meta property="og:type" content="website" key="type" />
        <meta property="og:url" content="https://bhailang.js.org" key="url" />
        <meta property="og:description" content="Gujjulang ek gujju-gheli programming ni bhasha, majak par aadharit, Typescript ma banaveli. Aniket Singh ane Rishabh Tripathi taraf thi." key="description" />
        <meta name="description" content="Gujjulang ek gujju-gheli programming ni bhasha, majak par aadharit, Typescript ma banaveli. Aniket Singh ane Rishabh Tripathi taraf thi." />
        <meta property="og:site_name" content="Gujjulang Documentation" key="siteName" />
      </Head>
      <Header />
      <Code />
      <Documentation />
      <Footer />
    </div>
  );
}

