const btn = document.getElementById('btn');
        let err = document.querySelector('.error');

        let sauthor = document.querySelector('.author');
        let stitle = document.querySelector('.description');
        let smusic = document.querySelector('.music');
        let soriginal = document.querySelector('.original');
        let doptions = document.querySelector('.doptions');
        let content = document.querySelector('.box');
        let form = document.querySelector('.form');
        let refresh = document.querySelector('.refresh');
        let load = document.querySelector('.load');
 
        btn.addEventListener('click', async (e)=>{
            form.classList.add('hide');
            load.classList.remove('hide');
            e.preventDefault()

            const inputUrl = document.querySelector('#url');
            const url = inputUrl.value;
            if(!url){
                err.innerHTML = 'Input valid url';
                form.classList.remove('hide');
                load.classList.add('hide');
                setTimeout(() => {
                    err.innerHTML = ''
                }, 1000);
                return;
            }
            const options = {
                method: 'GET',
                url: 'https://youtube-downloader31.p.rapidapi.com/video.php',
                params: {
                  url: url
                },
                headers: {
                  'x-rapidapi-key': 'bd7a45a5b5msh239ed5c42821090p16ecccjsn60a61d11bd15',
                  'x-rapidapi-host': 'youtube-downloader31.p.rapidapi.com'
                }
              };

            try {
                const response = await axios.request(options);
                const {status} = response;
                console.log(response.data);
                if(status !== 200){
                    console.log('error');
                    return;
                }
                const {
                    audio, 
                    video_info,
                    video_with_audio, 

                } = response.data.data;
                
                const audio_url = audio[0].url;
                const video_with_audio_url = video_with_audio[0].url;
                const {
                    author,
                    title
                } = video_info;



                load.classList.add('hide');
                content.classList.remove('hide');
                doptions.classList.remove('hide');

            doptions.classList.remove('hide');
            refresh.classList.remove('hide');
            content.classList.remove('hide');


            stitle.innerHTML = title;
            sauthor.innerHTML = author;
            smusic.href = audio_url;
            soriginal.href = video_with_audio_url;


            
                
            } catch (error) {
                err.innerHTML = 'No video found, input valid url';
                form.classList.remove('hide');
                load.classList.add('hide');
                setTimeout(() => {
                    
                    err.innerHTML = '';
                }, 2000);
                return;
            }
        });

        refresh.addEventListener('click', ()=>{
            window.location.reload()
        })