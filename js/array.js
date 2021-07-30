

// let msgList = [{content: "1"}, {content: "2"}]

// function dealSameMessage (options) {
//     return msgList.some((item) => {
//       return item.content == options.content
//     })
// }

// console.log(dealSameMessage({content: 3}))
// console.log(msgList)

// function unique (arr) {
//     var x = new Set(arr)
//     return [...x]
// }

// let arr = [1, 4, 3, 4, 5]
// console.log(arr.sort())
// console.log(new Set(arr))
// console.log(Array.from(new Set(arr)))

// let arr = []
// arr.push(2,3,4,5)
// console.log(arr)
// arr.shift(12)
// console.log(arr)
// let arr2 = arr.concat([1,2])
// console.log(arr)
// console.log(arr2)
// arr.splice(0,7,8)
// console.log(arr)
// arr.push([2,3])
// console.log(arr)

// let data = '{"data":{"organizationTypeId":"1","items":[{"sequence":1,"code":"00","parentCode":"","level":1,"name":"弘成","comment":null,"enabled":1},{"sequence":1,"code":"00001","parentCode":"00","level":2,"name":"ces","comment":"","enabled":1},{"sequence":2,"code":"00002","parentCode":"00","level":2,"name":"一级机构002","comment":"","enabled":1},{"sequence":3,"code":"00003","parentCode":"00","level":2,"name":"一级权限测试机构","comment":"111111","enabled":1},{"sequence":4,"code":"00004","parentCode":"00","level":2,"name":"测试机构002","comment":"v4.0版本测试","enabled":1},{"sequence":5,"code":"00005","parentCode":"00","level":2,"name":"test01","comment":null,"enabled":1},{"sequence":6,"code":"00006","parentCode":"00","level":2,"name":"test02","comment":null,"enabled":1},{"sequence":7,"code":"00007","parentCode":"00","level":2,"name":"一级机构008","comment":null,"enabled":0},{"sequence":8,"code":"00008","parentCode":"00","level":2,"name":"弘成学院","comment":null,"enabled":1},{"sequence":9,"code":"00009","parentCode":"00","level":2,"name":"产品中心","comment":"","enabled":1},{"sequence":10,"code":"00010","parentCode":"00","level":2,"name":"cesff","comment":"","enabled":1},{"sequence":11,"code":"00011","parentCode":"00","level":2,"name":"学而思网校","comment":"","enabled":1},{"sequence":12,"code":"00012","parentCode":"00","level":2,"name":"理想树","comment":"","enabled":1},{"sequence":13,"code":"00013","parentCode":"00","level":2,"name":"笑话001","comment":"","enabled":1},{"sequence":14,"code":"00014","parentCode":"00","level":2,"name":"北京外国语大学","comment":"","enabled":1},{"sequence":1,"code":"00003001","parentCode":"00003","level":3,"name":"二级权限测试机构","comment":"","enabled":1},{"sequence":1,"code":"00002001","parentCode":"00002","level":3,"name":"二级机构002","comment":"","enabled":0},{"sequence":1,"code":"00001001","parentCode":"00001","level":3,"name":"二级机构001","comment":"a","enabled":1},{"sequence":1,"code":"00004001","parentCode":"00004","level":3,"name":"二级机构001","comment":"","enabled":1},{"sequence":2,"code":"00002002","parentCode":"00002","level":3,"name":"二级机构aaa","comment":"","enabled":1},{"sequence":2,"code":"00001002","parentCode":"00001","level":3,"name":"11","comment":"22","enabled":1},{"sequence":2,"code":"00004002","parentCode":"00004","level":3,"name":"二级机构009","comment":"","enabled":1},{"sequence":1,"code":"00004002001","parentCode":"00004002","level":4,"name":"三级机构001","comment":"","enabled":1},{"sequence":1,"code":"00004002001001","parentCode":"00004002001","level":5,"name":"四级机构001","comment":"","enabled":1}]},"error":null,"status":1}'
// let dataObj = JSON.parse(data)
// // console.log(dataObj.data.items)

// let arr = dataObj.data.items
// function dealTreeData (arr) {
//     let treeData = []
//     arr.forEach(item => {
//         if (!item.parentCode) {
//             treeData.push(item)
//         }
//     })
//     treeData.forEach(tree => {
//         tree.children = getJsonTree(arr, tree.code)
//     })
//     return treeData
// }
// function getJsonTree (data, parentCode){
//     let itemArr=[]

//     for(let i=0;i<data.length;i++){	
//         let node=data[i]

//          if(node.parentCode == parentCode ){	
//             let childrens = getJsonTree(data, node.code)
//             let newNode = {...node}
//             if (childrens.length) {
//                 newNode.children = childrens
//             }
//             itemArr.push(newNode);				 
//          }
//     }

//     return itemArr;
// }
// console.log(arr)

// console.log(JSON.stringify(getJsonTree(arr, '00')))

// function dealTreeData (arr) {
//     let treeData = []
//     arr.forEach(item => {
//         if (!item.parentCode) {
//             treeData.push(item)
//         } else {
//             treeData.forEach(node => {
//                 if (node.code == item.parentCode){
//                     if (node.chilrden) {
//                     } else {
//                         node.chilrden = []
//                     }
//                     node.chilrden.push(item)
//                 } else {
//                     if (node.chilrden) {
//                         node.chilrden.forEach(aa => {
//                             if (aa.code == item.parentCode) {
//                                 if (!aa.chilrden) {
//                                     aa.chilrden = []
//                                 }
//                                 aa.chilrden.push(item)
//                             }
//                         })
//                     }
//                 }
//             })
//         }
//     })
//     return treeData
// }

// console.dir(JSON.stringify(dealTreeData(arr)))
// console.log(JSON.parse(JSON.stringify(dealTreeData(arr))))

// let arr = ['nxf', 'xs']
// const xs = arr.indexOf('xs')
// console.log(xs)

// const xs = {name: 'xs'}
// const nxf = {name: 'nxf'}
// let arr = [xs, nxf]
// let arrCopy = [...arr]
// const aa = arr.indexOf(xs)
// const bb = arrCopy.indexOf(nxf)

// let arr2 = arr.slice()
// arr.push(1)
// console.log(arr2)
// console.log(arr)

// let arr = [3, 6, 7, 5]
// arr2 = arr.sort()
// console.log(arr2)
// arr2.push(1)
// console.log(arr)

// let arr = [3, 6, 7, 5]
// arr2 = arr.reverse()
// console.log(arr2)
// arr2.push(1)
// console.log(arr)

// let arr = [3, 6, 7, 5]
// arr2 = arr.concat([1,2])
// console.log(arr2)
// arr2.push(1)
// console.log(arr)

// map
// const arr = [1, 4, 9, 16]
// const map1 = arr.map(x => x*2)
// console.log(map1)

// ["1", "2", "3"].map(parseInt)
// console.log(["1", "2", "3"].map(item => parseInt(item)))
// console.log(parseInt(3, 2))

// const arr = [1, 3, 4, 6]
// const [a, ...rest] = arr
// console.log(a)
// console.log(rest)

// console.log([...'123'])

// let arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// 方法一
// let unique = arr.reduce((acc, cur) => {
//     if (acc.indexOf(cur) === -1) {
//         acc.push(cur)
//     }
//     return acc
// }, [])

// let arr = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
// // 方法二
// let unique = arr.sort().reduce((acc, cur) => {
//     if (!acc.length || acc[acc.length - 1] !== cur) {
//         acc.push(cur)
//     }
//     return acc
// }, [])

// console.log(unique)


