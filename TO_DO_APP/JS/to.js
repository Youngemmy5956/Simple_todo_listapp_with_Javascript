let input = prompt("please enter a command");
const todos =[];

while(input !== 'quit'){
    
if(input === "new"){
    const newTodo = prompt("OK, what is the new todo item");
    todos.push(newTodo);
    console.log(`${newTodo} has been added succesfully`);
}else if (input === "list"){
    console.log('...................')
    for(let i = 0; i <todos.length; i++){
        console.log(`${i}. ${todos[i]}`)
    }
    console.log(`............`)

}else if (input === "delete"){
    const itemNumber = prompt("OK, enter the item number to delete:")
    const deleteItem = todos.splice(itemNumber, 1);
    console.log(`Successfully deleted${deleteItem}`)

}

input = prompt("please enter a command");

}


