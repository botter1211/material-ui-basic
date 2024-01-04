import * as React from "react";
// import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

// const bull = (
//   <Box
//     component="span"
//     sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
//   >
//     •
//   </Box>
// );

export default function JobCard({ job }) {
  const navigate = useNavigate();
  return (
    <Card
      sx={{ height: 300, position: "relative" }}
      onClick={() => navigate(`/job/${job.id}`)}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: 15, borderBottom: 1 }}
          color="text.secondary"
          gutterBottom
        >
          {job.title}
        </Typography>
        <Typography component="div" sx={{ color: "red", fontSize: 18 }}>
          {job.skills.join(", ")}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          City: {job.city}
        </Typography>
        <Typography variant="body2" sx={{ mb: 4 }}>
          {job.description}
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          sx={{
            mx: "auto",
            position: "absolute",
            bottom: 5,
            left: "50%",
          }}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
