// 44. Sandwiches: Write a  function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function 
// three times, using a different number of arguments each time.

function sandwich(...items: string[]): void {
    console.log("Sandwisch Order");
    for(let i=0; i<items.length; i++){
        console.log(`- ${items[i]}`);
    } 
} console.log("Enjoy you sandwich");
sandwich("Lettuce", "Tomato", "Mayo");
sandwich("Chiken", "Cheese");
sandwich("Butter", "Jelly");
