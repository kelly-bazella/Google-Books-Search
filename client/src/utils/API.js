import axios from "axios";

// const baseURL ="https://www.googleapis.com/books/v1/volumes?q="+{query}+"&key="
// const apiKey = "AIzaSyD5Ze8DbXCkQxPs-zIAGPZFkt-ILAQtikk";


// export default{
//     searchBooks: function(query){
//         return axios.get(baseURL + apiKey)
//     }
// };

export default {
    getBooks: function(query) {
      return axios.get("/api/books", { params: { q: query } });
    }
  };