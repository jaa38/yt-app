import axios from 'axios';

const KEY = 'AIzaSyBsViiOscWan5K0kdUX_absEpAEDFk9ycc';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY,
  },
});
