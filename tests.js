var arr = [
		{name: 'Sravan', id:'srv', location: 'banglore'},
		{name: 'Aparna', id:'appy', location: 'banglore'},
		{name: 'Kumar', id:'kum', location: 'pune'}
	];
test('Array should have the method findElement()', function(){
	notEqual( [].findElements, undefined);
});
test('Method should return an Array', function(){
	var ele = arr.findElements({});
	ok( true, ele instanceof Array);
});
test('Should return the same object when I pass the object', function() {
	var ele = arr.findElements(arr[0])[0];
	equal( arr[0], ele);
});
test('Should return entire array when I pass nothing', function() {
	var eles = arr.findElements();
	deepEqual(eles, arr);
});

test('Should return the objects based on property search', function() {
	var ele = arr.findElements({name: 'Aparna'})[0];
	equal(ele, arr[1], 'Searching with "name" property');
	
	ele = arr.findElements({id: 'appy'})[0];
	equal(ele, arr[1], 'Searching with "id" property');
	
	ele = arr.findElements({location: 'banglore'});
	equal(ele.length, 2, 'Searching with "location" property, Expecting multiple matches.');
	
	ele = arr.findElements({location: 'delhi'});
	equal(ele.length, 0, 'Searching with a value thats not there in the array.');
	
	ele = arr.findElements({location: 'delhi', name: 'Sravan'});
	equal(ele.length, 0, 'Searching with values those not there in the array.');
	
	ele = arr.findElements({someKey: 'some value'});
	equal(ele.length, 0, 'Searching with unknown property');
});