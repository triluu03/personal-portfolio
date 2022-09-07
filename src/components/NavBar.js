import { Typography, AppBar, Toolbar, Button, Slide } from '@mui/material'
import useScrollTrigger from '@mui/material/useScrollTrigger'

import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'

const HideOnScroll = ({ children }) => {
    const trigger = useScrollTrigger()
    return (
        <Slide appear={false} direction='down' in={!trigger}>
            {children}
        </Slide>
    )
}

const NavBar = () => {
    return (
        <HideOnScroll>
            <AppBar position='sticky' color='primary' sx={{ width: '100vw' }}>
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
                        href='#home'
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
                        href='#about'
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
                        href='#skills'
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
                        href='#contact'
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar
