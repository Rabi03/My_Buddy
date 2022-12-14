import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import musicCover from "../../images/mcover.jpg";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import "./MusicSlide.css";

const MusicSlide = ({music}) => {
    return (
      
        <div className="container my-5">
            <p className="text-light mt-5 text-start">Recommended Music</p>
           <div className="d-flex justify-content-between mt-2">
          
            <Grid container spacing={10}>
           {music&&music.map(m=>(
              <Grid item xs={6} md={4}>
            <Card sx={{ display: "flex", Color: "Primary",width:'400px' }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <CardContent sx={{ flex: "1 0 auto" }}>
                <Typography component="div" variant="h5">
                  Live From Space
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  component="div"
                >
                  Mac Miller
                </Typography>
              </CardContent>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  pl: 1,
                  pb: 1,
                  color: "primary",
                }}
              >
                <IconButton aria-label="previous">
                  <SkipPreviousIcon /> : <SkipNextIcon />
                </IconButton>
                <IconButton aria-label="play/pause">
                  <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                </IconButton>
                <IconButton aria-label="next">
                  <SkipPreviousIcon /> : <SkipNextIcon />
                </IconButton>
              </Box>
            </Box>
            <CardMedia
              component="img"
              sx={{ width: m.snippet.thumbnails.high.width-100,height: m.snippet.thumbnails.high.height-100 }}
              image={m.snippet.thumbnails.high.url}
              alt="Live from space album cover"
            />
              </Card>
              </Grid>
           ))}
              </Grid>
         
    </div>
    </div>
  );
};

export default MusicSlide;
