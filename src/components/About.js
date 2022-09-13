import { Box, Typography, Button, Link } from '@mui/material'

import CV from '../PDF_files/Luu_DucTri_CV.pdf'

const About = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    }

    const image = {
        maxWidth: '100%',
        height: 'auto',
        borderRadius: '16px',
    }

    return (
        <Box
            sx={{ width: '100vw', height: 'auto', bgcolor: 'primary.main' }}
            style={style}
            id='about'
        >
            <Box sx={{ m: '5%', width: '20%' }}>
                <img
                    src={require('../images/avatar.jpeg')}
                    alt='avatar'
                    style={image}
                />
            </Box>
            <Box sx={{ m: '5%', maxWidth: '30%' }}>
                <Typography
                    variant='h3'
                    component='div'
                    color='textPrimary.main'
                    sx={{ mb: 2 }}
                >
                    Luu Duc Tri
                </Typography>
                <Typography variant='h5' component='div' color='cardTitle.main'>
                    University of Helsinki
                </Typography>
                <Typography variant='h6' component='div' color='cardTitle.main'>
                    Bachelor of Science
                </Typography>
                <Typography color='textSecondary.main' sx={{ mt: 2 }}>
                    My major in the university is Computer Science and Data
                    Science. I am a self-learner who enjoys solving algorithmic
                    problems. My aspiration is applying computer science skills,
                    such as algorithms and data analytics, into designing
                    products and making improvements based on data.
                </Typography>
                <Button
                    variant='outlined'
                    color='cardTitle'
                    sx={{
                        ':hover': {
                            bgcolor: 'cardTitle.main',
                            color: 'black',
                        },
                        m: 1,
                        mt: 3,
                    }}
                    component={Link}
                    href={CV}
                    target='_blank'
                >
                    download CV
                </Button>
            </Box>
        </Box>
    )
}

export default About
