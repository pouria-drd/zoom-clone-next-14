"use client";

import Loader from "../Loader";
import EndCallButton from "../EndCallButton";

import { cn } from "@/lib/utils";
import { useState } from "react";
import { LayoutList, Users } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import {
    CallControls,
    CallingState,
    SpeakerLayout,
    CallStatsButton,
    useCallStateHooks,
    PaginatedGridLayout,
    CallParticipantsList,
} from "@stream-io/video-react-sdk";

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "../ui/dropdown-menu";

type CallLayoutType = "grid" | "speaker-left" | "speaker-right";

const MeetingRoom = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const isPersonalRoom = !!searchParams.get("personal");

    const { useCallCallingState } = useCallStateHooks();

    const [showParticipants, setShowParticipants] = useState<boolean>(false);
    const [layout, setLayout] = useState<CallLayoutType>("speaker-left");

    // for more detail about types of CallingState see: https://getstream.io/video/docs/react/ui-cookbook/ringing-call/#incoming-call-panel
    const callingState = useCallCallingState();

    if (callingState !== CallingState.JOINED) return <Loader />;

    const CallLayout = () => {
        switch (layout) {
            case "grid":
                return <PaginatedGridLayout />;
            case "speaker-right":
                return <SpeakerLayout participantsBarPosition="left" />;
            default:
                return <SpeakerLayout participantsBarPosition="right" />;
        }
    };

    return (
        <section
            className="relative overflow-hidden text-white
            pt-4 h-svh w-full">
            <div className="relative flex items-center justify-center size-full">
                <div className="flex items-center size-full max-w-[1000px]">
                    <CallLayout />
                </div>
                <div
                    className={cn("h-[calc(100vh-86px)] hidden ml-2", {
                        "show-block": showParticipants,
                    })}>
                    <CallParticipantsList
                        onClose={() => setShowParticipants(false)}
                    />
                </div>
            </div>

            {/* video layout and call controls */}
            <div className="fixed bottom-0 flex flex-wrap items-center justify-center gap-5 w-full">
                <CallControls onLeave={() => router.push(`/`)} />

                <DropdownMenu>
                    <div className="flex items-center">
                        <DropdownMenuTrigger className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]">
                            <LayoutList size={20} className="text-white" />
                        </DropdownMenuTrigger>
                    </div>
                    <DropdownMenuContent className="border-dark-1 bg-dark-1 text-white">
                        {["Grid", "Speaker-Left", "Speaker-Right"].map(
                            (item, index) => (
                                <div key={index}>
                                    <DropdownMenuItem
                                        className="cursor-pointer"
                                        onClick={() =>
                                            setLayout(
                                                item.toLowerCase() as CallLayoutType
                                            )
                                        }>
                                        {item}
                                    </DropdownMenuItem>
                                    <DropdownMenuSeparator className="border-dark-1" />
                                </div>
                            )
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
                <CallStatsButton />
                <button onClick={() => setShowParticipants((prev) => !prev)}>
                    <div className="cursor-pointer rounded-2xl bg-[#19232d] px-4 py-2 hover:bg-[#4c535b]  ">
                        <Users size={20} className="text-white" />
                    </div>
                </button>
                {!isPersonalRoom && <EndCallButton />}
            </div>
        </section>
    );
};

export default MeetingRoom;
