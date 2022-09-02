import { Box, Typography, AppBar, Toolbar, Button } from '@mui/material'
import DeveloperBoardIcon from '@mui/icons-material/DeveloperBoard'

const NavBar = () => {
    return (
        <Box sx={{ width: '100vw', height: 95, flexGrow: 1 }}>
            <AppBar position='sticky' color='primary'>
                <Toolbar>
                    <DeveloperBoardIcon
                        fontSize='large'
                        sx={{ mr: 2, ml: '1.5%' }}
                    />
                    <Typography
                        sx={{ fontFamily: 'monospace', flexGrow: 1 }}
                        variant='h6'
                    >
                        Luu Duc Tri
                    </Typography>

                    <Button color='cardTitle' variant='outlined' sx={{ m: 1 }}>
                        Home
                    </Button>
                    <Button color='cardTitle' variant='outlined' sx={{ m: 1 }}>
                        About
                    </Button>
                    <Button color='cardTitle' variant='outlined' sx={{ m: 1 }}>
                        Skills
                    </Button>
                    <Button
                        color='cardTitle'
                        variant='outlined'
                        sx={{ m: 1, mr: '2.5%' }}
                    >
                        Contact
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default NavBar
