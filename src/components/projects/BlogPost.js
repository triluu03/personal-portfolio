import { Box, Typography, Link } from '@mui/material'

import file from "../../PDF_files/Can_you_prove_that_you're_a_human.pdf"

const image = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '16px',
}

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
                src={require('../../images/blogpost.png')}
                alt='songsite'
                style={image}
            />
        </Box>
    </Box>
)

export default BlogPost
