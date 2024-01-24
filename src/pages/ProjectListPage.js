import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/ProjectListPage.css'

const projects = [
    {
        id: 1, name: "Karlowsky"
    },
    {
        id: 2, name: "AgencjaWaldi"
    },
    {
        id: 3, name: "Uwarzone"
    },
    {
        id: 4, name: "Festiwal Wina"
    },
    {
        id: 5, name: "GlowUp"
    },
]
const ProjectListPage = () => {

    const list = projects.map(project => (
        <li key={project.id}>
            <Link to={`/project/${project.name}`}>{project.name}</Link>

        </li>
    ))
    return (
        <div className="projects">
            <h2>Lista Moich Projektów</h2>
            <div>
                <ul>
                    {list}
                </ul>
            </div>
        </div>
    );
}

export default ProjectListPage;
