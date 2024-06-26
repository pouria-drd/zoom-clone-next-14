"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useGetCallById } from "@/hooks/useGetCallById";
import { StreamCall, StreamTheme } from "@stream-io/video-react-sdk";

import Alert from "@/components/Alert";
import Loader from "@/components/Loader";
import MeetingRoom from "@/components/meeting/MeetingRoom";
import MeetingSetup from "@/components/meeting/MeetingSetup";

const MeetingPage = ({ params }: { params: { id: string } }) => {
    const { user, isLoaded } = useUser();
    const { call, isCallLoading } = useGetCallById(params.id);

    const [isSetupComplete, setIsSetupComplete] = useState<boolean>(false);

    if (!isLoaded || isCallLoading) return <Loader />;

    if (!call)
        return (
            <p className="text-center text-3xl font-bold text-white">
                Call Not Found
            </p>
        );

    const notAllowed =
        call.type === "invited" &&
        (!user || !call.state.members.find((m) => m.user.id === user.id));

    if (notAllowed)
        return <Alert title="You are not allowed to join this meeting" />;

    return (
        <main className="h-screen w-full">
            <StreamCall call={call}>
                <StreamTheme>
                    {!isSetupComplete ? (
                        <MeetingSetup setIsSetupComplete={setIsSetupComplete} />
                    ) : (
                        <MeetingRoom />
                    )}
                </StreamTheme>
            </StreamCall>
        </main>
    );
};

export default MeetingPage;
