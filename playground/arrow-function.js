var square = x =>  x*x;

console.log(square(12));

var user = {
    name: "Ionut",
    sayHi: () => {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi ${this.name}`);
    }
};

user.sayHiAlt(1,2,3);