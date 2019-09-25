import axios from 'axios';

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers:{ Authorization: 'Client-ID b2698351b29cd4ed48f4205973ce312cdb11a61c71da5ae81a2c2630c2af3df1'}
});