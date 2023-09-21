import { useEffect, useState } from "react";
import Jobs from "../Job/Jobs";

const FeaturedJobs = () => {

    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, []);

    return (
        <div>
            <div className="text-center">
                <h3 className="text-5xl font-bold">Featured Jobs</h3>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className="container mx-auto grid grid-cols-2 gap-8 p-4">
                {
                    jobs.map(job => <Jobs key={job.id} job={job}></Jobs>)
                }
            </div>
        </div>
    );
};

export default FeaturedJobs;