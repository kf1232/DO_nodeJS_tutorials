const Todos = require('./index');
const assert = require('assert').strict;
const fs = require('fs');

/*
    describe([String with Test Group Name], function() {
        it([String with Test Name], function() {
            [Test Code]
        });
    });

    describe() groups similar tests

    it() containts test code, uses the assrt library, defeined inside describe or solo (nongrouped)
*/

describe("integration test", function() {
    it("Should be able to add and complete TODOs", function() {
        let todos = new Todos();
        todos.add("run code");
        assert.strictEqual(todos.list().length, 1);
        assert.deepStrictEqual(todos.list(), [{title: "run code", completed: false}]);

        todos.add("test everything");
        assert.strictEqual(todos.list().length, 2);
        assert.deepStrictEqual(todos.list(), [{title: "run code", completed: false},
                                              {title: "test everything", completed: false}]);
        
        todos.complete("run code");
        assert.deepStrictEqual(todos.list(), [{title: "run code", completed: true},
                                              {title: "test everything", completed: false}]);
    });
});

describe("complete()", function() {
    it("should fail if there are no ToDo's", function() {
        let todos = new Todos();
        const expectedError = new Error("No TODO's in the list.");

        assert.throws( () => {
            todos.complete("dne");
        }, expectedError);
    });
});

describe("saveToFile()", function() {
    it("should save a single TODO via callback", function(done) {
        let todos = new Todos();
        todos.add("save a CSV");
        todos.saveToFile((err) => {
            assert.strictEqual(fs.existsSync('file_callback.csv'), true);
            let expectedFileContents=`Title,Completed\nsave a CSV,false\n`;
            let content = fs.readFileSync("file_callback.csv").toString();
            assert.strictEqual(content,expectedFileContents);
            done(err);
        });
    });
});

