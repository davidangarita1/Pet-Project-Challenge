import {Link} from "react-router-dom"

const Navbar = ({elements}) => {
    return (
        <div>
            ### Navbar ###
        <div style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
           
           {
               elements.map((element,index)=>{
                   return (<Link key={index} to={"/private/QuestionsPage"}>{element.titulo}</Link>)
               })
           }
        </div>
        </div>
    )
}

export default Navbar
