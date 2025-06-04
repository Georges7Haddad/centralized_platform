"use client";

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Stack
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SchoolIcon from '@mui/icons-material/School';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupsIcon from '@mui/icons-material/Groups';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import Logo from './Logo';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Courses', path: '/courses', icon: <LibraryBooksIcon /> },
  { name: 'Clubs', path: '/clubs', icon: <GroupsIcon /> },
  { name: 'Sport Teams', path: '/sportteams', icon: <SportsSoccerIcon /> },
];

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigation = (path) => {
    router.push(path);
    setDrawerOpen(false);
  };

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center' }}>
        <Logo height={40} marginRight={1} />
        <Typography variant="h6" component="div" sx={{ color: 'primary.main', fontWeight: 'bold' }}>
          AUB Central
        </Typography>
      </Box>
      <Divider />
      <List>
        {pages.map((page) => (
          <ListItem key={page.name} disablePadding>
            <ListItemButton 
              onClick={() => handleNavigation(page.path)}
              selected={pathname === page.path}
            >
              <ListItemIcon>
                {page.icon || <SchoolIcon />}
              </ListItemIcon>
              <ListItemText primary={page.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Box sx={{ p: 2 }}>
        <Button 
          variant="contained" 
          fullWidth 
          color="primary" 
          onClick={() => handleNavigation('/login')}
          sx={{ mb: 1 }}
        >
          Login
        </Button>
        <Button 
          variant="outlined" 
          fullWidth 
          color="primary"
          onClick={() => handleNavigation('/register')}
        >
          Register
        </Button>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            {/* Mobile menu icon */}
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="menu"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={toggleDrawer(true)}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </Box>

            {/* Logo - Mobile */}
            <Box 
              sx={{ 
                display: { xs: 'flex', md: 'none' }, 
                mr: 1,
                alignItems: 'center'
              }}
              onClick={() => handleNavigation('/')}
            >
              <Logo height={40} marginRight={1} />
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  flexGrow: 1,
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                AUB Central
              </Typography>
            </Box>

            {/* Logo - Desktop */}
            <Box 
              sx={{ 
                display: { xs: 'none', md: 'flex' }, 
                mr: 2,
                alignItems: 'center'
              }}
              onClick={() => handleNavigation('/')}
            >
              <Logo height={40} marginRight={1} />
              <Typography
                variant="h6"
                noWrap
                component="span"
                sx={{
                  fontWeight: 700,
                  color: 'inherit',
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                AUB Central
              </Typography>
            </Box>

            {/* Desktop navigation links */}
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handleNavigation(page.path)}
                  sx={{ 
                    my: 2, 
                    color: 'white', 
                    display: 'block',
                    borderBottom: pathname === page.path ? '2px solid white' : 'none',
                    borderRadius: 0,
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    }
                  }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>

            {/* Login/Register Buttons */}
            <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
              <Button
                variant="contained"
                onClick={() => handleNavigation('/login')}
                sx={{
                  bgcolor: 'white',
                  color: 'primary.main',
                  '&:hover': {
                    bgcolor: 'grey.100',
                  },
                }}
              >
                Login
              </Button>
              <Button
                variant="outlined"
                onClick={() => handleNavigation('/register')}
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  '&:hover': {
                    borderColor: 'grey.100',
                    bgcolor: 'rgba(255,255,255,0.1)',
                  },
                }}
              >
                Register
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </>
  );
}
