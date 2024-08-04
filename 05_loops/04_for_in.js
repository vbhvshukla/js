// const obj = {
//     game1 : "NFS",
//     game2 : "GTA",
//     game3 : "MAFIA"
// }

// for(const key in obj){
//     console.log(obj[key]);
// }

// const arr = [1,2,3,4,5];

// for(const i in arr){
//     console.log(i);
// }

//Map not iterable by forin
const map = new Map();
map.set('IN',"INDIA");
map.set('PK',"PAKISTAN");

for(const key in map){
    console.log(map[key]);
}