/**
 * 
 * Helper function to enable API Key
 * 
 */


import {displayData} from '../utility';
/**
 * 
 * 
 */
const verifyAPIKey = (req, res) => {
  const apiKey = process.env.API_KEY || false;
  console.log("API KEY: ", apiKey);

  //console.log("HELLOO", req.headers.hasOwnProperty('x-api-key'));
  console.log("Headers", req.headers);

  // Check if apikey is a part of the headers 
  if (req.headers && req.headers.hasOwnProperty('x-api-key') && req.headers['x-api-key'].value!= apiKey) { 
    // Do nothing. key verified.
    } else {
      displayData (
        res,
        {},
        "Unauthorized",
        403
      );
      return;
    }
  
}



export {
  verifyAPIKey
}