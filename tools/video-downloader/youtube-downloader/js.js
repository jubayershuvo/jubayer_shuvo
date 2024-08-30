const btn = document.getElementById('btn');
btn.addEventListener('click', async (e)=>{
    e.preventDefault()
const options = {
    method: 'GET',
    url: 'https://youtube-downloader31.p.rapidapi.com/video.php',
    params: {
      url: 'https://www.youtube.com/watch?v=UzHHNVtiRMc'
    },
    headers: {
      'x-rapidapi-key': 'bd7a45a5b5msh239ed5c42821090p16ecccjsn60a61d11bd15',
      'x-rapidapi-host': 'youtube-downloader31.p.rapidapi.com'
    }
  };
  
  try {
      const response = await axios.request(options);
      const {status} = response;
      console.log(response);
      if(status !== 200){
        console.log('error');
        return;
      }
      const {
        audio, 
        video_info,
        video_with_audio, 

      } = response.data.data;
      
      const audio_url = audio.url;
      const video_with_audio_url = video_with_audio[0].url;
      const {
        author,
        title
      } = video_info;

      console.log(audio_url,video_with_audio_url);


  } catch (error) {
      console.error(error);
  }
});