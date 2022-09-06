import { Box, Typography, Button } from '@mui/material'

import Avatar from '../images/avatar.jpeg'

const About = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    }

    const image = {
        backgroundImage: `url(${Avatar})`,
        backgroundSize: 'cover',
    }

    return (
        <Box
            sx={{ width: '100vw', height: 500, bgcolor: 'primary.main' }}
            style={style}
        >
            <Box sx={{ m: '5%', width: '20%' }} style={image} />
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
                <Typography color='textSecondary.main'>
                    I am a self-learner who enjoys solving algorithmic problems.
                    My aspiration is applying computer science skills, such as
                    algorithms and data analytics, into designing products and
                    making improvements based on data.
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
                        mt: 2,
                    }}
                >
                    download CV
                </Button>
            </Box>
        </Box>
    )
}

export default About
