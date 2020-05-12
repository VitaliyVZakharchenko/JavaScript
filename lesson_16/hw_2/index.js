var foo = 1; 

function bar() { 
    if (!foo) { 
        const foo = 10; 
    } 

    return foo;
}

export var foo = bar();
console.log(foo);