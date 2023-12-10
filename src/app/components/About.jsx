import React from 'react'
import PropTypes from 'prop-types'

const skills = [
    {
        id: 1,
        skill: 'React.JS'
    },
    {
        id: 2,
        skill: 'HTML5/CSS3'
    },
    {
        id: 3,
        skill: 'UI/UX Design'
    },
    {
        id: 4,
        skill: 'JEST(Unit Testing)'
    },
    {
        id: 5,
        skill: 'Javascript'
    },
    {
        id: 6,
        skill: 'Redux'
    },
    {
        id: 7,
        skill: 'NodeJS'
    },
    {
        id: 8,
        skill: 'MongoDB'
    },
    {
        id: 9,
        skill: 'System Design'
    }
]

const About = props => {
    return (
        <section id='about' className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <p>
                I'm a front-end developer with over <span className='text-white hover:underline hover:underline-offset-2 hover:decoration-teal-300'>4+ years of experience </span>in frontend development using React, specialising in global finance. Recognised for my outstanding work, I've earned many accolades and created utility libraries which is used across teams. Holding certifications in <span className='text-white hover:underline hover:underline-offset-2 hover:decoration-teal-300'>AI foundation</span>, <span className='text-white hover:underline hover:underline-offset-2 hover:decoration-teal-300'>React</span>, and <span className='text-white hover:underline hover:underline-offset-2 hover:decoration-teal-300'>Secure SDLC</span>, I bring a comprehensive understanding of <span className='text-white hover:underline hover:underline-offset-2 hover:decoration-teal-300'>UI/UX design</span>. I've also contributed to <span className='text-white hover:underline hover:underline-offset-2 hover:decoration-teal-300'>team growth through L&D</span>. My commitment lies in delivering excellence and fostering innovation in every project I undertake.
            </p>

            <p className='pt-4 mb-2'>Skills</p>
            <div className="mt-3 mb-3 flex flex-wrap gap-y-2 text-sm gap-x-1">
                {
                    skills.map((skill) => (
                        <div key={skill.id} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                            {skill.skill}
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

About.propTypes = {}

export default About