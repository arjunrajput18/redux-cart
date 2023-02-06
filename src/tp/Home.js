
import { Link } from "react-router-dom"
function Home(){
    return (<>  <h1>Home  component page</h1>
    <p>This is a Home Page of Our awesome App</p>
    
    <p>Here we  are learning about Router</p>
    <Link to="/about">go to About page</Link>
    </>
      
    )
}


export default Home