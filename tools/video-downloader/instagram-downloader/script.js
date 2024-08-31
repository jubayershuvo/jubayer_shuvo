const btn = document.getElementById('btn');
        let err = document.querySelector('.error');

        let sauthor = document.querySelector('.author');
        let stitle = document.querySelector('.description');
        let sthumbnail = document.querySelector('.thumbnail');
        let ssd = document.querySelector('.sd');
        let shd = document.querySelector('.hd');
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
            if(!url || !url.includes('instagram.com')){
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
              url: 'https://instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com/get-info-rapidapi',
              params: {
                url: url
              },
              headers: {
                'x-rapidapi-key': 'bd7a45a5b5msh239ed5c42821090p16ecccjsn60a61d11bd15',
                'x-rapidapi-host': 'instagram-downloader-download-instagram-videos-stories1.p.rapidapi.com'
              }
            };

            try {
                const response = await axios.request(options);
                console.log(response);
                if(!response){
                    console.log('error');
                    return;
                  }
                  const {download_url, caption, thumb} = response.data;
            


                load.classList.add('hide');
                content.classList.remove('hide');
                doptions.classList.remove('hide');

            doptions.classList.remove('hide');
            refresh.classList.remove('hide');
            content.classList.remove('hide');


            stitle.innerHTML = caption.slice(0,20);
            sthumbnail.src = thumb;
            ssd.href = download_url;


            
                
            } catch (error) {
                err.innerHTML = 'No video found, input valid url';
                form.classList.remove('hide');
                load.classList.add('hide');
                content.classList.add('hide');
                setTimeout(() => {
                    
                    err.innerHTML = '';
                }, 2000);
                return;
            }
        });

        refresh.addEventListener('click', ()=>{
            window.location.reload()
        })