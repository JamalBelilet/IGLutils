import {VectorHelper} from '../app';
/**
 * Created by bjama on 10/15/2017.
 */
///<reference path="../typings/index.d.ts"/>

describe('VectorHelper_units_testing ', ()=> {
    describe('| getMinMax_unit_test', ()=> {
        it("#1", function() {
            let vectorHelper = new VectorHelper([2,93,5,9]);
            expect(vectorHelper.getMaxMin()).toEqual({min: 2, max: 93});
        });
        it("#2", function() {
            let vectorHelper = new VectorHelper([-26, 12, 0, -1.8]);
            expect(vectorHelper.getMaxMin()).toEqual({min: -26, max: 12});
        });
        // it("#3", function() {
        //     let vectorHelper = new VectorHelper([0, 12, 0, -1.8]);
        //     expect(vectorHelper.getMaxMin()).toEqual({min: 0, max: 12});
        // });
    });
    describe('| formula_unit_test', ()=> {
        it("#1 substraction", function() {
            let vectorHelper = new VectorHelper([-5,9,1,101]);
            expect(vectorHelper.formula((_v)=> {
                return _v - 3;
            }).vector).toEqual([-5-3, 9-3, 1-3, 101-3]);
        });
        it("#multiplication", function() {
            let vectorHelper = new VectorHelper([0,0,0,1]);
            expect(vectorHelper.formula((_v)=> {
                return _v * 1.5;
            }).vector).toEqual([0,0,0,1.5]);
        });
    });
});