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
        return `${this.artist} has ${this.songs.length} songs.`;
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
                    this.viewGenres();
                    break;
                case '3':
                    this.deleteGenre();
                    break;
                case '4':
                    this.displayAllGenres();
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
       4) display all genres 
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

    displayAllGenres() {
        let genreString = '';
        for (let i = 0; i < this.genre.length; i++) {
            genreString += i + ')' + this.genre[i].name + '\n';
        }
        alert(genreString);
    }

    createGenre() {
        let name = prompt('enter name of favorite music genre:');
        this.genre.push(new genre(name));
    }

    viewGenres() {
        let index = prompt('enter the number of the genre you wanna listen to:');
        if (index > -1 && index < this.genre.length) {
            this.selectedGenre = this.genre[index];
            let description = 'Favorite Genre Name:' + this.selectedGenre.name + '\n';

            for (let i = 0; i < this.selectedGenre.length; i++) {
                description += i + ') ' + this.selectedGenre[i].name
                    + ' - ' + this.selectedGenre[i].artist + '\n';
            }
            let selection = this.showGenreMenuOptions(description);
            switch (selection) {
                case '1':
                    this.createSong();
                    break;
                case '2':
                    this.removeSong();
            }
        }
    }
    deleteGenre() {

        let index = prompt('enter number of genre you would like to delete:');
        if (index > -1 && index < this.genre.length) {
            this.genre.splice(index, 1);
        }
    }

    createSong() {
        let name = prompt('enter name of favorite artist:');
        let title = prompt('Enter name of favortite track by favorite artist:');
        this.genre.push(new song(name, title));
    }

    removeSong() {
        let index = prompt('enter number of the song you would like to delete');
        if (index > -1 && index < this.selectedGenre.songs.length) {
            this.selectedGenre.splice(index, 1);
        }

    }

}
let musicMenu = new menu();
musicMenu.start();

