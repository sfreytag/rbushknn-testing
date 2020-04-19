// Test knn() with CommonJS modules
const RBush = require('rbush');
const knn = require('rbush-knn');

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
