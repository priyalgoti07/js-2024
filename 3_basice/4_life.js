//immediately Invoked Function Expressions(IIFE)

(function clientName(name) {
    console.log(`DB Connected to ${name}`);
}("priyal"));

(function clientid() {
    console.log(`DB Client id`);
}());

(() => {
    console.log('DB Connected to Arrow');
})()