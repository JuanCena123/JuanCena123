console.log("script.js is loaded!");


function clipboard() {
    console.log("Clipboard function called!"); // Debugging line

    navigator.clipboard.writeText("jmsever@clemson.edu")
        .then(() => {
            alert("Copied to clipboard: jmsever@clemson.edu");
        })
        .catch(err => {
            console.error("Clipboard copy failed: ", err);
        });
}
