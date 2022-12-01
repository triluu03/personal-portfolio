import { Box, Typography, Link } from '@mui/material'

const image = {
    maxWidth: '100%',
    height: 'auto',
    borderRadius: '16px',
}

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
                <b>When:</b> August 2022 - <i>extending</i>
            </Typography>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>Extension:</b> I am building another backend using{' '}
                <span style={{ color: '#8FE3CF' }}>Django</span> and{' '}
                <span style={{ color: '#8FE3CF' }}>PostgreSQL.</span>
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
                <b>What is this project:</b> This app is a platform for users to
                suggest books to each other and share their thoughts about
                specific books. This is my first project built by using{' '}
                <span style={{ color: '#8FE3CF' }}>
                    React, Redux, NodeJS, Express,
                </span>{' '}
                and <span style={{ color: '#8FE3CF' }}>MongoDB.</span>{' '}
            </Typography>
        </ul>
        <Box sx={{ width: '70%', height: 'auto', mb: '4%' }}>
            <img
                src={require('../../images/bookapp.png')}
                alt='bookapp'
                style={image}
            />
        </Box>
    </Box>
)

export default BookApp
