import type { Metadata } from "next";

import Head from "next/head";
import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";

export const metadata: Metadata = {
    title: "YOOM",
    description: "Video Calling app, created by Pouria Darandi",
    icons: {
        icon: "/icons/logo.svg",
        apple: "/favicon.png",
    },
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta name="robots" content="index, follow" />
                <meta property="og:type" content="website" />
                <meta
                    name="keywords"
                    content="video calling, YOOM, Pouria Darandi, video chat, online meetings"
                />

                <meta property="og:title" content="YOOM - Video Calling App" />
                <meta
                    property="og:description"
                    content="Experience high-quality video calls with YOOM, created by Pouria Darandi."
                />
                <meta property="og:image" content="/icons/logo.svg" />
                <meta property="og:url" content="https://yoom.liara.run" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="YOOM - Video Calling App" />
                <meta
                    name="twitter:description"
                    content="Experience high-quality video calls with YOOM, created by Pouria Darandi."
                />
                <meta name="twitter:image" content="/icons/logo.svg" />

                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="57x57"
                    href="/favicon.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="72x72"
                    href="/favicon.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="60x60"
                    href="/favicon.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="76x76"
                    href="/favicon.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="114x114"
                    href="/favicon.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="144x144"
                    href="/favicon.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="120x120"
                    href="/favicon.png"
                />
                <link
                    rel="apple-touch-icon-precomposed"
                    sizes="152x152"
                    href="/favicon.png"
                />
            </Head>
            <main className="relative">
                <Navbar />
                <div className="flex">
                    <Sidebar />
                    <section
                        className="flex flex-col min-h-svh flex-1 px-6 pb-6 pt-28 
                    max-md:pb-14 sm:px-14">
                        <div className="w-full">{children}</div>
                    </section>
                </div>
            </main>
        </>
    );
};

export default HomeLayout;
