import axios from "axios"; 
const BASE_URL = `https://pixabay.com/api/`
const API_KEY = '29632801-66d18c979cc1b04cff9f90142'

export default class ImgApi {
    constructor() {
    this.searchQuerry = '';
    this.page = 1;
    }

async fetchPictures() {    
const response = await axios.get(BASE_URL, {
    params: {
    key: API_KEY,
    q: `${this.searchQuerry}`,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page: `${this.page}`,
    per_page: '40'
    }
});

this.incrementPage();
return response.data;
}

incrementPage() {
    this.page += 1;
}
resetPage() {
    this.page = 1;
}
    
    get query() {
        return this.searchQuerry;
    }
    set query(newQuerry) {
        this.searchQuerry = newQuerry;
    }
}