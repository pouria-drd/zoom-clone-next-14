import type { Metadata } from "next";

import Navbar from "@/components/navbar/Navbar";
import Sidebar from "@/components/navbar/Sidebar";

export const metadata: Metadata = {
    title: "YOOM",
    description: "Video Calling app, created by Pouria Darandi",
    icons: {
        icon: "/icons/logo.svg",
    },
};

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
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
