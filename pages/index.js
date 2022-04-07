import Head from "next/head";
import Feature from "../components/Feature";
import Partner from "../components/Partner";
import Product from "../components/Product";
import Hero from "../components/Hero";
import Layout from "../components/Layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pyi Soe Thein</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Hero />
        <Feature />
        <Partner />
        <Product />
      </Layout>
    </>
  );
}
