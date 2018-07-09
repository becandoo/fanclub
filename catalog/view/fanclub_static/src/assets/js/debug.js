console.todo = function(msg) {
    console.log('%c%s%s', 'color: #8d9f0d; font-weight: bold; text-decoration: underline;', 'ToDo: ', msg);
}
 
console.note = function(msg) {
	console.log('%c%s%s', 'color: #9872A2; font-weight: bold; text-decoration: underline;', 'Note: ', msg);
}

console.important = function(msg) {
	console.log('%c%s%s%s', 'color: #C7444A; font-weight: bold; text-decoration: underline;', '-', msg, '-');
}

console.warning = function(msg){
    console.log('%c%s%s', 'color: #D08442; font-weight: bold; text-decoration: underline;', 'Warning: ', msg);
}

console.todo('This is something that needs to get done.');
console.note('This is a note.');
console.important('This is an important message');
console.warning('This is a warning message!');