import { Box, Typography, Link } from '@mui/material'

import file from "../PDF_files/Can_you_prove_that_you're_a_human.pdf"

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
                <b>Where:</b> You guys can check the source code of this app{' '}
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
                src={require('../images/songsite_1.png')}
                alt='songsite'
                style={image}
            />
        </Box>
        <Box sx={{ width: '70%', height: 'auto', mb: '4%' }}>
            <img
                src={require('../images/songsite_2.png')}
                alt='songsite'
                style={image}
            />
        </Box>
    </Box>
)

const BookApp = () => (
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
                <b>Where:</b> You guys can check the source code of this app{' '}
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
                <b>What is this project:</b> This is my first project using
                React to build. The app is a platform for users to suggest books
                to each other and share their thoughts about some specific
                books.
            </Typography>
        </ul>
        <Box sx={{ width: '70%', height: 'auto', mb: '4%' }}>
            <img
                src={require('../images/bookapp.png')}
                alt='songsite'
                style={image}
            />
        </Box>
    </Box>
)

const BlogPost = () => (
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
                <Link href={file} color='cardTitle.main' target='_blank'>
                    here.
                </Link>
            </Typography>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>What is this project:</b> This is a project I did when I was
                studying in a course at the university. We had to read a
                research paper and rewrite it into a popular science blog post.
                I read a research paper about <i>"Minimal Turing Test"</i>, and
                my blog post's title was:{' '}
                <b>A Minimal Turing Test: Can You Prove that You're a Human?</b>{' '}
                I highly recommend you to take a look at my blog post.
            </Typography>
        </ul>
        <Box sx={{ width: '70%', height: 'auto' }}>
            <img
                src={require('../images/blogpost.png')}
                alt='songsite'
                style={image}
            />
        </Box>
    </Box>
)

const EachProject = ({ project }) => {
    switch (project) {
        case 'songsite':
            return <Songsite />
        case 'bookapp':
            return <BookApp />
        case 'blogpost':
            return <BlogPost />
        default:
            return null
    }
}

export default EachProject
