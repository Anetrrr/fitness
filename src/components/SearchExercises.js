import React, { useEffect, useState } from 'react'
import {Box, Button, Stack, TextField, Typography } from '@mui/material'
import Horizontalscrollbar from './Horizontalscrollbar'

import { exerciseOptions, fetchData } from '../utils/fetchData'

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
const [search, setSearch] = useState('');
const [bodyParts, setBodyParts] = useState([]);

useEffect(() => {
  const fetchExerciseData = async () =>{
    const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
    setBodyParts(['all', ...bodyPartsData]);
  }
  fetchExerciseData();
}, [])

const handleSearch = async () => {
  if(search){
    const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    const searchedExercises = excercisesData.filter((exercise) => {
      exercise.name.toLowerCase().includes(search) || exercise.target.toLowerCase().includes(search) || exercise.bodyPart.toLowerCase().includes(search) || exercise.equipment.toLowerCase().includes(search)
    });
    setSearch('');
    setExercises(searchedExercises);
  }
}

  return (
    <Stack alignItems='center' mt='37px' justifyContent='center' p='20px'>
        <Typography fontWeight={700} sx={{fontSize: {lg: '44px', xs: '30px'}}} mb='50px' textAlign='center'>
            Awesome Exercises You <br/>
            Should Know!

        </Typography>
        <Box position='relative' mb='72px'>
            <TextField sx={{ input: {
                border: 'none', 
                fontWeight: '700',
                borderRadius: '4px'
             }, 
             width: { lg: '1170px', xs: '350px'}}}
              height= '76px'
              value={search}
            onChange= {(e) => setSearch(e.target.value.toLowerCase())}
            placeholder='Search Exercises'
            type='text'  />
            <Button variant='contained' color='error' href='#exercises' sx={{ backgroundColor: '#ff2625',color: '#fff', textTransform: 'none', width: { lg: '175px', xs: '14px'}, height: '56px', position: 'absolute',right: '0'}} onClick={handleSearch}>Explore Exercises</Button>
        </Box>
        <Box sx={{ position: 'relative', width:'100%', p:'20px'}}>
             <Horizontalscrollbar data={bodyParts} bodyPart={bodyPart} setBodyParts={setBodyParts} />
        </Box>
        


    </Stack>
  )
}

export default SearchExercises