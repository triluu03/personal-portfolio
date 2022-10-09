import { Box, Typography, Card, CardActionArea } from '@mui/material'

import { useState } from 'react'

import EachProject from './EachProject'

const Projects = () => {
    const [projects, setProjects] = useState('')

    const styles = {
        projectContainer: {
            width: 350,
            maxWidth: '25%',
            aspectRatio: '2/1',
            bgcolor: 'primary.main',
            border: 3,
            borderColor: 'secondary.main',
            borderRadius: '16px',
            m: '1.5%',
            transitionDuration: '1s',
            ':hover': {
                bgcolor: 'secondary.main',
            },
        },
        projectCardActions: {
            width: '100%',
            height: '100%',
            p: '2%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }

    return (
        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                minHeight: '50vh',
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
                    sx={{ mt: '5%', mb: '2.5%' }}
                    fontSize='3.5em'
                >
                    My Projects
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    width: '100%',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    mb: '2%',
                }}
            >
                <Card
                    sx={{
                        ...styles.projectContainer,
                        bgcolor:
                            projects === 'songsite'
                                ? 'secondary.main'
                                : 'primary.main',
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        onClick={() => setProjects('songsite')}
                    >
                        <Typography
                            variant='h4'
                            color='textPrimary.main'
                            sx={{ mb: 1 }}
                        >
                            Songsite
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            React, Redux, TypeScript
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            Material UI, Spotify API
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        ...styles.projectContainer,
                        bgcolor:
                            projects === 'bookapp'
                                ? 'secondary.main'
                                : 'primary.main',
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        onClick={() => setProjects('bookapp')}
                    >
                        <Typography
                            variant='h4'
                            color='textPrimary.main'
                            sx={{ mb: 1 }}
                        >
                            BookApp
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            React, Redux, Material UI
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            Express, MongoDB
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        ...styles.projectContainer,
                        bgcolor:
                            projects === 'blogpost'
                                ? 'secondary.main'
                                : 'primary.main',
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        onClick={() => setProjects('blogpost')}
                    >
                        <Typography
                            variant='h4'
                            color='textPrimary.main'
                            sx={{ mb: 1 }}
                        >
                            Blog Post
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            Popular Science Blog Post
                        </Typography>
                    </CardActionArea>
                </Card>
            </Box>
            {projects === '' ? null : <EachProject project={projects} />}
        </Box>
    )
}

export default Projects
