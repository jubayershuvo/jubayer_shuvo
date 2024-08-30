const btn = document.getElementById('btn');
btn.addEventListener('click', async (e)=>{
  let url = document.getElementById('url');
    url = url.value;
  console.log(url);
    e.preventDefault()
    const options = {
      method: 'POST',
      url: 'https://facebook-video-downloader-api.p.rapidapi.com/facebook',
      headers: {
        'x-rapidapi-key': 'bd7a45a5b5msh239ed5c42821090p16ecccjsn60a61d11bd15',
        'x-rapidapi-host': 'facebook-video-downloader-api.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      data: {
        url: url
      }
    };
    
    try {
      const response = await axios.request(options);
      if(!response){
        console.log('error');
        return;
      }
      const {formats, uploader, fulltitle, thumbnail} = response.data;
      const sd_url = formats[1].url;
      const hd_url = formats[2].url;
      

    } catch (error) {
      console.error(error);
    }
});