/**
 * Created by bjama on 10/13/2017.
 */


class VectorHelper {
    constructor(private vector = []) {}
    sortVector(arg: string = 'init') {}
    addVectors() {for (var i = 1 ; i <= boxes; i++) {
			var value = prompt("insert the value "+i);
				this.vector.push(value);
		}
    inverseVector() {}
    getMaxMin() {}
    formula(_formula) {
        for( let _v of this.vector) {
            _formula(_v);
        }
    }
}
