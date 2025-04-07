import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import req4Bg from '../../../assest/requrement/rq4.jpg'
import PR3 from '../../../assest/requrement/-background-paralax2_running.jpg'
const Payroll = () => {
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
                                backgroundImage: `url(${req4Bg})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundSize: '100% 100%', // Force full stretch
                                backgroundPosition: 'center',
                                '@media (min-aspect-ratio: 3/2)': { // For wider images
                                  backgroundSize: 'cover',
                                },
                              }}                    >
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
                            textAlign="center"
                            color="white"
                            sx={{
                                zIndex: 2,
                                fontWeight: 'bold',
                                animation: 'fadeIn 2s ease-in-out',
                                '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
                                letterSpacing: '0.05em',
                            }}
                        >
                            Payroll Processing
                        </Typography>
               
                    </Box>
    
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
                                    src={PR3}
                                    alt="Permanent Staffing Solutions"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block'
                                    }}
                                />
                            </Box>
                        </Grid>
                        <Grid size={{ xs: 12, md: 6 }}>
                            <Typography variant="body2" paragraph sx={{ mb: 23 }}>
                            Spirale HR Solutions Pvt. Ltd. is fully equipped to manage client’s 
                            payroll process working collaboratively with the clients 
                            creating savings and efficiency, thereby allowing HR staff 
                            to focus on core activities. Payroll outsourcing makes compliance
                             with tax rules and government regulations easier and more effective. 
                             Reduce cost as we leverage efficiencies of scale. We cater to small, 
                             medium and large scale multi locational enterprises. 
                            We ensure everything is done accurately and on time. We provide reports & MIS on demand.
                            </Typography>
                           
                        </Grid>
    
                    </Grid>
                  </Box>
    
      
    </>
  )
}

export default Payroll
