const getJSON = function (url) {
  const promise = new Promise(function(resolve, reject) {
    
    const handler  = function() {
      if (this.readyState !== 4) {
        return
      }

      if (this.status === 200) {
        resolve(this.response)
      } else {
        reject(new Error(this.statusText))
      }
    }

    const client = new XMLHttpRequest() //=>node环境下无法执行 没有这个对象
    client.open('GET', url)
    client.onreadystatechange = handler
    client.responseType = "json"
    client.setRequestHeader("Accept", "application/json")
    client.send()
  })

  return promise
}

getJSON("/posts.json").then(function(json) {
  console.log('Contents:' + json)
}, function(error) {
  console.error('出错了', error)
})

