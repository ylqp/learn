// function * foo () {
//     console.log('11111')
//     // return 100
//     yield 100
//     console.log('22222')
//     yield 300
// }

// const result = foo() 
// console.log(result)
// console.log(result.next())

// function * createIdMaker () {
//     let id = 1
//     while (true) {
//         yield id++
//     }
// }

function getRandomMoney(remainMoney,remainSize){
      let moneyList=[];
      const min=0.01;
      let max,money;
      while (remainSize>1){
        max=remainMoney/remainSize*2;
        money=Math.random()*max;
        money=money<0.01 ? 0.01 : money;
        money=Math.round(money*100)/100;
        moneyList.push(money);
        remainSize--;
        remainMoney-=money;
      }
      
      moneyList.push(Math.round(remainMoney*100)/100);
      return moneyList;
    }
    const testCount=10;   //测试次数
    const maxMoney=100;   //红包总金额
    const maxSize=2;    //红包个数
    let result=[];  //结果集
    for(let i=0; i<testCount; i++){
      result.push(getRandomMoney(maxMoney,maxSize));
    }
    console.log(result)
