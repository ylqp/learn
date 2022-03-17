
// img=>a.png=>03
var obj = {
  left: {
    left: {
      val: 1
    },
    right: {
      left: {
        val: 3
      },
      right: {
        val: 5
      },
      val: 9
    },
    val: 6
  },
  right: {
    val: 7
  },
  val: 4
}

function isfff (obj) {
  let leafArr = [] 
  if (!obj.left && !obj.right) {
    leafArr.push(obj.val)
  } else {
    leafArr = leafArr.concat(isfff(obj.left))
    leafArr = leafArr.concat(isfff(obj.right))
  }
  return leafArr
}

function isDengcha (arr) {
  let flag = true
  for (let i = 0; i < arr.length - 2 ; i++) {
    if (arr[i + 1] - arr[i] != arr[i+2] - arr[i+1]) {
      flag = false
      break;
    }
  }
  return flag
}


let data = {
    left: {
      left: {
        val: 1,
      },
      right: {
        left: { val: 3 },
        right: { val: 5 },
        val: 9,
      },
      val: 6,
    },
    right: {
      val: 7,
    },
    val: 4
  }

  function getVal (data,result = []) {
    if (!data.left && !data.right) {
      result.push(data.val)
    }
    if (data.left) {
      getVal(data.left,result)
    }
    if (data.right) {
      getVal(data.right,result)
    }
    return result
  }


  function isEqually(result) {
    let falg = true
    if (result.length < 2) {
      return false
    }
    let value = null
    for (let i = 0; i < result.length; i++) {
      if (!value) {
        value = result[i + 1] - result[i]
      } else {
        if (i !== result.length -1) {
          if (result[i + 1] - result[i] !== value) {
            falg = false
          }
        }
      }
    }
    return falg
  }
  console.log(isEqually(getVal(data)))

console.log(isDengcha(isfff(obj)))