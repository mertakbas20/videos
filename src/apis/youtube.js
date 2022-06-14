import axios from 'axios';

const KEY = 'AIzaSyAJWCayzdZq2uNfL9ZtPIHiv_RmRH08Xhw';

export default axios.create ({
   baseURL:'https://www.googleapis.com/youtube/v3',
   params: {
    part:'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
   }
});


