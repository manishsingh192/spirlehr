import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import req3Bg from '../../../assest/requrement/rq3.jpg'
import PR2 from '../../../assest/requrement/Cos.png'
const Contract = () => {
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
                    backgroundImage: `url(${req3Bg})`,
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
                        
                    }}
                >
                    Contract Staffing
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
                                src={PR2}
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
                        <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                            Spirale HR Solutions Pvt. Ltd. provides qualified people
                            you need, when you need them and only for as long as
                            you need them. We hire candidates matching the employer’s
                            business needs on our payroll. We pay them regular salaries
                            with statutory benefits and handle all the legal compliances
                            and government regulations. The client organisation just receives
                            a single invoice every month for outsourced contract staffing
                            services. We also Contract employees hired by client’s directly
                            or through other vendors or transitioned from the client’s payroll.
                            All contracts with the client are for a fixed duration
                            (generally 3 months to a year)
                            and can be renewed multiple times.
                        </Typography>
                        <Typography variant="h4" paragraph sx={{ mb: 3 }}>
                            Temporary Staffing
                        </Typography>
                        <Box component="ul" sx={{
                            pl: 3,
                            mb: 3,
                             fontSize: '13px',
                            
                            '& li': {
                                mb: 1,
                                listStyleType: 'circle'
                            }
                        }}>
                            <li>
                                Spirale HR Solutions Pvt. Ltd. 
                                provide staff for short time periods 
                                in order to enable our client’s you to
                                 cope with extra work loads,
                                  temporary replacements for people 
                                  on leave, peak workloads in Front
                                   office, support administration, 
                                   accounting and Customer service
                                    ,Sales etc.

                            </li>
                        </Box>

                    </Grid>

                </Grid>
              </Box>


        </>
    )
}

export default Contract
