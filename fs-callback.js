const { readFile, writeFile } = require('fs')

const first = readFile('./content/first.txt', 'utf8', (err, result) => {
    if (err) {
        return err
    }
    else
        return result
})
console.log(first)
// const first=readFileSync('./content/first.txt','utf8')
// const sec=readFileSync('./content/second.txt','utf8')

// const third = readFileSync('./content/third.txt', 'utf8')
// console.log(third)