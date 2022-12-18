const JishoAPI = require("unofficial-jisho-api");
const jisho = new JishoAPI();
const { SlashCommandBuilder } = require('discord.js');
let test = "meow";




module.exports = {
	data: new SlashCommandBuilder()
		.setName('searchforkanji')
		.setDescription('Searches for information about kanji inputted by user')
		.addStringOption(option =>
			option
				.setName("kanji")
				.setDescription("Kanji to search")
				.setRequired(true)),
	async execute(interaction) {	
		const target = interaction.options.getString("kanji");
		console.log(target);

		jisho.searchForKanji(target).then(async result => {
			await interaction.reply("JLPT Level: " + result.jlptLevel + '\n' + 
			"Kunyomi Reading(s): " + JSON.stringify(result.kunyomi) + '\n' + 
			"Onyomi Reading(s): " + JSON.stringify(result.onyomi) + '\n' + 
			"Meaning: " + result.meaning + '\n' +  
			"Stroke order: " + result.strokeOrderGifUri);
		  });
		
					
	},
				
};

