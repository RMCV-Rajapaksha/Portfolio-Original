
import ProjectCard from './components/projectCard';


const ProjectsSection = ({ Projects }) => {
 

  return (
    <section className='flex flex-wrap items-center justify-center gap-16 pl-20 pr-20 mx-32 my-24' id='projects'>
      {Projects && Projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
};

export default ProjectsSection;
