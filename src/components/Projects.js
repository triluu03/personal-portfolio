import { Box, Typography, Card, CardActionArea } from '@mui/material';

import file from "../PDF_files/Can_you_prove_that_you're_a_human.pdf";

const Projects = () => {
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
    };

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
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        href='https://drive.google.com/file/d/1rTxvQp_ezQNUbith-wdwnnjW5OZqdHgS/view'
                        target='_blank'
                    >
                        <Typography
                            variant='h5'
                            color='textPrimary.main'
                            sx={{ mb: 1 }}
                        >
                            Predicting Vapor Pressure
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            Predicting vapor pressure of atmospheric
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            molecules using R and Machine Learning.
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        ...styles.projectContainer,
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        href='https://drive.google.com/file/d/1H9Vzy7M9NNZ1TD8wVHIEul_PXut7qw-l/view'
                        target='_blank'
                    >
                        <Typography
                            variant='h4'
                            color='textPrimary.main'
                            sx={{ mb: 1 }}
                        >
                            Data Science
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            Predictive Analysis of Natural Disasters
                        </Typography>
                        <Typography variant='body1' color='textSecondary.main'>
                            based on Climate Patterns.
                        </Typography>
                    </CardActionArea>
                </Card>
                <Card
                    sx={{
                        ...styles.projectContainer,
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        href='https://triluu03.github.io/songsite/'
                        target='_blank'
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
                    }}
                >
                    <CardActionArea
                        sx={{ ...styles.projectCardActions }}
                        href={file}
                        target='_blank'
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
        </Box>
    );
};

export default Projects;
