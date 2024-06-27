"use client";

import MeetingModal from "./MeetingModal";
import ReactDatePicker from "react-datepicker";
import HomeShortcutCard from "../HomeShortcutCard";

import { useState } from "react";
import { Input } from "../ui/input";
import { useUser } from "@clerk/nextjs";
import { Textarea } from "../ui/textarea";
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

    const meetingLink = `${process.env.NEXT_PUBLIC_BASE_URL}/meeting/${callDetail?.id}`;

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

            {!callDetail ? (
                <MeetingModal
                    title="Create Meeting"
                    handleClick={createMeeting}
                    isOpen={meetingState === "isScheduleMeeting"}
                    onClose={() => setMeetingState(undefined)}>
                    <div className="flex flex-col gap-2.5">
                        <label className="text-base font-normal leading-[22px] text-sky-2">
                            Add a description
                        </label>
                        <Textarea
                            className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0 resize-none"
                            onChange={(e) =>
                                setValues({
                                    ...values,
                                    description: e.target.value,
                                })
                            }
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2.5">
                        <label className="text-base font-normal leading-[22.4px] text-sky-2">
                            Select Date and Time
                        </label>
                        <ReactDatePicker
                            selected={values.dateTime}
                            onChange={(date) =>
                                setValues({ ...values, dateTime: date! })
                            }
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="MMMM d, yyyy h:mm aa"
                            className="w-full rounded bg-dark-3 p-2 focus:outline-none"
                        />
                    </div>
                </MeetingModal>
            ) : (
                <MeetingModal
                    className="text-center"
                    title="Meeting Created"
                    isOpen={meetingState === "isScheduleMeeting"}
                    onClose={() => setMeetingState(undefined)}
                    handleClick={() => {
                        navigator.clipboard.writeText(meetingLink);
                        toast({ title: "Link Copied" });
                    }}
                    image="/icons/checked.svg"
                    buttonIcon="/icons/copy.svg"
                    buttonText="Copy Meeting Link"
                />
            )}

            <MeetingModal
                title="New Meeting"
                buttonText="Start Meeting"
                handleClick={createMeeting}
                isOpen={meetingState === "isInstantMeeting"}
                onClose={() => setMeetingState(undefined)}>
                Start an instant meeting
            </MeetingModal>

            <MeetingModal
                isOpen={meetingState === "isJoiningMeeting"}
                onClose={() => setMeetingState(undefined)}
                title="Type the link here"
                buttonText="Join Meeting"
                handleClick={() => router.push(values.link)}>
                <Input
                    placeholder="Meeting link"
                    onChange={(e) =>
                        setValues({ ...values, link: e.target.value })
                    }
                    className="border-none bg-dark-3 focus-visible:ring-0 focus-visible:ring-offset-0"
                />
            </MeetingModal>
        </section>
    );
};

export default MeetingList;
