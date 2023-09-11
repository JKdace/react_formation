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
        <Button bgColor="yellow" style={{width: "250px", padding: "15px"}} onClick={(arg) => { console.log('bouton 1 click',arg) }}>
            Bob  <img src="https://th.bing.com/th/id/OIP.zRDnTG39XZAV8mrNHV5EegHaJM?pid=ImgDet&rs=1" style={{width: "100px", height: "100px"}}/>
        </Button>
        <Button bgColor="white" style={{width: "250px", padding: "15px", color: "black"}} onClick={(arg) => { console.log('bouton 2 click',arg) }}>
            Patrick <img src="https://th.bing.com/th/id/R.6b34ea6d2ef2c3d55b439ff4de096e78?rik=BhHLEo4EXofcew&riu=http%3a%2f%2fauto.img.v4.skyrock.net%2f6009%2f70496009%2fpics%2f2821420424_3.jpg&ehk=Uqv%2f90G5ez5bM3opR6w8TwgPPR2tzgHVFOWFRDABHAs%3d&risl=&pid=ImgRaw&r=0" style={{width: "100px", height: "100px"}}/>
        </Button>
        </div>
};
export default App;