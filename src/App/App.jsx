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
        <Button text="bob" bgColor="tomato" style={{width: "150", padding: "15px"}} onClick={(arg) => { console.log('bouton 1 click',arg) }}/>
        <Button text="patrick" bgColor="skyblue" onClick={(arg) => { console.log('bouton 2 click',arg) }}/>
        </div>
};
export default App;