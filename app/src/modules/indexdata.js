/**
 * Manually Index Content
 */
import {displayData} from '../utility';
import elastic from "elasticsearch";


const elasticClient = elastic.Client({
  //host: "http://localhost:9200/"
  host: "http://elasticsearch:9200/"
});


const indexName = "news-article";

const indexData = async (req, res) => {  
  // Index data from a POST request
  if (req.body) {
    console.log("POST BODY:", req.body);
    elasticClient.index({
      index : indexName,
      refresh: true,
      type: 'article',
      body: req.body
    }).then(res => {
      console.log(" Log Indexed");

      displayData (
        res,
        {"message" : "Log Indexed"},
        "success",
        200
      );

    }).catch(err => {
      console.log(err);
      displayData (
        res,
        {"message" : "Failed to index"},
        "failed",
        403
      );

    });
  }
};

export {
  indexData
}