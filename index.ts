
function BEM<B,E,M>(block: B, element: E[], modifier: M[]) {

  let e = element.toString();
  let m = modifier.toString();
  let result;
  
    //block
  if (e.length ===0 && m.length ===0){
    console.log("end of program") 
  }
   //block__element
   else if(e.length > 0 && m.length === 0) {
    result = block +"__" + element;
    return console.log(result);
  }
  //block--modifier
  else if(e.length ===0 && m.length > 0) {
    result = block +"--" + modifier;
    return console.log(result);
  }
  //block__element--modifier
  else if(e.length > 0 && m.length > 0) {
    result = block +"__"+element+"--" + modifier;
    return console.log(result);
  }
}
const bem1= BEM<string, string, string>("button",["price"],["red"]);

