import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider';

import { data } from './data'

import noPicture from './img/No_Picture.jpg'

function initItemList() {
  let items = new Array<MenuItemCounterProps>();
  for (const item of data.menuItems) {
    items.push({
      name: item.name,
      price: item.price,
      image: item.image,
      count: 0,
      key: item.name,
    })
  }
  return items
}

export type MenuItemProps = {
  name: string
  price: number
  image?: string

}

type PropsAddon = {
  count: number
  addFn: (value: any) => void
  subFn: (value: any) => void
  resetFn: (value: any) => void
}

type Props = MenuItemProps & PropsAddon

export const MenuItem: React.FC<Props> = ({ name, price, image = noPicture, count, addFn, subFn, resetFn }) => {
  return (

    <Card sx={{ display: 'flex', borderRadius: 5, margin: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            {price} CHF
          </Typography>
          <Typography variant="h4" component="span">
            {count}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="span" sx={{ margin: 1 }}>
            {count * price} CHF
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <IconButton onClick={addFn} aria-label="plus_1" size="large">
            +1
          </IconButton>
          <IconButton onClick={subFn} aria-label="minus_1" size="large">
            -1
          </IconButton>
          <IconButton onClick={resetFn} aria-label="rest" size="large">
            ↺
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


type CounterAddon = {
  key: string
  count: number
}

type MenuItemCounterProps = MenuItemProps & CounterAddon



export const Menu: React.FC = () => {
  const [cart, setCart] = React.useState<Array<MenuItemCounterProps>>(initItemList())
  return (
    <>
      {cart.map((item, i) => {
        return (
          <MenuItem
            key={item.key}
            name={item.name}
            price={item.price}
            image={item.image}
            count={item.count}
            addFn={() => {
              setCart((oldValue) => {
                const oldCart = [...oldValue]
                oldCart[i].count = oldCart[i].count + 1
                return oldCart
              })
            }}
            subFn={() => {
              setCart((oldValue) => {
                const oldCart = [...oldValue]
                if (oldCart[i].count > 0) {
                  oldCart[i].count = oldCart[i].count - 1
                }
                return oldCart
              })
            }}
            resetFn={() => {
              setCart((oldValue) => {
                const oldCart = [...oldValue]
                oldCart[i].count = 0
                return oldCart
              })
            }}
          />
        );
      })}
      <Divider>Summary</Divider>
      <MenuSummary
        cart={cart}
        setCart={setCart}
      />
    </>
  );
}


type MenuSummaryProps = {
  cart: MenuItemCounterProps[]
  setCart: (value: MenuItemCounterProps[]) => void
}

export const MenuSummary: React.FC<MenuSummaryProps> = ({ cart, setCart }) => {
  let total = 0
  cart.forEach((item) => { total = total + item.count * item.price })

  return (
    // <div>{name} costs {price} CHF</div>
    <Card sx={{ display: 'flex', borderRadius: 5, margin: 1 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Total: {total} CHF
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
          <List dense={true}>

            {cart.map((item) => {
              if (item.count > 0) {
                return (
                  <ListItem key={item.key}>
                    <ListItemText
                      key={item.key}
                      primary={item.name}
                      secondary={item.count + " * " + item.price + " CHF = " + item.count * item.price}
                    />
                  </ListItem>
                )
              } else {
                return (<></>)
              }
            })}

          </List>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <TextField fullWidth label="Table" id="table" sx={{ marginBottom: 3 }} />
        <Divider><Typography variant='subtitle2'>All</Typography></Divider>
        <IconButton onClick={() => {
          setCart(initItemList())
        }}
          aria-label="rest" size="large">
          ↺
        </IconButton>
        {/* <IconButton onClick={() => {}} aria-label="print" size="large">
            Print
          </IconButton> */}
      </Box>
    </Card>
  );
}
