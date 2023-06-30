  const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  presence: {
    status: 'online',
    activities: [{
      name: 'testing',
      type: 'STREAMING', // STREAMING, LISTENING, PLAYING.
      url: 'https://twitch.tv/3',
      details: '???'
    }]
  },
  intents: ['GUILD_MESSAGES']
});

// define an array of texts to cycle through
const texts = ["???", "bound 4ever"];

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} * ---`);
  
  // initialize index to zero
  let index = 0;

  setInterval(() => {
    // get the next text from the array
    const text = texts[index];  
    
    // update the presence with the new text
    client.user.setActivity({
      name: 'testing',
      type: 'STREAMING', // STREAMING, LISTENING, PLAYING.
      url: 'https://twitch.tv/3',
      details: text
    });

    // increment the index and loop back to start if necessary
    index++;
    if (index >= texts.length) {
      index = 0;
    }
  }, 1000); // update every 1 seconds
});

client.login(process.env.TOKEN);