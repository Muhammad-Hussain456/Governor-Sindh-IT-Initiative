
function loginInfo(email: string, password: number):void;
function loginInfo(email: string):string;
function loginInfo( email: string, password?: number): any{
    if(email && password){
        console.log(`email: ${email}, password: ${password}`);
        }
        else{
          console.log(`email: ${email}`);
    }  
}
loginInfo("abc12@gmail.com, 87872384");
loginInfo("abc12@gmail.com");