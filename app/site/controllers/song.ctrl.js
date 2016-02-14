app.controller('songCtrl', songControl);

function songControl(allMusicService, productSrv) {
	// this.allMusicService = allMusicService;
	// this.allmovies = this.allMusicService;

	// this.name = this.allmovies.music;
	// console.log(this.allmovies.music[0].Title);

	this.productSrv = productSrv;


	this.genres = [
	{label: 'All', category: "all"},
    {label: 'Deep House', category: 'deepHouse'},
    {label: 'House', category: "house"},
    {label: 'Techno', category: "techno"}
  	];

	this.genre = this.genres[0];



}


