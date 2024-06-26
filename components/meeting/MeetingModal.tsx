"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogDescription,
} from "@/components/ui/dialog";

interface MeetingModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    className?: string;
    children?: React.ReactNode;
    handleClick?: () => void;
    buttonText?: string;
    instantMeeting?: boolean;
    image?: string;
    buttonClassName?: string;
    buttonIcon?: string;
}

const MeetingModal = (meetingModalProps: MeetingModalProps) => {
    return (
        <Dialog
            open={meetingModalProps.isOpen}
            onOpenChange={meetingModalProps.onClose}>
            <DialogTitle />
            <DialogDescription />
            <DialogContent
                className="glass bg-dark-1/90 text-white 
                flex flex-col gap-6 
                border-none px-6 py-9 w-full max-w-sm sm:max-w-[520px]">
                <div className="flex flex-col gap-6">
                    {meetingModalProps.image && (
                        <div className="flex justify-center">
                            <Image
                                src={meetingModalProps.image}
                                alt="checked"
                                width={72}
                                height={72}
                                loading="lazy"
                                className="size-auto"
                            />
                        </div>
                    )}
                    <h1
                        className={cn(
                            "text-3xl font-bold leading-[42px]",
                            meetingModalProps.className
                        )}>
                        {meetingModalProps.title}
                    </h1>
                    {meetingModalProps.children}
                    <Button
                        className={
                            "bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
                        }
                        onClick={meetingModalProps.handleClick}>
                        {meetingModalProps.buttonIcon && (
                            <Image
                                src={meetingModalProps.buttonIcon}
                                alt="button icon"
                                width={13}
                                height={13}
                                loading="lazy"
                            />
                        )}{" "}
                        &nbsp;
                        {meetingModalProps.buttonText || "Schedule Meeting"}
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default MeetingModal;
