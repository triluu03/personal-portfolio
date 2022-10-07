// import { useInView } from 'react-intersection-observer'

import { Box, Typography } from '@mui/material'
import {
    Timeline,
    TimelineConnector,
    TimelineSeparator,
    TimelineDot,
    TimelineContent,
    TimelineOppositeContent,
    TimelineItem,
} from '@mui/lab'

import 'animate.css'

const Education = () => {
    const style = {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'row',
    }

    const timelineItemStyle = {
        border: 1,
        borderColor: 'cardTitle.main',
        borderRadius: 3,
        p: 2,
        bgcolor: 'primary.light',
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
                <Timeline position='right' align='left'>
                    <TimelineItem>
                        <TimelineOppositeContent
                            color='cardTitle.main'
                            sx={{ flex: 0.2 }}
                        >
                            2014-2018
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box sx={{ ...timelineItemStyle }}>
                                <Typography
                                    variant='subtitle1'
                                    color='cardTitle.main'
                                >
                                    Hanoi-Amsterdam Secondary School
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
                                    In Secondary School, an Entrance Exam,
                                    consisted of Math and Literature, was
                                    designed to look for the best 200 students
                                    that year.
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            color='cardTitle.main'
                            sx={{ flex: 0.2 }}
                        >
                            2018-2021
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box sx={{ ...timelineItemStyle }}>
                                <Typography
                                    variant='subtitle1'
                                    color='cardTitle.main'
                                >
                                    Hanoi-Amsterdam High School for the Gifted
                                </Typography>
                                <Typography
                                    variant='h6'
                                    color='textPrimary.main'
                                    sx={{ mt: 1 }}
                                >
                                    <b>High School</b>
                                </Typography>
                                <Typography color='textSecondary.main'>
                                    I took an Entrance Exam designed by the
                                    school and got a place to study in the
                                    Mathematics Major class.
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            color='cardTitle.main'
                            sx={{ flex: 0.2 }}
                        >
                            2021-2024
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box sx={{ ...timelineItemStyle }}>
                                <Typography
                                    variant='subtitle1'
                                    color='cardTitle.main'
                                >
                                    University of Helsinki
                                </Typography>
                                <Typography
                                    variant='h6'
                                    color='textPrimary.main'
                                    sx={{ mt: 1 }}
                                >
                                    <b>University</b>
                                </Typography>
                                <Typography color='textSecondary.main'>
                                    I am following 2 study tracks in the
                                    university: Mathematics and Computer
                                    Science. I'm gaining more and more interests
                                    in Machine Learning and Artificial
                                    Intelligence.
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>

            <Box sx={{ m: '5%', flexGrow: 1, maxWidth: '40%' }}>
                <Typography variant='h3' color='textPrimary.main'>
                    Extra-Curriculum
                </Typography>
                <Timeline position='left' align='right'>
                    <TimelineItem>
                        <TimelineOppositeContent
                            color='cardTitle.main'
                            sx={{ flex: 0.2 }}
                        >
                            Mar 2019 - Jun 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box sx={{ ...timelineItemStyle }}>
                                <Typography
                                    variant='subtitle1'
                                    color='cardTitle.main'
                                >
                                    Head of Human Resources
                                </Typography>
                                <Typography
                                    variant='h6'
                                    color='textPrimary.main'
                                    sx={{ mt: 1 }}
                                >
                                    <b>High School Help Kit</b>
                                </Typography>
                                <Typography
                                    color='textSecondary.main'
                                    sx={{ mt: 1 }}
                                >
                                    We joined together as a non-profit
                                    organization aimed to help secondary
                                    students understand more about the high
                                    schools for the Gifted in Hanoi.
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            color='cardTitle.main'
                            sx={{ flex: 0.2 }}
                        >
                            Apr 2020 - Nov 2020
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box sx={{ ...timelineItemStyle }}>
                                <Typography
                                    variant='subtitle1'
                                    color='cardTitle.main'
                                >
                                    Representative of Math Major
                                </Typography>
                                <Typography
                                    variant='h6'
                                    color='textPrimary.main'
                                    sx={{ mt: 1 }}
                                >
                                    <b>Hanoi-Amsterdam High School</b>
                                </Typography>
                                <Typography
                                    color='textSecondary.main'
                                    sx={{ mt: 1 }}
                                >
                                    I served as the representative for the Math
                                    Major to work as the "pipeline" for the
                                    information flow between my major and the
                                    Directors of NHAT competition.
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent
                            color='cardTitle.main'
                            sx={{ flex: 0.2 }}
                        >
                            Jan 2019 - present
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot color='cardTitle' />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Box sx={{ ...timelineItemStyle }}>
                                <Typography
                                    variant='subtitle1'
                                    color='cardTitle.main'
                                >
                                    Student Representative
                                </Typography>
                                <Typography
                                    variant='h6'
                                    color='textPrimary.main'
                                    sx={{ mt: 1 }}
                                >
                                    <b>University of Helsinki</b>
                                </Typography>
                                <Typography
                                    color='textSecondary.main'
                                    sx={{ mt: 1 }}
                                >
                                    I serve as vice-member of student
                                    representatives, contributing to the
                                    development of our faculty (Faculty of
                                    Science).
                                </Typography>
                            </Box>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
            </Box>
        </Box>
    )
}

export default Education
