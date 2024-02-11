import { useLoaderData } from "react-router-dom";


const AppliedJobs = () => {
    const jobs = useLoaderData();
    return (
        <div>
            <h2>Jobs i did apply</h2>
        </div>
    );
};

export default AppliedJobs;