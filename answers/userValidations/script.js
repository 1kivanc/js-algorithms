export const userValidation = (str) => {
    if(
        
        str.length >= 4 && str.length <= 25 &&
        (/[a-zA-Z]/).test(str.slice(0,1)) &&
        (/^\w+$/).test(str) &&
        (/[a-zA-Z0-9]/).test(str.slice(-1))

    ){
        return true
    }
    else{
        return false
    }

}

/** 
1. The username is between 4 and 25 characters.
2. It must start with a letter 
3. It can only contain letters, numbers and the underscore characther
4. It cannot end with an underscore character.

if the usernames is vaild then yours program should return the 
string true, otherwise return the string false
*/