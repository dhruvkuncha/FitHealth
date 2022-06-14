import React from 'react'
import { useState } from 'react'
import { Box } from '@mui/system'
import Exercises from '../components/Exercises'
import SearchExercises from '../components/SearchExercises'
import HeroBanner from '../components/HeroBanner'
import Footer from '../components/Footer'

const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      <Exercises exercises={exercises} setExercises={setExercises} bodyPart={bodyPart}/>
      <Footer/>
    </Box>
  )
}

export default Home