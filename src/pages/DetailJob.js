import React from "react";
import { useParams } from "react-router-dom";
import jobs from "../jobs.json";
import { Box, Container, Typography } from "@mui/material";

function DetailJob() {
  const params = useParams();
  const jobId = params.id;
  const job = jobs.find((job) => job.id === jobId);
  const skills = (
    <Box component="span" sx={{ color: "red" }}>
      {job.skills.join(", ")}
    </Box>
  );
  if (!job) {
    return (
      <Container>
        <Typography variant="h6" marginTop={3} textAlign={"center"}>
          Job Not Found
        </Typography>
      </Container>
    );
  }
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: 5 }}>
      <Typography variant="h6" marginTop={3} textAlign={"center"}>
        {job.title}
      </Typography>
      <Box sx={{ fontSize: 18 }}>City: {job.city}</Box>
      <Box sx={{ fontSize: 18 }}>Posted Date: {job.postedDate}</Box>
      <Box sx={{ fontSize: 18 }}>
        Salary: {job.salaryLow} - {job.salaryHigh}
      </Box>
      <Box sx={{ fontSize: 18 }}>Years' Experience: {job.yrsXPExpected}</Box>
      <Box sx={{ fontSize: 18 }}>Description: {job.description}</Box>
      <Box sx={{ fontSize: 20 }}>Skills Required: {skills}</Box>
    </Container>
  );
}

export default DetailJob;
