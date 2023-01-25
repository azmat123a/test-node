const {readFileSync,writeFileSync}=require('fs')

const first=readFileSync('./content/first.txt','utf8')
const sec=readFileSync('./content/second.txt','utf8')

const third=readFileSync('./content/third.txt','utf8')
console.log(third)