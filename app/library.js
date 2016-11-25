module.exports = {
 

findMinMax: function(array){
 var min = Math.min.apply(null, array);
  var max = Math.max.apply(null, array);
if (min === max){ 
  return [min];
}
return [min, max ] ;
},


fizzBuzz: function(number){
  if((number%3===0) && (number%5===0)){
    return "FizzBuzz";
  }
  else if (number%3===0){
    return "Fizz";
  }
  else if(number%5===0){
    return "Buzz";
  }
  
  else if((number%5 !== 0) && (number%3 !== 0)){
    return number;
  }
  },


 aritGeo: function (arrays){
  if (arrays.length === 0){
    return 0;
  }else {
         
         for (var i in arrays){
           var arit_difference = arrays[1] - arrays[0];
          var geo_difference = arrays[1]/arrays[0];}

          if (arrays[i]-arrays[i-1] === arit_difference){
          
            return "Arithmetic";
          }
          else if(arrays[i]/arrays[i-1] === geo_difference ){
            
            return "Geometric";
          }

          }
         
return -1;
  }


} 

