"use client";

import MeetingModal from "./MeetingModal";
import HomeShortcutCard from "../HomeShortcutCard";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useToast } from "../ui/use-toast";
import { useRouter } from "next/navigation";
import { Call, useStreamVideoClient } from "@stream-io/video-react-sdk";

const initialValues = {
    dateTime: new Date(),
    description: "",
    link: "",
};

const MeetingList = () => {
    const { user } = useUser();
    const { toast } = useToast();

    const router = useRouter();
    const client = useStreamVideoClient();

    const [callDetail, setCallDetail] = useState<Call>();
    const [values, setValues] = useState(initialValues);

    const [meetingState, setMeetingState] = useState<
        | "isScheduleMeeting"
        | "isJoiningMeeting"
        | "isInstantMeeting"
        | undefined
    >(undefined);

    const createMeeting = async () => {
        if (!client || !user) return;

        try {
            if (!values.dateTime) {
                toast({ title: "Please select a date and time" });
                return;
            }

            const id = crypto.randomUUID();
            const call = client.call("default", id);

            if (!call) throw new Error("Failed to create meeting");

            const startsAt =
                values.dateTime.toISOString() ||
                new Date(Date.now()).toISOString();

            const description = values.description || "Instant Meeting";

            await call.getOrCreate({
                data: {
                    starts_at: startsAt,
                    custom: {
                        description,
                    },
                },
            });

            setCallDetail(call);
            if (!values.description) {
                router.push(`/meeting/${call.id}`);
            }
            toast({
                title: "Meeting Created",
            });
        } catch (error: any) {
            console.log(error);
            toast({ title: "Failed to create Meeting" });
        }
    };

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <HomeShortcutCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                handleClick={() => setMeetingState("isInstantMeeting")}
            />
            <HomeShortcutCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="via invitation link"
                className="bg-blue-1"
                handleClick={() => setMeetingState("isJoiningMeeting")}
            />
            <HomeShortcutCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                className="bg-purple-1"
                handleClick={() => setMeetingState("isScheduleMeeting")}
            />
            <HomeShortcutCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Meeting Recordings"
                className="bg-yellow-1"
                handleClick={() => router.push("/recordings")}
            />

            <MeetingModal
                title="New Meeting"
                buttonText="Start Meeting"
                handleClick={createMeeting}
                isOpen={meetingState === "isInstantMeeting"}
                onClose={() => setMeetingState(undefined)}
            />
        </section>
    );
};

export default MeetingList;
