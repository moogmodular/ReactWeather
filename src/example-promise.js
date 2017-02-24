/**
 * Created by MKS on 23.02.2017.
 */
'use strict'

var a = 5;
var b = 60;

function addPromise(a, b) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('not Numbers');
            }
        }, 1000);
    });
}

addPromise(a, b).then(function (sum) {
    console.log('number: ', sum);
}, function (err) {
    console.log('promise error: ', err);
});