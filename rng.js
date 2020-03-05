/**
 * RNG
 * 
 * A web service that returns three random numbers between 0 and 255. It uses 
 * crypto.randomBytes() which meets the following requirements.
 * 
 *   - Does not use static seed upon initialization
 *   - (Maybe) Cycles the RNG at a minimum average rate of 100Hz (100 times per second)
 *   - Does not draw RNG values for future play
 * 
 * randomBytes() uses the OS /dev/random and /dev/urandom for entropy. I have 
 * been unable to confirm if /dev/urandom is generating numbers 100 times per 
 * second.
 * 
 * It is important that you do not alter the range that is returned. For 
 * example, do not try to modulous the results against a number smaller than 
 * 256 as you are very likely to bias the results.
 * 
 * There should be 256 virtual positions on the reel that you use with this RNG.
 * 
 * This service would typically be run on localhost on port 8088.
 **/

const http = require('http');
const url = require('url');
const crypto = require('crypto');

// Generate a random number and add it to the array
// TODO: Test if the random selection process meets 95 percent confidence
//   limits using a standard chi-squared test for goodness of fit. 
function generate(numbersToKeep = 3) {
    // Setup some variables
    let randomNumbers = Array();
    // Pick several random numbers and add them to an array
    for($i=1; $i<=numbersToKeep; $i++) {
        const thisPick = crypto.randomBytes(1) // 1 byte; 0-255
        randomNumbers.push(thisPick[0]);
    }
    return randomNumbers;
}

// Setup the http server
http.createServer(function (req, res) {
    // Return the latest list of random numbers
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(generate()));
}).listen(8088);
