import { Box, Typography, Button } from '@mui/material'

// import Image from '../images/header-background2.jpeg'

import './components.css'

const styles = {
    // backgroundImage: `url(${Image})`,
    // backgroundSize: 'cover',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
}

const Header = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: 500,
                textAlign: 'center',
                bgcolor: '#2B4865',
            }}
            style={styles}
        >
            <Typography variant='h5' color='#FFFFFF' component='div'>
                Portfolio
            </Typography>
            <Typography variant='h2' color='#FFFFFF' component='div'>
                I'm Luu Duc Tri
            </Typography>

            <Box>
                <Button
                    color='cardTitle'
                    variant='outlined'
                    sx={{ m: 2, borderWidth: 3 }}
                    className='button'
                >
                    Learn More
                </Button>
                <Button
                    color='cardTitle'
                    variant='outlined'
                    sx={{ m: 2, borderWidth: 3 }}
                    className='button'
                >
                    Contact
                </Button>
            </Box>
        </Box>
    )
}

export default Header
