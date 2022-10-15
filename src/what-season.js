const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(springDate) {
  
  if(!springDate){
    return 'Unable to determine the time of year!'
}


    try{
      if ((typeof +springDate) == 'number'){
        let summer = [5,6,7];
        let autumn = [8,9,10];
        let winter = [11,0,1];
        let spring = [2,3,4];
        let a = springDate.getMonth()
        if (summer.includes(a)){
            return 'summer'
        }
        else if(autumn.includes(a)){
            return 'autumn'
        }
       else if (winter.includes(a)){
            return 'winter'
        }
        else if (spring.includes(a)){
            return 'spring'
        }
        else{
          throw new Error ('Invalid date!');
        }
        

}}
catch(e) {
  throw new Error ('Invalid date!');
}

}

module.exports = {
  getSeason
};
