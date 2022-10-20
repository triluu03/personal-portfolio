import { Box, Typography, Link } from '@mui/material'

const Footer = () => {
    const styles = {
        footerContainer: {
            width: '25%',
            minWidth: 100,
            height: 'auto',
            flexGrow: 1,
            ml: '2%',
        },
    }

    return (
        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                minHeight: '30vh',
                bgcolor: 'primary.main',
                display: 'flex',
                flexDirection: 'column',
                pt: '1%',
                pb: '4%',
            }}
            id='contact'
        >
            <Box
                sx={{
                    maxWidth: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                    mt: '2%',
                    ml: '9%',
                }}
            >
                <Box sx={{ ...styles.footerContainer }}>
                    <Typography color='textSecondary.main'>Email</Typography>
                    <Typography color='textPrimary.main'>
                        tri.luu@helsinki.fi
                    </Typography>
                    <Typography color='textPrimary.main'>
                        triluu.1802@gmail.com
                    </Typography>
                </Box>
                <Box sx={{ ...styles.footerContainer }}>
                    <Typography color='textSecondary.main'>Connect</Typography>
                    <Typography color='textPrimary.main'>
                        <Link
                            href='https://www.linkedin.com/in/triluu03/'
                            target='_blank'
                            color='textPrimary.main'
                            sx={{
                                ':hover': { color: 'cardTitle.main' },
                            }}
                        >
                            LinkedIn
                        </Link>
                    </Typography>
                    <Typography color='textPrimary.main'>
                        <Link
                            href='https://github.com/triluu03'
                            target='_blank'
                            color='textPrimary.main'
                            sx={{
                                ':hover': { color: 'cardTitle.main' },
                            }}
                        >
                            GitHub
                        </Link>
                    </Typography>
                </Box>
                <Box sx={{ ...styles.footerContainer }}>
                    <Typography color='textSecondary.main'>Phone</Typography>
                    <Typography color='textPrimary.main'>
                        (+358) 46 902 1807
                    </Typography>
                </Box>
            </Box>
            <Box
                sx={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    pt: '7%',
                }}
            >
                <Typography color='textSecondary.main' sx={{ mt: '2%' }}>
                    © This website is built all by Tri Luu
                </Typography>
            </Box>
        </Box>
    )
}

export default Footer
