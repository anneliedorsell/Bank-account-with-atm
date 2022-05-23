// BANK ACCOUT WITH ATM

const account = {

accountName: "Klara Svensson",

balance: 100,

getBalance: function() {   
  alert(`Your total balance is ${this.balance} SEK`);
  atm();  
  },

deposit: function() {  
  let input = parseFloat(prompt("How much would you like to deposit?"));
  if (input === " " || input <= 0 || isNaN(input) ) {
    alert("Error! Sorry, the input is not valid, please try again!");
    this.deposit();
  } else {
   this.balance += input;
    // exakt samma sak men kortare
   this.getBalance();
  }
 },

withdrawal: function() {
  let amount = parseFloat(prompt("How much would you like to withdraw?"));
  if (amount === " " || amount <= 0 || isNaN(amount) || amount > this.balance) {
    alert("Error! Sorry, the input is not valid, please try again!");
    this.withdrawal();
  } else {
   this.balance - amount;
   this.getBalance();
  }
},

getAccountName: function() {
  const owner = `Name of account: ${this.accountName}`;
    return prompt(owner);
},

accountError: function() {
  alert("Error!");
	atm();
},

};


function atm() {
  //const message = parseFloat(prompt("Display message"));
  let select = parseFloat(prompt("Please select one of the options:\n 1.) See balance\n 2.) Make a deposit\n 3.) Make a withdrawal\n 4.) Get account name"));

  if (select === 1) {
    account.getBalance();
    
  } else if (select === 2) {
    account.deposit();
  
 } else if (select === 3) {
  account.withdrawal();
    
 } else if (select === 4) {
   account.getAccountName();

 } else 
   account.accountError();
};
   
atm();

// You have to use parseFloat()to convert to numbers

  
