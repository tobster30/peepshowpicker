var episodes = [
	'Series 1 - Episode 1 - Warring Factions',
	'Series 1 - Episode 2 - The Interview',
	'Series 1 - Episode 3 - On the Pull',
	'Series 1 - Episode 4 - Mark Makes a Friend',
	'Series 1 - Episode 5 - Dream Job',
	'Series 1 - Episode 6 - Funeral',
	'Series 2 - Episode 1 - Dance Class',
	'Series 2 - Episode 2 - Jeremy Makes It',
	'Series 2 - Episode 3 - Local Hero',
	'Series 2 - Episode 4 - University Challenge',
	'Series 2 - Episode 5 - The Man Show',
	'Series 2 - Episode 6 - Wedding',
	'Series 3 - Episode 1 - Mugging',
	'Series 3 - Episode 2 - Sectioning',
	'Series 3 - Episode 3 - Shrooming',
	'Series 3 - Episode 4 - Sisterning',
	'Series 3 - Episode 5 - Jurying',
	'Series 3 - Episode 6 - Quantocking',
	'Series 4 - Episode 1 - Sophies Parents',
	'Series 4 - Episode 2 - Conference',
	'Series 4 - Episode 3 - Gym',
	'Series 4 - Episode 4 - Handyman',
	'Series 4 - Episode 5 - Holiday',
	'Series 4 - Episode 6 - The Wedding',
	'Series 5 - Episode 1 - Burgling',
	'Series 5 - Episode 2 - Spin War',
	'Series 5 - Episode 3 - Jeremy Broke',
	'Series 5 - Episode 4 - Jeremys Mummy',
	'Series 5 - Episode 5 - Jeremys Manager',
	'Series 5 - Episode 6 - Marks Women',
	'Series 6 - Episode 1 - Jeremy at JLB',
	'Series 6 - Episode 2 - The Test',
	'Series 6 - Episode 3 - Jeremy in Love',
	'Series 6 - Episode 4 - The Affair',
	'Series 6 - Episode 5 - The Party',
	'Series 6 - Episode 6 - Das Boot',
	'Series 7 - Episode 1 - St.Hospitals',
	'Series 7 - Episode 2 - Man Jam',
	'Series 7 - Episode 3 - A Beautiful Mind',
	'Series 7 - Episode 4 - Nether Zone',
	'Series 7 - Episode 5 - Seasonal Beatings',
	'Series 7 - Episode 6 - New Years Eve',
	'Series 8 - Episode 1 - Jeremy Therapised',
	'Series 8 - Episode 2 - Business Secrets of the Pharoahs',
	'Series 8 - Episode 3 - The Love Bunker',
	'Series 8 - Episode 4 - Big Mad Andy',
	'Series 8 - Episode 5 - Chairman Mark',
	'Series 8 - Episode 6 - Quantocking II',
	'Series 9 - Episode 1 - The William Morris Years',
	'Series 9 - Episode 2 - Gregorys Beard',
	'Series 9 - Episode 3 - Threeism',
	'Series 9 - Episode 4 - Mole-Mapping',
	'Series 9 - Episode 5 - Kid Farm',
	'Series 9 - Episode 6 - Are We Going to Be Alright?',
]

function newEpisode() {
	var randomNumber = Math.floor(Math.random() * (episodes.length));
	document.getElementById('episodeDisplay').innerHTML = episodes[randomNumber];
}