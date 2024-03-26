gsap.from('.song_side',{duration: 1,x:'100%'})
gsap.from('.menu_side',{duration: 1,y:'-100%'})
gsap.from('.master_play',{duration: 1,y:'100%'})



const music = new Audio('Music/songs/11.mp3');
// music.play();

const songs = [
    {
        id: 1,
        songName: `Kesariya <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "Music/pics/1.jpg"
    },
    {
        id: 2,
        songName: `Deva Deva <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "Music/pics/2.jpg"
    },
    {
        id: 3,
        songName: `Shish Nawata Hoon <br>
        <div class="subtitle">Jubin Nautilya</div>`,
        poster: "Music/pics/3.jpg"
    },
    {
        id: 4,
        songName: `Maan Meri Jaan <br>
        <div class="subtitle">King</div>`,
        poster: "Music/pics/4.jpg"
    },
    {
        id: 5,
        songName: `Sach Keh Raha Hai Deewana <br>
        <div class="subtitle">B Praak</div>`,
        poster: "Music/pics/5.jpg"
    },
    {
        id: 6,
        songName: `Waaliyan <br>
        <div class="subtitle">Harnoor</div>`,
        poster: "Music/pics/6.jpg"
    },
    {
        id: 7,
        songName: `Abhi Mujh Mein Kahin <br>
        <div class="subtitle">Sonu Nigam</div>`,
        poster: "Music/pics/7.jpg"
    },
    {
        id: 8,
        songName: `Rom Rom <br>
        <div class="subtitle">MC Square</div>`,
        poster: "Music/pics/8.jpg"
    },
    {
        id: 9,
        songName: `Raabta <br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "Music/pics/9.jpg"
    },
    {
        id: 10,
        songName: `Punya Paap <br>
        <div class="subtitle">Divine</div>`,
        poster: "Music/pics/10.jpg"
    },
    {
        id: 11,
        songName: `Teri Mitti <br>
        <div class="subtitle">B Praak</div>`,
        poster: "Music/pics/11.jpg"
    },
    {
        id: 12,
        songName: `Jaadugar <br>
        <div class="subtitle">Paradox</div>`,
        poster: "Music/pics/12.jpg"
    },
    {
        id: 13,
        songName: `Chogada Tara<br>
        <div class="subtitle">Darshan Raval</div>`,
        poster: "Music/pics/13.jpg"
    },
    {
        id: 14,
        songName: `Stay<br>
        <div class="subtitle">Justin Bieber</div>`,
        poster: "Music/pics/14.jpg"
    },
    {
        id: 15,
        songName: `Khamoshiyaan<br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "Music/pics/15.jpg"
    },
    {
        id: 16,
        songName: `Malang<br>
        <div class="subtitle">Ved Sharma</div>`,
        poster: "Music/pics/16.jpg"
    },
    {
        id: 17,
        songName: `Apna Bana Le<br>
        <div class="subtitle">Arjit Singh</div>`,
        poster: "Music/pics/17.jpg"
    },
    {
        id: 18,
        songName: `Tu Jo Mila<br>
        <div class="subtitle">Pritam</div>`,
        poster: "Music/pics/18.jpg"
    },
    {
        id: 19,
        songName: `Duniyaa<br>
        <div class="subtitle">Akhil</div>`,
        poster: "Music/pics/19.jpg"
    },
]


Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    e.getElementsByTagName('img')[0].src = songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML = songs[i].songName;
});

let masterPlay = document.getElementById('masterPlay');
let container = document.getElementById('container');
let wave = document.getElementById('wave');

// let tlf = gsap.timeline({
//     repeat: 1
// });

function startAnimation(){
    container.style.animation = "glow 1s infinite alternate";
    let tlf = gsap.from('.beats',{duration: 1,y:'100%'});
    tlf.restart();
}
function endAnimation(){
    container.style.animation = "none";
    let tlf = gsap.to('.beats',{duration: 1,y:'100%'});
    tlf.restart();
}

masterPlay.addEventListener('click',()=>{
    if(music.paused || music.currentTime <= 0){
        music.play();
        startAnimation();
        wave.classList.add('active1');
        // container.classList.add('activate');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
    }
    else{
        music.pause();
        endAnimation();
        wave.classList.remove('active1');
        // container.classList.remove('activate');
        masterPlay.classList.remove('bi-pause-fill');
        masterPlay.classList.add('bi-play-fill');
    }
});

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((el)=>{
        el.classList.add('bi-play-circle-fill');
        el.classList.remove('bi-pause-circle-fill');
    })
}

const makeAllBackground = ()=>{
    Array.from(document.getElementsByClassName('songItem')).forEach((el)=>{
        el.style.background = 'rgb(105,105,105,.0)';
    })
}

let index = 0;
let poster_master_play = document.getElementById('poster_master_play');
let playing = document.getElementById('playing');
let title = document.getElementById('title');
Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        index = el.target.id;
        music.src = `Music/songs/${index}.mp3`;
        poster_master_play.src = `Music/pics/${index}.jpg`;
        playing.src = `Music/pics/${index}.jpg`;
        music.play();
        startAnimation();
        // container.classList.add('activate');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

        let songTitles = songs.filter((els) =>{
            return els.id ==index;
        });

        songTitles.forEach(elss =>{
            let { songName } = elss;
            title.innerHTML = songName;
        })

        makeAllBackground();
        Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        wave.classList.add('active1');
        // container.classList.add('activate');
    });
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];

music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);

    if(sec1 < 100){
        sec1 = `0${sec1}`;
    }
    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr %  60);

    if(sec2 < 10){
        sec2 = `0${sec2}`;
    }
    currentStart.innerHTML = `${min2}:${sec2}`;

    let progressBar = parseInt((music_curr / music_dur) * 100);
    seek.value = progressBar;

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`
    dot.style.left = `${seekbar}%`;
    // ERROR
});

seek.addEventListener('change', ()=>{
    music.currentTime = seek.value * music.duration / 100;
});

let vol_icon = document.getElementById('vol_icon');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];
let vol_dot= document.getElementById('vol_dot');

vol.addEventListener('change', ()=>{
    if(vol.value == 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
    }
    if(vol.value > 0){
        vol_icon.classList.remove('bi-volume-up-fill');
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    if(vol.value > 50){
        vol_icon.classList.add('bi-volume-up-fill');
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
    }
    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    // ERROR
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a / 100;
});

let back = document.getElementById('back');
let next = document.getElementById('next');

back.addEventListener('click',()=>{
    index -= 1;
    if(index < 1){
        index = Array.from(document.getElementsByClassName('songItem')).length;

    }
    music.src = `Music/songs/${index}.mp3`;
    poster_master_play.src = `Music/pics/${index}.jpg`;
    playing.src = `Music/pics/${index}.jpg`;
    music.play();
    startAnimation();
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id ==index;
    });

    songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
    makeAllPlays();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    // container.classList.add('activate');
})

next.addEventListener('click', ()=>{
    index += 1;
    if(index > Array.from(document.getElementsByClassName('songItem')).length){
        index = 1;
    }
    music.src = `Music/songs/${index}.mp3`;
    poster_master_play.src = `Music/pics/${index}.jpg`;
    playing.src = `Music/pics/${index}.jpg`;
    music.play();
    // container.classList.add('activate');
    masterPlay.classList.remove('bi-play-fill');
    masterPlay.classList.add('bi-pause-fill');

    let songTitles = songs.filter((els) =>{
        return els.id ==index;
    });

    songTitles.forEach(elss =>{
        let { songName } = elss;
        title.innerHTML = songName;
    })

    makeAllBackground();
    Array.from(document.getElementsByClassName('songItem'))[index - 1].style.background = "rgb(105,105,105,.1)";
    makeAllPlays();
    startAnimation();
    el.target.classList.remove('bi-play-circle-fill');
    el.target.classList.add('bi-pause-circle-fill');
    wave.classList.add('active1');
    // container.classList.add('activate');
});



// let pop_song_left = document.getElementById('pop_song_left');
// let pop_song_right = document.getElementById('pop_song_right');
// let pop_song = document.getElementsByClassName('pop_song')[0];

// pop_song_right.addEventListener('click', ()=>{
//     pop_song.scrollLeft += 330;
// });
// pop_song_left.addEventListener('click', ()=>{
//     pop_song.scrollLeft -= 330;
// });

// let pop_art_left = document.getElementById('pop_art_left');
// let pop_art_right = document.getElementById('pop_art_right');
// let Artists_bx = document.getElementsByClassName('Artists_bx')[0];

// pop_art_right.addEventListener('click', ()=>{
//     Artists_bx.scrollLeft += 330;
// });
// pop_art_left.addEventListener('click', ()=>{
//     Artists_bx.scrollLeft -= 330;
// });


let key = document.getElementById('key');
Array.from(document.getElementsByClassName('songItem')).forEach((e,i) =>{
    console.log(e.getElementsByTagName('h5')[0]);
    if(key == e.getElementsByTagName('h5')[0]){
        console.log("MATCHED");
    }
});

