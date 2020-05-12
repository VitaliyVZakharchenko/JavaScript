var foo = 1; 

export function bar() { 
    if (!foo) { 
        const foo = 10; 
    } 

    return foo;
}

var foo = bar();
console.log(foo);