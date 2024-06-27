import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";

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
const HomeLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
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
    );
};

export default HomeLayout;
