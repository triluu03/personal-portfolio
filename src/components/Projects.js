import { Box, Typography, Link } from '@mui/material';

import BlogPost from "../PDF_files/Can_you_prove_that_you're_a_human.pdf";

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
                    Songsite
                </Typography>
                <ul>
                    <Typography
                        component='li'
                        variant='h6'
                        color='textSecondary.main'
                        sx={{ maxWidth: '70%' }}
                    >
                        <b>When:</b>{' '}
                        <i>
                            <b>still being built</b>
                        </i>
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
                        <b>What is this project:</b> I'm currently building this
                        using React, Redux, TypeScript, and Spotify API.{' '}
                    </Typography>
                </ul>
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
                    BookApp
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
                        <b>What is this project:</b> This is my first project
                        using React to build. The app is a platform for users to
                        suggest books to each other and share their thoughts
                        about some specific books.
                    </Typography>
                </ul>
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
                    Popular Science Blog Post
                </Typography>
                <ul>
                    <Typography
                        component='li'
                        variant='h6'
                        color='textSecondary.main'
                        sx={{ maxWidth: '70%' }}
                    >
                        <b>When:</b> January 2022
                    </Typography>
                    <Typography
                        component='li'
                        variant='h6'
                        color='textSecondary.main'
                        sx={{ maxWidth: '70%' }}
                    >
                        <b>Where:</b> You guys can read the blog post{' '}
                        <Link
                            href={BlogPost}
                            color='cardTitle.main'
                            target='_blank'
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
                        <b>What is this project:</b> This is a project I did
                        when I was studying in a course at the university. We
                        had to read a research paper and rewrite it into a
                        popular science blog post. I read a research paper about{' '}
                        <i>"Minimal Turing Test"</i>, and my blog post's title
                        was:{' '}
                        <b>
                            A Minimal Turing Test: Can You Prove that You're a
                            Human?
                        </b>{' '}
                        I highly recommend you to take a look at my blog post.
                    </Typography>
                </ul>
            </Box>
        </Box>
    );
};

export default Projects;
