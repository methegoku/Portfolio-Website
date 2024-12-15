import websiteImg1 from '../assets/websiteImg1.webp';
import websiteImg2 from '../assets/websiteImg2.webp';
import websiteImg3 from '../assets/websiteImg3.png';

export default function Projects(){

    const config = {
        projects: [
            {
                image: websiteImg1,
                description: 'A Responsive Website which is built with reactJS and tailwind CSS',
                link: ''
            },

            {
                image: websiteImg2,
                description: 'A Responsive Website which is built with reactJS and tailwind CSS',
                link: ''
            },

            {
                image: websiteImg3,
                description: 'A Responsive Website which is built with reactJS and tailwind CSS',
                link: ''
            }
        ]
    }

    return <section id = "projects" className="flex flex-col py-20 px-5 justify-center bg-primary text-white">

        <div className="w-full">
            <div className="flex flex-col px-10 py-10">
            <h1 className='text-5xl  border-b-4 border-[#fca7ff] mb-5 w-[190px] font-bold'>Projects</h1>
            <p>These are Some of my projects which I have done in my free times... Please check it out!</p>
            </div>
        </div>
            
        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 gap-10'>
                {config.projects.map((project) => (
                    <div className='relative flex'>
                        <img className='h-[200px] w-[500px]' src={project.image}/>
                        <div className='project-desc'>
                            <p className='text-center px-5 py-5'>{project.description}</p>
                            <div className='flex justify-center'>
                                <a className='btn border-2 ' target ='_blank' href={project.link}>View Project</a>
                            </div>
                        </div>
                    </div>
                
                ))}
                
                
                
                
            </div>
            
        </div>

    </section>


}