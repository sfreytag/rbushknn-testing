// Test knn() with an ES6 modules build using webpack
import RBush from 'rbush';

// This does not work - 
// 'Queue is not a constructor' thrown from inside rbush-knn
import knn from 'rbush-knn';

// This also does not work
//const knn = require('rbush-knn');
const tree = new RBush();

const item = {
    minX: 20,
    minY: 40,
    maxX: 30,
    maxY: 50,
    foo: 'bar'
};
tree.insert(item);

const results = knn(tree)
console.log(results)