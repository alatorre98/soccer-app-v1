export const columnSettings = [
    { 
      field: 'club', 
      headerName: 'Club', 
      width: 200,
      sortable: false,
      renderCell: (params) => {
        return (
          <div className='club-container'>
            <div className='rank-separator'>{params.value.rank}</div>
            <img src={params.value.teamLogo} width='30' className='team-logo-separator'/>
            <div>{params.value.teamName}</div>
          </div>
        )
      },
    },
    {
      field: 'mp',
      headerName: 'MP',
      width: 20,
      sortable: false,
    },
    {
      field: 'w',
      headerName: 'W',
      width: 20,
      sortable: false,
    },
    {
      field: 'd',
      headerName: 'D',
      width: 20,
      sortable: false,
    },
    {
      field: 'l',
      headerName: 'L',
      width: 20,
      sortable: false,
    },
    {
      field: 'gf',
      headerName: 'GF',
      width: 20,
      sortable: false,
    },
    {
      field: 'ga',
      headerName: 'GA',
      width: 20,
      sortable: false,
    },
    {
      field: 'gd',
      headerName: 'GD',
      width: 20,
      sortable: false,
    },
    {
      field: 'pts',
      headerName: 'Pts',
      width: 20,
      sortable: false,
    },
    {
      field: 'last5',
      headerName: 'Last 5',
      width: 90,
      sortable: false,
    }
  ];
  