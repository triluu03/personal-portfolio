import { Box, Typography, Button } from '@mui/material'

import Image from '../images/header-background2.jpeg'

const styles = {
    backgroundImage: `url(${Image})`,
    backgroundSize: 'cover',
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
            }}
            style={styles}
        >
            <Typography variant='h5' color='#FFFFFF'>
                Portfolio
            </Typography>

            <Typography variant='h2' color='#FFFFFF'>
                I'm Luu Duc Tri
            </Typography>

            <Box>
                <Button
                    color='cardTitle'
                    variant='outlined'
                    sx={{ m: 2, borderWidth: 3 }}
                >
                    Learn More
                </Button>
                <Button
                    color='cardTitle'
                    variant='outlined'
                    sx={{ m: 2, borderWidth: 3 }}
                >
                    Contact
                </Button>
            </Box>
        </Box>
    )
}

export default Header
