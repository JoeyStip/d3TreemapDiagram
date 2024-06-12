let test = "swag of the swaggy swag"

//test.split(/(?=[A-Z][^A-Z])/g)
let newtest = test.replace(/(?=[A-Z][^A-Z])/g, '*')


console.log(newtest)