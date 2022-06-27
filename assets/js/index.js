//This  is a funcon Reeve wrote earlier
integerCheck(num) {
    if( Math.round(num, 0) == num ){
       return true
    }else{
       return false
    }
   }
   var testNo = 6 ;
   // var testNo = 7.5 ;
   alert( testNo + ' returns ' + integerCheck(testNo))