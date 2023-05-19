import {Navbar} from "../../components/Navbar"
import {Footer} from "../../../../client-v1/src/components/Footer"


interface Layouts {
    children:React.ReactNode;
}

const Layouts = ({children} : Layouts) => {
  return (
    <>
    <Navbar/>
        {children}
    <Footer/>
    </>
  )
}

export default Layouts;

