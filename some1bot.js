//some1bot, © AvenueBots, 2018.
//Not labelled for repurpose or free use.
/*
	This work is licensed under a 
	Creative Commons 
	Attribution-NonCommercial-NoDerivatives 
	4.0 International License.
*/
var Discord = require('discord.js');
var client = new Discord.Client();
var cmdChar = 's-';
var msg = 'message';
var ping = require('node-http-ping');
msg.a = msg.content;
var pm2 = require('pm2');
console.newlog = str => {
	console.log(str);
};
pm2.connect(function(err) {
	if (err) throw err;

	setTimeout(function worker() {
		console.newlog('Restarting app...');
		pm2.restart('app', function() {});
		setTimeout(worker, 3000000);
	}, 3000000);
});

client.on('ready', () => {
	this.client = client;
	this.msg = msg;
	console.newlog(`Logged on as ${client.user.tag}`);
	client.user.setUsername('some1bot');
	client.user.setActivity(`with @someone! | ${client.guilds.size} servers`);
	var statuses = [
		`with @someone! | ${client.guilds.size} servers.`,
		`with @someone! | bit.ly/some1-bot`,
		`with @someone! | Undergoing maintenence.`,
		`with ${cmdChar}help | use @someone!`,
		`with @someone! | ${client.channels.size} channels.`,
		`with @someone! | ${client.users.size} users.`,
	];
	var counter = -1;
	var intervalID = setInterval(function() {
		++counter;
		if (counter >= statuses.length) {
			counter = 0;
		}

		client.user.setActivity(statuses[counter]);
	}, 7500);
});
function sectoform(sec) {
	//© Anon64, 2018. lol joke
	var totalSeconds = sec;
	var years = Math.floor(totalSeconds / 31556926);
	totalSeconds %= 31556926;
	var months = Math.floor(totalSeconds / Math.round(2629743.83));
	totalSeconds %= Math.round(2629743.83);
	var days = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	var hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	var minutes = Math.floor(totalSeconds / 60);
	var seconds = totalSeconds % 60;
	//console.newlog(years, months, days, hours, minutes, seconds);
	if (parseInt(years) <= 9) years = '0' + years;
	if (parseInt(months) <= 9) months = '0' + months;
	if (parseInt(days) <= 9) days = '0' + days;
	if (parseInt(hours) <= 9) hours = '0' + hours;
	if (parseInt(minutes) <= 9) minutes = '0' + minutes;
	if (parseInt(seconds) <= 9) seconds = '0' + seconds;
	years = years + 'yr ';
	months = months + 'mo ';
	days = days + 'd ';
	hours = hours + 'hr ';
	minutes = minutes + 'min ';
	seconds = seconds + 'sec';
	if (years == '00yr ' && months == '00mo ') years = '';
	if (months == '00mo ' && days == '00d ') months = '';
	if (days == '00d ' && hours == '00hr ') days = '';
	if (hours == '00hr ' && minutes == '00min ') hours = '';
	return years + months + days + hours + minutes + seconds;
}
function sectoform2(sec) {
	var totalSeconds = sec;
	var years = Math.floor(totalSeconds / 31556926);
	totalSeconds %= 31556926;
	var months = Math.floor(totalSeconds / Math.round(2629743.83));
	totalSeconds %= Math.round(2629743.83);
	var days = Math.floor(totalSeconds / 86400);
	totalSeconds %= 86400;
	var hours = Math.floor(totalSeconds / 3600);
	totalSeconds %= 3600;
	var minutes = Math.floor(totalSeconds / 60);
	var seconds = totalSeconds % 60;
	//console.log(years, months, days, hours, minutes, seconds);
	if (parseInt(years) <= 9) years = '0' + years;
	if (parseInt(months) <= 9) months = '0' + months;
	if (parseInt(days) <= 9) days = '0' + days;
	if (parseInt(hours) <= 9) hours = '0' + hours;
	if (parseInt(minutes) <= 9) minutes = '0' + minutes;
	if (parseInt(seconds) <= 9) seconds = '0' + seconds;

	years = years + ':';
	months = months + ':';
	days = days + ':';
	hours = hours + ':';
	minutes = minutes + ':';

	if (years == '00:' && months == '00:') years = '';
	if (months == '00:' && days == '00:') months = '';
	if (days == '00:' && hours == '00:') days = '';
	if (hours == '00:' && minutes == '00:') hours = '';

	return years + months + days + hours + minutes + seconds;
}
client.on(msg, msg => {
	/*if (msg.guild.id == '399318211042213898') {
		if (msg.author.id == '246799235775725569') {
			msg.delete();
		}
	}*/
	msg.a = msg.content;
	var cmd = msg.a.split(' ')[0].toLowerCase();
	var input = msg.a.substring(cmd.length).trim();
	if (cmd == ':>') {
		if (msg.author.id == '362315641161515008') {
			if (input.includes('fs')) {
				msg.reply('nu');
			} else {
				try {
					msg.channel.send('```js\n' + '> ' + eval(input) + '\n```');
				} catch (e) {
					msg.channel.send('```js\n' + '> ' + e + '\n```');
				}
			}
		} else {
		}
	}
	if (cmd == 's-subscribe') {
		if (msg.guild.id == '399318211042213898') {
			const guildMember = msg.member;
			guildMember
				.addRole('436331173992726538')
				.then(msg.channel.send('Added you to updates!'))
				.catch(e => msg.channel.send(e));
		} else {
			return;
		}
	}
	const usernames = msg.guild.members.map(
		mem => mem.displayName || mem.user.username
	);
	var arr = [];
	var servers = client.guilds.map(r => arr.push(r));
	msg.a = msg.content;
	const faces = [
		'( ͡° ͜ʖ ͡°)',
		'(⌐■_■)',
		'¯\\_ツ_/¯',
		'ʢ◉ᴥ◉ʡ',
		'^‿^',
		'(づ◔ ͜ʖ◔)づ',
		'⤜(ʘ_ʘ)⤏',
		'☞   ͜ʖ  ☞',
		'ᗒ ͟ʖᗕ',
		'└[•⏏•]┘',
		'¯\\_$ل͜$_/¯',
		'乁(  ᴥ  )ㄏ',
		"̿̿ ̿̿ ̿̿ ̿'̿'̵͇̿̿з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿",
		'▄︻̷̿┻̿═━一',
		'¯\\_(ツ)_/¯',
		'( ͡°( ͡° ͜ʖ( ͡° ͜ʖ ͡°)ʖ ͡°) ͡°)',
		'(▀̿Ĺ̯▀̿ ̿)',
		'ʕ•ᴥ•ʔ',
		'(づ｡◕‿‿◕｡)づ',
		'(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧ ✧ﾟ･: *ヽ(◕ヮ◕ヽ)',
		'ಠ_ಠ',
		"﴾͡๏̯͡๏﴿ O'RLY?",
		'(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧',
		'(╯°□°)╯︵ ʞooqǝɔɐɟ',
		'(╯°□°）╯︵ ┻━┻',
		' (◕‿◕✿)',
		'(∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿',
		'（✿ ͡◕ ᴗ◕)つ━━✫・o。',
		'(∩ ͡° ͜ʖ ͡°)⊃━☆ﾟ. o ･ ｡ﾟ',
	];
	getRandFace = () => {
		return '(' + faces[Math.floor(Math.random() * faces.length)] + ')';
	};
	getRandUser = () => {
		return '(' + usernames[Math.floor(Math.random() * usernames.length)] + ')';
	};
	var args = msg.a.split(' ');
	var cmd2 = args[0].substr(1);
	var oof = '@someone';
	var newInput = msg.a
		.substr(oof.length, 200)
		.replace(/@someone/, '***' + getRandUser() + '***')
		.replace(/-face/, '**' + getRandFace() + '**');
	if (msg.a.startsWith('@someone')) {
		try {
			console.newlog(`${msg.author.username} used command.`);
			msg.channel.send(
				`${msg.author}, **${faces[
					Math.floor(Math.random() * faces.length)
				]}** ***(${usernames[
					Math.floor(Math.random() * usernames.length)
				]})*** ${newInput.replace(/@someone/g, '').replace(/-face/g, '')}`
			);
		} catch (e) {
			msg.channel.send(
				'There was an internal error. Please contact an administrator.' + e
			);
		}
	}
	if (cmd == cmdChar + 'removeLast') {
		if (msg.author.id == '362315641161515008') {
			client.user.lastMessage.delete(1000);
		}
	}
	if (cmd == cmdChar + 'someone') {
		try {
			msg.channel.send(
				`${msg.author},  **${faces[
					Math.floor(Math.random() * faces.length)
				]}** ***(${usernames[
					Math.floor(Math.random() * usernames.length)
				]})*** ${newInput.replace(/@someone/g, '').replace(/-face/g, '')}`
			);
		} catch (e) {
			msg.channel.send(
				'There was an internal error. Please contact an administrator. (Vistril#9638 or s!support)' +
					e
			);
		}
	}
	var ifInput = msg.a.slice('if @someone'.length, 200);
	if (msg.a.startsWith('if @someone')) {
		if (!ifInput) {
			msg.reply('Please include an input!');
		} else {
			msg.channel.send(
				`${msg.author}, **${faces[
					Math.floor(Math.random() * faces.length)
				]}** if ***(${usernames[
					Math.floor(Math.random() * usernames.length)
				]})*** ${ifInput
					.replace(/@someone/, '***' + getRandUser() + '***')
					.replace(/-face/, '**' + getRandFace() + '**')}
			`
			);
		}
	}
	if (cmd == cmdChar + 'invite') {
		try {
			msg.channel.send(
				"Thanks for considering to add somebot to your server. Here's a Discord Bots link."
			);
			msg.channel.send('https://discordbots.org/bot/430957981585244170?');
		} catch (e) {
			msg.channel.send(
				'Ooops. There was an error. Please contact an administrator. ' + e
			);
		}
	}
	if (cmd == cmdChar + 'support') {
		try {
			msg.guild.members
				.get(msg.author.id)
				.send(
					"Need support? Just want to chat? Here's the somebot home (AnonAvenue) link sliding into your DMs! :wink: https://discord.io/anon64"
				);
			msg.channel.send('Check your DMs! :)');
		} catch (e) {
			msg.channel.send(
				'There was an internal error. Please contact an administrator ' + e
			);
		}
	}
	if (cmd == cmdChar + 'uptime') {
		msg.channel.send(
			`:clock12: Uptime: ${sectoform(Math.floor(process.uptime()))}`
		);
	}
	var serverstr = arr.join(',');
	var serverstr2 = serverstr.replace(/,/g, ', ');
	if (cmd == cmdChar + 'servers') {
		msg.channel.send(
			`:information_source: I am in **${client.guilds.size}** servers!`
		);
	}
	if (cmd == cmdChar + 'help') {
		msg.channel.send(
			`:information_source: **7** Commands available: @someone, ${cmdChar}support, ${cmdChar}invite, ${cmdChar}servers, ${cmdChar}uptime, ${cmdChar}ping, ${cmdChar}flags`
		);
		msg.channel.send(
			':new:: You can add a second @someone to your message! Also, a -face flag for a random face!'
		);
	}

	randomFaceBw = faces[Math.floor(Math.random() * faces.length)]
		.split('')
		.reverse()
		.join('');
	randomUserBw = usernames[Math.floor(Math.random() * usernames.length)]
		.split('')
		.reverse()
		.join('');
	if (msg.a.startsWith == 'enoemos@') {
		msg.reply(
			`**${randomFaceBw}** ***(${randomUserBw})*** ${msg.a
				.substr('enoemos@'.length, 1992)
				.split('')
				.reverse()
				.join('')} `
		);
	}
	if (cmd == cmdChar + 'ping') {
		if (!input) {
			msg.channel.send(`No input detected. Pinging Discord API.`);
			ping('discord.gg')
				.then(time =>
					msg.channel.send(
						`Heartbeat: ${Math.round(client.ping)}ms \nDiscord: ${time}ms `
					)
				)
				.catch(error => msg.channel.send(`Failed to ping: ${error}`));
		} else {
			ping(input)
				.then(time => msg.channel.send(`Response time: ${time}ms`))
				.catch(error => msg.channel.send(`Failed to ping: ${error}`));
		}
	}
	if (cmd == cmdChar + 'pingu') {
		if (!input) {
			msg.channel.send(
				`Noot Noot! :penguin: No input detected. Pinging Discord API.`
			);
			ping('discord.gg')
				.then(time =>
					msg.channel.send(
						`Heartbeat: ${Math.round(client.ping)}ms \nDiscord: ${time}ms `
					)
				)
				.catch(error => msg.channel.send(`Failed to ping: ${error}`));
		} else {
			ping(input)
				.then(time =>
					msg.channel.send(`Noot noot. :penguin: Response time: ${time}ms`)
				)
				.catch(error => msg.channel.send(`Failed to ping: ${error}`));
		}
	}
	if (cmd == cmdChar + 'flags') {
		msg.channel.send('**1** flag available: -face');
	}
});
client.on('guildCreate', guild => {
	const joinEmbed = new Discord.RichEmbed()
		.setTitle('I have joined a guild!')
		.setDescription(`${guild.name} | ${guild.id}`)
		.addField('Members in the guild', guild.memberCount)
		.addField('Large Server?', guild.large ? 'Yes' : 'No')
		.addField('Bot guilds now at:', client.guilds.size)
		.setThumbnail(
			guild.iconURL('png', 1024)
				? guild.iconURL('png', 1024)
				: 'https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png'
		)
		.setTimestamp()
		.setColor(0x32cd32)
		.setFooter(
			`Owner of guild: ${guild.owner.user.tag} | ${guild.owner.user.id}`
		);
	if (msg.channel.id == '436752344743411712') {
		msg.channel.send(joinEmbed);
	}
});
client.on('guildDelete', guild => {
	const leftEmbed = new Discord.RichEmbed()
		.setTitle('I have left a guild!')
		.setDescription(`${guild.name} | ${guild.id}`)
		.addField('Members in the guild', guild.memberCount)
		.addField('Large Server?', guild.large ? 'Yes' : 'No')
		.addField('Bot guilds now at:', client.guilds.size)
		.setThumbnail(
			guild.iconURL('png', 1024)
				? guild.iconURL('png', 1024)
				: 'https://discordapp.com/assets/2c21aeda16de354ba5334551a883b481.png'
		)
		.setTimestamp()
		.setColor(0xff0000)
		.setFooter(
			`Owner of guild: ${guild.owner.user.tag} | ${guild.owner.user.id}`
		);
	if (msg.channel.id == '436752344743411712') {
		msg.channel.send(leftEmbed);
	}
});
var config = require('./config.json');
client.login(config.notoken4u);
