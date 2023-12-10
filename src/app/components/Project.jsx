import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link';
import Image from 'next/image';


const Project = () => {
    const [data, setData] = useState(null);
    useEffect(() => {
        let abortController = new AbortController();
        let signal = abortController.signal;

        fetch('/api/fetchProjects', {
            method: 'get',
        }, signal).then((resp) => {
            return resp.json()
        }).then((data) => {
            setData(data.project);
        }).catch(err => {
            console.log(err)
        })

        return () => {
            abortController.abort();
        }

    }, [])

    return (
        <section id='projects' className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="projects">
            <h5 className='sticky top-0 z-20 -mx-6 mb-4 bg-[#031932] px-6 py-5 backdrop-blur'>Projects</h5>
            <div className="md:pr-12 mt-10">
                <ol className="relative mt-4">
                    {
                        data?.map((project) => (
                            <Link key={project.id} href={project.link ?? '#'} target='_blank' rel='noreferrer noopener'>
                                <li className="group mb-12">
                                    <div className='cursor-pointer relative flex pb-1 items-start transition-all lg:hover:!opacity-100 lg:group-hover/list:opacity-100'>
                                        <Image
                                            src={project.image}
                                            height={150}
                                            width={150}
                                            className='border border-gray-600 rounded-md m-3'
                                            alt={project.title}
                                        />
                                        <div className='mx-2'>
                                            <div className='absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-[#031932]/20 lg:group-hover:drop-shadow-lg lg:group-hover:border-[0.5px] lg:group-hover:border-gray-500'></div>
                                            <div className='z-10 mt-2 flex justify-between items-center align-center'>
                                                <h4 className='text-lg font-medium tracking-tight text-slate-200 sm:text-xl'> 
                                                {project.title} 
                                                {
                                                        <span title={project.isActive ? "Active" : "Inactive"} className={`absolute right-0 bottom-0 w-3 h-3 items-center rounded-full ${project.isActive ? "bg-teal-300" : "bg-red-300"}`}></span>
                                                }
                                                </h4>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px" aria-hidden="true"><path fillRule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clipRule="evenodd"></path></svg>
                                            </div>
                                            <p className="mb-4 z-10 font-normal text-gray-300">
                                                {project.description}
                                            </p>
                                            <div className="mt-3 z-10 mb-3 flex flex-wrap gap-y-2 text-sm gap-x-1">
                                                {
                                                    project.skills.map((skill, indx) => (
                                                        <div key={indx} className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                                            {skill}
                                                        </div>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    </div>

                                </li>
                            </Link>
                        ))
                    }
                </ol>
            </div>
        </section>
    )
}

Project.propTypes = {}

export default Project