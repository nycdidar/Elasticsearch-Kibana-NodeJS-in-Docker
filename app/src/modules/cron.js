

import elastic from "elasticsearch";
import cron from "node-cron";
import axios from 'axios';

const elasticClient = elastic.Client({
  //host: "http://localhost:9200/"
  host: "http://elasticsearch:9200/"
});

const indexName = "news-article";

const fetchArticles = () => {

  axios.get('http://api.plos.org/search?q=title:DNA')
  .then(function (response) {
    // handle success
    //console.log(response.data.response.docs);
    for (let i = 0; i< response.data.response.docs.length; i++) {
      console.log("Title", response.data.response.docs[i].title_display);
      console.log("Content", response.data.response.docs[i].abstract[0]);

      elasticClient.index({
        index : indexName,
        refresh: true,
        type: 'article',
        body: { "title": response.data.response.docs[i].title_display, "content": response.data.response.docs[i].abstract[0]}
      }).then(res => {
        console.log(" Log Indexed");
      }).catch(err => {
        console.log(err);
      }); 
    }

  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}

export default () => {
  // Run Every Hour
  cron.schedule('0 * * * *', () => {
    console.log('Running Cron Task');
    // your function goes here
  });

  // Run Every Minute
  cron.schedule('* * * * *', () => {
    console.log('Running Cron Task Every Minute');
    fetchArticles();
  });

}
