import CallList from "@/components/meeting/CallList";

const PreviousPage = () => {
    return (
        <section className="text-white flex flex-col gap-10 size-full">
            <h1 className="text-3xl font-bold">Previous Meetings</h1>

            <CallList type="ended" />
        </section>
    );
};

export default PreviousPage;
