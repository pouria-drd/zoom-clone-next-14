import { SignUp } from "@clerk/nextjs";

function SigUpPage() {
    return (
        <main className="flex items-center justify-center h-svh w-full">
            <SignUp />
        </main>
    );
}

export default SigUpPage;
