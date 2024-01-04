import React from "react";
import JobCard from "../components/JobCard";
import { Container, Grid, Pagination, Stack } from "@mui/material";

import jobs from "../jobs.json";
function HomePage() {
  return (
    <Container sx={{ mt: 2 }}>
      <>
        <Grid container spacing={2}>
          {jobs.slice(0, 5).map((job) => (
            <Grid key={job.id} item xs={12} sm={6} md={4} lg={3}>
              <JobCard job={job} />
            </Grid>
          ))}
        </Grid>
      </>
      <Stack
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Pagination count={10} />
      </Stack>
    </Container>
  );
}

export default HomePage;
