var dotenv = require('dotenv')//.config()
var request = require('request')
var Twitter = require('twitter')
dotenv.load()


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: process.env.API_KEY,
  consumer_secret: process.env.API_SECRET,
  access_token_key: process.env.TOKEN_KEY,
  access_token_secret: process.env.TOKEN_SECRET,
});

// your twitter search code here
client.get("search/tweets",{q:"#gibbstonvalley",lang:"en"}, function(error,tweets,response){
  if(error) throw error;
  console.log(tweets);
  }
})
