import axios from "axios";

const KEY = " AIzaSyBMmpHLvtUAogPMPZzbt6N4-Q4ISXEQCjU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY
  }
});
