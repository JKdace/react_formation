import React from 'react'
import Button from './components/Button/Button.jsx';
/**
 * 
 * @param {*} props 
 * @returns 
 */
const App=(props) => {
    return <div className='App'>
        HW<hr/>
        <Button text="bob" bgColor="tomato"/>
        <Button text="patrick" bgColor="skyblue"/>
        </div>
};
export default App;