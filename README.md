# Elasticsearch Kabana with NodeJS
A complete dockerized integration of Elastic Search, Kabana and NodeJS


![Recurrent Neural Network](https://antaresnet.com/wp-content/uploads/2018/07/Elasticsearch-Logo-Color-V.png "Recurrent Neural Network")
### Run
`docker-compose up -d`

### Kabana URL
http://localhost:5601/

### Elastic Endpoint
http://localhost:9200/


Wait about one minute for `node-cron` to kick in. Once it's indexed few sample data. You will be able to query 
http://localhost:3010/query?keyword=dna

You can also modify `app/src/modules/indexdata.js` to manually index data using `Postman`

In `app/src/modules/cron.js`, there is an integration to fetch data from a web which will periodically extract data and index.


## Usefull Links
##### [Docker](https://www.docker.com/)
##### [Elasticsearch](https://www.elastic.co/)
