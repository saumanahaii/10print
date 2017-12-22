//dims
let dims = 30;

for(let i=0;i<dims;i++){
    let str = "";
    for(let e = 0; e < dims; e++){
        str+=Math.round(Math.random()) == 0 ? "┌" : "┘";
    }
    console.log(str);
}
