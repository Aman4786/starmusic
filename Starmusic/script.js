console.log("Welcome to star Media");

// Initialize the variable

let songIndex = 0;
let audioElement = new Audio('sounds/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Eminem-Love", filePath: "sounds/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Bad Liar", filePath: "sounds/1.mp3", coverPath: "covers/2.jpg"},
    {songName: "Bones", filePath: "sounds/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Whatever it takes", filePath: "sounds/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Infinity", filePath: "sounds/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Linkin Park", filePath: "sounds/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Good Bye", filePath: "sounds/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Human", filePath: "sounds/8.mp3", coverPath: "covers/8.jpg"},
]
songItem.forEach((element, i)=>{
    // console.log('element, i');
element.getElementsByTagName("img")[0].src = songs[i].coverPath;
element.getElementsByClassName("songName")[0].src = songs[i].songName;

})


// audioElement.play();

//Handle Play pause Click

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-circle-play');
        masterPlay.classList.remove('fa-circle-pause');
        gif.style.opacity = 0;
    }
})

//Listen to Event

audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //Update Seekbar

    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    // console.log(progress);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        // console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `sounds/${songIndex}.mp3`;
        audioElement.currentTime =  0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click',() =>{
    if (songIndex >= 8) {
        songIndex   =   0
    }
    else{
        songIndex   +=1;
    }

    audioElement.src = `sounds/${songIndex+1}.mp3`;
        audioElement.currentTime =  0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click',() =>{
    if (songIndex <= 0) {
        songIndex   =   0
    }
    else{
        songIndex   -=1;
    }

    audioElement.src = `sounds/${songIndex-1}.mp3`;
        audioElement.currentTime =  0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
})