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
        // j'appelle via les props la fonction du parent, le moyen de remonter des infos, j'indique que j'ai été cliqué
        props.onClick();
      }}
      // si isClicked, j'ajoute la classe css clicked
      className={isClicked ? style.Button + " " + style.clicked : style.Button}
      style={{
        backgroundColor: props.bgColor,
        ...props.style,
      }}
    >  
      {props.children}
    </button>
  );
};

// warning dans la console si ces définitions ne sont pas respectées
Button.propTypes = {
  children: propTypes.any.isRequired,
  bgColor: propTypes.oneOf(["skyblue", "yellow", "transparent", "white"]),
  style: propTypes.shape({
    width: propTypes.string,
    padding: propTypes.string,
  }),
};

// valeurs de props par défaut
Button.defaultProps = {
  bgColor: "skyblue",
};

export default Button;
