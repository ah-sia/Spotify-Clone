import bell_icon from './bell.png'
import home_icon from './home.png'
import like_icon from './like.png'
import loop_icon from './loop.png'
import mic_icon from './mic.png'
import next_icon from './next.png'
import play_icon from './play.png'
import pause_icon from './pause.png'
import plays_icon from './plays.png'
import prev_icon from './prev.png'
import search_icon from './search.png'
import shuffle_icon from './shuffle.png'
import speaker_icon from './speaker.png'
import stack_icon from './stack.png'
import zoom_icon from './zoom.png'
import plus_icon from './plus.png'
import arrow_icon from './arrow.png'
import mini_player_icon from './mini-player.png'
import queue_icon from './queue.png'
import volume_icon from './volume.png'
import arrow_right from './right_arrow.png'
import arrow_left from './left_arrow.png'
import spotify_logo from './spotify_logo.png'
import clock_icon from './clock_icon.png'
import red from './red.png'
import withyouth from './withyouth.png'
import guts from './guts.png'
import apt from './apt.png'
import mantra from './mantra.png'
import eternalsunshine from './eternalsunshine.png'
import masterpiece from './masterpiece.png'
import howsweet from './howsweet.png'
import img8 from './img8.jpg'
import img9 from './img9.png'
import img10 from './img10.png'
import img11 from './img11.jpg'
import img12 from './img12.jpg'
import img13 from './img13.jpg'
import img14 from './img14.jpg'
import img15 from './img15.jpg'
import img16 from './img16.jpg'
import redtv from  './redtv.mp3'
import igotyou from  './igotyou.mp3'
import mantrajennie from  './mantrajennie.mp3'
import theboy from  './theboyismine.mp3'
import bubblegum from  './bubblegum.mp3'
import soamerican from  './soamerican.mp3'
import donottouch from  './donottouch.mp3'
import apateu from  './apateu.mp3'


export const assets = {
    bell_icon,
    home_icon,
    like_icon,
    loop_icon,
    mic_icon,
    next_icon,
    play_icon,
    plays_icon,
    prev_icon,
    search_icon,
    shuffle_icon,
    speaker_icon,
    stack_icon,
    zoom_icon,
    plus_icon,
    arrow_icon,
    mini_player_icon,
    volume_icon,
    queue_icon,
    pause_icon,
    arrow_left,
    arrow_right,
    spotify_logo,
    clock_icon
}

export const albumsData = [
    {   
        id:0,
        name: "Top 50 Global",
        image: img8,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#2a4365"
    },
    {   
        id:1,
        name: "Top 50 US",
        image: img9,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#c31762"
    },
    {   
        id:2,
        name: "This is TWICE",
        image: img10,
        desc:"One in a million! TWICE!",
        bgColor:"#9e7c6a"
    },
    {   
        id:3,
        name: "Trending Global",
        image: img16,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#44337a"
    },
    {   
        id:4,
        name: "Mega Hits,",
        image: img11,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#234e52"
    },
    {   
        id:5,
        name: "Happy Favorites",
        image: img15,
        desc:"Your weekly update of the most played tracks",
        bgColor:"#744210"
    }
]

export const songsData = [
    {
        id:0,
        name: "Red",
        image: red,
        album: "Red",
        file:redtv,
        desc:"Taylor Swift",
        duration:"3:43"
    },
    {
        id:1,
        name: "I Got You",
        image: withyouth,
        album: "With Youth",
        file:igotyou,
        desc:"TWICE",
        duration:"2:20"
    },
    {
        id:2,
        name: "so american",
        image: guts,
        album: "GUTS",
        file:soamerican,
        desc:"Olivia Rodrigo",
        duration:"2:32"
    },
    {
        id:3,
        name: "APT.",
        image: apt,
        album: "APT.",
        file:apateu,
        desc:"ROSÉ & Bruno Mars",
        duration:"2:50"
    },
    {
        id:4,
        name: "Mantra",
        image: mantra,
        album: "Mantra",
        file:mantrajennie,
        desc:"JENNIE",
        duration:"3:10"
    },
    {
        id:5,
        name: "The Boy is Mine",
        image: eternalsunshine,
        album: "Eternal Sunshine",
        file:theboy,
        desc:"Ariana Grande",
        duration:"2:45"
    },
    {
        id:6,
        name: "Do Not Touch",
        image: masterpiece,
        album: "Masterpiece",
        file:donottouch,
        desc:"MISAMO",
        duration:"2:18"
    },
    {
        id:7,
        name: "Bubblegum",
        image: howsweet,
        album: "How Sweet",
        file:bubblegum,
        desc:"NewJeans",
        duration:"2:35"
    }
]