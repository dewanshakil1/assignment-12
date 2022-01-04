/**
 * age calculator
 */
const a=document.querySelector("a");
const name=document.querySelector("#name");
const age=document.querySelector("#age");
const p=document.querySelector("p");
a.addEventListener("click",function(e){    
    e.preventDefault();
    if(name.value="" || age.value==""){
        p.innerHTML=`<p>all fill are requart</p>`
    }else{
        p.innerHTML=ageCal(name.value,age.value)  

    }
    
   name.value="";
   age.value="";  
    
});

/**
 * Currency Converter
 */
const convert=document.querySelector(".convert");
const amount=document.querySelector(".currencyInput input");
const currency=document.querySelector(".option");
const check=document.querySelector("#check");

convert.addEventListener("click",function(){   
    if(amount.value=="" ){
        check.innerHTML=`<p class="alert alert-danger">all fill are requert</p>`

    }else{
        check.innerHTML=`<p> Bangladeshi ${allcurrency(amount.value,currency.value)} taka</p>`

    }
    amount.value="";
 
});

/**
 * marriage age check calculator for male and female with status
 */

const button=document.querySelector("#button");
const m_age=document.querySelector(".marrageInput");
const m_option=document.querySelector(".marrageOption");
const output=document.querySelector(".output h2");
button.addEventListener("click",(e) => {
    e.preventDefault();

    if(m_age.value="" || m_option.value=="Enter your Gender"){

        output.innerHTML=`<p>all fill are requart</p>`

    }
    else{
        output.innerHTML=checkage(m_age.value )

    }
  
    m_age.value="";

})





 


