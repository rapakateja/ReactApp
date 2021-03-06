import { Link } from 'react-router-dom'


const About = () => {
    return (
        <div>
            
            <h4>Version 1.0.0</h4>
            <br/>
            <br/>
            <h5>For more information please watch crash course using the bellow link</h5>
            <a href="https://www.youtube.com/watch?v=w7ejDZ8SWv8">ReactJS Crash Course 2021</a>
            <br/>
            <br/>
            <Link to ="/">Go Back</Link>
        </div>
    )
}

export default About
