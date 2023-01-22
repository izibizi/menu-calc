import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import noPicture from './img/No_Picture.jpg'

export interface MenuItemProps {
    name: string
    price: number
    image?: string

}

export const MenuItem: React.FC<MenuItemProps> = ({name, price, image = noPicture}: MenuItemProps) => {
  return (
    // <div>{name} costs {price} CHF</div>
    <Card sx={{ display: 'flex', borderRadius: 5, margin: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
           {price} CHF
          </Typography>
          <Typography variant="h4" component="div">
           0 {/* Todo: Use counter */}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton aria-label="plus_1">
            +1 {/* Todo: Counter +1 */}
          </IconButton>
          <IconButton aria-label="minus_1">
            -1 {/* Todo: Counter -1 */}
          </IconButton>
          <IconButton aria-label="rest">
            Reset {/* Todo: Reset counter */}
          </IconButton>
        </Box>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image={image}
        alt={name}
      />
    </Card>
  );
}


