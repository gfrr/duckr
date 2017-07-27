export default function auth () {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve({
      name: 'Giuseppe Fierro',
      avatar: 'https://avatars1.githubusercontent.com/u/13200585?v=4&u=300bf939198b127ba405090504a967b20e02a9bc&s=400',
      uid: 'gfrr'
    }), 2000)
  })
}
