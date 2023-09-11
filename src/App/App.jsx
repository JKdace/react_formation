import React, { useState, useEffect } from "react";
import Button from "./components/Button/Button.jsx";

/**
 *
 * @param {*} props
 * @returns
 */
const App = (props) => {
  // définition état avec le compteur
  const [state, setState] = useState({ counter: -1 });
  // On observe l'état
  useEffect(() => {
    console.log('useEffect',state)
    /*
    return () => {

    }
    */
  }, [state])
  // Pour fixer la valeur du state une fois que le composant "didmount" (initialisation / montage du composant), on ajoute un effect qui observe "rien" []
  useEffect(() => {
    console.log('montage',state)
    setState({...state,counter:0})
  }, [])
  
  // On envoie une fonction dans les props pour le click du bouton
  return (
    <div className="App">
      valeur de counter : {state.counter}
      <hr />
      <Button
        bgColor="yellow"
        style={{ width: "250px", padding: "15px" }}
        onClick={() => {
          // quand on clique, on met à jour le compteur
          setState({...state,counter:state.counter-1});
        }}
      >
        Bob
        <img
          src="https://th.bing.com/th/id/OIP.zRDnTG39XZAV8mrNHV5EegHaJM?pid=ImgDet&rs=1"
          style={{ width: "100px", height: "100px" }}
        />
      </Button>
      <Button
        bgColor="white"
        style={{ width: "250px", padding: "15px" }}
        onClick={() => {
            setState({...state,counter:state.counter+1});
        }}
      >
        Patrick
        <img
          src="https://th.bing.com/th/id/R.6b34ea6d2ef2c3d55b439ff4de096e78?rik=BhHLEo4EXofcew&riu=http%3a%2f%2fauto.img.v4.skyrock.net%2f6009%2f70496009%2fpics%2f2821420424_3.jpg&ehk=Uqv%2f90G5ez5bM3opR6w8TwgPPR2tzgHVFOWFRDABHAs%3d&risl=&pid=ImgRaw&r=0"
          style={{ width: "100px", height: "100px" }}
        />
      </Button>
    </div>
  );
};
export default App;
