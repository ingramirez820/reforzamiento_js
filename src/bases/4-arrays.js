
const arreglo = [1,2,3,4]
arreglo.push(5)
const arreglo2=[...arreglo]
arreglo2.push()
const arreglo3 = arreglo2.map(function(n){
    return n*3
})
console.log(arreglo)
console.log(arreglo2)
console.log(arreglo3)