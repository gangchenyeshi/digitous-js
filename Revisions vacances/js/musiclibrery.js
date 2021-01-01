// ## 04 - Musical repertoire
// - Create the `song1`,` song2` and `song3` objects containing the following keys:` title` for the title, `artist` for the singer or band, and` year` for the year of release. Assign the values ​​of your three favorite songs as values.

// - Display in the console: the `title` value of` song1`, the `artist` value of` song3` and the `year` value of` song2`.

    var song1 = {
        title : "Dancing Queen",
        artist :"ABBA",
        year : 1976
    };
    var song2 = {
        title : "Beautiful",
        artist :"Christina Aguilera",
        year : 2002
    };
    var song3 = {
        title : "Rose Garden",
        artist :"Lynn Anderson",
        year : 1970
    };
    // - Create a variable `music` which contains an array containing these three variables.
    var music =[song1, song2, song3];
    // - Display in the console: the `title` value of` song1`, the `artist` value of` song3` and the `year` value of` song2`.

    console.log(music[0].title,  music[2].artist, music[1].year);
