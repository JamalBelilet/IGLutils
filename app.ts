/**
 * Created by bjama on 10/13/2017.
 */

export class VectorHelper {

    constructor(private _vector: any[]) {
    }
    get vector() {
        return this._vector;
    }
    set vector(vector) {
        this._vector = vector;
    }

    sort() {
        return new VectorHelper(this.vector);
    }

    summon(_v) {
        return new VectorHelper(this.vector);
    }

    reverse() {
        return new VectorHelper(this.vector);
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
            .sort().list()
            .reverse().list()
            .summon(vector)
            .list()
            .getMaxMin()
    );
    vectorHelper.formula((_v) => {
        return (_v * 3)
    }).list()
})([4,65,354,76,25,1]);