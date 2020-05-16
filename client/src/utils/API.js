import axios from "axios";
import config from "../config"


const baseURL ="https://www.googleapis.com/books/v1/volumes?q=";
const apiKey = config.apiKey;

export default{
    searchBooks: function(query){
        return axios.get(baseURL + query + "&key=" + apiKey)
    }
};

// export default {
//     getBooks: function(query) {
//       return axios.get("/api/books", { params: { q: query } });
//     }
//   };