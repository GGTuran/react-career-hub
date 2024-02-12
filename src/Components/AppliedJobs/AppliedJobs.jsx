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
            <ul>
                {


                    appliedJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} for {job.company_name}</span>
                    </li>)


                }
            </ul>
        </div>
    );
};

export default AppliedJobs;