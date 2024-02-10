import { useLoaderData, useParams } from "react-router-dom";


const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} = useParams();
    const idInt = parseInt(id);
    const job = jobs.find(job => job.id === idInt);
    console.log(job);
    return (
        <div>
            
            <div className="grid gap-4 md:grid-cols-4">
                <div className="p-2 border md:col-span-3">
                <h2 className="text-3xl">More info of:{job.job_title}</h2>
                    <p className="text-4xl">{job.company_name} </p>
                    <p className="text-2xl p-2"> Job Type:{job.remote_or_onsite}</p>
                    <p className="text-2xl m-2 p-2">Description of the job:{job.job_description}</p>
                    <p className="text-2xl m-2 p-2">Responsibilites:{job.job_responsibility}</p>
                    <p className="text-2xl"></p>
                </div>
                <div className="border">
                    <h2 className="text-2xl">Details</h2>
                    <button className="btn btn-info w-full">Apply goddammit</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;