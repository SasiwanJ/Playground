// for(counter; condition; operation) {
//     code ...
// }

usernames = ['max', 'pang', 'mhee', 'gapgap'];
usernames.push('simsim');
usernames[0] = 'Mister ' + usernames[0]; 
usernames[1] = 'Mister ' + usernames[1]; 
usernames[2] = 'Mister ' + usernames[2]; 
usernames[3] = 'Mister ' + usernames[3]; 
// console.log(usernames);

let user = {
    name: "sasiwan",
    childs: ["max", "pang"],
    cat: {
        name: "gapgap",
        species: "persian"
    },
    plus: function (a, b) {return a + b;}
}

console.log(user.cat.name)

