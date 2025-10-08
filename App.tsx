//import React, { useState } from 'react';
//import Cart from './components/Cart';
//import ProductList from './components/ProductList';
//import {Product} from './components/type';
import React from 'react';
//import FanSwitch from './components/FanSwitch';
//import Counter from './components/Counter';
//import TodoApp from './components/TodoApp';
//import UserCard from './components/UserCard';
//import Login from './components/Login';
import TaskManager from './components/taskManager';


const App: React.FC = () => {
   /* const [cart, setCart] = useState<Product[]>([]);


    const handleAddToCart = (product: Product) => {
        setCart(Prev => [...Prev, product]);
    }*/

    return(
        <TaskManager />
        
       // <Login />
       // <UserCard/>
       // <TodoApp />
     //   <Counter />
        //<FanSwitch />
        /*<div>
            <h1>My Store</h1>
            <ProductList onAddToCart = {handleAddToCart}/>
            <Cart items={cart}/>
        </div>*/
    )
}

export default App;