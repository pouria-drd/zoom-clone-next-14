"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import {
    Sheet,
    SheetTitle,
    SheetClose,
    SheetContent,
    SheetTrigger,
    SheetDescription,
} from "@/components/ui/sheet";

const MobileNav = () => {
    const pathname = usePathname();

    return (
        <section className="w-full max-w-[264px]">
            <Sheet>
                <SheetTitle />
                <SheetDescription />
                <SheetTrigger asChild>
                    <Image
                        src="/icons/hamburger.svg"
                        width={36}
                        height={36}
                        alt="hamburger icon"
                        className="cursor-pointer sm:hidden size-9"
                        loading="lazy"
                    />
                </SheetTrigger>
                <SheetContent
                    side="left"
                    className="bg-dark-1/90 glass text-white border-none">
                    <Link href="/" className="flex items-center gap-1">
                        <Image
                            className="size-8"
                            src="/icons/logo.svg"
                            width={32}
                            height={32}
                            alt="yoom logo"
                            loading="lazy"
                        />
                        <p className="text-white text-[26px] font-extrabold">
                            YOOM
                        </p>
                    </Link>
                    <div className="flex flex-col justify-between overflow-y-auto h-[calc(100vh-72px)]">
                        <section className="text-white flex h-full flex-col gap-6 pt-16">
                            {sidebarLinks.map((link) => {
                                const isActive = pathname === link.route;

                                return (
                                    <SheetClose asChild key={link.route}>
                                        <Link
                                            href={link.route}
                                            key={link.label}
                                            className={cn(
                                                "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                                                {
                                                    "bg-blue-1": isActive,
                                                }
                                            )}>
                                            <Image
                                                className="size-5"
                                                src={link.imgUrl}
                                                alt={link.label}
                                                width={20}
                                                height={20}
                                                loading="lazy"
                                            />
                                            <p className="font-semibold">
                                                {link.label}
                                            </p>
                                        </Link>
                                    </SheetClose>
                                );
                            })}
                        </section>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
};

export default MobileNav;
