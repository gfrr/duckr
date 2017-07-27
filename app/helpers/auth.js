export default function auth(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        resolve({
          name: 'Gfrr',
          avatar: 'https://avatars1.githubusercontent.com/u/13200585?v=4&s=460',
          uid: 'gfrr89 '
        })
      }, 2000)
    })
  }
