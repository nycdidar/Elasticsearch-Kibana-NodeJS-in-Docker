/**
 * 
 * Main Router
 * 
 * 
 */
import express from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import {verifyAPIKey} from './core/helper'
import {indexData} from './modules/indexdata'
import {query} from './modules/query'


// Flag to protect all routes globally. Default false
const protectAllRoutes = process.env.RESTRICTED || false;

export function routes(app) {

  // cors
  const corsOptions = {
    allowedHeaders: ['X-Requested-With', 'Content-Type'],
    origin: '*',
  };

  app.use(cors(corsOptions));
  app.use(cookieParser());
  // Parse JSON bodies (as sent by API clients)
  app.use(express.json());
  app.use(
    express.urlencoded({
      extended: true
    })
  );

  // middleware
  app.use( (req, res, next) => {
    console.log('Time:', Date.now());

    if (protectAllRoutes == true) {
      verifyAPIKey(req, res);
    }
    
    next();
  })

  app.use('/index', (req, res) => { 
    console.log("Req Body", req.body)
    indexData (req, res);
  });

  app.use('/query', (req, res) => { 
    console.log("Req Body", req.body)
    query (req, res);
  });

  app.use('/', (req, res) => { 
    res.status(500).send({"hello": "world"});
    next();
  });

  // Default error handler
  app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
  })  

}