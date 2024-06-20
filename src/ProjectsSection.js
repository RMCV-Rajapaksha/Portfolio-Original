
import ProjectCard from './components/projectCard';


const ProjectsSection = ({ Projects }) => {
 

  return (
    <section className='flex flex-wrap items-center gap-4 pl-20 pr-20 my-24 mx-28 justify-evenly' id='projects'>
      {Projects && Projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
