// BANK ACCOUT WITH ATM

//parseFloat??
//let
// && ||

const account = {
accountName: "Klara Svensson",
balance: 100,
getBalance: function() {   
  return `Your total balance is ${this.balance} SEK`;  
},
deposit: function(amount) {  
  return this.balance + amount;
},
withdrawal: function(amount) {
  return this.balance - amount;  
},
getAccountName: function() {
  const owner = `Name of account: ${this.accountName}`;
  return prompt(owner);
},

//accountError: function() {
//const error = 
//return     
    
};


function atm(account) {
  //const message = parseFloat(prompt("Display message"));
  let select = parseFloat(prompt("Please select one of the options:\n 1.) See balance\n 2.) Make a deposit\n 3.) Make a withdrawal\n 4.) Get account name"));

  if (select === 1) {
    console.log(account.getBalance());
    
  } else if (select === 2) {
    let depositValue = parseFloat(prompt("How much would you like to deposit?"));  
    console.log(account.deposit(depositValue));
  
 } else if (select === 3) {
    let withdrawalValue = parseFloat(prompt("How much would you like to withdraw?"));
    if (this.withdrawal > this.balance) {
    alert ("Error! Sorry, your input is not valid, please try again");}
    else console.log(account.withdrawal(withdrawalValue));
    
 } else if (select === 4) {
   console.log(account.getAccountName());

 } else (this.withdrawal > this.balance)
   console.log ("Error! Sorry, the input is not valid, please try again");  
};

 
  
  
atm(account);
console.log(atm);

// You have to use parseFloat()to convert to numbers

  

// to handle one of the potential errors you can use this built in method:
//const variableName = 10;
//isNaN(variableName);

//function atm() {
  //const message = parseFloat(prompt("Display message"));
  // you need to answer the question why we are using parseFloat() method here
  // either use a if/else statement or a switch. Write a comment and motivate your choice
//