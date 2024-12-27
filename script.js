const makeChange = (c) => {
  // your name here
	
	c = parseInt(c);

    const quarterValue = 25; 
    const dimeValue = 10;    
    const nickelValue = 5;   
    const pennyValue = 1;    

    const q = Math.floor(c / quarterValue); 
    c %= quarterValue;                     

    const d = Math.floor(c / dimeValue);   
    c %= dimeValue;                        

    const n = Math.floor(c / nickelValue); 
    c %= nickelValue;                      

    const p = c;                          
    return { q, d, n, p };
};

console.log(makeChange(47)); 
console.log(makeChange(24));
};

// Do not the change the code below
const c = prompt("Enter c: ");
alert(JSON.stringify(makeChange(c)));
