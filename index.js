const musics=[
    {src:"././src/music/2Pac2.mp3",  author:'2Pac Shakur', name:' -Ambitionz Az A Ridah'},
    {src:"././src/music/2Pac3.mp3",  author:'2Pac Shakur', name:'_All_About_U'},
    {src:"././src/music/2Pac4.mp3",  author:'2Pac Shakur', name:'- Skandalouz (feat. Nate Dogg)'},
    {src:"././src/music/2Pac5.mp3",  author:'2Pac Shakur', name:'How Do You Want It (feat. JoJo   K-Ci)'},
    {src:"././src/music/2Pac6.mp3",  author:'2Pac Shakur', name:'-Life Goes On'},
    {src:"././src/music/2Pac7.mp3",  author:'2Pac Shakur', name:'Thug Passion (feat. Dramacydal   Jewell)'}
]


// Control buttons
const music=document.getElementById('music')
const music_range=document.getElementById('music-range-input')
const pause_play=document.getElementById('playAndPause')
const toggleList=document.getElementById('toggleList-of-musics')


// Containers
const musicList=document.getElementById('list-of-musics')


// Loading meta data of audio
music.onloadedmetadata=function(){
    music_range.max=music.duration
    music_range.value=music.currentTime    
}

//  Play and Pause of function
function playMusic(){
    if(pause_play.classList.contains('fa-play')){
        music.play()
        pause_play.classList.add('fa-pause')
        pause_play.classList.remove('fa-play')
    }else{
        music.pause()
        pause_play.classList.remove('fa-pause')
        pause_play.classList.add('fa-play')
    }
}

// Access input on music
if(music.play()){
setInterval(() => {
    music_range.value=music.currentTime
},600);
     
}

music_range.onchange=function(){
    music.play()
    music.currentTime=music_range.value
    pause_play.classList.remove('fa-play')
    pause_play.classList.add('fa-pause')   
}



// Toggle button function
 function toggleListFunc(){

   
   if(toggleList.classList.contains('fa-bars')){
    musicList.style.display='block'
    toggleList.classList.add('fa-xmark')
    toggleList.classList.remove('fa-bars')
   
     
   }else{
    musicList.style.display='none'
    toggleList.classList.add('fa-bars')
    toggleList.classList.remove('fa-xmark')
   }
 }


// Spreading Musics on music list
let musicUI=''

musics.forEach((music)=>{
    musicUI+=`
        <div class="listS">
            <div> 
            <p class="music-name">${music.name}</p>
            <p class="music-author">${music.author}</p>
            </div>
        </div>
    `
})

musicList.innerHTML=musicUI