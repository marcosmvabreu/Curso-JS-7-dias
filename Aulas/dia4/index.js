// const num = [1,2,3]

// num.push(4,5,6); //adiciona itens no fim do array
// num.unshift(-2,-1,0); //adiciona itens no inicio do array

// num.splice(2,0,2.5) //adiciona itens no meio do array

// console.log(num.includes(5));

const movies = [
    {
        id:1,
        movieName:'Dejavu'
    },
    {
        id:2,
        movieName:'Avengers'
    },
    {
        id:3,
        movieName:'Transformes'
    }
]

console.log(movies.find(movie => movie.movieName == 'Transformes'))
   
console.log('----------------------')

// const num = [5,6,7,8]
// const final = num.pop() //remove o ultimo item do array
// const final = num.shift() //remove o primeiro item do array
// const final = num.splice(2,1)
// console.log(num);
// console.log(final);