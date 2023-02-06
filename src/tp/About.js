import { Link } from "react-router-dom"

function About(){
    return (<>
        <h1>About PAge</h1>
        <p>This is a Home Page of Our awesome App</p>
    
    <p>Here we  are learning about Router</p>
    <Link to="/">Go to Home Page</Link>
        </>
    )
}


export default About