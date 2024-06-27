import Head from "next/head";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "YOOM",
    description: "Video Calling app, created by Pouria Darandi",
    icons: {
        icon: "/icons/logo.svg",
        apple: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
            <ClerkProvider
                appearance={{
                    layout: {
                        logoImageUrl: "/icons/yoom-logo.svg",
                        socialButtonsVariant: "iconButton",
                    },
                    variables: {
                        colorText: "#fff",
                        colorPrimary: "#0e78f9",
                        colorBackground: "#1c1f2e",
                        colorInputBackground: "#252a41",
                        colorInputText: "#fff",
                    },
                }}>
                <body className={`${inter.className} bg-dark-2`}>
                    {children}
                    <Toaster />
                </body>
            </ClerkProvider>
        </html>
    );
}
