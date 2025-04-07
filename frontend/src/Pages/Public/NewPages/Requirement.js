import { Box, Typography, Grid, useTheme } from '@mui/material'
import React from 'react'
import reqBg from '../../../assest/requrement/rq1.jpg'

const Requirement = () => {
    const theme = useTheme();
  return (
    <>
      <Box
  sx={{
         width: '100%',
         height: { 
           xs: '25vh',  
           sm: '40vh', 
           md: '35vh' 
         },
         position: 'relative',
         overflow: 'hidden',
         display: 'flex',
         alignItems: 'center',
         justifyContent: 'center',
         textAlign: 'center',
         backgroundImage: `url(${reqBg})`,
         backgroundRepeat: 'no-repeat',
         backgroundSize: '100% 100%', // Force full stretch
         backgroundPosition: 'center',
         '@media (min-aspect-ratio: 3/2)': { // For wider images
           backgroundSize: 'cover',
         },
       }}
>
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            // backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          }}
        />
        <Typography
          variant="h3"
          textAlign="center"
          color="white"
          sx={{
            zIndex: 2,
            // fontWeight: 'bold',
            // backgroundColor:'blue'
          }}
        >
          Recruitment
        </Typography>
      </Box>

      <Box sx={{ px: { xs: 2, sm: 3, md: 12, lg: 12 },
        py: 5, }}>
        <Typography 
  variant="h4" 
  sx={{ 
    mb: 4, 
    textAlign: 'center',
    fontWeight: 500, // Semi-bold
    color: '#000000', // Soft gray
    lineHeight: 1.3, // Better readability
    px: 2, // Side padding on mobile
    fontSize: {
      xs: '1.5rem', // Mobile
      md: '1.75rem' // Desktop
    }
  }}
>
  We provide end-to-end hiring solutions to help you find the best talent.
</Typography>
        
        <Grid container spacing={4}>
          <Grid  size={{ xs: 12,  md: 6 }}>
            <Typography variant='body2' sx={{ textAlign: 'justify' }}>
              Organisations need to have the right people, with the right capabilities, doing the right things to drive business in a sustainable manner. We are among best recruitment consultants in India and specialise in recruitment of permanent, contract and temporary positions. We have a specialist team of experienced consultants to provide a range of practical and innovative solutions to help you source the right talent to meet your business objectives.
              <br /><br />
              We at SHSPL help you to fulfil your organisation's talent ambitions and build a workforce with the right capabilities, profile and focus on achieving your business objectives, from growth to transformation.
            </Typography>
            <Typography variant='h4' py={2}>
            Senior Level Executive Search
            </Typography>
            <Typography variant='body2'> 
            Organisations are always on the lookout for good leaders to strengthen their team as part of their growth strategy. The challenge is to get proper vibrations between the leader's aspirations and the company’s business goals. SHSPL is among the leading executive search firms in the country. Always with an eye on diversity, we assist companies in finding experts for Executive Board of Directors, CEO, President, C-Suite, Vice President across all functional areas. We help find the best talent, build successful teams and generate value for shareholders through excellence in Senior & Leadership search.
            We bring in expertise, network and market research for our clients to identify suitable leaders for their organisation. We combine deep industry and functional knowledge with a proven executive search and assessment process to help you find leaders who best fit your organisation’s unique needs and will have a lasting impact.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12,  md: 6 }}>
            <Typography variant='body2' sx={{ textAlign: 'justify' }}>
              We help increase productivity by ensuring that our clients get the right people. Our service provides visible results with a transparent and detailed selection process through an effective network of talented workers. We listen, examine and understand our clients' strategy and culture and assist them in identifying "fit-for-purpose" experts.
              <br /><br />
              We have successfully recruited executives in top-notch MNCs, large, medium and small scale industries, and start-ups. We work across all major industries and functionalities to find and place the talent that will value for your company.
            </Typography>
            <Typography variant='h4' py={2}>
            Mid-Level Executive Search
            </Typography>
            <Typography variant='body2'>
            Organisations need executives at all levels with the skills and vision to achieve the company’s goals and execute long-term strategies. Beyond technical expertise, these executives must also possess managerial experience and strong interpersonal skills. 

            SHSPL’s Mid-Level Executive Search recruits emerging executives for clients across all sectors. We combine industry and functional expertise with cultural and geographic knowledge to ensure our clients get a dynamic selection of candidates to choose from.

            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default Requirement