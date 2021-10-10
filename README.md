# Elasticsearch Kibana with NodeJS
A complete dockerized integration of Elastic Search, Kibana and NodeJS


![Recurrent Neural Network](https://antaresnet.com/wp-content/uploads/2018/07/Elasticsearch-Logo-Color-V.png "Recurrent Neural Network")
### Run
`docker-compose up -d`

### Kibana URL
http://localhost:5601/

### Elastic Endpoint
http://localhost:9200/


Wait about one minute for `node-cron` to kick in. Once it's indexed few sample data. You will be able to query 
http://localhost:3010/query?keyword=dna


Here is the code that runs in every minute using `cron` syntanx. 
Source: `app/src/modules/cron.js`
```
// Run Every Minute
  cron.schedule('* * * * *', () => {
    console.log('Running Cron Task Every Minute');
    fetchArticles();
  });
  ```

Alternatively, you can also modify `app/src/modules/indexdata.js` to manually index data using `Postman`

In `app/src/modules/cron.js`, there is an integration to fetch data from a web which will periodically extract data and index.


## Links
##### [Docker](https://www.docker.com/)
##### [Elasticsearch](https://www.elastic.co/)
