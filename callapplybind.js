// Bind
function testBind() {
    console.log(this.value);
    console.log('aaa');
}

testBind = testBind.bind({value: 'I am binded'});

testBind();


// Call
// Individual Param passed
function testCall() {
    console.log(this.value);
}

testCall.call({value: 'I am called'}, 1 , 2)

// Apply
// param passed as array
function testApply() {
    console.log(this.value);
}

testCall.apply({value: 'I am applied'}, [1, 2])

