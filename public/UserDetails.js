import React from 'react';

import { AppBar, Toolbar, IconButton, Typography, Avatar, Box } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import NotificationsIcon from '@mui/icons-material/Notifications';



export default function UserDetails() {
  return (
    <>
         <AppBar position="sticky" style={{boxShadow: 'none', background:'none',color:'black'}}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton color="inherit">
            <ArrowBackIcon />
          </IconButton>
          <IconButton color="inherit">
            <NotificationsIcon />
          </IconButton>
        </Box>

       
        <Box sx={{ textAlign: 'right', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
  <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
    <Typography variant="body1" sx={{ color: 'black' }}>
      Gaurav Dabhade
    </Typography>
    <Typography variant="caption" sx={{ color: 'blue' }}>
      Student
    </Typography>
  </Box>
  <Avatar sx={{ marginLeft: '8px' }} src="/avatar1.jpg"/>
</Box>
      </Toolbar>
    </AppBar>    </>
  )
}
