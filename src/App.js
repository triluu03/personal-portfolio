import { ThemeProvider, createTheme } from '@mui/material'

import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Awards from './components/Awards'
import Footer from './components/Footer'

export const appTheme = createTheme({
    palette: {
        primary: {
            main: '#002B5B',
            contrastText: '#FFFFFF',
        },
        secondary: {
            main: '#2B4865',
            contrastText: '#FFFFFF',
        },
        cardBackground: {
            main: '#256D85',
        },
        cardTitle: {
            main: '#8FE3CF',
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <NavBar />
            <Header />
            <About />
            <Skills />
            <Education />
            <Awards />
            <Footer />
        </ThemeProvider>
    )
}

export default App
