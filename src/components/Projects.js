import { Box, Typography, Card, CardActionArea } from '@mui/material'

import { useState } from 'react'

import Songsite from './projects/Songsite'
import BookApp from './projects/BookApp'
import BlogPost from './projects/BlogPost'
import CovidAnalysis from './projects/CovidAnalysis'

const ProjectToShow = ({ project }) => {
    switch (project) {
        case 'songsite':
            return <Songsite />
        case 'bookapp':
            return <BookApp />
        case 'blogpost':
            return <BlogPost />
        case 'covid_data_analysis':
            return <CovidAnalysis />
        default:
            return null
    }
}

const Projects = () => {
    const [projects, setProjects] = useState('')

    const styles = {
        projectContainer: {
            width: '25%',
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
                bgcolor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'wrap',
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
                    maxWidth: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    mb: '12%',
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
                        onClick={() => {
                            setProjects('songsite')
                            document
                                .getElementById('showing_project')
                                .scrollIntoView({ behavior: 'smooth' })
                        }}
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
                        onClick={() => {
                            setProjects('bookapp')
                            document
                                .getElementById('showing_project')
                                .scrollIntoView({ behavior: 'smooth' })
                        }}
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
                        onClick={() => {
                            setProjects('blogpost')
                            document
                                .getElementById('showing_project')
                                .scrollIntoView({ behavior: 'smooth' })
                        }}
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
            <Box
                sx={{
                    maxWidth: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    mb: '12%',
                }}
            >
                <Card
                    sx={{
                        ...styles.projectContainer,
                        bgcolor:
                            projects === 'covid_data_analysis'
                                ? 'secondary.main'
                                : 'primary.main',
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        onClick={() => {
                            setProjects('covid_data_analysis')
                            document
                                .getElementById('showing_project')
                                .scrollIntoView({ behavior: 'smooth' })
                        }}
                    >
                        <Typography
                            variant='h4'
                            color='textPrimary.main'
                            sx={{ mb: 1 }}
                        >
                            Data Analysis
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            Covid-19 OWID Data
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            PostgreSQL, R
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        ...styles.projectContainer,
                        bgcolor: 'primary.main',
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        // onClick={() => setProjects('')}
                    >
                        <Typography
                            variant='h4'
                            color='textPrimary.main'
                            sx={{ mb: 1 }}
                        ></Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            <i>More will be added soon!</i>
                        </Typography>
                    </CardActionArea>
                </Card>
            </Box>
            <Box id='showing_project'>
                {projects === '' ? null : <ProjectToShow project={projects} />}
            </Box>
        </Box>
    )
}

export default Projects
