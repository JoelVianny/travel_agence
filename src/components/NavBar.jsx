import React from 'react'
import {Link} from 'react-router-dom'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import CallIcon from '@mui/icons-material/Call';
import PersonIcon from '@mui/icons-material/Person';
// import { AppBar, Box, Chip, ListItemText, Toolbar, Typography } from '@mui/material';
import { styled } from '@mui/system';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const StyledToolbar = styled(Toolbar)({
  display:"flex",
  justifyContent:"center",
  alignContent:'center',


})

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const MenuBox = styled(Box)({

  display:'flex',
  gap:50,
  cursor:"pointer"
});

const MenuItems = [
  { Name: "Planning des Voyages",path:'Planning'},
  {Name: "Contact" ,path:'Contact'},
  {Name:" Nouvelle", path:'Nouvelle'},
  {Name: "+79209576248",path:"number",Icon:<CallIcon/>},
  {Name : " Achat de billets" ,path:'Billet',Icon:<AcUnitIcon/>},
  // {Link:"/",Icon:<PersonIcon/>}
]
function NavBar () {

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    
  //  <AppBar color='default' position='sticky' elevation={4} sx={{ height :'90px', justifyContent:'center'}}color='default' position='sticky' elevation={4} sx={{ height :'90px', justifyContent:'center'}}>
  //   <StyledToolbar>
  //   <Box flex={5}>
  //     <Typography variant="h5"  color={'#283593'}  sx={{ fontWeight:'bold',cursor:'pointer'}}>SERVICES VOYAGE</Typography>
  //   </Box>
  //   <MenuBox flex={5}>
  //     {MenuItems.map((item)=>(
  //       <Typography variant='body' color={'#283593'}>
  //        {item.Icon} {item.Name} 
  //       </Typography>
  //     ))}
  //        <Chip   label='achat' icon={<AcUnitIcon/>} color='primary'/>
  //        <Bo color={'#283593'}>
  //         <PersonIcon/>
  //        </Bo>
  //   </MenuBox>
 
  //   </StyledToolbar>

  //  </AppBar>


  <AppBar color='default' position='sticky'  elevation={10} sx={{ height :'90px', justifyContent:'center'}}>
  <Container maxWidth="xl">
    <StyledToolbar disableGutters>
      <Box flexGrow={4}>
      <Typography
       variant="h5"  
       color={'#283593'}
        noWrap
        component="a"
        href="/"
        sx={{
          mr: 2,
          display: { xs: 'none', md: 'flex' },
          fontWeight: 700,
          letterSpacing: '.3rem',
        
          textDecoration: 'none',
        }}
      >
        SERVICES VOYAGE
      </Typography>
      </Box>
     

      <Box flexGrow={1} sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="secondary"
        >
          <MenuIcon />
        </IconButton>
        <Menu 
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: 'block', md: 'none' },
          }}
        >
          {MenuItems.map((item) => (
            <MenuItem key={item} onClick={handleCloseNavMenu}>
             <Link to={`/${item.path}`}> 
             <Typography    color={'#283593'} textAlign="center">
                {item.Icon}{item.Name}</Typography>
             </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      <Typography
        variant="h5"
        color={'#283593'}
        noWrap
        component="a"
        href=""
        sx={{
          mr: 2,
          display: { xs: 'flex', md: 'none' },
          flexGrow: 3,
          fontWeight: 700,
          letterSpacing: '.3rem',
          textDecoration: 'none',
        }}
      >
        SERVICES VOYAGES
      </Typography>
      <MenuBox sx={{ flexGrow: 4, display: { xs: 'none', md: 'flex' } }}>
        {MenuItems.map((item) => (
          <Button
            key={item}
            onClick={handleCloseNavMenu}
            sx={{ my: 5, color: '#283593', display: 'flex' }}
          >
            <Link  style={{ textDecoration:'none',color:'#283593'}}to={`/${item.path}`}>
            {item.Icon}{item.Name}
            </Link>
          </Button>
        ))}
      </MenuBox>

      <Box flexGrow={4} sx={{ flexGrow: 4 }} color={'#283593'}>
        <Tooltip title="Open settings">
          <PersonIcon onClick={handleOpenUserMenu} sx={{ p: 0 }}>
    
          </PersonIcon>
        </Tooltip>
        <Menu
          sx={{ mt: '45px' }}
          id="menu-appbar"
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting) => (
            <MenuItem    key={setting} onClick={handleCloseUserMenu}>
              <Link  style={{ textDecoration:'none'}}to={`/${setting}`}>
              <Typography color={'#283593'} textAlign="center">{setting}</Typography>
              </Link>
            </MenuItem>
          ))}
        </Menu>
      </Box>
    </StyledToolbar>
  </Container>
</AppBar>
  )
}

export default NavBar