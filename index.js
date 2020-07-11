const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
   console.log(`Bot has started, with ${client.users.cache.size} users, in ${client.channels.cache.size} channels of ${client.guilds.cache.size} guilds.`);
   client.user.setActivity('/help | Flux Community');
});

client.on("message", async message => {
   if(message.author.bot) return;
  
   if(!message.content.startsWith(config.prefix)) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pog! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ws.ping)}ms`);
  }

if(command === "username") {
if(!message.member.roles.cache.some(r=>["Owner"].includes(r.name)))
    return message.reply("Sorry, you don't have permissions to use this.");

    const sayMessage = args.join(" ");
    client.user.setUsername(sayMessage);
    message.channel.send('Successfully changed bot username');
  }

    if(command === "play") {
    if(!message.member.roles.cache.some(r=>["Owner"].includes(r.name)))
    return message.reply("Sorry, you don't have permissions to use this.");

    const sayMessage = args.join(" "); 
    client.user.setActivity(`${sayMessage}`, { 
  	 		type: "PLAYING", 
  	 		name: "Flux"
   }); 
    message.channel.send('Successfully changed bot status.');
  }

if(command === "stream") {
    if(!message.member.roles.cache.some(r=>["Owner"].includes(r.name)))
    return message.reply("Sorry, you don't have permissions to use this.");

    const sayMessage = args.join(" "); 
    client.user.setActivity(`${sayMessage}`, { 
  	 		type: "STREAMING", 
  	 		name: "Flux"
   }); 
    message.channel.send('Successfully changed bot status.');
  }

if(command === "watch") {
    if(!message.member.roles.cache.some(r=>["Owner"].includes(r.name)))
    return message.reply("Sorry, you don't have permissions to use this.");

    const sayMessage = args.join(" "); 
    client.user.setActivity(`${sayMessage}`, { 
  	 		type: "WATCHING", 
  	 		name: "Flux"
   }); 
    message.channel.send('Successfully changed bot status.');
  }

    if(command === "verify") {
    let role = message.guild.roles.cache.find(r => r.name === "Verified");		
    let member = message.member;
   				
    member.roles.add(role).catch(console.error);
    message.delete().catch(O_o=>{}); 
    message.author.send(`Successfully verified ${message.author}`);
  }

if(command === "help") { 
    let member = message.mentions.members.first() || message.author; 
    let mentionedUser = message.mentions.users.first() || message.author;
        const exampleEmbed = {
	color: 0x00FF00,
	title: 'Flux MGUI',
	url: '',
	description: '',
	thumbnail: {
		url: mentionedUser.displayAvatarURL(),
	},
	fields: [
		{
			name: '**Verification Commands**\n/verify',
			value: 'Use this command to get verified.',
                        inline: true,
		},
		{
			name: '/getrole',
			value: 'Use this command to get your customer role.',
                        inline: true,
		},
		{
			name: '**General Commands**\n/slap',
			value: 'Slap someones face!',
                        inline: true,
		},
		{
			name: '/8ball',
			value: 'Ask Flux Bot any questions.',
                        inline: true,
		},
		{
			name: '/howgay',
			value: 'Check if users gay or not.',
                        inline: true,
		},
		{
			name: '**Owners Commands**\n/play | /watch | /stream',
			value: 'Use this command to change Flux Bot status',
                        inline: true,
		},
		{
			name: '/username',
			value: 'Change Flux Bot username.',
                        inline: true,
		},
	],
	timestamp: new Date(),
	footer: {
		text: 'Flux Community',
		icon_url: '',
	},
};

message.channel.send({ embed: exampleEmbed });
  }
 
});


client.login(config.token);
