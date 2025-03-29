// Problems
 `
 1.ASDAS
 `
 
 

const musics=[
    {src:"././src/music/2Pac2.mp3", img:"./src/pic/ThemePic2.jpg", author:'2Pac Shakur', name:' Ambitionz Az ARidah'},
    {src:"././src/music/2Pac3.mp3", img:"./src/pic/ThemePic3.jpg",  author:'2Pac Shakur', name:'All_About_U'},
    {src:"././src/music/2Pac4.mp3", img:"./src/pic/ThemePic4.jpg",  author:'2Pac Shakur', name:'Skandalouz(feat.Nate Dogg)'},
    {src:"././src/music/2Pac5.mp3", img:"./src/pic/ThemePic5.jpg", author:'2Pac Shakur', name:'How Do YouWantIt(feat.JoJoK-Ci)'},
    {src:"././src/music/2Pac6.mp3", img:"./src/pic/ThemePic6.jpg", author:'2Pac Shakur', name:'Life Goes On'},
    {src:"././src/music/2Pac7.mp3", img:"./src/pic/ThemePic7.jpg", author:'2Pac Shakur', name:'Thug Passion(feat.Dramacydal Jewell)'}
]


// Control buttons
const music=document.getElementById('music')
const music_range=document.getElementById('music-range-input')
const pause_play=document.getElementById('playAndPause')
const toggleList=document.getElementById('toggleList-of-musics')


// Containers
const musicList=document.getElementById('list-of-musics')
const muzon=document.getElementById('musicListId')

let musicName=document.getElementById('musicName')
let musicAuthor=document.getElementById('musicAuthor')
let musicSRC=document.getElementById('musicSRC')
let musicIMG=document.getElementById('musicPhoto')

// Previous musics
 

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
          <button> 
            ${music.name}
             
         </button>
    `
})

musicList.innerHTML=musicUI


// Playing music from music list
let musicIndex=0


musicList.addEventListener('click',function(e){
    if(e.target.tagName==="BUTTON"){
        const musicTextContent=e.target.textContent.trim()
        let musicSrc=musics.find(music=>{

            return music.name===musicTextContent
        });

        let indexmusic=musics.indexOf(musicSrc)   
        musicIndex=indexmusic
    
        if(musicSrc){
        musicName.innerText=musicSrc.name
        musicAuthor.innerText=musicSrc.author
        musicSRC.src=musicSrc.src
        musicIMG.src=musicSrc.img
        music.load()
        music.play()

        pause_play.classList.add('fa-pause')      
        pause_play.classList.remove('fa-play')
        }  
     }
})



// Next music event

const nextBTN=document.getElementById('nextBTN')
nextBTN.addEventListener('click',()=>{
  
  
    musicIndex=(musicIndex+1)%musics.length
    console.log(musicIndex);
    

    musicName.innerText=musics[musicIndex].name
    musicAuthor.innerText=musics[musicIndex].author 
    musicSRC.src=musics[musicIndex].src
    musicIMG.src=musics[musicIndex].img
  
    music.load()
    music.play()
})

// backwarfBTN

const backwardBTN=document.getElementById('backwardBTN')

backwardBTN.addEventListener('click',()=>{
    musicIndex=(musicIndex-1)%musics.length

    if(musicIndex===-1){
        return musicIndex=musics.length
    }
     
    musicName.innerText=musics[musicIndex].name
    musicAuthor.innerText=musics[musicIndex].author
    musicIMG.src=musics[musicIndex].img
    musicSRC.src=musics[musicIndex].src
     
    music.load()
    music.play()   

    pause_play.classList.add('fa-pause')
    pause_play.classList.remove('fa-play')
})



