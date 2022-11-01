import Head from "next/head";
import Headers from "../components/Headers";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Amazon India</title>
      </Head>

      {/* header  */}
      <Headers/>
    </div>
  );
}
