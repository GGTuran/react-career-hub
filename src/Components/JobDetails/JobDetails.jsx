import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            <h2>Job details of:{id}</h2>
            <div className="grid gap-4 md:grid-cols-4">
                <div className="border md:col-span-3">
                    <h2 className="text-4xl"> Details</h2>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Sidechick</h2>
                    <button className="btn btn-info w-full">Apply goddammit</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;