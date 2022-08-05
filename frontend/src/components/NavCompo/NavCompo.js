import React,{useState,useContext,useEffect} from "react";
import "./NavCompo.css";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Button from '@mui/material/Button'
import rootContext from '../../context/rootContext';

import axios from 'axios'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));



const NavCompo = () => {
  const {setMusic,setNews,setSearch,setAppState,music,news,state}=useContext(rootContext);
  const [command,setCommand]=useState('');
  useEffect(()=>{
    console.log(`music ${music} , News ${news} , state ${state}`)
  })
  
    const getMusicData=async(data)=>{
        const res=await axios.post('/api/music/artist/',{type:data})
            .then(res=>setMusic(res.data.videos))
    }
    const getTrackData=async(data)=>{
        const res=await axios.post('/api/music/track/',{type:data})
            .then(res=>setMusic(res.data.videos))
    }
    const getGenreData=async(data)=>{
        const res=await axios.post('/api/music/genre/',{type:data})
            .then(res=>setMusic(res.data.videos))
    }

    const getNews=async()=>{
        const res=await axios.get('/api/news/letest-news/')
            .then(res=>setNews(res.data.videos))
    }

    const getSearchResults=async(keyword)=>{
        const res=await axios.post('/api/news/letest-news/',{keyword:keyword})
            .then(res=>setSearch(res.data.videos))
    }

    const getroutePlanning=async(sou,des)=>{
        
        navigator.geolocation.getCurrentPosition(async(position) => {

        await axios({
            method: 'GET',
            url:`https://api.openrouteservice.org/v2/directions/driving-car?api_key=5b3ce3597851110001cf6248c53152a7fbfe4a74b8335837d2bc6e7a&start=${position.coords.latitude},${position.coords.latitude}&end=8.687872,49.420318`,
            headers: {
              'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png; charset=utf-8'
            }}, function (error, response, body) {
            console.log('Status:', response.statusCode);
            console.log('Headers:', JSON.stringify(response.headers));
            console.log('Response:', body)})
        })
    }

    

const handleSubmit=(e)=>{
  e.preventDefault()

  if (command === 'play music') {
    alert("Play Music")
    
}
if(command==="musicvideosartist"){
    setAppState(1.1)
    getMusicData('tahsan')
}
if(command==="musicvideostrack"){
    setAppState(1.2)
    getTrackData("amar jibon")
}
if(command==="musicvideosgenre"){
    setAppState(1.3)
    getGenreData('love')
}
if(command==="shownews"){
    setAppState(1.4)
    getNews()
}
if(command==='search'){
    setAppState(1.5)
    getSearchResults("find the power of 2")
}
if(command==='planning'){
    setAppState(1.6)
    getroutePlanning("45.3333","66.36363")
}
  

}


  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block"},marginRight:"30%" }}
            >
              Buddy
            </Typography>
            <form onSubmit={handleSubmit}>

            <Search align="center">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Say to search...."
                inputProps={{ "aria-label": "search" }}
                onChange={e=>setCommand(e.target.value)}
              />
                </Search>
            </form>
                      <Box
                      sx={{ marginLeft: "30%"}}>
                           
                      <Button color="inherit">Login</Button>
                      <Button color="inherit">Signin</Button>

                     </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default NavCompo;
