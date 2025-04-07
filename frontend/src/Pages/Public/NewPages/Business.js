import { Box, Button, Card, CardContent, Grid, Typography } from '@mui/material';
import React from 'react';
import req6Bg from '../../../assest/requrement/rq6.jpg';
import PR6 from '../../../assest/requrement/business_planning.jpg'

const Business = () => {
  return (
    <>
      {/* Hero Section with Background Image */}
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
          backgroundImage: `url(${req6Bg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% 100%', // Force full stretch
          backgroundPosition: 'center',
          '@media (min-aspect-ratio: 3/2)': { // For wider images
            backgroundSize: 'cover',
          },
        }}
      >


        {/* Main Heading */}
        <Typography
          variant="h3"
          color="white"
          sx={{
            zIndex: 2,
            fontSize: {
              xs: '2rem',  // Mobile
              sm: '2.5rem', // Tablet
              md: '3rem'    // Desktop
            },
            px: 2, // Prevents text from touching edges
          }}
        >
          Business planning, strategy & execution
        </Typography>
      </Box>

      {/* Description Section */}
      <Box sx={{
        // maxWidth: '1200px',
        // mx: 'auto',
        px: { xs: 2, sm: 3, md: 12, lg: 12 },
        py: 5,
      }}>
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>

            <Box sx={{
              //   borderRadius: 2,
              overflow: 'hidden',
              //   boxShadow: 3
            }}>
              <img
                src={PR6}
                alt="Permanent Staffing Solutions"
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </Box>

            <Box py={1}>
            <Typography variant='h5' py={2} >
          Business Planning, Strategy & Execution
        </Typography>
        <Typography variant='body2'>
          In order for any business to succeed they need to have the right planning, the right strategy, and the right execution of these things. We helps our clients to expand and grow by providing them all three. We know how important it is to have the right plan, if your plan is wrong then every step you take will be in the wrong direction as well. This moves companies away from their objective instead of towards it. We study our clients deeply before suggesting any plan, because we have to ensure that we have all the variables in check.

          Once we have a plan, we work with our clients on creating a strategy. Many people think strategy and plan are the same but SHSPL knows better. We know that plan is what we try to achieve and strategy is how we are going to achieve it.


        </Typography>
        </Box>


            </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ mb: 40 }}>
              {/* Card with yellow background */}
              <Card sx={{
                maxWidth: 345,
                boxShadow: 3,
                backgroundColor: '#fffde7', // Soft yellow (better than pure yellow)
                border: '1px solid #ffeb3b', // Yellow border
                mb: 3
              }}>
                <CardContent>
                  {/* Title */}
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ color: 'text.primary' }}
                  >
                    How can we help you?
                  </Typography>

                  {/* Description */}
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      mb: 2 // Space above button
                    }}
                  >
                    Contact us at the SHSPL office nearest to you or
                    submit a business inquiry online.
                  </Typography>

                  {/* Button */}
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: 'primary.main',
                      color: 'white',
                      '&:hover': {
                        backgroundColor: 'primary.dark',
                      },
                      py: 1.5, // Button height
                      fontWeight: 'bold'
                    }}
                  >
                    Contact Now
                  </Button>
                </CardContent>
              </Card>
            </Box>

          </Grid>

        </Grid>

        

      </Box>



    </>
  );
};

export default Business;