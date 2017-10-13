/**
 * Created by bjama on 10/13/2017.
 */


class VectorHelper {
    constructor(private vector = []) {}
    sortVector(arg: string = 'init') {}
    addVectors() {}
    inverseVector() {}
    getMaxMin() {}
    formula(_formula) {
        for( let _v of this.vector) {
            _formula(_v);
        }
    }
}
