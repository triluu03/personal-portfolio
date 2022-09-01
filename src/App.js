import { ThemeProvider, createTheme } from '@mui/material'

import NavBar from './components/NavBar'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Awards from './components/Awards'
import Footer from './components/Footer'

const theme = createTheme({
    palette: {
        primary: {
            main: '#002B5B',
            light: '#2B4865',
        },
        secondary: {
            main: '#256D85',
            light: '#8FE3CF',
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
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
