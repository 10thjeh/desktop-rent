import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import GameCard from './gameCard';
import Grid from '@material-ui/core/Grid';

const baseURL = 'https://api.crusty-crud.xyz/';

function GameList(){

  const [page, setPage] = useState(1);
  const [platformList, setPlatformList] = useState([]);
  const [gameList, setGameList] = useState([]);

  const parsePlatform = (platform_id) => {
    console.log(platformList);
    let platform = platformList.find( x => x.ConsoleID == platform_id);
    return platform.NamaConsole === undefined? '' : platform.NamaConsole;
  }

  useEffect( () => {
    axios.get(baseURL + 'games')
    .then( (resp) => {
      let response = resp.data.data;
      setGameList(response);
    })

    axios.get(baseURL + 'console')
    .then( (resp) => {
      let console_response = resp.data.data;
      setPlatformList(console_response);
    });
  }, [page]);

  return(
    <Grid container spacing={3} direction="row" justifyContent="center">
      {gameList.map( (game, index) => {
        return <GameCard
                  name = {game.NamaGame}
                  imgPath = {game.gambar}
                  desc = {game.deskripsi}
                  price = {game.harga}
                  platform = {game.platform}
                />
      })}
    </Grid>
  )
}

export default GameList
