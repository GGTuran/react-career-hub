/* eslint-disable no-unused-vars */
import { IoLocationOutline } from "react-icons/io5";
import { CiDollar } from "react-icons/ci";
import PropTypes from 'prop-types';

const Job = ({job}) => {
    const{logo, job_title, company_name, remote_or_onsite, location, job_type, salary, job_description, job_responsibility, educational_requirements, experience } = job;
    return (
        <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{}job_title</h2>
    <p>{company_name}</p>
    <p>{job_description}</p>
    <div>
        <button className='px-5 py-2 font-extrabold border rounded border-gray-400 text-gray-900 mr-4'>{remote_or_onsite}</button>
        <button className='px-5 py-2 font-extrabold border rounded border-gray-400  text-gray-900 mr-4'>{job_type}</button>
    </div>
    <div className="m-2 flex">
      <h2 className="flex mr-3"><IoLocationOutline className="text-2xl"></IoLocationOutline> {location}</h2>
      <h2 className="flex"> <CiDollar className="text-2xl"></CiDollar> {salary}</h2>
    </div>
    <div className="card-actions ">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>
</div>
    );
};

Job.propTypes ={
    job : PropTypes.array
}
export default Job;