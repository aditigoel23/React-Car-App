const request = require('request');
const url = require('url');

const HOTWIRE_API_KEY = 's293drgujm68hru6ermq6fs6';
/**
 * Api call to hotwire shopping api to get the rental cars list based off of user's criteria (http://developer.hotwire.com/docs/read/Rental_Car_Shopping_API)
 * This assumes that the incoming request has the required query parameters
 * TODO: pass in the apikey from the config instead of hardcoding
 * @param req
 * @param res
 */
exports.searchCars = (req, res) => {
  const reqUrl = url.parse(req.url);
  const queryString = reqUrl.query;
  request(`http://api.hotwire.com/v1/search/car?apikey=${HOTWIRE_API_KEY}&format=json&${queryString}`, (error, response) => {
    if (error) {
      res.send(new Error(error));
    } else {
      const responseBody = JSON.parse(response.body);
      if (responseBody.StatusCode !== '0') {
        res.send({ errorCode: responseBody.StatusCode, errorText: responseBody.StatusDesc });
      } else {
        res.send(responseBody);
      }
    }
  });
};
