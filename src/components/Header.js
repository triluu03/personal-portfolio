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
                bgcolor: 'secondary.main',
            }}
            style={styles}
        >
            <Typography
                variant='h5'
                color='textPrimary.main'
                component='div'
                fontFamily='monospace'
            >
                Portfolio
            </Typography>
            <Typography
                variant='h2'
                color='textPrimary.main'
                component='div'
                fontFamily='monospace'
            >
                Luu Duc Tri
            </Typography>

            <Box>
                <Button
                    color='cardTitle'
                    variant='outlined'
                    sx={{
                        m: 2,
                        borderWidth: 3,
                        ':hover': {
                            bgcolor: 'cardTitle.main',
                            color: 'black',
                        },
                    }}
                >
                    Learn More
                </Button>
                <Button
                    color='cardTitle'
                    variant='outlined'
                    sx={{
                        m: 2,
                        borderWidth: 3,
                        ':hover': {
                            bgcolor: 'cardTitle.main',
                            color: 'black',
                        },
                    }}
                >
                    Contact
                </Button>
            </Box>
        </Box>
    )
}

export default Header
