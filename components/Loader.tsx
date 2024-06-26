import Image from "next/image";

const Loader = () => {
    return (
        <div className="flex-center h-screen w-full">
            <Image
                src="/icons/loading-circle.svg"
                alt="Loading..."
                width={48}
                height={48}
                className="size-12"
                priority={true}
            />
        </div>
    );
};

export default Loader;
