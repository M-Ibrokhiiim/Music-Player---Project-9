const music=document.getElementById('music')
const music_range=document.getElementById('music-range-input')
const ctrl_icons=document.getElementById('control-icons')


music.onloadedmetadata=function(){
    music_range.max=music.duration
    music_range.value=music.currentTime
}

ctrl_icons.addEventListener('click',function(e){
    if(e.target.classList.contains('fa-play')){
        music.play()
        e.target.classList.add('fa-pause')
        e.target.classList.remove('fa-play')
    }else{
        music.pause()
        e.target.classList.remove('fa-pause')
        e.target.classList.add('fa-play')
    }
})

if(music.play()){
    setInterval(()=>{
        music_range.value=music.currentTime
    },500)
}