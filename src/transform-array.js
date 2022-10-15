const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if(!Array.isArray(arr)){
    throw new Error ("'arr' parameter must be an instance of the Array!")
  }
  let a = arr.slice()


  for( let i = 0 ; i < arr.length; i++){

      if(a[i] == '--discard-next'){
        a[i] = null;
        if(i+1 !== a.length){
          a[i+1] = null
        }
        
      }
      else if(a[i] =='--discard-prev'){
        
          a[i] = null;
          if ( i > 0) {
            a[i-1] = null;
          }
          
      }
      else if(a[i] =='--double-next'){
        
        a[i] =  (i+1 == arr.length) ? null : a[i+1];
        
      }
      else if(a[i] =='--double-prev'){
        a[i] =  (i == 0) ? null : a[i-1];
          
      }
      else {continue}
  }
  return a.filter((el )=> el != null)
}

module.exports = {
  transform
};
