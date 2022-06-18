import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import {youtubeOptions, fetchData, } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideos";
import SimilarExercises from "../components/SimilarExercises";
import Footer from '../components/Footer'
import axios from "axios";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const { id } = useParams();
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [exercisePose, setExercisePose] = useState([])
  


  // useEffect(() => {

  //   window.scrollTo({ top: 0, behavior: 'smooth' });

  //   const exerciseDbUrl = "https://lightning-yoga-api.herokuapp.com";
      
     

  //     const exerciseDetailData = axios.get(
  //       `${exerciseDbUrl}/yoga_poses/${id}`).then(res => setExerciseDetail(res.data))
  //             .catch(err => console.log('err', err.data));


  //       const youtubeSearchUrl = "https://youtube-search-and-download.p.rapidapi.com";
        
  //       const exerciseVideoData = axios.get(``)
      
        useEffect(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
      
          const fetchExercisesData = async () => {
            const exerciseDbUrl = 'https://lightning-yoga-api.herokuapp.com';
            const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';
      
            const exerciseDetailData = await fetchData(`${exerciseDbUrl}/yoga_poses/${id}`);
            setExerciseDetail(exerciseDetailData);
      
            const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${exerciseDetailData.sanskrit_name}`, youtubeOptions);
            setExerciseVideos(exerciseVideosData.contents);
            
            
          };
      
          fetchExercisesData();
        }, [id]);

  
 if (!exerciseDetail) return <div>No Data</div>;
  
 console.log('sulli',exerciseDetail)
 
    

  return (
    <Box>
       <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos  exerciseVideos = {exerciseVideos} name={exerciseDetail.sanskrit_name}/>
      {/* <SimilarExercises exerciseDetatil={exerciseDetail}/>  */}
      <Footer/> 
    </Box>
  );
};

export default ExerciseDetail;
