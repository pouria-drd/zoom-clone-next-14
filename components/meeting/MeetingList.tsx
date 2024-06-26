"use client";

import HomeShortcutCard from "../HomeShortcutCard";
import { useRouter } from "next/navigation";

const MeetingList = () => {
    const router = useRouter();

    return (
        <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
            <HomeShortcutCard
                img="/icons/add-meeting.svg"
                title="New Meeting"
                description="Start an instant meeting"
                // handleClick={() => setMeetingState("isInstantMeeting")}
            />
            <HomeShortcutCard
                img="/icons/join-meeting.svg"
                title="Join Meeting"
                description="via invitation link"
                className="bg-blue-1"
                // handleClick={() => setMeetingState("isJoiningMeeting")}
            />
            <HomeShortcutCard
                img="/icons/schedule.svg"
                title="Schedule Meeting"
                description="Plan your meeting"
                className="bg-purple-1"
                // handleClick={() => setMeetingState("isScheduleMeeting")}
            />
            <HomeShortcutCard
                img="/icons/recordings.svg"
                title="View Recordings"
                description="Meeting Recordings"
                className="bg-yellow-1"
                handleClick={() => router.push("/recordings")}
            />
        </section>
    );
};

export default MeetingList;
