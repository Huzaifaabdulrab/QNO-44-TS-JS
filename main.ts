// 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function makeSandwich1(...ingredient1:string[]):void{
    console.log("Making a sandwich with your choice ingredients")
    for(let ingredient of ingredient1){
        console.log(ingredient)
    }
    console.log("Enjoy your samdwich")
}
makeSandwich1("Tomato","Mayo","chiken");
makeSandwich1("chiken","cucumber","jelly");
makeSandwich1("peanut butter","jelly")