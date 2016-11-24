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

aritGeo: function(array_of_numbers){
 common_diff = array_of_numbers[1] - array_of_numbers[0]
 for(var count = 2; count< array_of_numbers.length;count++){
   if(array_of_numbers[count] !== (array_of_numbers[0] + (count*common_diff))){
     return false;
   }
 }
 return Arithmetic;
},
  
aritGeo: function(array_of_numbers){
 common_diff = array_of_numbers[1] / array_of_numbers[0]
 for(var count = 2; count< array_of_numbers.length;count++){
   if(array_of_numbers[count] !== array_of_numbers[0]*(Math.pow(common_diff, (count)))){
     return false;
   }
 }
 return Geometric;
}
 


} 

