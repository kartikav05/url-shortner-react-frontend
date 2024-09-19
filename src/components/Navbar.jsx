import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" style={{ flexGrow: 1 }}>
        URL Shortener
      </Typography>
      <Button color="inherit" component={Link} to="/top-urls">Top 100 URLs</Button>
      <Button color="inherit" component={Link} to="/">Shorten URL</Button>
    </Toolbar>
  </AppBar>
);

export default Navbar;
