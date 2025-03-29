let v1: string = "hi there";
console.log(v1);

interface NewType {
    "name": string,
    "id": number
};


let value1:NewType = {
    name: "Ramesh",
    id: 10
};

value1.name="Kumar";
value1.id=20;

console.log(value1);