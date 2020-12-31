//03 VALIDATOR
// - Using the `prompt` package, create a` checkProfile` function which asks the user for an email, a username and a password
// - The function will check that the user has entered valid information (see the doc, and more precisely the `pattern`):
// - the email must be in the correct format
// - the username must contain only letters, numbers and dashes (the small ones)
// - password must contain at least 6 characters, at least one letter and at least one number, and can contain dashes

// - If all is good, it returns "All good!", Otherwise it returns "error"


/*
var prompt = require('prompt');

var schema = {
    properties: {
        email: {
            //comment veritié qu'un email bon?
            //@
            //.
            //nom de domaine
            //yeshi@ .com
            pattern: /\S+@{1}\S+(.com|.fr|.eu)/,
            message:"Incorrect email"
        },
        username: {
            pattern: /^[a-zA-Z\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            required: true
        },
       password: {
        conform: function(value) {
            if(value.length < 6){
                return false;
            }
            if(value.search(/[a-z]/) > -1 && value.search(/[0-9]/) > -1 && value.search(/-/) > -1) {
                return true;
            }else{
                return false;    
            }
        },
    }
}
};
// Start the prompt
//
prompt.start();

// Get two properties from the user: email, password
prompt.get(schema, function (err, result) {
// Log the results.
console.log('Command-line input received:');
console.log('  Email: ' + result.email);
console.log('  username: ' + result.username);
console.log('  Password: ' + result.password);
});
*/

var prompt = require('prompt');

var schema = {
    properties: {
        email: {
            pattern: /\S+@{1}\S+(.com|.eu|.fr)/,
            message: 'Enter valide user email',
            required: true
        },
        username: {
            pattern: /^[a-zA-Z\-]+$/,
            message: 'Name must be only letters, spaces, or dashes',
            required: true,
        },
        password: {
            message: 'Name must be only letters, spaces, or dashes',
            required: true,
            conform: function (value) {
                if(value.length < 6){
                    return false;
                } 
                if(value.search(/[a-z]/) >-1 && value.search(/[0-9]/) >-1 && value.search(/-/) >-1 ) {
                    return true;
                } else {
                    return false;
                }
                
              }
              
        }
    }
  };
prompt.start();

  
  prompt.get(schema, function (err, result) {
    
    console.log('Command-line input received:');
    console.log('  user: ' + result.user);
    console.log('  email: ' + result.email);
    console.log('  password: ' + result.password);
  });




