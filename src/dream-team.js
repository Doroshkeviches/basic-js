const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(asd) {
  if(!Array.isArray(asd)){
    return false
  }
  
  let sum = ''
  for(let i = 0; i< asd.length; i++){
      
      if((typeof asd[i]) == 'string'){
        asd[i] = asd[i].toUpperCase();
       
          if( isNaN(+asd[i]) ){
            
              for  ( let j = 0; j<asd[i].length; j++){
                  
                if(asd[i][j] !== ' '){
                  sum +=asd[i][j];
                  
                  break
                
              }

            }
              
          }
      }
  
  
}
sum = sum.split('').sort().join('')
return sum 
}


module.exports = {
  createDreamTeam
};
