import React, { useState, useEffect } from "react";
import style from "./Button.module.css";
import propTypes from "prop-types";
/**
 *
 * @param {*} props
 * @returns
 */
const Button = (props) => {
  // Etat pour gérer le fait que le bouton a été cliqué - false à l'init 
  const [isClicked, setIsClicked] = useState(false);
  // Ajout d'un hook pour observer isClicked
  useEffect(() => {
    // quand je clique, au bout de 180 ms je le reset à false
    setTimeout(() => {
      setIsClicked(false);
    }, 180);
  }, [isClicked]);
  return (
    <button
      onClick={(evt) => {
        // Quand je clique je modifie l'état isClicked
        setIsClicked(true);
        // j'appelle via les props la fonction envoyé par le parent, le moyen de remonter des infos, j'indique que j'ai été cliqué
        // 
        // test undefined au cas où on n'a pas besoin du click comme avec un submit, 
        // la fonction n'est pas définie et envoyé par le parent
        if(undefined!==props.onClick)props.onClick();
      }}
      // si isClicked, j'ajoute la classe css clicked
      className={isClicked ? style.Button + " " + style.clicked : style.Button}
      style={{
        backgroundColor: props.bgColor,
        ...props.style,
      }}
      type={props.type}
    >  
      {props.children}
    </button>
  );
};

// warning dans la console si ces définitions ne sont pas respectées
Button.propTypes = {
  children: propTypes.any.isRequired,
  bgColor: propTypes.oneOf(["skyblue", "yellow", "transparent", "white", "green", "red"]),
  style: propTypes.shape({
    width: propTypes.string,
    padding: propTypes.string,
  }),
  type: propTypes.oneOf(["button", "submit", "reset", undefined]),
};

// valeurs de props par défaut
Button.defaultProps = {
  bgColor: "skyblue",
  type: "button"
};

export default Button;
