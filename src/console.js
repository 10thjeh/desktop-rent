import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import ConsoleCard from './consoleCard';
import Grid from '@material-ui/core/Grid';

const baseURL = 'https://api.crusty-crud.xyz/';

function ConsoleList(){
  const [test, setTest] = useState(1);

  const [page, setPage] = useState(1);
  const [consoleList, setConsoleList] = useState([]);

  useEffect( () => {
    axios.get(baseURL + 'console')
    .then( (resp) => {
      let response = resp.data.data;
      setConsoleList(response);
    })
  }, [page]);

  return(
    <>
    <Grid container spacing={3} direction="row" justifyContent="center">
      {consoleList.map( (cnsl, index) => {
        return <ConsoleCard
                  name={cnsl.NamaConsole}
                  imgPath ={cnsl.gambar}
                  desc = {cnsl.deskripsi}
                  price = {cnsl.harga}
                  manufacturer = {cnsl.manufacturer}
               />
      })}
    </Grid>
    </>
  )
}

export default ConsoleList
