import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);

    useEffect( () =>{
        const storedJobIds = getStoredJobApplication();
        if(jobs.length > 0){
            // const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id))

            const jobsApplied = [];
            for(const id of storedJobIds){
                const job = jobs.find(job => job.id === id);
                if(job){
                    jobsApplied.push(job)
                }
            }
            // console.log(jobsApplied)
            setAppliedJobs(jobsApplied);

        }
         
    } , [])
    return (
        <div>
            <h2 className="text-2xl">Jobs i did apply:{appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">open or close</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li><a>Item 1</a></li>
                <li><a>Item 2</a></li>
                </ul>
            </details>
            <ul>
                {


                    appliedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} for {job.company_name}</span> <span> with {job.salary}$ salary</span> <span>{job.remote_or_onsite}</span>
                    </li>)


                }
            </ul>
        </div>
    );
};

export default AppliedJobs;