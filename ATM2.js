//  CLASS AND METHODS DEFINITION FOR ATM PROGRAM

// DEFINITION OF SUPER CLASS ATMUSER
class ATMUser{
    constructor(client, user, password){
        //properties
        this.client=client;   //Client Name
        this.user=user; //Client user
        this.password=password;     // Client password
        this.session="closed";   // Session open or close
    }   

 //DEFINITION FOR METHODS IN ATMUSER CLASS
    
    /**Login method changes the session to open. **/
    Login(user_Name, user_Password){
        if ((this.user == (user_Name)) && (this.password == (user_Password))){
            this.session = "open";
        }
    }

    /**Logout method changes the session to close.**/
    Logout(){
        if (this.session=="open"){
        this.session="close";    }}
}   


//DEFINITION OF SUBCLASS ACCOUNT
    class ACCOUNT extends ATMUser {      
        constructor(client, user, password, AccountNo, account, balance){
        super(client, user, password);
        this.AccountNo=AccountNo; // Account number
        this.balance=balance;   // Client Balance
        this.account=account;   // Account type
        }
                
// Getter
       
    /**GetBalance return the balance when the session is open**/
       get GetBalance(){
            if (this.session== "open"){
                return this.balance;}
                                       }
       
//DEFINITION OF METHODS FOR SUBCLASS ACCOUNT  
    /**Deposit method change the balance by adding the value to be deposit. **/
        Deposit(amount){
            if (this.session== "open"){
                this.balance = this.balance + amount;}
                }

    // Whithdraw method change the balance by substracting the value to be deposit.         
        Withdraw(amount){
            if (this.session== "open"){
                this.balance = this.balance - amount;
            }
        }
    }
    