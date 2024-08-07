import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Grid, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import omegaklass from '../assets/marca/OmegaKlass.png';
// import { mainThemes } from '../themes';

interface IPages {
  page: string;

}

const pages: IPages[] = [
  { page: 'cursos' },
  { page: 'profesores'},
  { page: 'planes'},
  { page: 'nosotros'}
];




const settings = ['Perfil',  'Cerrar session'];

export function Navbar() {

  const navigate = useNavigate();

  const navergar = (ir: string) => {
    let page = ir.toLowerCase();
    switch (page) {
      case 'perfil': page = 'perfil_estudiante';
    }

    navigate(`/${page}`,{
      replace: true
    })
  }

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    
    <AppBar position="static">
      <Grid className='maxWidth' sx={{ width: '100%' }}>
        <Toolbar disableGutters>
          <Grid>
            <Box
              component="img"
              src={omegaklass}
              alt="logo"
              onClick={() => navergar('home')}
              sx={{
                height: '50px',
                width: '180px',
                margin: '0 20px',
                transition: 'all 0.3s ease',
                '&:hover': {
                  cursor: 'pointer',
                  transform: 'scale(1.02)',
                  filter: `drop-shadow(0 0 0.75rem #18233A)`,
                },
              }}
            />
          </Grid>
          {/* Moblile or table */}
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
          <i className="fa-solid fa-user" style={{marginRight: "5px"}} />

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
              {pages.map(( {page} ) => (
                <MenuItem key={page} 
                    onClick={() => {
                      if( page === 'planes' ){
                        page = 'home'
                        document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
                      }
                    navergar(page)
                  }}
                >
                  <Typography className='main-font' textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>


          {/* <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, fontFamily: 'Raleway !imortant' }}>
            {pages.map(({page}) => (
              <Button
                key={page}
                onClick={() => {
                    if( page === 'planes' ){
                      page = 'home'
                      document.getElementById('planes')?.scrollIntoView({ behavior: 'smooth' });
                    }
                  navergar(page)
                }}
                variant="contained" 
                
                sx={{ 
                  my: 2, 
                  color: 'white', 
                  display: 'block',
                  boxShadow: 'none',
                  fontWeight: 'bold',
                  textTransform: 'capitalize'
                  
                }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Grid className='flex flex-col'>
          <Box sx={{ mr: '20px' }} >
            <TextField
              sx={{ bgcolor: 'white', borderRadius: '8px' }}
              name="search"
              placeholder="Search"
              variant="outlined"
              size="small"
            />
          </Box>
            <Box sx={{ flexGrow: 0 }}>
              
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" sx={{ bgcolor: 'primary.light' }} src="/static/images/avatar/2.jpg" />
                </IconButton>
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
                  <MenuItem key={setting} onClick={() => navergar(setting)}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Grid>
        </Toolbar>
      </Grid>
    </AppBar>
  );
}
