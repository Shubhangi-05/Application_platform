import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchJobs } from "../store/jobSlice";
import Filters from "../component/Filters";
import { Typography } from "@mui/material";

const Joblist = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.isLoading);

  useEffect(() => {
    dispatch(fetchJobs());
    return;
  }, [dispatch]);
  return (
    <div>
      <Typography
        variant="h4"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "20px",
          fontWeight: "bold",
          paddingTop: "15px",
        }}
      >
        Candidate Application Platform
      </Typography>
      <Filters />
    </div>
  );
};

export default Joblist;