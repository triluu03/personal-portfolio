import { Box, Typography } from '@mui/material'

import { FaDatabase } from 'react-icons/fa'
import { SiJavascript, SiPython, SiReact, SiTypescript } from 'react-icons/si'
import { DiGoogleAnalytics } from 'react-icons/di'

const Skills = () => {
    const styles = {
        skillContainer: {
            border: 1,
            borderRadius: '10px',
            width: 'auto',
            height: 'auto',
            m: '1%',
            p: '1.5%',
        },
        skillBox: {
            width: 100,
            height: 100,
            borderRadius: '50%',
            border: 1,
            // bgcolor: '#B8B8B8',
            mb: 1,
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            alignItems: 'center',
            transitionDuration: '0.5s',
        },
        captionBox: {
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
        },
    }

    return (
        <Box
            sx={{
                width: '100vw',
                height: 'auto',
                bgcolor: 'secondary.main',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                pt: '2%',
                pb: '2%',
            }}
        >
            <Box
                sx={{
                    width: '100vw',
                    mb: '1%',
                    display: 'flex',
                    justifyContent: 'center',
                }}
            >
                <Typography variant='h3' color='textPrimary.main'>
                    Coding Languages Competence
                </Typography>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                }}
            >
                <Box sx={{ ...styles.skillContainer }}>
                    <Box
                        sx={{
                            ...styles.skillBox,
                            ':hover': {
                                bgcolor: '#61dafb',
                                transform: 'rotate(360deg)',
                            },
                        }}
                    >
                        <SiReact fontSize='2em' />
                    </Box>
                    <Box sx={{ ...styles.captionBox }}>
                        <Typography variant='h6'>React</Typography>
                    </Box>
                </Box>
                <Box sx={{ ...styles.skillContainer }}>
                    <Box
                        sx={{
                            ...styles.skillBox,
                            ':hover': {
                                bgcolor: '#F0DB4F',
                                transform: 'rotate(360deg)',
                            },
                        }}
                    >
                        <SiJavascript fontSize='2em' />
                    </Box>
                    <Box sx={{ ...styles.captionBox }}>
                        <Typography variant='h6'>JavaScript</Typography>
                    </Box>
                </Box>
                <Box sx={{ ...styles.skillContainer }}>
                    <Box
                        sx={{
                            ...styles.skillBox,
                            ':hover': {
                                bgcolor: '#007acc',
                                transform: 'rotate(360deg)',
                            },
                        }}
                    >
                        <SiTypescript fontSize='2em' />
                    </Box>
                    <Box sx={{ ...styles.captionBox }}>
                        <Typography variant='h6'>TypeScript</Typography>
                    </Box>
                </Box>
                <Box sx={{ ...styles.skillContainer }}>
                    <Box
                        sx={{
                            ...styles.skillBox,
                            ':hover': {
                                background:
                                    'linear-gradient(to right bottom, rgba(75,139,190,1) 31%, rgba(255,232,115,1) 74%, rgba(255,212,59,1) 100%)',
                                transform: 'rotate(360deg)',
                            },
                        }}
                    >
                        <SiPython fontSize='2em' />
                    </Box>
                    <Box sx={{ ...styles.captionBox }}>
                        <Typography variant='h6'>Python</Typography>
                    </Box>
                </Box>
                {/* <Box sx={{ ...styles.skillContainer }}>
                    <Box
                        sx={{
                            ...styles.skillBox,
                            ':hover': {
                                bgcolor: '#276dc3',
                                transform: 'rotate(360deg)',
                            },
                        }}
                    >
                        <DiGoogleAnalytics fontSize='2.5em' />
                    </Box>
                    <Box sx={{ ...styles.captionBox }}>
                        <Typography variant='h6'>R</Typography>
                    </Box>
                </Box> */}
                <Box sx={{ ...styles.skillContainer }}>
                    <Box
                        sx={{
                            ...styles.skillBox,
                            ':hover': {
                                bgcolor: '#336791',
                                transform: 'rotate(360deg)',
                            },
                        }}
                    >
                        <FaDatabase fontSize='2em' />
                    </Box>
                    <Box sx={{ ...styles.captionBox }}>
                        <Typography variant='h6'>SQL</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills
