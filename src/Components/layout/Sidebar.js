import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Typography } from '@mui/material';


export default function TemporaryDrawer({state , setState, toggleDrawer}) {

    const navigate= useNavigate()
  const list = (anchor) => (
   
    

    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
       
      <Typography variant="h5" style = {{textAlign: 'center',margin:"20px 0px"}}> 
      
           Dashboard 
      </Typography>
        <ListItem disablePadding onClick={()=>(navigate('/'))}>
            <ListItemButton>
              <ListItemIcon>
              <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>(navigate('/userlist'))}>
            <ListItemButton>
              <ListItemIcon>
              <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='User List' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding onClick={()=>(navigate('/adduser'))}>
            <ListItemButton>
              <ListItemIcon>
              <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='Add User' />
            </ListItemButton>
          </ListItem>
         
          <ListItem disablePadding onClick={()=>(navigate('/about'))}>
            <ListItemButton>
              <ListItemIcon>
              <InboxIcon />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItemButton>
          </ListItem>
          
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Box>
  );

  return (
    <div>
      {['left'].map((anchor) => (
        <React.Fragment key={anchor}>
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}