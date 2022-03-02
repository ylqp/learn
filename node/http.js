const http = require('http')

const server = http.createServer()

server.listen(3312, 'localhost', () => {
  console.log('服务端开启。。。。。。')
})

let aaa = {
  name: 123,
  port: 3312
}

let bbb = {
  
  name: 'hhh',
  age: 18,
  ...aaa,
}
console.log(bbb)