import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

import { Menu } from './MenuItem';


function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://ubaumann.ch">
        Urs's Bastelegge
      </Link>{' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}


export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Menu Calculator
        </Typography>
        {/* <ProTip /> */}

        <Menu />

        {/* Todo: Total and maybe list of order */}
        {/* Todo: reset all button */}

        <Copyright />
      </Box>
    </Container>
  );
}