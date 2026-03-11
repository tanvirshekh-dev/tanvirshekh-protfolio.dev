import { useLoaderData } from 'react-router'

const Projects = () => {
    const projects = useLoaderData() ?? [];

  return (
    <div className='w-11/12 mx-auto'>
      {
        projects.map(project => (
            <div key={project.id}>
                <h2>{project.title}</h2>
            </div>
        ))
      }
    </div>
  )
}

export default Projects
