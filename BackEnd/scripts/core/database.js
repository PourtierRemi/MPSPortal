var connectionVariable=require('../core/config.js').connectionVariable;
var mysql = require("mysql");

console.log("connection variable"+connectionVariable);

/**
 * Function initialiseDB. It makes the connection to the database.
 */
exports.initialiseDB = function(){
    // First you need to create a connection to the db
    connectionVariable.connect(function (err) {
        if (err) {
            console.log('Error connecting to Db: ' + err);
            return;
        }
        console.log('Connection established');
    });

};

/**
 * Function disconnectDB. It makes the disconnection to the database.
 */
exports.disconnectDB = function(){

    connectionVariable.end(function (err) {
        // The connection is terminated gracefully
        // Ensures all previously enqueued queries are still
    });
};
