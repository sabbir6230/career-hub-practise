const Jobs = ({ job }) => {
    const { logo, job_title, company_name, location, salary } = job;
    return (
        <div className="border p-10 rounded-lg">
            <img className="" src={logo} alt="" />
            <div className="space-y-4">
                <h2 className="text-xl font-bold  my-4">{job_title}</h2>
                <h3 className="text-gray-400 text-xl font-semibold">{company_name}</h3>

                <div>
                    <button className="mr-4 border text-blue-500 font-semibold border-blue-400 px-4 py-2 rounded">Remote</button>
                    <button className="mr-4 border text-blue-500 font-sem
                     border-blue-400 px-4 py-2 rounded">Full Time</button>
                </div>

                <div className="flex font-bold text-gray-500 gap-8">
                    <p>{location}</p>
                    <p>{salary}</p>
                </div>

                <button className="bg-blue-500 rounded-xl text-white font-semibold px-4 py-2">View Details</button>
            </div>
        </div>
    );
};

export default Jobs;