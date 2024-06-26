"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const Sidebar = () => {
    const pathname = usePathname();

    return (
        <section
            className="bg-dark-1 text-white sticky left-0 top-0
            flex flex-col justify-between
            p-6 pt-28 max-sm:hidden h-screen w-fit lg:w-[264px]">
            <div className="flex flex-1 flex-col gap-6">
                {sidebarLinks.map((link) => {
                    const isActive =
                        pathname === link.route ||
                        pathname.startsWith(`${link.route}/`);

                    return (
                        <Link
                            href={link.route}
                            key={link.label}
                            className={cn(
                                "flex gap-4 items-center p-4 rounded-lg justify-start",
                                {
                                    "bg-blue-1": isActive,
                                }
                            )}>
                            <Image
                                className="size-auto"
                                src={link.imgUrl}
                                alt={link.label}
                                width={24}
                                height={24}
                            />
                            <p className="text-lg font-semibold max-lg:hidden">
                                {link.label}
                            </p>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};

export default Sidebar;
