import CreateUsers from "./Components/CreateUsers"
import Homecrud from "./Components/Homecrud"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Users from "./Components/Users"
import Editusers from "./Components/Editusers"
const App=()=>{
    return(
        <div>
            <BrowserRouter>
            <Homecrud/>
            <Routes>
                <Route path="/createusers" element={<CreateUsers/>}/>
                <Route path="/users" element={<Users/>}/>
                <Route path="/edit/:index" element={<Editusers/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App