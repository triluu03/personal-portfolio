import { ThemeProvider, createTheme } from '@mui/material'

import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
// import Awards from './components/Awards'
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
        textPrimary: {
            main: '#FFFFFF',
        },
        textSecondary: {
            main: '#808080',
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={appTheme}>
            <NavBar />
            <Header />
            <About />
            <Education />
            <Projects />
            <Skills />
            {/*<Awards />*/}
            <Footer />
        </ThemeProvider>
    )
}

export default App
