
class Pickete {

    static random(top) {
        return Math.floor(Math.random() * top)
    }

    static range(start, finish) {
        if(arguments.length === 1){ start = 0, finish = arguments[0] }
        let range = []

        for(let num=start; num<=finish; num++){
            range.push(num)
        }

        return range
    }

    static average(arr) {
        let sum = 0
        for(let num of arr) {
            sum += num
        }

        return Math.round(sum / arr.length)
    }
}

// console.log(Pickete.average([50, 100, 50]))