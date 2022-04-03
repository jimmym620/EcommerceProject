import Head from "next/head";
import Link from "next/link";

export default function Home() {
    return (
        <div className>
            <Head>
                <title>The Clothing Store</title>
                <meta name="description" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <h1>This is the homepage</h1>
            </main>

            {/* NEW, sale, shirts, sport, shorts&trousers, shoes, accessories */}
        </div>
    );
}
