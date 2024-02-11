
const getStoredJobApplication = () =>{
    const storedJobApplication = localStorage.getItem('job-applications');
     if(storedJobApplication){
        return JSON.parse(storedJobApplication);
     }
     return[];
}






const saveJobApplication = id =>{

}

export { getStoredJobApplication , saveJobApplication }