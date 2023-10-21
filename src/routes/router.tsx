
import React from "react";
import { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import Video from "../pages/videos/Video";
import NotFound from "../pages/NotFound";
import App from "../App";
import VideoDetail from "../pages/videos/VideoDetail";

export const RouterInfo: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "videos",
        element: <Video />,
      },
      {
        path: "videos/:keyword",
        element: <Video />,
      },
      {
        path: "videos/watch/:videoId",
        element: <VideoDetail />
      }
    ]
  },

]
