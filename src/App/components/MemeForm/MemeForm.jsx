import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import styles from "./MemeForm.module.css";
import Button from "../Button/Button.jsx";
import { useDispatch, useSelector } from "react-redux";
import { current } from "@reduxjs/toolkit";
import { DummyMeme } from "../../interfaces/common";
import { saveMeme, change } from "../../store/current";


const memeFormInitialState = {};
const MemeForm = (props) => {
  useEffect(() => {
    console.log("montage de MemeForm");
  }, []);
  const [state, setstate] = useState(memeFormInitialState);
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onReset={(evt) => {
          props.onMemeChange(DummyMeme);
        }}
        onSubmit={(evt) => {
          evt.preventDefault();
          props.onMemeSave(props.meme);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={props.meme.titre}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, titre: evt.target.value });
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="image"
          id="image"
          value={props.meme.imageId}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              imageId: Number(evt.target.value),
            });
          }}
        >
          <option value="-1">Pas d'image</option>
          {props.images.map((e, i) => (
            <option key={"opt-img-" + i} value={e.id}>
              {e.titre}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          value={props.meme.text}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, text: evt.target.value });
          }}
          type="text"
        />
        <br />
        <label htmlFor="x">
          <h2 className={styles.inline}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={props.meme.x}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, x: Number(evt.target.value) });
          }}
        />
        <label htmlFor="y">
          <h2 className={styles.inline}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={props.meme.y}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, y: Number(evt.target.value) });
          }}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 className={styles.inline}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={props.meme.color}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, color: evt.target.value });
          }}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 className={styles.inline}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={props.meme.fontSize}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              fontSize: Number(evt.target.value),
            });
          }}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 className={styles.inline}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={props.meme.fontWeight}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              fontWeight: Number(evt.target.value),
            });
          }}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          value={props.meme.underline.checked}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              underline: evt.target.checked,
            });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 className={styles.inline}>underline</h2>
        </label>
        &nbsp;<h2 className={styles.inline}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 className={styles.inline}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          value={props.meme.italic.checked}
          onChange={(evt) => {
            props.onMemeChange({ ...props.meme, italic: evt.target.checked });
          }}
        />
        <hr />
        <br />
        <label htmlFor="frameSizeX">
          <h2 className={styles.inline}>frame size X :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeX"
          id="frameSizeX"
          type="number"
          min="0"
          value={props.meme.frameSizeX}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              frameSizeX: Number(evt.target.value),
            });
          }}
        />
        px
        <label htmlFor="frameSizeY">
          <h2 className={styles.inline}>frame size y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="frameSizeY"
          id="frameSizeY"
          type="number"
          min="0"
          value={props.meme.frameSizeY}
          onChange={(evt) => {
            props.onMemeChange({
              ...props.meme,
              frameSizeY: Number(evt.target.value),
            });
          }}
        />
        px
        <br />
        <br />
        <Button type="submit" bgColor="green">
          Ok
        </Button>
        <Button type="reset" bgColor="red">
          Annuler
        </Button>
      </form>
    </div>
  );
};

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;

export const MemeFormStoredData = (props) => {
  const dispatch = useDispatch();
  const images = useSelector((s) => s.ressources.images);
  const current = useSelector((s) => s.current);

  return (
    <MemeForm
      {...props}
      images={images}
      meme={current}
      onMemeChange={(newMeme) => {
        dispatch(change(newMeme));
      }}
      onMemeSave={(newMeme) => {
        dispatch(saveMeme(newMeme));
      }}
    ></MemeForm>
  );
};
