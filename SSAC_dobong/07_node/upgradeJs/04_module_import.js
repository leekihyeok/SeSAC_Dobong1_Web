// 모듈 사용 - import 사용
// import {flr, getFlr} from './04_export1.js'
import * as flowers from './04_export1.js'

// console.log(flr);
// console.log(getFlr(2));
// console.log(getFlr(-3));

console.log(flowers);

import { getAnimal, animals } from './04_export2.js';
console.log(animals);
getAnimal();