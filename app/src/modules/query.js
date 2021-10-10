
/**
 * Query Data
 * 
 * Example Call
// http://localhost:3010/query?keyword=books
 * 
 * 
 */
import {displayData} from '../utility';
import elastic from "elasticsearch";
import url from "url";

const elasticClient = elastic.Client({
  //host: "http://localhost:9200/"
  host: "http://elasticsearch:9200/"
});

const indexName = "news-article";



const query = async(req, res) => {

  const queryObject = url.parse(req.url,true).query;
  console.log("* Request Query * ", queryObject.keyword);
  let searchKeyword = queryObject.keyword || false;
  
  let query = {
    index: indexName,
    body: {
      query: {
        match: {
          //quote: searchKeyword
          content: searchKeyword
        }
      }
    }
  }

  if (searchKeyword) {
    elasticClient.search(query)
    .then(resp => {
      console.log(resp);
      console.log("--- Hits ---");
  
      displayData (
        res,
        resp.hits.hits,
        "matching records",
        200
      );
  
      resp.hits.hits.forEach((hit) => {
        console.log(hit);
      })
    })
    .catch(err => {
      console.log("Error", err);
    })
  }
  else {
    displayData (
      res,
      {"error": "missing keyword"},
      "no records",
      200
    );
  }






};

export {
  query
}