import React from 'react'
import Layout from '../components/layouts/Layout'
import {Box, TableContainer, Typography,Table, TableBody, TableHead,TableRow, TableCell,Paper} from '@mui/material'
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';

const Contact = () => {
  return (
    <Layout>
      <Box style={{padding:'20px', textAlign:'justify'}}>
        <Typography variant='h4' style={{padding:'10px', textAlign:'center', fontWeight:'600', fontSize:'50px'}}>Contact</Typography>
        <p>quis ipsum suspendisse ultrices gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim sit amet venenatis urna cursus eget nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque massa placerat duis ultricies lacus sed turpis tincidunt id aliquet risus feugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia at quis risus sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit scelerisque in dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum</p>
      </Box>
      <form style={{padding:'50px', width:'300px', height:'300px', margin:'auto', fontSize:'20px', lineHeight:'1.5', border:'1px solid', borderRadius:'10px'}}>
                {/* Labels and inputs for form data */}
                <label className="label">Name</label>
                <input  className="input"
                     type="text" />
                <br/>
                <label className="label">Email</label>
                <input  className="input"
                     type="email" />
              <br/>
                <label className="label">Password</label>
                <input  className="input"
                     type="password" />
                <br/>
                <button  className="btn"
                        type="submit">
                    Submit
                </button>
            </form>

      <Box>
        <TableContainer component={Paper}>
          <Table aria-label="contact table">
            <TableHead>
              <TableRow>
                <TableCell>Contact Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  <SupportAgentIcon/> 1800-00-00000 (tollfree)
                </TableCell>
                <TableCell>
                  <EmailIcon sx={{color:'skyblue', pt:1}}/> help@gmail.com (tollfree)
                </TableCell>
                <TableCell>
                  <CallIcon/> 1234567890 (tollfree)
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Layout>
  )
}

export default Contact
