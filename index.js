const client = require('discord-rich-presence')('484662509765132289');

client.on('connected', () => {
  console.log('DiscordRP Client connected!');

  client.updatePresence({
    state: 'Connected to Lobby01',
    details: 'Casually waiting in Lobby',
    startTimestamp: new Date(),
    largeImageKey: 'avicus_large',
    smallImageKey: 'avicus',
  });
});

process.on('unhandledRejection', console.error);
