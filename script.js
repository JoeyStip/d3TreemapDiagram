let test = '555555555'

//test.split(/(?=[A-Z][^A-Z])/g)
let newtest = test.replace(/\B(?=(\d{3})+$)/g, ',')


console.log(newtest)