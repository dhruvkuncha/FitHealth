import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/system";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useEffect } from "react";

const App = () => {
  // useEffect(() => {
  //   fetch(`https://lightning-yoga-api.herokuapp.com/yoga_categories`).then(
  //     (response) => response.json()).then(res => console.log(res))
    
  // });

  return (
    <Box width="400px" sx={{ width: { x1: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail />}></Route>
      </Routes>
    </Box>
  );
};

export default App;
