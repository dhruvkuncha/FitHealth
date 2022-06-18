import React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData, yogaOptions } from "../utils/fetchData";
import HorizontalScrollBar from "./HorizontalScrollBar";
import axios from "axios";

const SearchExercises = ({setExercises, bodyPart, setBodyPart}) => {
  const [search, setSearch] = useState("");
  const url = 'https://lightning-yoga-api.herokuapp.com/yoga_categories'
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        // "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        url
        // exerciseOptions
      );
      
      const arr = Object.values(bodyPartsData.items)
      const categoryList = []
      Object.keys(arr).map(key => categoryList.push(arr[key].name));
      setBodyParts(["all", ...categoryList]);
      //console.log('hi', exerciseData);
       
      
    }
    fetchExercisesData();
    
}, [])

   const handleSearch = async () => {
     if (search) {
      const exerciseData = await fetchData(
        'https://lightning-yoga-api.herokuapp.com/yoga_poses'
        
      );
      // const arr1 = Object.values(exerciseData.items)
      // const posesList = []
      // Object.keys(arr1).map(key => categoryList.push(arr1[key].name));

      //console.log(exerciseData.items[0].id);

      const searchedExercises = exerciseData.items.filter(
        (exercise) =>
        // console.log(exercise.english_name.toLowerCase().includes('boat'))
          exercise.sanskrit_name.toLowerCase().includes(search) ||
          exercise.english_name.toLowerCase().includes(search) 
          
      );
      setSearch(""); 
      setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Effective Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },

            justifyContent: "center",
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: "#FF2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: 0,
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{position: 'relative', width: '100%', p:'20px'}}>
        <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart}  />
        
      </Box>
    </Stack>
  );
};

export default SearchExercises;
