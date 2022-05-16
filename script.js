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
withdrawal: function(inputValue) {
  return this.balance - amount;  
},
getAccountName: function(person) {
  const owner = `Name of account: ${this.accountName}`;
  return prompt(owner);
},
accountError: function() {
  //if 
  //else alert "Error: Not a valid number"
}
};

function atm(account) {
  //const message = parseFloat(prompt("Display message"));
  let select = parseFloat(prompt("Please select one of the options: 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"));

  if (select === 1) {
    console.log(account.getBalance());
    
  } else if (select === 2) {
    let depositValue = parseFloat(prompt("How much would you like to deposit?"));
    if (isNaN(depositAmount) || depositAmount === "" || depositAmount < 0)  
    console.log(account.deposit(depositValue));
  
 } else if (select === 3) {
    let withdraw = parseFloat(prompt("How much would you like to withdraw?"));
    console.log(account.withdrawal(withdraw));
    
 } else if (select === 4) {
   let person = prompt("Please enter your full name?");
   console.log (account.getAccountName(person));

 } else if (select === 5) {
 account.exit();
  // } else if (select !---inte rätt siffra eller ett nummer) {
  //   account.accountError();
  // } else {
  // this.atm();
  // }
}
  
  
  atm(account);
  console.log(atm);
  







  





















// to handle one of the potential errors you can use this built in method:
//const variableName = 10;
//isNaN(variableName);

//function atm() {
  //const message = parseFloat(prompt("Display message"));
  // you need to answer the question why we are using parseFloat() method here
  // either use a if/else statement or a switch. Write a comment and motivate your choice
//}