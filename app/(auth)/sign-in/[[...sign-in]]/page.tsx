import { SignIn } from "@clerk/nextjs";

function SigInPage() {
    return (
        <main className="flex items-center justify-center h-svh w-full">
            <SignIn />
        </main>
    );
}

export default SigInPage;
