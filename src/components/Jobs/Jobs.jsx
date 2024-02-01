import { jobsData } from "../../data";

const Jobs = () => {
  return (
    <section className="jobs-container">
      {jobsData.map((job) => {
        return (
          <article key={job.id} className="job-wrapper">
            <div className="job-info">
              <h4>{job.title}</h4>
              <p className="job-location">{job.location}</p>
            </div>
            <button className="btn" type="button">
              Apply
            </button>
          </article>
        );
      })}
    </section>
  );
};

export default Jobs;
