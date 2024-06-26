"use client";

import { useEffect, useState } from "react";
import {
    useCall,
    VideoPreview,
    DeviceSettings,
    useCallStateHooks,
} from "@stream-io/video-react-sdk";

import Alert from "../Alert";
import { Button } from "../ui/button";

interface MeetingSetupProps {
    setIsSetupComplete: (value: boolean) => void;
}

const MeetingSetup = ({ setIsSetupComplete }: MeetingSetupProps) => {
    // https://getstream.io/video/docs/react/guides/call-and-participant-state/#call-state
    const { useCallEndedAt, useCallStartsAt } = useCallStateHooks();

    const callEndedAt = useCallEndedAt();
    const callStartsAt = useCallStartsAt();

    const callTimeNotArrived =
        callStartsAt && new Date(callStartsAt) > new Date();

    const callHasEnded = !!callEndedAt;

    const call = useCall();

    if (!call) {
        throw new Error(
            "useStreamCall must be used within a StreamCall component."
        );
    }

    // https://getstream.io/video/docs/react/ui-cookbook/replacing-call-controls/
    const [isMicCamToggled, setIsMicCamToggled] = useState<boolean>(false);

    useEffect(() => {
        if (isMicCamToggled) {
            call.camera.disable();
            call.microphone.disable();
        } else {
            call.camera.enable();
            call.microphone.enable();
        }
    }, [isMicCamToggled, call.camera, call.microphone]);

    if (callTimeNotArrived)
        return (
            <Alert
                title={`Your Meeting has not started yet. It is scheduled for ${callStartsAt.toLocaleString()}`}
            />
        );

    if (callHasEnded)
        return (
            <Alert
                title="The call has been ended by the host"
                iconUrl="/icons/call-ended.svg"
            />
        );

    return (
        <div className="text-white flex flex-col items-center justify-center gap-3 h-screen w-full">
            <h1 className="text-center text-2xl font-bold">Setup</h1>
            <div className="max-w-sm sm:max-w-lg">
                <VideoPreview />
            </div>
            <div className="flex items-center justify-center gap-3 h-16">
                <label className="font-medium flex items-center justify-center gap-2">
                    <input
                        type="checkbox"
                        checked={isMicCamToggled}
                        onChange={(e) => setIsMicCamToggled(e.target.checked)}
                    />
                    Join with mic and camera off
                </label>
                <DeviceSettings />
            </div>
            <Button
                className="bg-green-500 rounded-md px-4 py-2.5"
                onClick={() => {
                    call.join();

                    setIsSetupComplete(true);
                }}>
                Join meeting
            </Button>
        </div>
    );
};

export default MeetingSetup;
