// import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);

    const[dataLength, setDataLength] = useState(4);

    useEffect( () =>{
        fetch('jobs.json')
        .then(res=> res.json())
        .then(data => setJobs(data));
    } ,[])
 
    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Featured Jobs:{jobs.length} </h2>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6">
                {
                    jobs.slice(0, dataLength).map(job => <Job job={job} key={job.id}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length ? "hidden" : "text-center"}>
                <button 
                onClick={() => setDataLength(jobs.length)} className="btn  btn-ghost">Show All</button>
            </div>
        </div>
        
    );
};

export default FeaturedJobs;