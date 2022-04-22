let readline = require('readline')
let sqlite3 = require('sqlite3').verbose()

let readlineInterface = readline.createInterface({input: process.stdin})

let database = new sqlite3.Database('./database.db')

console.log("Ready! \n")

readlineInterface.on('line', query=> {
  database.all(query, (error, rows)=> {
    if(error) console.error(error)
    else if(rows.length>0) console.table(rows)
    else console.log("Success!")
  })
})

