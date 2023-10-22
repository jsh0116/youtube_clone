import React from 'react';
import {Routes, useParams} from "react-router-dom";

const Video = () => {
  const { keyword } = useParams();
  return (
    <div className="video">
      Videos {keyword ? keyword : ""}
    </div>
  );
};

export default Video;
