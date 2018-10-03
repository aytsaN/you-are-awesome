// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (property) => {
	return property;
};

const createNotEnumerableProperty = (property) => {
	Object.defineProperty(Object.prototype, property, { 
		enumerable: false,
		value: 'value'
	});
	return property;
};


const createProtoMagicObject = () => {
	function miracle () {};

 	miracle.__proto__ = miracle.prototype;

	return miracle;
};


const incrementor = () => {
  incrementor.count++;
  return incrementor;
};
incrementor.count = 0;
	incrementor.valueOf = function() {
  return incrementor.count;
}


const asyncIncrementor = () => {
	asyncIncrementor.count++;
  return asyncIncrementor;

};
asyncIncrementor.count = 0;
	asyncIncrementor.valueOf = function() {
  return asyncIncrementor.count;
}


const createIncrementer = () => {
	//let count = 0;
	let inc = {
		next: function() {

		}
	};
	//Object.defineProperty(inc, "a", {value : count++});
	 return inc;
};



// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (result) => {
	return new Promise (function(res, rej) {
		setTimeout(() => {
    	res(result);
  	}, 1000);
  	setTimeout(() => {
    	rej(new Error());
  	}, 2000);
	});
};


const getDeepPropertiesCount = (obj) => {return obj};


const createSerializedObject = () => {
	return new String(JSON.stringify({x:'x'}));
};


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