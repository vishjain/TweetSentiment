var request = require('request');
var unirest = require('unirest');
var util = require('util');
var OAuth = require('oauth');


var Twitter = require('twitter');


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'kc3gskmLgsRcdp25aqLAIvL3J',
  consumer_secret: 'Zdwgfs8mkEnK6jrAFNNTUEhdTA3nN9YMajX98R9uramgsQRnbE',
  access_token_key: '755092350263668736-E3VDZ57zOdn8ywQXBjUWB3ohfmwrH2I',
  access_token_secret: 'I1xvrQaTvfPeO52cJzlECR26s7S8QhFvjOei2hIJHIUrT'
});

var count = 1 ;
var handle = setInterval( fetch, 3000 );
var tweets = 3;

function fetch() {
  client.get('search/tweets', {'q': 'Donald Trump', 'count': 'tweets'}, function(error, tweets, response) {
     //console.log(tweets.statuses[0].created_at);
    count++;
    for(var i = 0; i < 2; i++)
    {
      //console.log(tweets.statuses[0].text);
      console.log(tweets.statuses[i].text);
    }
     //console.log(JSON.stringify(tweets));
   })

   if(count == 2)
   {
     clearInterval(handle);
   }
 };



/**var consumer_key = 'kc3gskmLgsRcdp25aqLAIvL3J';
var consumer_secret = 'Zdwgfs8mkEnK6jrAFNNTUEhdTA3nN9YMajX98R9uramgsQRnbE';
var enc_secret = new Buffer(consumer_key + ':' + consumer_secret).toString('base64');

var oauthOptions = {
  url: 'https://api.twitter.com/oauth2/token',
  headers: {'Authorization': 'Basic ' + enc_secret, 'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'},
  body: 'grant_type=client_credentials'
};


function getBearer(){
  request.post(oauthOptions, function(e, r, body) {
    var bod = JSON.parse(body);
    bearer = bod.access_token;
    console.log("Got a twitter Bearer token: " + bearer);
    return bearer;
  });
}

var bearer = getBearer();




var client = new Twitter({
  consumer_key: consumer_key,
  consumer_secret: consumer_secret,
  bearer_token: bearer,

});
**/
