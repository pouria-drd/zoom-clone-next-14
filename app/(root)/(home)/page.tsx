import MeetingList from "@/components/meeting/MeetingList";

function HomePage() {
    const now = new Date();

    const time = now.toLocaleTimeString("en-US", {
        hour12: false,
        hour: "2-digit",
        minute: "2-digit",
    });
    const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
        now
    );

    return (
        <section className="text-white flex flex-col gap-5 size-full">
            <div className="bg-hero bg-cover rounded-[20px] h-[303px] w-full">
                <div className="flex flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 h-full">
                    <h2 className="glassmorphism text-center text-base font-normal rounded py-2 max-w-[273px]">
                        Upcoming Meeting at: 12:30 PM
                    </h2>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-extrabold lg:text-7xl">
                            {time}
                        </h1>
                        <p className="text-lg font-medium text-sky-1 lg:text-2xl">
                            {date}
                        </p>
                    </div>
                </div>
            </div>

            <MeetingList />
        </section>
    );
}

export default HomePage;
