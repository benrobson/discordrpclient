const client = require('discord-rich-presence')('486399845251416067');

client.on('connected', () => {
  function setPresence() {
    presenceDisplay = [
      	['Connected to Nebula01', 'Destroying the Monument', 'avicus_large', null],
      	['Connected to Development', 'Developing things', 'avicus_large', null],
        ['Browsing the Forums', 'Handling Appeals', 'avicus_large', null],
        ['Connected to Mix01', 'Moderating the Server', 'avicus_large', null],
    ];

    x = Math.floor(Math.random()*presenceDisplay.length);

    client.updatePresence({
      state: `${presenceDisplay[x][0]}`,
      details: `${presenceDisplay[x][1]}`,
      startTimestamp: new Date(),
      largeImageKey: `${presenceDisplay[x][2]}`,
      smallImageKey: `${presenceDisplay[x][3]}`,
    });
    console.log(`\n\n[Console] Presence has been changed\nState: ${presenceDisplay[x][0]}\nDetails: ${presenceDisplay[x][1]}\nLarge Image Key: ${presenceDisplay[x][2]}\nSmall Image Key: ${presenceDisplay[x][3]}`);
  };

  setInterval(setPresence, 300000);
  console.log('DiscordRP Client connected!');
});

process.on('unhandledRejection', console.error);
