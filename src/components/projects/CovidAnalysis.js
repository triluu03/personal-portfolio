import { Box, Typography, Link } from '@mui/material'

// const image = {
//     maxWidth: '100%',
//     height: 'auto',
//     borderRadius: '16px',
// }

const CovidAnalysis = () => (
    <Box
        sx={{
            display: 'flex',
            width: '100%',
            justifyContent: 'left',
            flexDirection: 'column',
            ml: '6%',
        }}
    >
        <Typography variant='h3' color='textPrimary.main'>
            Covid-19 Data Analysis
        </Typography>
        <ul>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>When:</b> <i>still being built</i>
            </Typography>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>Where:</b> You guys can check the source code of this project{' '}
                <Link
                    href='https://github.com/triluu03/covid_data_analysis'
                    target='_blank'
                    color='cardTitle.main'
                >
                    here.
                </Link>
            </Typography>
            <Typography
                component='li'
                variant='h6'
                color='textSecondary.main'
                sx={{ maxWidth: '70%' }}
            >
                <b>What is this project:</b> This is a data analysis project
                that visualize correlations between Covid-19 spread and social
                factors. I built this using{' '}
                <span style={{ color: '#8FE3CF' }}>PostgreSQL, R</span> and{' '}
                <span style={{ color: '#8FE3CF' }}>OWID Covid-19 Data</span>{' '}
            </Typography>
        </ul>
        {/* <Box sx={{ width: '70%', height: 'auto', mb: '1%' }}>
            <img
                src={require('../../images/songsite_1.png')}
                alt='songsite'
                style={image}
            />
        </Box>
        <Box sx={{ width: '70%', height: 'auto', mb: '4%' }}>
            <img
                src={require('../../images/songsite_2.png')}
                alt='songsite'
                style={image}
            />
        </Box> */}
    </Box>
)

export default CovidAnalysis
