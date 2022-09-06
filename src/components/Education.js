import { Box, Typography } from '@mui/material'
import {
    Timeline,
    TimelineConnector,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineItem,
} from '@mui/lab'

const Education = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    }

    return (
        <Box
            sx={{ width: '100vw', height: 700, bgcolor: 'secondary.main' }}
            style={style}
        >
            <Box sx={{ m: '5%', flexGrow: 1 }}>
                <Typography variant='h3' color='textPrimary.main'>
                    Educations
                </Typography>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant='subtitle1'
                                color='cardTitle.main'
                            >
                                Hanoi-Amsterdam Secondary School (2014 - 2018)
                            </Typography>
                            <Typography
                                variant='h6'
                                color='textPrimary.main'
                                sx={{ mt: 1 }}
                            >
                                <b>Secondary School</b>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant='subtitle1'
                                color='cardTitle.main'
                            >
                                Hanoi-Amsterdam High School for the Gifted (2018
                                - 2021)
                            </Typography>
                            <Typography
                                variant='h6'
                                color='textPrimary.main'
                                sx={{ mt: 1 }}
                            >
                                <b>High School</b>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant='subtitle1'
                                color='cardTitle.main'
                            >
                                University of Helsinki (2021 - present)
                            </Typography>
                            <Typography
                                variant='h6'
                                color='textPrimary.main'
                                sx={{ mt: 1 }}
                            >
                                <b>University</b>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>

            <Box sx={{ m: '5%', flexGrow: 1 }}>
                <Typography variant='h3' color='textPrimary.main'>
                    Extra-Curriculum
                </Typography>
                <Timeline position='alternate'>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant='subtitle1'
                                color='cardTitle.main'
                            >
                                Hanoi-Amsterdam Secondary School (2014 - 2018)
                            </Typography>
                            <Typography
                                variant='h6'
                                color='textPrimary.main'
                                sx={{ mt: 1 }}
                            >
                                <b>Secondary School</b>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant='subtitle1'
                                color='cardTitle.main'
                            >
                                Hanoi-Amsterdam High School for the Gifted (2018
                                - 2021)
                            </Typography>
                            <Typography
                                variant='h6'
                                color='textPrimary.main'
                                sx={{ mt: 1 }}
                            >
                                <b>High School</b>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography
                                variant='subtitle1'
                                color='cardTitle.main'
                            >
                                University of Helsinki (2021 - present)
                            </Typography>
                            <Typography
                                variant='h6'
                                color='textPrimary.main'
                                sx={{ mt: 1 }}
                            >
                                <b>University</b>
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Box>
    )
}

export default Education
