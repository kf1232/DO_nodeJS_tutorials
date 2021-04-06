const fs = require('fs').promises;

class Todos {
    constructor() {
        this.todos = [];
    }


    list() {
        return [...this.todos];
    }


    add(title) {
        let todo = {
            title: title,
            completed: false,
        }

        this.todos.push(todo);
    }


    complete(title) {
        if (this.todos.length === 0) {
            throw new Error (
                "No TODO's in the list."
            )
        }

        let todoFound = false;
        this.todos.forEach((todo) => {
            if (todo.title === title) {
                todo.completed = true;
                todoFound = true;
                return;
            }
        });
        if (!todoFound) {
            throw new Error(`No TODO was found with the title:
                            "${title}"`);
        }
    }

    saveToFile() {
        let fileContents = 'Title,Completed\n';
        this.todos.forEach((todo) => {
            fileContents += `${todo.title},${todo.completed}\n`
        });

        return fs.writeFile('todos.csv', fileContents);
    }
       

/* Callback to enable, remove .promises from the require('fs').promises;
   Remember to adjust index.test.js
    saveToFile(callback) {
        let fileContents = 'Title,Completed\n';
        this.todos.forEach((todo) => {
            fileContents += `${todo.title},${todo.completed}\n`
        });

        fs.writeFile('file_callback.csv', fileContents, callback);
    }
*/
}
   
module.exports = Todos;