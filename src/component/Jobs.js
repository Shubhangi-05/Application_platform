import React , { useEffect, useState }  from 'react'
import { useSelector } from "react-redux";
import JobCard from "./JobCard";
import { Grid } from "@mui/material";
import "../assets/Jobs.css";
const Jobs = ({ jobs, filterCompany, filterRole, filterLocation, filterExperience }) => {
    const filterJobs = (job) => {
        // console.log(job);
        return (
            job.companyName.toLowerCase().includes(filterCompany.toLowerCase()) &&
          job.jobRole.toLowerCase().includes(filterRole.toLowerCase()) &&
          job.location.toLowerCase().includes(filterLocation.toLowerCase()) &&
          job.minExp?.toString().includes(filterExperience)
        );
      };
    
      return (
        <div>
          <Grid container spacing={8}>
            {jobs.filter(filterJobs).map((job, index) => (
              <Grid
                item
                key={`${job.jdUid}-${job.location}-${index}`}
                xs={12}
                sm={6}
                md={4}
              >
                <JobCard job={job} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    };

export default Jobs