import React from 'react';
import './Search.css';
import { premData } from '../../data/premierLeagueData';
import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { columnSettings } from './gridSettings';

const standings = premData.response[0].league.standings[0];
const leagueLogo = premData.response[0].league.logo;
const testLogo = 'https://media.api-sports.io/football/teams/40.png';
const testParams = {
  teamLogo: 'https://media.api-sports.io/football/teams/40.png',
  teamName: 'Liverpool',
  rank: 33,
}

const selectTeamData = () => {
  
}

const rows = [];


const columns = columnSettings;

// const rows = [
//   {
//     id: 1,
//     club: testParams,
//     mp: 23,
//     w: 15,
//     d: 6,
//     l: 2,
//     gf: 52,
//     ga: 22,
//     gd: 30,
//     pts: 51,
//     last5: 'LWWWW',
//   },
//   {
//     id: 2,
//     club: testParams,
//     mp: 23,
//     w: 15,
//     d: 6,
//     l: 2,
//     gf: 52,
//     ga: 22,
//     gd: 30,
//     pts: 51,
//     last5: 'LWWWW',
//   },
//   {
//     id: 3,
//     club: testParams,
//     mp: 23,
//     w: 15,
//     d: 6,
//     l: 2,
//     gf: 52,
//     ga: 22,
//     gd: 30,
//     pts: 51,
//     last5: 'LWWWW',
//   },
// ];

function Search() {
  return (
    <div className='search-container'>
      <div className='search-box'>
        <div className='logo-container'>
          <img src={leagueLogo} alt='league-logo' width='70'/>
        </div>
        <div className='league-container'>
          <Box sx={{ height: 500, width: '65%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: {
                    pageSize: 20,
                  },
                },
              }}
              
              checkboxSelection
              disableRowSelectionOnClick
              disableColumnMenu
            />
          </Box>
        </div>
      </div>
    </div>
  )
}

export default Search;