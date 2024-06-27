"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { avatarImages } from "@/constants";
import { useToast } from "../ui/use-toast";

interface MeetingCardProps {
    title: string;
    date: string;
    icon: string;
    isPreviousMeeting?: boolean;
    buttonIcon1?: string;
    buttonText?: string;
    handleClick: () => void;
    link: string;
}

const MeetingCard = (meetingCardProps: MeetingCardProps) => {
    const { toast } = useToast();

    return (
        <section
            className="bg-dark-1 flex flex-col justify-between rounded-[14px] 
            px-5 py-8 xl:max-w-[568px] min-h-[258px] w-full">
            <article className="flex flex-col gap-5">
                <Image
                    src={meetingCardProps.icon}
                    alt="upcoming"
                    width={28}
                    height={28}
                />
                <div className="flex justify-between">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl font-bold">
                            {meetingCardProps.title}
                        </h1>
                        <p className="text-base font-normal">
                            {meetingCardProps.date}
                        </p>
                    </div>
                </div>
            </article>
            <article className={cn("flex justify-center relative", {})}>
                <div className="relative flex w-full max-sm:hidden">
                    {avatarImages.map((img, index) => (
                        <Image
                            key={index}
                            src={img}
                            alt="attendees"
                            width={40}
                            height={40}
                            className={cn("rounded-full", {
                                absolute: index > 0,
                            })}
                            style={{ top: 0, left: index * 28 }}
                        />
                    ))}
                    <div className="flex-center absolute left-[136px] size-10 rounded-full border-[5px] border-dark-3 bg-dark-4">
                        +5
                    </div>
                </div>
                {!meetingCardProps.isPreviousMeeting && (
                    <div className="flex gap-2">
                        <Button
                            onClick={meetingCardProps.handleClick}
                            className="rounded bg-blue-1 px-6">
                            {meetingCardProps.buttonIcon1 && (
                                <Image
                                    src={meetingCardProps.buttonIcon1}
                                    alt="feature"
                                    width={20}
                                    height={20}
                                />
                            )}
                            &nbsp; {meetingCardProps.buttonText}
                        </Button>
                        <Button
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    meetingCardProps.link
                                );
                                toast({
                                    title: "Link Copied",
                                });
                            }}
                            className="bg-dark-4 px-6">
                            <Image
                                src="/icons/copy.svg"
                                alt="feature"
                                width={20}
                                height={20}
                            />
                            &nbsp; Copy Link
                        </Button>
                    </div>
                )}
            </article>
        </section>
    );
};

export default MeetingCard;
