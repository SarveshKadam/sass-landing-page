import Head from "next/head";
import Layout from "../components/Layout/index";
import Hero from "../components/Hero/index";
import Block from "../components/Block";
import Pricing from "../components/Pricing";
import HowTo from "../components/HowTo";
import Features from "../components/Features";
export default function Home() {
  return (
    <Layout>
      <div>
        <Hero />
      </div>
      <div className="bg-gray-100 mt-6 mb-6">
      <Features />
      </div>
      <div className="mt-6 mb-10">
        <HowTo />
      </div>
      <div className="bg-gray-100">
        <Pricing />
      </div>

      <div>
        <Block />
      </div>
    </Layout>
  );
}
