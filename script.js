console.log("Appu");
// primitive data types
var number = 10;
var name = "Appu";
var percentage = 6.5;
var flag = true;
console.log(number);
console.log(name);
console.log(flag);
console.log(percentage);
console.log(number, typeof (number));
console.log(flag, typeof(flag));

// non primitive data types
//array //collection pf date types
const arr = [10, "Gokul", percentage, false];
console.log(arr);
//object json -> javascript objecr notation
//key value
const obj = {
    developer: "Appu",
    batsize: 10,
    isstarted: true,
    arr: [10, 25, "true"],
};
console.log(obj);

//call by value

var num1 = 10;
var num2 = num1;
num2 = 15;
console.log("num1",num1);
console.log("num2", num2);

//call by reference

let studarr = ["dhruva", "annam", "appu"];
let studarrcopy = studarr;
//studarrcopy[0] = "Vishnu";
console.log("studarry", studarr);
console.log("studarry copy", studarrcopy);

//deepcopy
const oldobejct = { name: "chiran"};
const newobejct = obejct.assign({}, oldobejct);
newobejct.name = "gopi";
console.log("old, oldobejct");
console.log("new, newobejct");

//object iteration
// way 1) dot notation
console.log(obj.developer); // preferable
//way 2) map iteration
console.log(obj["developer"]);

//array iteration
console.log(arr[0]);

const nestobj = [
    {
        class: "FSD",
        student:
        {
            name: "Annam",
            stack: [
                "html"
                "css",
                {
                    js: ["react", "angular"],
                },
            ],
        },
    },
],
{
    name: "anu",
    stack: [
        "thml",
        "css",
        {
            js: ["vue", "react"],
        },

    ],
};















