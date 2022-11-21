export const fuctorial = (num) => {
    let sayi = 1

    for( let i = 2 ; i<= num ; i++){

        sayi *= i; 
    }

    return sayi;
}