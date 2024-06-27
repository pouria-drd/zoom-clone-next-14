import CallList from "@/components/meeting/CallList";

const RecordingsPage = () => {
    return (
        <section className="text-white flex flex-col gap-10 size-full">
            <h1 className="text-3xl font-bold">Recordings</h1>

            <CallList type="recordings" key="recordings054405" />
        </section>
    );
};

export default RecordingsPage;
