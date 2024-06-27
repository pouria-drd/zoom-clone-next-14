import CallList from "@/components/meeting/CallList";

const UpcomingPage = () => {
    return (
        <section className="text-white flex flex-col gap-10 size-full">
            <h1 className="text-3xl font-bold">UpcomingPage</h1>

            <CallList type="upcoming" />
        </section>
    );
};

export default UpcomingPage;
