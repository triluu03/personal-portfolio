import { Box, Typography } from '@mui/material'
import { TypeAnimation } from 'react-type-animation'

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
                height: 550,
                textAlign: 'center',
                bgcolor: 'secondary.main',
            }}
            style={styles}
            id='home'
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

            <Typography
                color='cardTitle.main'
                variant='h5'
                fontFamily='monospace'
            >
                <TypeAnimation
                    sequence={[
                        `I'm a student`,
                        1000,
                        `I'm a self-learner`,
                        1000,
                        `I'm a full stack developer`,
                        1000,
                        `I'm a programmer`,
                        1000,
                    ]}
                    repeat={Infinity}
                    wrapper='b'
                    cursor={true}
                />
            </Typography>
        </Box>
    )
}

export default Header
