class song {
    constructor(artist, title) {
        this.artist = artist;
        this.title = title;
    }
    describe() {
        return `${this.artist} preforms ${this.title}.`;
    }
}

class genre {
    constructor(name) {
        this.name = name;
        this.player = [];
    }

    addSong(song) {
        if (song instanceof song) {
            this.song.push(song);
        } else {
            throw new Error('will only allow you to add a song. enterd value is not a song tile: ${song}');
        }
    }
    describe() {
        return `${this.artist} has ${this.song.length} songs.`;
    }
}

class menu {
    constructor() {
        this.genre = [];
        this.selectedGenre = null;
    }

    start() {
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createGenre();
                    break;
                case '2':
                    this.viewGenre();
                    break;
                case '3':
                    this.deleteGenre();
                    break;
                case '4':
                    this.showAllGenres();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('have a nice day!');
    }
    showMainMenuOptions() {
        return prompt(`
       0) exit
       1) create new genre
       2) view genres
       3) remove/delete genre
       4) show all genres 
        `);
    }

    showGenreMenuOptions(genreList) {
        return prompt(`
    0) back
    1) create song
    2) delete song
    ${genreList}
    `);

    }

    displayGenre() {
        let genreString = '';
        for (let i = 0; i < this.genre.length; i++) {
            genreString += i + ')' + this.genre[i].name + '\n';
        }
        alert(genreString);
    }

    createGenre() {
        let name = prompt('enter name of favorite music genre:');
        this.genres.push(new genre(name));
    }

    viewGenre() {
        let index = prompt('enter the number of the genre you wanna listen to');
        if (index > -1 && index < this.genres.length) {
            this.selectedGenre = this.genres[index];
            let description = 'Favorite Genre Name' + this.selectedGenre.name + '\n';

            for (let i = 0; i < this.selectedGenre.artist.length; i++) {
                description += i + ')' + this.selectedGenre.artist[i].name
                    + ' - ' + this.selectedGenre.artist[i].song + '\n';


            }
            let selection = this.showGenreMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createNewGenre();
                    break;
                case '2':
                    this.removeGenre();
            }
        }
    }
}

let menu = new menu()
menu.start
