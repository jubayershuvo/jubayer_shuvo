const btn = document.getElementById('btn');
        let err = document.querySelector('.error');

        let sauthor = document.querySelector('.author');
        let scover = document.querySelector('.cover');
        let sdescription = document.querySelector('.description');
        let smusic = document.querySelector('.music');
        let soriginal = document.querySelector('.original');
        let swithoutmark = document.querySelector('.withoutmark');
        let doptions = document.querySelector('.doptions');
        let content = document.querySelector('.box');
        let form = document.querySelector('.form');
        let refresh = document.querySelector('.refresh');
        let load = document.querySelector('.load');
        // const axios = require('axios/dist/browser/axios.cjs');
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
                url: 'https://tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com/index',
                params: {
                    url: url,
                },
                headers: {
                    'x-rapidapi-key': 'bd7a45a5b5msh239ed5c42821090p16ecccjsn60a61d11bd15',
                    'x-rapidapi-host': 'tiktok-downloader-download-tiktok-videos-without-watermark.p.rapidapi.com'
                }
            }

            try {
                const response = await axios.request(options);
                const {status, data} = response;
                const {
                OriginalWatermarkedVideo,
                author,
                cover,
                description,
                music,
                video,
                
            } = data;
                
            if(status !== 200){
                err.innerHTML = "Video download faild";
                form.classList.remove('hide');
                load.classList.add('hide');
                return;
            }
            load.classList.add('hide');
            sdescription.innerHTML = description[0];
            sauthor.innerHTML = author[0];
            scover.src = cover[0];
            smusic.href = music[0];
            soriginal.href = OriginalWatermarkedVideo[0];
            swithoutmark.href = video[0];

            doptions.classList.remove('hide');
            refresh.classList.remove('hide');
            content.classList.remove('hide');


            
                
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
            window.location.reload();
        })