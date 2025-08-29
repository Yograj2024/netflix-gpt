
export const bannerImg    =     'https://assets.nflxext.com/ffe/siteui/vlv3/258d0f77-2241-4282-b613-8354a7675d1a/web/IN-en-20250721-TRIFECTA-perspective_cadc8408-df6e-4313-a05d-daa9dcac139f_medium.jpg'
export const netflixLogo  =     "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-07-24/consent/87b6a5c0-0104-4e96-a291-092c11350111/019808e2-d1e7-7c0f-ad43-c485b7d9a221/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"


export const nowPlayingFetchUrl    = ' https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1'
export const popularMovieFetchUrl  = ' https://api.themoviedb.org/3/movie/popular?language=en-US&page=1'
export const topRatedMovieFetchUrl = ' https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1'
export const upComingMovieFetchUrl = ' https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1'

export const playBtn          =  ' https://cdn-icons-png.flaticon.com/512/3318/3318660.png '
export const moreInfo         =  ' https://cdn-icons-png.flaticon.com/512/7124/7124194.png '
export const rightBtn         =  ' https://cdn-icons-png.flaticon.com/512/5343/5343102.png '
export const leftBtn          =  ' https://cdn-icons-png.flaticon.com/512/5343/5343109.png '
export const menuIcon         =  ' https://cdn-icons-png.flaticon.com/512/16008/16008335.png '
export const homeIcon         =  ' https://cdn-icons-png.flaticon.com/512/1946/1946436.png '
export const playListIcon     =  ' https://cdn-icons-png.flaticon.com/512/5048/5048251.png '
export const languageIcon     =  ' https://cdn-icons-png.flaticon.com/512/4534/4534781.png '
export const GPTSerachIcon    =  ' https://cdn-icons-png.flaticon.com/512/18140/18140098.png  '
export const userLogedInIcon  =  ' https://cdn-icons-png.flaticon.com/512/4727/4727424.png '
export const signOutIcon      =  ' https://cdn-icons-png.flaticon.com/512/10901/10901692.png '
export const cancleIcon       =  ' https://cdn-icons-png.flaticon.com/512/659/659891.png '
export const gitHub           =  ' https://cdn-icons-png.flaticon.com/512/733/733553.png '
export const linkedin           =  ' https://cdn-icons-png.flaticon.com/512/145/145807.png  '

export const API_OPTIONS = {
    method  :  "GET" ,
    headers : {
        accept         : 'application/json',
        Authorization  : `Bearer ${import.meta.env.VITE_TMDB_KEY}`
    }
}

export const gptSearch_API_OPTIONS = {
    method  : 'post',
    headers : {
        'Content-Type': 'application/json',
        'Authorization':`Bearer ${import.meta.env.VITE_GPT_KEY}`
    }
}

export  const gptQueryPrefix = `You are a movie recommendation system. 
    Suggest exactly 5 movie names for this category: `

export  const gptQuerySuffix = `Return only movie names, no extra text. 
    The output must be a single line, comma-separated. 
    Example format: Sholay, Don, Dilwale, Avengers End Game, Koi Mil Gaya`

export const footerLinkSec = [
  {
    title : "quick links",
    li_items : [
      {text:"home"},
      {text:"gpt serach"},
      {text:"trending"},
      {text:"profile"},
      {text:"favorites"},
    ]
  },
  {
    title : "source code/ tech stack",
    li_items : [
      {text:"react.js + redux"},
      {text:"tailwind"},
      {text:"google firebase"},
      {
        text:"view source code",
        link : "https://github.com/Yograj2024/netflix-gpt/tree/main/src",
      }
    ]
  },
  {
    title : "quick links",
    li_items : [
      {text:"home"},
      {text:"gpt serach"},
      {text:"trending"},
      {text:"profile"},
      {text:"favorites"},
    ]
  },
  {
    title : "quick links",
    li_items : [
      {text:"home"},
      {text:"gpt serach"},
      {text:"trending"},
      {text:"profile"},
      {text:"favorites"},
    ]
  },
]