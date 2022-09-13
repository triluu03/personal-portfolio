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
    const buttonStyles = {
        m: 1,
        ':hover': {
            bgcolor: 'cardTitle.main',
            color: 'black',
        },
    }

    const scrollToComponent = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: 'smooth' })
    }

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
                        sx={{ ...buttonStyles }}
                        onClick={() => scrollToComponent('home')}
                    >
                        Home
                    </Button>
                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{ ...buttonStyles }}
                        onClick={() => scrollToComponent('about')}
                    >
                        About
                    </Button>
                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{ ...buttonStyles }}
                        onClick={() => scrollToComponent('projects')}
                    >
                        Details
                    </Button>
                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{
                            ...buttonStyles,
                            mr: '2.5%',
                        }}
                        onClick={() => scrollToComponent('contact')}
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </HideOnScroll>
    )
}

export default NavBar
