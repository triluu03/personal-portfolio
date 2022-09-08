import { Box, Typography } from '@mui/material'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
    return (
        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                bgcolor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                pt: '2%',
                pb: '2%',
            }}
            id='contact'
        >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                }}
            >
                <Typography variant='h3' color='textPrimary.main'>
                    Get in Touch
                </Typography>
            </Box>
            <Box sx={{ mt: '1.5%', textAlign: 'center' }}>
                <Typography>
                    <a href='https://www.linkedin.com/in/triluu03/'>
                        <LinkedInIcon
                            color='textPrimary'
                            sx={{
                                fontSize: '5em',
                                ':hover': {
                                    color: 'cardTitle.main',
                                },
                            }}
                        />
                    </a>{' '}
                    <a href='https://github.com/triluu03'>
                        <GitHubIcon
                            color='textPrimary'
                            sx={{
                                fontSize: '5em',
                                ':hover': {
                                    color: 'cardTitle.main',
                                },
                            }}
                        />
                    </a>
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
