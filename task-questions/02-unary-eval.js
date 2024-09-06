function evalExpression(arg1, arg2){
    return arg1 + arg2
}
console.log(evalExpression(+true, -false))
console.log(evalExpression(-true, -false))
console.log(evalExpression(+true, +false))
console.log(+true+-false)

function isPositve(){
 if(num > 0){
   if(num%2 == 0){
      console.log('Positive Even')
   }else{
      console.log('Positive Odd')
   }
}
else{
    console.log('Non-Positive ')
}
}

function withinRange(){
    if(num > 10){
        if(num < 20 ){
            return 'number is within range'
        }else{
            return 'number is greater than 20'
        }
    }
    
    return 'number is small than 10' 
}