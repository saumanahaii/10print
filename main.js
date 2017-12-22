import * as p5 from './p5.js';

let s = (sk) => {
    let dims = {x:0,y:0}
    let pos = {x:0,y:0}
    let size = 50;
    let lineWeight = 10;
    let smallLineOffset = 5.5;
    let shapes = [
        (x,y)=>{
            sk.strokeWeight(lineWeight);
            sk.line(x,y+size,x+size, y)
            sk.strokeWeight(lineWeight-5);
            sk.line(x+smallLineOffset,y+smallLineOffset+size,x+smallLineOffset+size, y+smallLineOffset)
            sk.strokeWeight(lineWeight-7);
            sk.line(x+smallLineOffset*1.8,y+smallLineOffset*1.8+size,x+smallLineOffset*1.8+size, y+smallLineOffset*1.8)

        },
        (x,y)=>sk.line(x,y,x+size,y+size)
    ]

    sk.setup = () =>{
        dims.x = Math.ceil(window.innerWidth / size);
        dims.y = Math.ceil(window.innerHeight / size);
        sk.createCanvas(window.innerWidth,window.innerHeight);
        sk.background(40)
    }

    sk.draw = () =>{
        if(pos.x > dims.x){
            pos.x = 0;
            pos.y += 1;
        }
        sk.strokeWeight(lineWeight);
        shapes[Math.round(Math.random())](pos.x*size,pos.y*size);
        pos.x += 1;
    }
}
const P5 = new p5(s);
