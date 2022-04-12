console.log("Prepared by: Nataly Aranda") ;
console.log("Student Number: 000857159");  // This is my student information ploted in the console
console.log("Completed:  12/07/2021") ;


// DEFINITION OF 4 USERS USING CLASS DEFINITION
// ACCOUNT(client, user, password, AccountNo, account, balance)

var account1= new ACCOUNT("Bob Spenser","Bob","0123", "101","Savings Account",5200.00);
var account2= new ACCOUNT("Lisa Brown","Lisa99","5432","102","Savings Account",8960.00);
var account3= new ACCOUNT("Sam Rodriguez","Sam3","1234","103","Cheking Account",530.00);
var account4= new ACCOUNT("Nat Charm","Nat88","9999","104","Cheking Account",2000.00);
var account5= new ACCOUNT("Bob Spenser","Bob","0123", "104","Cheking Account",200.00);

accounts=[account1,account2,account3,account4,account5];   // This line creates an array with all the users defined before.
let Userlog=[];      // This line declare a global array Userlog to identify the account that belong a user that does login
let Usertransfer ="";  // This line declare a global variable for identify the user a transfer is made. 

/* FUNCTION UPDATEUSER: This function update the values of the user name 
 in the HTML when the session is open, and when session is close it clear the values.
*/
function updateUser(u){
    if ((u.session)=="open"){
     document.getElementById("client").innerHTML = u.client;
     } 
  else {
    document.getElementById("client").innerHTML = "";
    }
  }
/* FUNCTION UPDATEAccount: This function update the values of the account and the 
balance in the HTML when the session is open, and when session is close it clear the values.
*/
  function updateAccount(u){
    if ((u.session)=="open"){
     document.getElementById("accountNo").innerHTML = u.AccountNo;
     document.getElementById("balance").innerHTML = u.balance;
     document.getElementById("account").innerHTML = u.account;
    } 
  else {
     document.getElementById("balance").innerHTML = "";
     document.getElementById("account").innerHTML = "";
     document.getElementById("accountNo").innerHTML = "";
  }
  }


/* FUNCTION LOGIN: This function makes log in session when the username a password 
of a client match with a username a password of the users array by calling the method 
Login of the class */
    
    function Login(userName, userPassword){
    userName= document.getElementById("userName").value;
    document.getElementById("userName").value="";
    userPassword=document.getElementById("userPassword").value;
    document.getElementById("userPassword").value="";
    for (i=0; i< accounts.length; i++){
        if (accounts[i].user==userName){
        accounts[i].Login(userName,userPassword);
        Userlog.push(accounts[i]);   // This line assigns the user that makes login to the global var. Uerlog
       }
    }
    updateUser(Userlog[0]); //Call the function update to show the client information.
    alert ("Your session is : " + Userlog[0].session);
    }

/* FUNCTION LOGOUT: This function makes log out session when there is
   a user with the session open by calling the method Logout of the class   */

    function Logout(){
     for (i=0; i< Userlog.length; i++){
        Userlog[i].Logout()};
         alert ("Your session is closed")
         updateUser(Userlog[0]);
         updateAccount(Userlog[0])}          
       
/* FUNCTION GetBalance: This function get the balance of an account using the account number
and by calling the method GetBalance of the class   */   

    function GetBalance(AccountNo){
    AccountNo=(document.getElementById("AccountNo").value);
    if (Userlog != ""){
      for (i=0; i< Userlog.length; i++){         
        if (Userlog[i].AccountNo==AccountNo){ 
          Userlog[i].GetBalance ;
          updateAccount(Userlog[i]);
        }
         }  
         }  
    else {alert("Please Login to see your balance");}
    }
        
/* FUNCTION MAKEDEPOSIT: This function makes a deposit taking the value defined 
by the client by using the method Deposit of the class   */

    function makeDeposit(amount, AccountNo){
      amount=parseFloat(document.getElementById("depAmount").value);
      document.getElementById("depAmount").value="";
      AccountNo=(document.getElementById("AccountNo").value);
     if (Userlog != []){
      if (amount>0){   
        for (i=0; i< Userlog.length; i++){         
          if (Userlog[i].AccountNo==AccountNo){        
         Userlog[i].Deposit(amount);
         alert("Your deposit was made successfully.")
          updateAccount(Userlog[i]); 
        } } } 
      else {alert("Incorrect amount to deposit")}
       }
       else{alert("Please Login to make a Deposit");
      }
    }
    
/* FUNCTION MAKEWITHDRAW: This function makes a withdrawal taking the value defined 
by the client by using the method Withdraw of the class   */

    function makeWithdraw(amount, AccountNo){
      amount=parseFloat(document.getElementById("WitAmount").value);
      document.getElementById("WitAmount").value="";
      AccountNo=(document.getElementById("AccountNo").value);
     if (Userlog != []){ 
      for (i=0; i< Userlog.length; i++){         
       if (Userlog[i].AccountNo==AccountNo && Userlog[i].balance>=amount){   
          Userlog[i].Withdraw(amount);
          alert("Your withdrawal was successful!.")
          updateAccount(Userlog[i]);
         } 
       else if(Userlog[i].balance<amount) {
         alert("You do not have enough money to make this withdrawal.");}
        }
      }      
      else{alert("Please Login to make a withdrawal");} 
    }

/* FUNCTION MAKEWITransfer: This function makes a transfer taking the value defined 
by the client by using the method Withdraw of the class   */

function makeTransfer(amount, ToAccountNo, FromAccount){
  amount=parseFloat(document.getElementById("TransfAmount").value);
  document.getElementById("TransfAmount").value="";
  ToAccountNo=(document.getElementById("ToAccountNo").value);
  document.getElementById("ToAccountNo").value="";
  FromAccount=document.getElementById("AccountNo").value;
 if (Userlog !=[]){
  for (i=0; i< Userlog.length; i++){         
    if (Userlog[i].AccountNo==FromAccount && Userlog[i].balance>=amount){  
      Userlog[i].Withdraw(amount);
      for (j=0; j< accounts.length; j++){                     
      if (accounts[j].AccountNo==ToAccountNo){   //this function looks up the account no. to do the deposit to this account
        Usertransfer=accounts[j];
        accounts[j].balance=accounts[j].balance+amount;            
        }            
      }
      updateAccount(Userlog[i]);
      alert("$"+amount+ " were transfer successfully to "+ Usertransfer.client+" account No." + Usertransfer.AccountNo);
      }    
  else if (Userlog[i].balance<=amount) {alert("You do not have enough money to make this withdrawal.");}
  }
  }
  else{alert("Please Login to make a Transfer")};
}