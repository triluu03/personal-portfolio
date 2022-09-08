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
            id='projects'
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
                        variant='h6'
                        color='textSecondary.main'
                        sx={{ maxWidth: '70%' }}
                    >
                        <b>When:</b> August 2022
                    </Typography>
                    <Typography
                        component='li'
                        variant='h6'
                        color='textSecondary.main'
                        sx={{ maxWidth: '70%' }}
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
                        variant='h6'
                        color='textSecondary.main'
                        sx={{ maxWidth: '70%' }}
                    >
                        <b>What is this project:</b> This is my first project
                        using React to build. The app is a platform for users to
                        suggest books to each other and share their thoughts
                        about some specific books.
                    </Typography>
                </ul>
            </Box>
        </Box>
    )
}

export default Projects
