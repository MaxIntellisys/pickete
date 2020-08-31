class Pickete {

    constructor(){
        this.current = 0
    }

    get value() {
        return this.current
    }

    static range(start, finish) {
        if(arguments.length === 1){ start = 0, finish = arguments[0] }
        let range = []

        for(let num=start; num<=finish; num++){
            range.push(num)
        }

        return range
    }

    random(top) {
        this.current = Math.floor(Math.random() * top)
        return this
    }

    average(arr) {
        let sum = 0
        for(let num of arr) {
            sum += num
        }

        this.current = Math.round(sum / arr.length)
        return this
    }

    add(num) {
        this.current += num
        return this
    }

    substract(num) {
        this.current -= num
        return this
    }

    multiplyBy(num) {
        this.current *= num
        return this
    }

    state() {
        return this
    }
}

export default Pickete

// max in array
// min in array
// sum an arr

const p = new Pickete
// p.random(10).multiplyBy(10).average([10, 20, 55, 12])

console.log(p.value)