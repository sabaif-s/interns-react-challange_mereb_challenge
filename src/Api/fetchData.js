import React,{useState,useEffect} from "react";
import axios from "axios";



export default function FetchedData() {
     const [fetched,setFetched]=useState([]);
     const [fetchingDataFinished,setFetchingDataFinished]=useState(false);

     const API="https://swapi.py4e.com/api/people/"
     useEffect(()=>{
        const fetchingData= async (api)=>{
            try{
                 const response=await axios.get(api);
                 console.log(response.data);
                 setFetched(response.data);
            }
            catch(error){
                if (error.response) {
                    if(error.response.status == 404){
                        console.log("invalid endpoint access");
                    }
                    console.error('Response error:', error.response.status, error.response.data);
                  } else if (error.request) {
                    console.error('Request error', error.request);
                  } else {
                    console.error('Error', error.message);
                  }
            }
            finally{
                          console.log("fetching Api Handled");
            }
        }
        
        
        
         
        fetchingData(API);
      },[]);
}
