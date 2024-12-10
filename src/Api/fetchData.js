import React,{useState,useEffect} from "react";
import axios from "axios";
import { use } from "react";



export default function FetchedData() {
     
     const [fetchingDataFinished,setFetchingDataFinished]=useState(false);
     const [sendData,setSendData]=useState([]);

     const API="https://swapi.py4e.com/api/people/"
     useEffect(()=>{
        const fetchingData= async (api)=>{
            try{
                 const response=await axios.get(api);

                     if(response.data != undefined){
                        console.log(response.data);
                        setSendData(response.data.results);
                     }
                     else{
                        setSendData([]);
                     }
                 
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
                          setFetchingDataFinished(true);
            }
        }
        
        
        
         console.log("start fetching data");
        fetchingData(API);
      },[]);

      
        return {sendData,fetchingDataFinished}
      
     
}
