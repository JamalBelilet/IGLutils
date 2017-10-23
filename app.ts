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

/**
 * Class ´VectorHelper´Which contains different functions that will be used to manage a vector .
 *  It contains these main functions : <br />
 *     <div >
 *       -sort();<br />
 *      -summon(v);<br />
 *      -reverse(v);<br />
 *      -list(v);<br />
 *      -getMaxMin(v);<br />
 *      -formula(x);
 *      </div>
 */
export class VectorHelper {
    /**
     * @constructor which is used to instance and initialize the new instace of VectorHelper.
     * @param _vector  an Attribut of our class which can be used as a parameter of instructor in TypeScript.
     * @param _vector  an Attribut of our class which can be used as a parameter of instructor in TypeScript.
     * @returns an instance of VectorHelper.
     */

    constructor( /**
                  * @param which _vector used to instance and initialize the new instace of VectorHelper.
                  *
                  */private _vector: any[]) {}
    /**
     * @accessor a function wich serve to get the private parameter 'Vector'.
     * @returns Vectors's Value
     */
    get vector() {
        return this._vector;
    }

    /**
     * @accessor a function wich serve to set  the private parameter 'Vector'.
     *@param vector  which is our private attribut.
     */
    set vector(vector) {
        this._vector = vector;
    }
    /**
     * Fucntion which is used to sort our vector.
     * @returns a VectorHelper instance .
     */
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
    /**
     * Summons Summon two vectors. It must generate an exception if both vectors have <br/>
     * different sizes.
     * @param _v  a VectorHElper instance.
     * @returns a VectorHelper instance .
     */
    summon(_v) {
        let __v = [];
        if (this.vector.length != _v.length)
        {
            // throw (alert('must be the same length !!'))
            throw ('vectors must have the same length !!');
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
    /**
     * Reverses The last VectorHelpers s Instance Vector ´reverse´.
     * @returns a VectorHelper instance .
     */
    reverse() {
        let _v = [];
        const _length = this.vector.length;
        for( let i = 0; i< _length; i++ ) {
            _v.push(this.vector.pop());
        }
        _v.forEach(_ => this.vector.push(_));
        return new VectorHelper(_v);
    }
    /**
     * Lists the Last VectorHelper s Instance Vector ´list´.
     * @returns a VectorHelper instance .
     */
    list() {
        console.log(this.vector);
        return new VectorHelper(this.vector);
    }
    /**
     * Gives the Min and the Max of the Vector ´getMAxMin´<br/>
     *Simultaneously obtain the minimum and the maximum of a vector.
     * @returns   an Object of Type: {min:Number , max:Number}.
     */
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
    /**
     * Apply a formula as a function to all elements of a vector. By <br/>
     * example, multiply all elements by 2. This formula must be in the form of a <br/>
     * function or method..<br/>
     * @param _formula  can be multiplication addition or soustraction.
     * @returns a VectorHelper instance .
     */
    formula(_formula) {
        return new VectorHelper(this.vector.map(_v => _formula(_v.toString())));
    }
}


((vector)=> {
    let vectorHelper = new VectorHelper(vector);
    console.log(
        vectorHelper
            .list()
            .sort().list()
            .reverse().list()
            .summon([84,-5,1,8,6,3]).list()
            // .summon([84,-5,1,8]).list()
            .getMaxMin()
    );
    vectorHelper.formula((_v) => {
        return (_v * 3)
    }).list()
})([4,65,354,76,25,1]);