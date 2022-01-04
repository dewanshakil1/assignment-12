/**
 * age calculator function
 * @param {*} name 
 * @param {*} age 
 * @returns 
 */


function ageCal(name,age){
    let date=new Date();
    age=date.getFullYear() - age;
    let ageSt=checkAge(age);
    return `<p class="alert alert-${ageSt.status}">hi ${name} . you are ${age} years old. ${ageSt.name}</p>`;
}


function checkAge(age){
    if(age>0 && age<10){
       return {
            name:"shisu",
            status:"success"
        }
    }
    else if(age>=10 && age<18){
       return {
            name:"kisur",
            status:"info"
        }
    }
    else if(age>=18 && age<35){
       return {
            name:"jubok",
            status:"danger"
        }
    }
    else if(age>=35 && age<55){
       return {
            name:"biddo",
            status:"woring"
        }
    }
    else{
       return {
            name:"bud",
            status:"info"
        }
    }
}
/**
 *  currency converter
 * @param {*} amount 
 * @param {*} currency 
 * @returns 
 */

function allcurrency(amount,currency){
    if(currency== 85){
        return amount * 85
    }
    else if(currency==57){
        return amount * 57
    }
    else if(currency ==91){
        return amount * 91
    }
     else if(currency==108){
        return amount * 108
    } 
    else{
        return``
    }  

}


function Gender(gender){
 
    if(gender=="male"){
        return "vai"
    } else{
        return "apu"
    }
   

 }
function checkage(age){
    let date=new Date();
    allage=date.getFullYear() - age;
    if(allage <=18 ){
        return ` ${Gender(m_option.value)} you are not ok for marrage`
    }
    else{
        return `${Gender(m_option.value)} you are ok for marrage`

    }
}

