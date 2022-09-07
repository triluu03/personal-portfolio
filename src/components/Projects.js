import { Box, Typography, Link } from '@mui/material'

const Projects = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                bgcolor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                pb: '5%',
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Typography
                    variant='h3'
                    component='div'
                    color='textPrimary.main'
                    sx={{ mt: '5%', mb: '3.5%' }}
                >
                    My Projects
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'left',
                    flexDirection: 'column',
                    ml: '6%',
                }}
            >
                <Typography variant='h4' color='textPrimary.main'>
                    Personal Book (Library) App
                </Typography>
                <ul>
                    <Typography
                        component='li'
                        variant='h5'
                        color='textSecondary.main'
                    >
                        <b>When:</b> August 2022
                    </Typography>
                    <Typography
                        component='li'
                        variant='h5'
                        color='textSecondary.main'
                    >
                        <b>Where:</b> You guys can check the source code of this
                        app{' '}
                        <Link
                            href='https://github.com/triluu03/bookapp'
                            color='cardTitle.main'
                        >
                            here.
                        </Link>
                    </Typography>
                    <Typography
                        component='li'
                        variant='h5'
                        color='textSecondary.main'
                    >
                        <b>What is this project:</b>
                    </Typography>
                </ul>
            </Box>
        </Box>
    )
}

export default Projects
