import axios from "axios";
import dotenv from "dotenv";

const API_LINK = process.env.API_LINK;
const API_KEY = process.env.API_KEY;


axios.get(API_LINK, {
    params: {
        id: userID
    }
  })
    .then((response) =>{
        console.log(response);
    })
    .catch((error) =>{
        console.log(error)
    })
    .finally(() =>{
        console.log('x')
    });

