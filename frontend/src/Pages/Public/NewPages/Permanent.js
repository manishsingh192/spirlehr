import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import req2Bg from '../../../assest/requrement/rq2.jpg';
import PR1 from '../../../assest/requrement/permanet.jpg';

const Permanent = () => {
  return (
    <>
      {/* Hero Section */}
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
          backgroundImage: `url(${req2Bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
          }}
        />
        <Typography
          variant="h3"
          color="white"
          sx={{
            zIndex: 2,
           
          }}
        >
          Permanent Staffing
        </Typography>
      </Box>
    
      {/* Content Section */}
      <Box sx={{ 
        // maxWidth: '1200px',
        // mx: 'auto',
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        py: 5,
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12,  md: 6 }}>
            <Box sx={{ 
              borderRadius: 2,
              overflow: 'hidden',
              boxShadow: 3
            }}>
              <img
                src={PR1}
                alt="Permanent Staffing Solutions"
                style={{ 
                  width: '100%', 
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>
          </Grid>
          <Grid size={{ xs: 12,  md: 6 }}>
            <Typography variant="body2" paragraph sx={{ mb: 3 }}>
              Permanent staffing is at the core of the business strategy of every company today. 
              Organizations that are equipped with quality and dedicated permanent staff have a 
              competitive advantage and greater chance of surviving and succeeding in the long run.
            </Typography>
            <Typography variant="body2" paragraph sx={{ mb: 3 }}>
              Spirale HR Solutions Pvt. Ltd. adopts a methodical process in providing Permanent 
              staffing solutions. The methods deployed for Permanent staffing include:
            </Typography>
            <Box component="ul" sx={{ 
              pl: 3,
              mb: 3,
              '& li': { 
                mb: 1,
                listStyleType: 'circle'
              }
            }}>
              <li>Database selection</li>
              <li>Advertised recruitment</li>
              <li>Referral Search</li>
              <li>Campus Recruitment</li>
            </Box>
           
          </Grid>

        </Grid>
        <Typography variant='body2' py={1}>
            We take on all the recruitment related administrative tasks like Identifying Screening & Shortlisting resumes, Conducting technical and aptitude tests, in-depth interviews, making client presentations ,Negotiating salaries, Verifying references, post offer follow up till joining. The process goes on till the client finds the right Candidate. We shoulder the responsibilities of the process, so that you can focus on realizing your business objectives, without having to worry about the nitty-gritties of the staffing process. We have dedicated recruiters exclusively to the Permanent Staffing industry and specialize in matching professionals with your permanent staffing needs. For more information, please contact us


            </Typography>
      </Box>
    </>
  );
};

export default Permanent;