import StreamVideoProvider from "@/providers/StreamVideoProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <main>
            <StreamVideoProvider>{children}</StreamVideoProvider>
        </main>
    );
};

export default RootLayout;
