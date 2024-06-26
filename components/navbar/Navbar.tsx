import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import { SignedIn, UserButton } from "@clerk/nextjs";

const Navbar = () => {
    return (
        <nav
            className="bg-dark-1/90 glass flex-between fixed z-50 
             px-6 py-4 lg:pl-6 lg:pr-10 w-full">
            <Link href="/" className="flex items-center gap-1">
                <Image
                    src="/icons/logo.svg"
                    width={40}
                    height={40}
                    alt="yoom logo"
                    className="max-sm:size-10"
                    loading="lazy"
                />
                <p className="text-[26px] font-extrabold text-white max-sm:hidden">
                    YOOM
                </p>
            </Link>
            <div className="flex-between gap-5">
                <SignedIn>
                    <UserButton afterSignOutUrl="/sign-in" />
                </SignedIn>
                <MobileNav />
            </div>
        </nav>
    );
};

export default Navbar;
