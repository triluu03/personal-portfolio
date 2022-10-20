import { Box, Typography, Link } from '@mui/material'

const image = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '16px',
}

const Songsite = () => (
    <Box
        sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'left',
            flexDirection: 'column',
            ml: '6%',
        }}
    >
        <Typography variant='h3' color='textPrimary.main'>
            Songsite
        </Typography>
        <ul>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>When:</b> September 2022 - October 2022
            </Typography>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>Where:</b> You guys can check the{' '}
                <Link
                    href='https://triluu03.github.io/songsite'
                    target='_blank'
                    color='cardTitle.main'
                >
                    {' '}
                    Github Pages
                </Link>{' '}
                of the app or the source code{' '}
                <Link
                    href='https://github.com/triluu03/songsite'
                    target='_blank'
                    color='cardTitle.main'
                >
                    here.
                </Link>
            </Typography>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>What is this project:</b> This is a web app that allows users
                to search information about their favorite albums, artists,
                playlists, or songs. I built this using React, Redux,
                TypeScript, and Spotify API.{' '}
            </Typography>
        </ul>
        <Box sx={{ width: '70%', height: 'auto', mb: '1%' }}>
            <img
                src={require('../../images/songsite_1.png')}
                alt='songsite'
                style={image}
            />
        </Box>
        <Box sx={{ width: '70%', height: 'auto', mb: '4%' }}>
            <img
                src={require('../../images/songsite_2.png')}
                alt='songsite'
                style={image}
            />
        </Box>
    </Box>
)

export default Songsite
