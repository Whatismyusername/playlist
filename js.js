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
    
    
    $('#addSongBtn').click(function(){
        $('#playlist').hide();
        $('#additionForm').show();
    })    
        
    $('#enter').click(function(){
        songName = $('#songName').val();
        if (songName === ''){
            songName = 'Unknown';
        }
        songArtist = $('#songArtist').val();
        if (songArtist === ''){
            songArtist = 'Unknown';
        }
        songLength = $('#songLength').val();
        if (songLength === ''){
            songLength = 'Unknown';
        } 
        songURL = $('#songURL').val();
        if (songURL === ''){
            alert('Please Enter The Song URL');
            return false
        }
        song_Album_Image = $('#song_Album_Image').val();
        addSong();
    });
    function clearList(){
        $('#playlistDiv').empty();
    }
    
    function displayList(){
        for(var i = 0; i <songList.length; i++){
            var songNameDis = "<h2 class='songNameDis'>" + songList[i].songName + "</h2>";
            var songArtistDis = "<h4 class='songArtistDis'>" + songList[i].songArtist + "</h4>";
            var songLengthDis = "<h4 class='songLengthDis'>" + songList[i].songLength + "</h4>";
            var songImgDis = "<img class='song_Album_imageDis' src='" + songList[i].song_Album_Image + "'>";
            var songTextDis = "<div class='songTextDis'>" + songNameDis + songArtistDis + songLengthDis + "</div>";
            var audio = "<audio controls> <source src='" + songList[i].songURL + "' type='audio/mpeg'> </audio>"
            $('#playlistDiv').append("<div class='listBlock' id='song" + i + "'>" +  songImgDis + songTextDis +"</div>" + audio + "<br><br>");
        }
        $('#additionForm').hide();
        $('#playlist').show();
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