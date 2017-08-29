var Bot = require('slackbots');

bot_name='rabot'

// create a bot
var settings = {
    token: 'xoxb-229141034096-IEryLZvcbnla4wAk0ikr5FE8',
    name: bot_name
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToUser('achu', 'hello bro!');
});

bot.on('message', function(msg) {
    if(msg.type=='message' && msg.username!=bot_name) {
        console.log(msg)
        console.log("Sending message: " + msg.channel)
        bot.postMessage(msg.channel, msg.text);
    }
});

