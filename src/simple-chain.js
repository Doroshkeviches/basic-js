const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 let arr = []
 let b 
 const chainMaker = {
   addLink(value) {
     arr.push(`( ${value} )`)
     
   return this;
   },
   removeLink(position) {
     if(position > arr.length || !Number.isInteger(position) || position < 1 ){
       console.log('arror')
       arr = []
       throw new Error ("You can't remove incorrect link!")
     }
     else {
       arr.splice(position-1,1)
       return this;
      }
   },
   reverseChain() {
     arr.reverse()
     
 return this;
   },
   finishChain() {
   b = arr.join('~~') 
   arr = []
    return b
     
     
   },
   
 };

module.exports = {
  chainMaker
};
