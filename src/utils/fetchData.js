export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '6f2f8bcfd5msh973c3c1ca0495f5p1eebabjsn5d562e9bbdff',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const youtubeOptions = {
  method: 'GET',
  url: 'https://youtube-search-and-download.p.rapidapi.com/video/related',
  headers: {
    'X-RapidAPI-Key': '6f2f8bcfd5msh973c3c1ca0495f5p1eebabjsn5d562e9bbdff',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();

  return data;
};
