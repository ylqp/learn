function loadImageAsync (url) {
  return new Promise(function (resolve, reject) {
    const image = new Image()

    image.onload =  function () {
      resolve(image)
    }

    image.onerror= function () {
      reject(new Error('could not load  image at' +  url))
    }

    image.src = url
  })
}

loadImageAsync('./a.png') // node环境下Image对象引用失败