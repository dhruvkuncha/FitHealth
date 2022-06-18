import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise, bodyPart, type }) => {
  console.log("lol", exercise);

  return (
    <Link className="exercise-card" to={`/exercise/${exercise.id}`}>
      <img src={exercise.img_url} alt={exercise.sanskrit_name} loading="lazy" />
      <Stack direction="row">
        <Button
          sx={{
            ml: "21px",
            color: "#fff",
            background: "#ffa9a9",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
          {exercise.english_name}
        </Button>

        <Button
          sx={{
            ml: "21px",
            mr: "21px",
            color: "#fff",
            background: "#fcc757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
          }}
        >
        
          {(type===1) ?  exercise.yoga_categories[0].name : bodyPart}
        </Button>
      </Stack>
      <Typography
        ml="21px"
        color="#000"
        fontWeight="bold"
        mt="11px"
        pb="10px"
        textTransform="capitalize"
        fontSize="22px"
      >
        {exercise.sanskrit_name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
