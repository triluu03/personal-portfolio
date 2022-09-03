import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'

import './components.css'

const NavBar = () => {
    return (
        <Box sx={{ width: '100vw', flexGrow: 1 }}>
            <AppBar position='sticky' color='primary'>
                <Toolbar>
                    <DeveloperBoardIcon
                        fontSize='large'
                        sx={{ mr: 2, ml: '1.5%' }}
                    />
                    <Typography
                        sx={{ fontFamily: 'monospace', flexGrow: 1 }}
                        variant='h6'
                        component='div'
                    >
                        Luu Duc Tri
                    </Typography>

                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{
                            m: 1,
                            ':hover': {
                                bgcolor: 'cardTitle.main',
                                color: 'black',
                            },
                        }}
                        className='button'
                    >
                        Home
                    </Button>
                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{
                            m: 1,
                            ':hover': {
                                bgcolor: 'cardTitle.main',
                                color: 'black',
                            },
                        }}
                        className='button'
                    >
                        About
                    </Button>
                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{
                            m: 1,
                            ':hover': {
                                bgcolor: 'cardTitle.main',
                                color: 'black',
                            },
                        }}
                        className='button'
                    >
                        Skills
                    </Button>
                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{
                            m: 1,
                            mr: '2.5%',
                            ':hover': {
                                bgcolor: 'cardTitle.main',
                                color: 'black',
                            },
                        }}
                        className='button'
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
