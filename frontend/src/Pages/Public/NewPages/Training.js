import { Box, Grid, Typography } from '@mui/material'
import React from 'react'
import req5Bg from '../../../assest/requrement/rq5.jpg'
const Training = () => {
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
                                  backgroundImage: `url(${req5Bg})`,
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
                                fontWeight: 'bold',
                                animation: 'fadeIn 2s ease-in-out',
                                '@keyframes fadeIn': { from: { opacity: 0 }, to: { opacity: 1 } },
                                letterSpacing: '0.05em',
                            }}
                        >
                        Training And Development
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
     Learn, unlearn and learn new!
    </Typography>
            
            <Grid container spacing={4}>
              <Grid  size={{ xs: 12,  md: 6 }}>
                <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                An organisation’s growth is linked to its workforce, and employee welfare is essential to address the business challenges. Updating skills through training strengthens the backbone of a successful employee and, consequently, an organisation. Companies across the globe lay great emphasis on staff training to enhance productivity, performance management and employee retention.
                </Typography>
                <Typography variant='h4' py={2}>
                Training Services We Provide
                </Typography>
                <Typography variant='body2'> 
                We offer a wide range of training sessions for the employees as well as the management. Our training programmes are customised to suit the requirements of individual companies:
              </Typography>
               <Box component="ul" sx={{ 
                            pl: 3,
                            mb: 3,
                            '& li': { 
                              mb: 1,
                              listStyleType: 'disc',
                              fontSize: '13px'
                            }
                          }}>
                             <li>Communication skills</li>
    <li>Leadership workshop</li>
    <li>Business skills</li>
    <li>Customer service skills</li>
    <li>Stress management</li>
    <li>Sales training</li>
    <li>Time management</li>
    <li>Leading effective teams</li>
    <li>Emotional intelligence at work</li>
    <li>Leading with innovation</li>
    <li>Happy employees</li>
    <li>POSH – Prevention of Sexual Harassment</li>
                          </Box>
                         
              </Grid>
              <Grid size={{ xs: 12,  md: 6 }}>
                <Typography variant='body2' sx={{ textAlign: 'justify' }}>
                SHSPL training is designed to sharpen the skills of individual employees so that the trained personnel contribute positively to the company’s growth in the future. We conduct customised programmes for start-ups, corporate houses and businesses with varied training modules for the different sectors of industry.
                </Typography>
                <Typography variant='h4' py={2}>
                The Offering
                </Typography>
                <Typography variant='body2'>
                Training is the key to the success of all organisations, be they small or large. It enhances the knowledge and sharpens the skill set of the employees. However, companies, especially start-ups and Small and Medium Enterprises, overlook training. Here is where SHSPL fills the gap by taking up the role of a mentor, a trainer and a complete coach.
SHSPL offers different training modules spread across domains and verticles, from single training to multiple pieces of training in a year. To give the best value, SHSPL offers retainership models in training.
                </Typography>
              </Grid>
            </Grid>
          </Box>
      
    </>
  )
}

export default Training
