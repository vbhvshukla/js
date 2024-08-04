const input1={a:1,b:2,c:3}
const input2={a:1,d:2,c:3}

//We've all the keys 

const in1 = Object.entries(input1);
const in2 = Object.entries(input2);

const commonEntries = in1.filter(([key,value])=>in2.some(([k,v]) => k === key && value === v));

console.log(commonEntries);