import React from 'react'
import Layout from '../components/layouts/Layout';
import { MenuList } from '../data/Data';
import {CardContent, CardMedia,Typography,CardActionArea,Card,Box} from '@mui/material';



const Menu = () => {
  return (
    <Layout>
      <Box sx={{display:"flex", flexWrap:"wrap", justifyContent:"center", marginTop:"50px"}}>
        {
          MenuList.map(menu=>{
            return(
              <Card sx={{maxWidth:'390px', display:'flex', m:2}}>
              <CardActionArea>
                <CardMedia 
                  sx={{minHeight:"400px"}}
                  component={"img"}
                  src={menu.image}
                  alt={menu.name}
                />
                <CardContent>
                  <Typography variant="h5" gutterButton component={"div"}>
                    {menu.name}{" Rs." + menu.price}
                  </Typography>
                  <Typography variant="h6" gutterButton component={"div"}>
                    {menu.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            )
            
          })
        }
      </Box>
    </Layout>
  )
}

export default Menu
