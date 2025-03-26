const music=document.getElementById('music')
const music_range=document.getElementById('music-range-input')
const ctrl_icons=document.getElementById('control-icons')
const pause_play=document.getElementById('playAndPause')


music.onloadedmetadata=function(){
    music_range.max=music.duration
    music_range.value=music.currentTime
}

 
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