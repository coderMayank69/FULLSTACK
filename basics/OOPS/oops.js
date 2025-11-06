//factory function


// function makeColour(r,g,b){
//     const colour = {}
//     colour.r = r;
//     colour.g = g;
//     colour.b = b;
//     colour.hex = function(){
//         const {r,g,b} = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     };
    
//     colour.rgb = function(){
//         const {r,g,b} = this;
//         return `rgb(${r},${g},${b})`;
//     };
  
//     return colour;}



// const red = makeColour(255,0,0);
// const green = makeColour(0,255,0);  
// const blue = makeColour(0,0,255);
// const random = makeColour(123,234,45);




//pototype function

// function Colour(r,g,b){
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// Colour.prototype.hex = function(){
//     const {r,g,b} = this;
//     return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
 
// }
// Colour.prototype.rgb = function(){
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b})`;
// } 
// Colour.prototype.alpha = function(a=1.0){
//     const {r,g,b} = this;
//     return `rgb(${r},${g},${b},${a})`;
// }   
// const red = new Colour(255,0,0);
// const red1 = new Colour(255,0,0,0.5);
// const green = new Colour(0,255,0);



//class syntax


class Colour {
    constructor(r,g,b){
        this.r = r;
        this.g = g;
        this.b = b;
    }
    hex(){
        const {r,g,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    rgb(){
        const {r,g,b} = this;
        return `rgb(${r},${g},${b})`;
    }
    alpha(a=1.0){
        const {r,g,b} = this;
        return `rgba(${r},${g},${b},${a})`;
    }
}

const red = new Colour(255,0,0);
const red1 = new Colour(255,0,0,0.5);