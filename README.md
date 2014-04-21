Array.FindElements
==================

The findElements() method works for an array of objects. It returns an array of objects with the matching search Otherwise an empty array is returned.

Syntax
------
			arr.findElements(object)
Examples
--------
    var arr = [
    	{name: 'Sravan', id:'srv', location: 'banglore'},
    	{name: 'Aparna', id:'appy', location: 'banglore'},
    	{name: 'Kumar', id:'kum', location: 'pune'}
    ];

    arr.findElements(); // returns arr
    arr.findElements({name: 'Aparna'})[0];  // returns arr[1]
    arr.findElements({id: 'appy'})[0]; // returns arr[1]
    arr.findElements({location: 'banglore'}); // returns [{name: 'Sravan', id:'srv', location: 'banglore'}, {name: 'Aparna', id:'appy', location: 'banglore'}]
    arr.findElements({location: 'delhi'}); // returns [] (No matches found, returned empty array)
