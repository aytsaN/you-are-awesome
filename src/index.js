// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
	// Object.defineProperty(Object.prototype, property, { enumerable: true, value:'value' });

return property;
};

const createNotEnumerableProperty = (property) => {
Object.defineProperty(Object.prototype, property, { enumerable: false, value:'value' });
return property;
};


const createProtoMagicObject = () => {

	function animal () {};


 animal.__proto__ = animal.prototype;

return animal;
};


//http://learn.javascript.ru/static-properties-and-methods
const incrementor = () => {
    incrementor.count++;
    return incrementor;
};

incrementor.count=0;

incrementor.valueOf = function() {
    return incrementor.count;
}

//return incrementor.showCount();


const asyncIncrementor = () => {
	asyncIncrementor.count++;
    return asyncIncrementor.count;
};
asyncIncrementor.count=0;
// asyncIncrementor.valueOf = function() {
//     return asyncIncrementor.count;
// }


const createIncrementer = () => {
	    
};



// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = () => {};
const getDeepPropertiesCount = () => {};
const createSerializedObject = () => {};
const toBuffer = () => {};
const sortByProto = () => {};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;