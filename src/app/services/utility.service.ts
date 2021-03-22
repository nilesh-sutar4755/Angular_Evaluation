import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilityService {

    // To check if given arrays are equal or not
    areArraysEqual(array1, array2) {
        return JSON.stringify(array1) == JSON.stringify(array2);
    }

    // To check if given arrays are sorted or not
    isSorted(array, key) {
        return array.every((v, i, a) => !i || a[i - 1][key] <= v[key]);
    }

}