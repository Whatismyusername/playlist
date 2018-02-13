var songName = '';
    var songArtist = '';
    var songLength = '';
    var songURL = '';
    var song_Album_Image = '';
    var songList = [
            {
                songName: 'Viva La Vida',
                songArtist: 'Coldplay',
                songLength: '4:02',
                songURL: 'Viva_La_Vida.mp3',
                song_Album_Image: 'http://www.coldplay.com/recordings/art_vivalavida.jpg',
            }
        ]
$('document').ready(function(){
    $('#additionForm').hide();
    
        
    $('#enter').click(function(){
        songName = $('#songName').val();
        songArtist = $('#songArtist').val();
        songLength = $('#songLength').val();
        songURL = $('#songURL').val();
        song_Album_Image = $('#song_Album_Image').val();
        addSong();
    });
    function clearList(){
        $('#list').empty();
    }
    
    function displayList(){
        console.log(songList)
        $('#playlistDiv').append("<h2 id='songNameDis'>" + songList[0].songName + "</h2>");
        $('#playlistDiv').append("<h4 id='songArtistDis'>" + songList[0].songArtist + "</h4>");
        $('#playlistDiv').append("<h4 id='songLengthDis'>" + songList[0].songLength + "</h4>");
        $('#playlistDiv').append("<img id ='songAlbum_imageDis'src='" + songList[0].song_Album_Image + "'>");
    }
    
    function addSong(){
        var newSong = {
            songName: songName,
            songArtist: songArtist,
            songLength: songLength,
            songURL: songURL,
            song_Album_Image: song_Album_Image,
        };
        songList.push(newSong);
        clearList();
        displayList();
    }
    displayList();
})