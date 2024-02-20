import bs from './binarySearch.mjs'; // bs is already an alias of binarySearch because it is default exported

import { linearSearch as ls } from './linearSearch.mjs';

let index = bs([1,2,3,4], 4);
console.log(index);

let ans = ls([4,6,3,1,8], 4);
console.log(ans);

// import * as objData from './--' ,, for clubing the exported data into one single object ( objData )