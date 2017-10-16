// var vector1 = function(boxes)
// {
//     v1 =[];
//     for (var i = 1 ; i <= boxes; i++) {
//         var value = prompt("insert the value "+i);
//         v1.push(value);
//     }
//     console.log(v1);
//     alert('vector created ');
//     return vector1;
// }
//
// var vector2 = function(boxes)
// {
//     v2 =[];
//     for (var i = 1 ; i <= boxes; i++) {
//         var value = prompt("insert the value "+i);
//         v2.push(value);
//     }
//     console.log(v2);
//     alert('vector created ');
//     return vector2;
// }
// var v1,v2 =[];
// while (option !='quit') {
//     var option = prompt('select an option');
//     if (option === "create") {
//         var boxes = prompt("insert the number of boxes");
//         vector1(Number(boxes));
//     }
//     else if (option === "list") {
//         var name = prompt("insert the name of the vector v1 or v2");
//         if (name === "v1") {
//             list(v1)
//         }
//         else if (name === "v2") {
//             list(v2)
//         }
//         else {
//             alert('name does not exist')
//         }
//         ;
//     }
//     else if (option === "sort") {
//         var name = prompt("insert the name of the vector v1 or v2");
//         if (name === "v1") {
//             sort(v1)
//         }
//         else if (name === "v2") {
//             sort(v2)
//         }
//         else {
//             alert('name does not exist')
//         }
//         ;
//     }
//     else if (option === "summon") {
//
//         var boxes = prompt("insert the number of boxes of the seconde vector v2");
//         vector2(Number(boxes));
//         sum(v1, v2);
//     }
//     else if (option === "reverse") {
//         var name = prompt("insert the name of the vector v1 or v2");
//         if (name === "v1") {
//             reverse(v1)
//         }
//         else if (name === "v2") {
//             reverse(v2)
//         }
//         else {
//             alert('name does not exist')
//         }
//         ;
//     }
// }


export class VectorHelper {

    constructor(private _vector: any[]) {}
    get vector() {
        return this._vector;
    }
    set vector(vector) {
        this._vector = vector;
    }

    sort() {
        for (var i = 0; i < this.vector.length; i++) {
            for (var j = i + 1; j < this.vector.length; j++) {
                if (this.vector[i] > this.vector[j]) {
                    var swap = this.vector[i];
                    this.vector[i] = this.vector[j];
                    this.vector[j] = swap;
                }
            }
        }
        // alert('vector sorted');

        return new VectorHelper(this.vector);
    }

    summon(_v) {
        let __v = [];
        if (this.vector.length != _v.length)
        {
            // throw (alert('must be the same length !!'))
            throw ('must be the same length !!');
        }
        else
        {
            for(var i=0 ; i<=this.vector.length-1 ; ++i)
            {
                __v[i]=Number(this.vector[i])+Number(_v[i]);
            }

            // console.log(__v);
            // alert('two vectors have been summed in __v');
        }
        return new VectorHelper(__v);
    }

    reverse() {
        let _v = [];
        const _length = this.vector.length;
        for( let i = 0; i< _length; i++ ) {
            _v.push(this.vector.pop());
        }
        _v.forEach(_ => this.vector.push(_));
        return new VectorHelper(_v);
    }

    list() {
        console.log(this.vector);
        return new VectorHelper(this.vector);
    }

    getMaxMin() {
        let minMax= {min: 0, max: 0};
        return ((min, max ) => {
            this.vector.forEach(_v => {
                minMax.min = min = _v < min ? _v : min;
                minMax.max = max = _v > max ? _v : max;
            });
            return minMax;
        })(this.vector[0], this.vector[0]);

    }
    formula(_formula) {
        return new VectorHelper(this.vector.map(_v => _formula(_v.toString())));
    }
}


((vector)=> {
    let vectorHelper = new VectorHelper(vector);
    console.log(
        vectorHelper
            .list()
            // .sort().list()
            // .reverse().list()
            .summon(vector)
            .list()
            // .getMaxMin()
    );
    vectorHelper.formula((_v) => {
        return (_v * 3)
    }).list()
})([4,65,354,76,25,1]);