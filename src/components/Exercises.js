import React, { useEffect, useState } from "react";
import { Pagination } from "@mui/material";
import { Box, Stack, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utils/fetchData";
import ExerciseCard from "./ExerciseCard";
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  
  console.log('hello', exercises);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(4);
  let type = 2; // 2 => all, 1 => category

  


  
  useEffect(() => {

    const fetchExercisesData = async () => {

      let exerciseData = [];
      if(bodyPart === 'all'){
        exerciseData = await fetchData(
          "https://lightning-yoga-api.herokuapp.com/yoga_poses"
          
        );
        
        type = 2;
        setExercises(exerciseData.items);
        //console.log('fuck', exerciseData)
       
      } else{
        exerciseData = await fetchData(
          `https://lightning-yoga-api.herokuapp.com/yoga_categories?yoga_category_name=${bodyPart}`
          );
          type = 1;
          setExercises(exerciseData.items[0].yoga_poses)
          //console.log('fcuk', exerciseData)
          
      }
      
      

    }
    fetchExercisesData();

    }, [bodyPart])

    // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

    console.log('e', currentExercises)

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Typography variant="h3" mb="46px">
        Showing Results
      </Typography>
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        
        {currentExercises.map((exercise, index) => (
          <ExerciseCard key={index} exercise={exercise} bodyPart={bodyPart} type={type}/>
          
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exercises.length > 4 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
