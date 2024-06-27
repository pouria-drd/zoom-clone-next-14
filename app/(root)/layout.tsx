import type { Metadata } from "next";
import StreamVideoProvider from "@/providers/StreamVideoProvider";

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
                width: 64,
                height: 64,
                alt: "YOOM - Video Calling app, created by Pouria Darandi",
            },
            {
                url: "https://yoom.liara.run/favicon.png",
                width: 128,
                height: 128,
                alt: "YOOM - Video Calling app, created by Pouria Darandi",
            },
            {
                url: "https://yoom.liara.run/favicon.png",
                width: 144,
                height: 144,
                alt: "YOOM - Video Calling app, created by Pouria Darandi",
            },
            {
                url: "https://yoom.liara.run/favicon.png",
                width: 256,
                height: 256,
                alt: "YOOM - Video Calling app, created by Pouria Darandi",
            },
            {
                url: "https://yoom.liara.run/favicon.png",
                width: 512,
                height: 512,
                alt: "YOOM - Video Calling app, created by Pouria Darandi",
            },
        ],
    },
};
function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    );
}

export default RootLayout;
