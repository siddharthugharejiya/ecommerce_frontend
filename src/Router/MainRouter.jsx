
import { Route, Routes } from 'react-router-dom';
import Home from '../Compontes/Home';
import Cart from '../Compontes/Cart';
import Signup from '../Compontes/Signup';
import Login from '../Compontes/Login';
import Singlepage from '../Compontes/Singlepage';

import AllProduct from '../Compontes/Product';
import { Dashboard } from '../Compontes/Dashboard';
import { Asidebar } from '../Compontes/Asidebar';
import { Add_Pro } from '../Compontes/Add_Pro';
import GETPRO from '../Compontes/GETPRO';
import PriveRoute from '../Compontes/PriveRoute';
import { Addproduct } from '../Compontes/Addproduct';
import { Subcategory } from '../Compontes/Subcategory';



const MainRouter = () => {
    return (
        <Routes>
            <Route element={<Home />} path='/'></Route>
            <Route element={<Cart />} path='/cart/:id'></Route>
            <Route element={<Signup />} path='/signup'></Route>
            <Route element={<Login />} path='/login'></Route>
            <Route element={
                <PriveRoute>
                    <AllProduct />
                </PriveRoute>
            } path='/product'></Route>
            <Route element={<Singlepage />} path='/single/:id'></Route>
            <Route path='/desh' element={<Dashboard />}></Route>
            <Route path='/add' element={<Add_Pro />}></Route>
            <Route path='/aside' element={<Asidebar />}></Route>
            <Route path='/get' element={<GETPRO />}></Route>
            <Route path='/add/:id' element={<Add_Pro />}></Route>
            <Route path='/category' element={<Addproduct />}></Route>
            <Route path='/subcategory' element={<Subcategory />}></Route>



        </Routes>
    )
}

export default MainRouter;
