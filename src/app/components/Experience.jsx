import React from 'react'
import PropTypes from 'prop-types'

const experiences = [
    {
        id: 1,
        time: '2022 -- Present',
        organization: 'Infosys Limited',
        role: 'Technology Analyst',
        experience: 'Led crucial projects for a finance MNC, excelling in end-to-end application development, troubleshooting, and maintenance. Recognized for guiding teams, applying financial expertise, and seamlessly transitioning to new projects, ensuring continued success.',
        skills: ['React', 'Redux', 'HTML5/CSS3', 'JEST(Unit Testing)', 'Javascript']
    },
    {
        id: 2,
        time: '2019 -- 2022',
        organization: 'Alstom Pvt. Ltd.',
        role: 'Software Test Engineer',
        experience: 'Executed cross-functional tests, creating prototypes with research and coding. Applied railway safety standards expertise in integration testing using C/C++. Enhanced team efficiency through strategic process improvements and certified in railway safety standards.',
        skills: ['C/C++']
    }
]

const Experience = props => {
    return (
        <section id='experience' className='mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24' aria-label="Experience">
            <h5 className='sticky top-0 z-20 -mx-6 mb-4 bg-[#031932] px-6 py-5 backdrop-blur'>Experience</h5>
            <div className="md:pr-12 mt-10">
                <ol className="relative mt-4 border-l border-gray-500">
                    {
                        experiences.map((experience) => (
                            <li key={experience.id} className="mb-10 ml-4">
                                <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border border-gray-500"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400">{experience.time}</time>
                                <div className='my-4 flex justify-between items-center align-center'>
                                <h4 className='text-lg font-medium tracking-tight text-slate-200 sm:text-xl'> {experience.organization} </h4>
                                <p className='text-sm py-1'>{experience.role}</p>
                                </div>
                                <p className="mb-4 text-base font-normal text-gray-300">
                                    {experience.experience}
                                </p>
                                <div className="mt-3 mb-3 flex flex-wrap gap-y-2 text-sm gap-x-1">
                                    {
                                        experience.skills.map((skill, indx) => (
                                            <div key={indx} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                {skill}
                                            </div>
                                        ))
                                    }
                                </div>

                            </li>
                        ))
                    }
                </ol>
            </div>
        </section>
    )
}

Experience.propTypes = {}

export default Experience