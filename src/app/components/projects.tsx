'use client';
import { motion } from 'framer-motion';

const projects = [
    {
    title: "Walmart Global Tech",
    description: "Streamlined new client onboarding by building modular components in React, CSS, HTML, Next.js, Apollo Server GraphQL, and Node.js, reducing engineering effort by 80%. Mentored teammates in developing and testing new UI features using React Hooks, Typescript, Cypress, and Jest.",
    techStack: ["React", "Next.js", "Apollo", "Node.js", "GraphQL", "Typescript"],
  },
  {
    title: "Microsoft",
    description: "Led the development of accessible, flexible design systems for internal Microsoft application teams using React, Typescript, and Lit Web Components. Automated multiple aspects of the cloud release process, reducing release management time by 50%, using Azure DevOps, YAML, node scripts, and beachball.",
    techStack: ["React", "Typescript", "Lit", "Azure DevOps", "Node.js"],
  },
  {
    title: "Apex Fintech Solutions",
    description: "Developed a next-generation fintech B2B application using React, Typescript, GraphQL, and Node.js, deploying it to Google Cloud Platform with Kubernetes. Improved application performance through monitoring with DataDog and Splunk, and modernized legacy apps using React hooks, context, and suspense. Triaged and fixed bugs on legacy Angular applications.",
    techStack: ["React", "Typescript", "GraphQL", "Node.js", "Angular", "Scrum"],
  },
    {
      title: "Nike - Assort Visual",
      description: "Spearheaded performance optimizations for a full-stack application, enhancing React component efficiency and fine-tuning cloud architecture. Designed and executed performance testing scenarios across multiple microservices, streamlining CI workflows with automated performance metrics. Implemented proactive alerting using New Relic, ensuring critical issues were resolved before impacting users.",
      techStack: ["NodeJS", "React", "New Relic", "SAFE"],
    },
    {
      title: "Inovalon - QSIXL",
      description: "Led the modernization of a healthcare data analysis application by migrating from legacy Knockout/Kendo architecture to Aurelia. Developed reusable components, driving consistency and maintainability across the app. Actively fostered a culture of Agile best practices, improving team collaboration and overall product quality.",
      techStack: ["Aurelia", "Knockout", "Kendo UI", "Scrum"],
    },
    {
      title: "Inovalon - MyPatient",
      description: "Built a robust web application to streamline insurance claims data retrieval for medical directors, significantly reducing manual data filtering. Leveraged React and Redux to create highly reusable components, with Material UI ensuring a responsive, user-friendly interface.",
      techStack: ["React", "Redux", "Material UI", "Kanban"],
    },
    {
      title: "Catalyte",
      description: "Director of training responsible for over 100 software development trainees in full stack technologies, including React, Node.js, and various databases. Spearheaded a new training program and designed AWS curriculum, improving team efficiency by 50% through new tools and processes.",
      techStack: ["React", "Node.js", "AWS", "MongoDB", "Postgres"],
    },
    {
      title: "Cockram Scenario - Monolith Security",
      description: "Architected and developed a security portal for managing user access to industry-disrupting 3ds Max and AutoCAD plugins. Led the frontend development with React, Redux, and Sagas, ensuring seamless user experience and robust authorization controls.",
      techStack: ["React", "Redux", "Sagas", "Material UI", "Kanban"],
    },
    {
      title: "Cockram Scenario - Monolith AutoCAD Plugin",
      description: "Engineered a custom AutoCAD plugin to accelerate fabrication drawing creation from 3D models, increasing throughput by 5X. Streamlined the drawing process by automating manual labeling, saving significant production time.",
      techStack: ["C#", "WPF", "AutoCAD .NET SDK", "Scrum"],
    },
    {
      title: "Starwood Vacation Ownership - Sales Center Manager",
      description: "Developed a mobile-friendly web application to track guest progress through the sales process, replacing outdated whiteboard tracking. Delivered real-time updates using Node.js with Socket.IO, backed by Redis for quick data retrieval. Deployed the solution on AWS, ensuring scalability and high availability. The project provided a hands-on experience in functional programming and enhanced my expertise in building real-time systems.",
      techStack: ["Node.js", "React", "Redux", "AWS", "Redis", "Scrum"],
    },
  ];
  

const Projects = () => {
  return (
    <div id="projects" className="py-16 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-8">Project Contributions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="p-6 bg-white shadow-md rounded-lg"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
