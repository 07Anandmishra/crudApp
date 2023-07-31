import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'
import { NavLink, useNavigate } from 'react-router-dom';

export default function ButtonAppBar() {
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });

    const navigate=useNavigate()

      let auth=localStorage.getItem('login')

      const Logout=()=>{
        localStorage.clear()
            navigate('/')
      }
    
      const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };
  return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Dashboard
          </Typography>

          {
            auth ? <Button color="inherit" onClick={Logout}>Logout</Button>: <NavLink to='/'  className="btn btn-primary" >Login </NavLink>
          }
         
          
        </Toolbar>
      </AppBar>
    </Box>
    <Sidebar state={state} setState={setState} toggleDrawer={toggleDrawer}/>
    </>
  );
}
