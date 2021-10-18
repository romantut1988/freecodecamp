function myLocalScope() {
    var myVar = "inside myLocalScope";
      // Only change code below this line
    
    console.log( myVar);
    }
    
    myLocalScope();
    
    // Run and check the console
    // myVar is not defined outside of myLocalScope
    console.log('outside myLocalScope', myVar);