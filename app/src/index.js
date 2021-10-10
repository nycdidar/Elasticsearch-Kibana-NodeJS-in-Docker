/**
 * Elastic Search API Bootloader
 * 
 */

import axios from 'axios';
import qs from "qs"; 
import fs from "fs";
import dotenv from "dotenv";

import express from 'express';
import { boot } from './core/boot';
import cron from "./modules/cron";

dotenv.config();

const port = process.env.PORT || 3010;
const server = express();
//server.use(cookieParser());

const app = boot(server);
const log = console.log;
app.use(express.static(__dirname, { dotfiles: 'allow' }));
app.use(express.static('public'));
app.use('/public', express.static('public'));
app.listen(port, () => {
    //Start the cron
  cron();
  console.log(`Example app listening at http://localhost:${port}`)
})