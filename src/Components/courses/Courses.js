import { Grid } from '@mui/material'
import React, { useState,useEffect } from 'react'
import Course from './Course'
import logo from '../../logo192.png';
import { Container } from '@mui/system';
import axios from 'axios';
import base_url from '../../api/baseUrl';


const data1 = [
    { courseId: 1, courseName: "Java core", courseDescription: "Learn java core concepts with ease" },
    { courseId: 2, courseName: "React js", courseDescription: "Most awaited course is here.." },
    { courseId: 3, courseName: "Java EE", courseDescription: "Get Ready for industry " },
    { courseId: 4, courseName: "Employee skill development", courseDescription: "How to act in an industry you will all get to know and much more" },
]


const Courses = () => {

    const [data, setdata] = useState(data1);
    useEffect(() => {
        getCourses();
          }, [])
    
    const getCourses=async()=>{
        try{
        let response=await  axios.get(`${base_url}/courses`);
         setdata(response.data);
        console.log(response);

        }catch(e){
            console.log(e);
        }
    }

    return (

        data.length > 0 ?

            <>
                <Container>
                    <Grid container spacing={1} justifyContent="space-around">
                        {data.map((e, index) => (
                            <Grid key={e.courseId} item xs={12} sm={6} md={4} sx={{ display: "flex", justifyContent: "center" }}>
                                <Course {...e} logo={logo} />
                            </Grid>
                        ))}
                    </Grid>
                </Container>

            </> : <h1>No Course Found</h1>

    )
}

export default Courses;