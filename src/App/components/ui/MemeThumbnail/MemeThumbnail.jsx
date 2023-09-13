import React from "react";
import PropTypes from "prop-types";
import styles from "./MemeThumbnail.module.css";
import { useDispatch, useSelector } from "react-redux";
import FlexThumbnail from "../../layout/FlexThumbnail/FlexThumbnail";
import MemeViewer from "../MemeViewer/MemeViewer";
import { change } from "../../../store/current";
import { Link } from "react-router-dom";

const MemeThumbnail = (props) => (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    <FlexThumbnail>
      {props.memes.map((m, mposition) => {
        return (
          <Link to={"/editor/" + m.id} key={"link-thumb" + mposition}>
            <MemeViewer
              basePath=""
              meme={m}
              image={props.images.find((i) => i.id === m.imageId)}
            />
          </Link>
        );
      })}
    </FlexThumbnail>
  </div>
);

MemeThumbnail.propTypes = {};

MemeThumbnail.defaultProps = {};

export default MemeThumbnail;

export const MemeThumbnailStoredData = (props) => {
  const dispatch = useDispatch();
  const memes = useSelector((s) => s.ressources.memes);
  const images = useSelector((s) => s.ressources.images);
  return (
    <MemeThumbnail
      {...props}
      memes={memes}
      images={images}
      onMemeClick={(id) => {
        dispatch(change(memes.find((m) => m.id === id)));
      }}
    />
  );
};
