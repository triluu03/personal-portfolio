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
            sx={{ width: '100vw', height: 'auto', bgcolor: 'secondary.main' }}
            style={style}
        >
            <Box sx={{ m: '5%', flexGrow: 1, maxWidth: '40%' }}>
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
                            <Typography
                                color='textSecondary.main'
                                sx={{ mt: 1 }}
                            >
                                In Secondary School, an Entrance Exam, consisted
                                of Math and Literature, was designed to look for
                                the best 200 students that year.
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
                            <Typography color='textSecondary.main'>
                                I took an Entrance Exam designed by the school
                                and got a place to study in the Mathematics
                                Major class.
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
                            <Typography color='textSecondary.main'>
                                I am following 2 study tracks in the university:
                                Mathematics and Computer Science.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>

            <Box sx={{ m: '5%', flexGrow: 1, maxWidth: '40%' }}>
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
                            <Typography color='textSecondary.main'>
                                In High School, we had to take an Entrance Exam
                                desinged specifically for each Major that we
                                wanted to study. I took the Entrance Exam and
                                got a place in Math Major class.
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
