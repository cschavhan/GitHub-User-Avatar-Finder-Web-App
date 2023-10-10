import { HomePage } from "../Pages/HomePage"
import { Route, Routes   } from "react-router-dom"


export const CustomRoute = () => {
    return (
        <Routes>
            <Route path= "/" element= {<HomePage/>}/>
        </Routes>
    )
}