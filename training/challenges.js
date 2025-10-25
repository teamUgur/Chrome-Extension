let myArray = `["www.mylead.com"]`
myArray = JSON.parse(myArray)
myArray.push("www.djdh.com")
myArray = JSON.stringify(myArray)
console.log(myArray)
console.log(typeof myArray)


