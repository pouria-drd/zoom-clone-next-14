import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";

import "./globals.css";
import "react-datepicker/dist/react-datepicker.css";
import "@stream-io/video-react-sdk/dist/css/styles.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "YOOM",
    description: "Video Calling app, created by Pouria Darandi",
    icons: {
        icon: "/icons/logo.svg",
        apple: "/favicon.png",
    },
    robots: "index, follow",
    creator: "Pouria Darandi",
    publisher: "Pouria Darandi",
    authors: [{ name: "Pouria Darandi", url: "https://pouria-drd.liara.run" }],
    keywords: [
        "next js",
        "programming",
        "pouria darandi",

        "YOOM",
        "webinars",
        "video chat",
        "video calling",
        "livestreaming",
        "online classes",
        "online meetings",
        "web conferencing",
        "virtual meetings",
        "remote collaboration",
        "real-time communication",
        "secure video conferencing",
        "next-generation video calls",
    ],
    openGraph: {
        type: "website",
        siteName: "YOOM",
        url: "https://yoom.liara.run/",
        title: "YOOM",
        description: "YOOM - Video Calling app, created by Pouria Darandi",
        images: [
            {
                url: "https://yoom.liara.run/favicon.png",
                width: 256,
                height: 256,
                alt: "YOOM - Video Calling app, created by Pouria Darandi",
            },
        ],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
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
