import { Box, Typography } from '@mui/material'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Skills = () => {
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
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        border: 'solid',
                        width: 'auto',
                        height: 'auto',
                        m: '1%',
                        p: '1%',
                    }}
                >
                    <Box
                        sx={{
                            width: 100,
                            height: 100,
                            border: 'solid',
                            mb: 1,
                            display: 'flex',
                            justifyContent: 'center',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <FontAwesomeIcon icon={faCoffee} />
                    </Box>
                    <Typography>React</Typography>
                </Box>
                <Box
                    sx={{
                        border: 'solid',
                        width: 100,
                        height: 100,
                        m: '1%',
                        p: '1%',
                    }}
                >
                    <Typography>JavaScript</Typography>
                </Box>
                <Box
                    sx={{
                        border: 'solid',
                        width: 100,
                        height: 100,
                        m: '1%',
                        p: '1%',
                    }}
                >
                    <Typography>Python</Typography>
                </Box>
                <Box
                    sx={{
                        border: 'solid',
                        width: 100,
                        height: 100,
                        m: '1%',
                        p: '1%',
                    }}
                >
                    <Typography>R</Typography>
                </Box>
                <Box
                    sx={{
                        border: 'solid',
                        width: 100,
                        height: 100,
                        m: '1%',
                        p: '1%',
                    }}
                >
                    <Typography>SQL</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Skills
