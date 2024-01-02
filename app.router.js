import { Routes, Route,Router } from "react-router-dom";
import { Registration } from "./components/user/registration.component";
import { Login } from "./components/user/login.component";
import { Home } from "./components/user/home.component";
import { HomeClass } from "./components/user/home_class.component";
import { Properties } from "./components/user/properties.component";
import { Propertiesclass } from "./components/user/properties_class.component";
import { About } from "./components/user/aboutus.component";
import { Aboutusclass } from "./components/user/aboutus_class.component";
import { Contact } from "./components/user/contact.component";
import { PagenotFound } from "./components/user/pagenotfound.component";
     
export const AppRouter = () => {
    return(
        <Routes>
            
            <Route path="/Registration" element={<Registration></Registration>}></Route>
            <Route path="/Login" element={<Login></Login>}></Route>
            <Route path="/HomeClass" element={<HomeClass></HomeClass>}></Route>
            <Route path="/Properties" element={<Properties></Properties>}></Route>
            <Route path="/Aboutusclass" element={<Aboutusclass></Aboutusclass>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="*" element={<PagenotFound></PagenotFound>}></Route>
            
        </Routes>
    )
}