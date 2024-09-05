console.log("welcone to spotify");
let songIndex = 0;
let audioElement = new Audio('mysong/1.mp3');
let Play = document.getElementById('play');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let backb = document.getElementById("backb");
let fordb = document.getElementById("fordb");
let mastersongname = document.getElementById("mastersongname");
let mysong =[
    {songg: '_Om Namah',filePath: "mysong\.1.mp3",coverPath: "cover/img1.png"},
    {songg: 'Best Krishna',filePath: "mysong\.2.mp3",coverPath: "cover/img2.png"},
    {songg: 'Mere Ghar Ram',filePath: "C:\Users\ly502\Desktop\project 1\hanuman.mp3",coverPath: "cover/img3.png"},
    {songg: 'Hanuman',filePath: "C:\Users\ly502\Desktop\project 1\hanuman.mp3",coverPath:"cover/Screenshot_20240825_082812.png" },
    {songg: 'Pta-nhi-kis-roop',filePath: "C:\Users\ly502\Desktop\project 1\hanuman.mp3",coverPath: "cover/Screenshot_20240825_082753.png"},
    {songg: 'Mai hu sarabi',filePath: "C:\Users\ly502\Desktop\project 1\hanuman.mp3",coverPath: "cover/Screenshot_20240825_082802.png"}
]
songItem.forEach((element,i)=>{
//  console.log(songItem,i);
 element.getElementsByTagName("img")[0].src =mysong[i].coverPath;
 element.getElementsByClassName("songg")[0].innerText =mysong[i].songg;

 })

// audioElement.play();
 
Play.addEventListener('click', () => {
   if(audioElement.paused|| audioElement.currentTime<=0){
    audioElement.play();
    play.classList.remove('fa-play');
    play.classList.add('fa-pause');
    gif.style.opacity =1;
}
else{
    audioElement.pause();
    play.classList.remove('fa-pause');
    play.classList.add('fa-play');
    gif.style.opacity =0;
}

})

audioElement.addEventListener('timeupdate',()=>{
    // console.log('timeupdate');
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    // console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change',()=>{
    audioElement.currentTime= (myprogressbar.value*audioElement.duration)/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemplay')).forEach((element)=>{
        
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
        
})
}

Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
            makeAllPlays();
            songIndex = parseInt(e.target.id);
            e.target.classList.remove('fa-play');
            e.target.classList.add('fa-pause');
            audioElement.src=`mysong/${songIndex+1}.mp3`;
            mastersongname.innerText = mysong[songIndex].songg;
            audioElement.currentTime = 0;
            audioElement.play();
            gif.style.opacity =1;
            play.classList.remove('fa-play');
            play.classList.add('fa-pause');
    })
})

backb.addEventListener("click",() => {
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`mysong/${songIndex+1}.mp3`;
    mastersongname.innerText = mysong[songIndex].songg;
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
    

})

fordb.addEventListener("click",() => {
    if(songIndex>=5){
        songIndex = 0;
    }
    else{
        songIndex += 1;
        
    }
    audioElement.src=`mysong/${songIndex+1}.mp3`;
    mastersongname.innerText = mysong[songIndex].songg;
        audioElement.play();
        play.classList.remove('fa-play');
        play.classList.add('fa-pause');
})
