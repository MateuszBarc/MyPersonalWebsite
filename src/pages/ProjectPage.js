import React from 'react';
import { Link } from 'react-router-dom'
import Project from '../components/Project'
const ProjectPage = ({ match }) => {

    return (
        <>        <div>
            Strona Projektu
            <Project id={match.params.id} />
            <Link to="/project">Powrót do listy Projektów</Link>
        </div>
        </>
    );
}

export default ProjectPage;

