var Bot = require('slackbots');

// create a bot
var settings = {
    token: '<bot-token>',
    name: '<bot-name>'
};
var bot = new Bot(settings);

bot.on('start', function() {
    bot.postMessageToUser('achu', 'hello bro!');
});

bot.on('message', function(msg) {
    if(msg.type!='desktop_notification' && msg.username!='<bot-name>') {
        console.log(msg)
        bot.postMessageToUser('achu', msg.text);
    }
});

