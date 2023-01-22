import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { MenuItem } from './MenuItem';
import { data } from './data'

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
        {data.menuItems.map((item, i) => {
          return (
            <MenuItem
              name={item.name}
              price={item.price}
              image={item.image}
            />  
          );
        })}
        <MenuItem name={"Bier"} price={5} />
        <MenuItem name={"Mineral"} price={4} />
        <MenuItem name={"Wein"} price={15} />

        {/* Todo: Total and maybe list of order */}
        {/* Todo: reset all button */}

        <Copyright />
      </Box>
    </Container>
  );
}