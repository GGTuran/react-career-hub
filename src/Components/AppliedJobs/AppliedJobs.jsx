import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../Utility/localstorage";


const AppliedJobs = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    const handleJobsFilther = filter =>{
        if(filter === 'all'){
            setDisplayJobs(appliedJobs);
        }
        else if (filter === 'remote'){
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Remote");
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite'){
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === "Onsite" );
            setDisplayJobs(onsiteJobs);
        }
    }

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
            setDisplayJobs(jobsApplied);

        }
         
    } , [])
    return (
        <div>
            <h2 className="text-2xl">Jobs i did apply:{appliedJobs.length}</h2>
            <details className="dropdown">
                <summary className="m-1 btn">Remote or Onsite</summary>
                <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
                <li onClick={() => handleJobsFilther("all")}><a>All</a></li>
                <li onClick={() => handleJobsFilther("remote")}><a>Remote</a></li>
                <li onClick={() => handleJobsFilther("onsite")}><a>Onsite</a></li>
                </ul>
            </details>
            <ul>
                {


                    displayJobs.map(job => <li key={job.id}>
                        <span>{job.job_title} for {job.company_name}</span> <span> with {job.salary}$ salary</span> <span>{job.remote_or_onsite}</span>
                    </li>)


                }
            </ul>
        </div>
    );
};

export default AppliedJobs;