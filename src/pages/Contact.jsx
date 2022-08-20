import { Box, Card, CardContent, Container, Typography } from '@mui/material'
import React from 'react'

function Contact() {
  return (
    <Container  sx={{ padding:10}}> 
    <Box sx={{ paddingBottom:5}}>
    <Typography flexGrow={1}  variant='h3' textAlign='left' color='#283593'> Contacts</Typography>

    </Box>
    <Box > 

    <Card  elevation={4} sx={{  minWidth:420}}>
      <CardContent  >
        <Box sx={{ paddingBottom:5}}>
        <Typography  component='legend' textAlign='left'> Telephone</Typography>
          <Typography   variant='h5' textAlign='left'> (+237 964510)</Typography>
        </Box>
        <Box sx={{ paddingBottom:5}}>
        <Typography  component='legend' textAlign='left'> Email</Typography>
          <Typography   variant='h5' textAlign='left'> help@busagencetravel.ru</Typography>
        </Box>
        <Box sx={{ paddingBottom:5}}>
        <Typography  component='legend' textAlign='left'> Adresse</Typography>
          <Typography   variant='h5' textAlign='left'> Douala Carrefour Trois Bordelles</Typography>
        </Box>
       

      </CardContent>
      

    </Card>
    </Box>

    </Container>
  )
}

export default Contact