import React,{useState,useEffect} from 'react';
import FetchedData from '../Api/fetchData';
import imageOne from '../images/annie-spratt-g5DkG2ZF7ZY-unsplash.jpg';
import imageTwo from '../images/bharath-g-s-aLGiPJ4XRO4-unsplash.jpg';
import imageThree from '../images/josh-calabrese-XXpbdU_31Sg-unsplash.jpg';
import man from '../images/man.png';
import girl from '../images/girl.png';
import birthday from '../images/birthday_9281584.png';
import { use } from 'react';
const  LandingPage = () => {
    const {sendData,fetchingDataFinished}=FetchedData();

    useEffect(()=>{
           console.log(sendData);
           if(sendData.length == 0){
            console.log("no data sent");
           }
           else{
            console.log("data send successfully");
           }
    },[sendData]);
    useEffect(()=>{
         if(fetchingDataFinished){
            console.log("stop loading");
         }
         else{
            console.log("loading data");
         }
    },[]);
    return (
        <>
         {
            fetchingDataFinished && (
                <div className='w-full min-h-screen bg-gradient-to-b from-blue-400 to-blue-300 py-10 px-4' >
                     <div className='w-full bg-red-300 flex flex-col justify-center items-center gap-y-4' style={{height:"calc(100vh - 240px)"}} >
                                       <div className='w-full flex justify-center items-center gap-x-8' >
                                         <div>
                                            name
                                         </div>
                                         <div>
                                            sebaif muhammed
                                         </div>
                                       </div>
                                       <div className='w-full flex justify-center items-center gap-x-8' >
                                         <div>
                                            height
                                         </div>
                                         <div>
                                            1.70m
                                         </div>
                                       </div>
                                       <div className='w-full flex justify-center items-center gap-x-8' >
                                         <div>
                                            birth_year
                                         </div>
                                         <div>
                                            2022
                                         </div>
                                       </div>
                                       <div className='w-full flex justify-center items-center gap-x-8' >
                                         <div>
                                            detail
                                         </div>
                                          
                                       </div>
                     </div>
                </div>

            ) 
         }
         {
            !fetchingDataFinished && (
                <div>
                    loading
                </div>
            )
         }
         </>
    );
};

export default  LandingPage;