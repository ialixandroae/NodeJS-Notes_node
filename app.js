
const fs = require("fs");
// const os = require("os");
const _ = require("lodash");
const yargs = require("yargs");
const notes = require("./notes.js");
var noteTitle = {
            describe: "Title of note",
            demand: true,
            alias: "t"
};
var noteBody = {
            describe: "Body of note",
            demand: true,
            alias: "b"
};

const argv = yargs
    .command("add", "Add a new note", {
        title : noteTitle,
        body: noteBody
    })
    .command("list", "List all notes")
    .command("read", "Read a note", {
        title: noteTitle
    })
    .command("remove", "Remove a note", {
        title: noteTitle
    })
    .help()
    .argv;
var command = argv._[0];

// console.log(process.argv);
// console.log(argv);

if (command === "add"){
    var note = notes.addNote(argv.title, argv.body); 
    if (note) {
        console.log("Note created...");
        console.log("---");
        console.log("Title: " + note.title);
        console.log("Body: " + note.body);
    } else {
        console.log("Note title taken...")
    }
} else if (command === "list") {
    var allNotes = notes.getAll();
    console.log(`Printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) => {
        console.log(note);
    });
} else if (command === "read") {
    var note = notes.readNote(argv.title);
    console.log(note ? `Note to read: ${note.title}` : "Note not found");
} else if (command === "remove") {
    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? "Note was removed..." : "Note not found"
    console.log(message);
} else {
    console.log("Command not recognized!");
}
// var res = notes.addNote();
// console.log(res);

// console.log(_.isString(true));
// console.log(_.isString("asd"));
// console.log(_.uniq(["Ionut",2,2,3,3,4,5,6,7,7,7,7,8,1,1]));

// console.log(notes.addNumbers(5,3));

// var user = os.userInfo();

// fs.appendFile("greetings.txt", `Hello ${user.username}! You are ${notes.age}.`, function(err){
//     if (err){
//         console.log("Unable to write to file!");
//     }
// });

