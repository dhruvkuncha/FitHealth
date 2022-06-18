import React from "react";
import { Typography, Stack, Button } from "@mui/material";
import BodyPartImage from "../assets/icons/body-part.png";
import LoremIpsum from "react-lorem-ipsum";

const Detail = ({ exerciseDetail }) => {

  
  if(exerciseDetail.length) return 'Loading...'
  

  return (
    <Stack
      gap="60px"
      sx={{ flexDirection: { lg: "row" }, p: "20px", alignItems: "center" }}
    >
      <img
        src={exerciseDetail.img_url}
        loading="lazy"
        className="detail-image"
      />
      <Stack sx={{ gap: { lg: "35px", xs: "20px" } }}>
        <Typography variant="h3" fontWeight="600">
          {exerciseDetail.sanskrit_name}
        </Typography>
        <Typography variant="h4" fontWeight="400">
          {exerciseDetail.english_name}
        </Typography>
        
          {/* <LoremIpsum /> */}
          {exerciseDetail && exerciseDetail["yoga_categories"]?.map((item) => (
              <Typography variant="h6" key={item.name}>
                {item.description}
                </Typography>

          ))}
        
        <Typography>
          {exerciseDetail && exerciseDetail["yoga_categories"]?.map((item) => (
            <Stack
              key={item.name}
              direction="row"
              gap="24px"
              alignItems="center"
            >
              <Button
                sx={{
                  background: "#fff2db",
                  borderRadius: "50%",
                  width: "100px",
                  height: "100px",
                  marginBottom: "20px",
                }}
              >
                <img
                  src={BodyPartImage}
                  style={{ width: "50px", height: "50px" }}
                />
              </Button>
              <Typography varient="h5" textTransform="capitalize">
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Detail;
