import { useState, useEffect } from "react";
import youtube from "../apis/youtube";

const useVideos = defaultSearchTerm => {
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async term => {
    const response = await youtube.get("/search", {
      paramas: {
        q: term
      }
    });
    setVideo(response.data.items);
  };
  return [videos, search];
};
export default useVideos;
