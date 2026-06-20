let string=""
let buttonss=document.querySelectorAll('.inner-buuton')
let display=document.getElementById('valid-input')
Array.from(buttonss).forEach((buttons)=>{
    buttons.addEventListener("click",(e)=>{
        if(e.target.innerHTML==""){
            string=""
        }
        if(e.target.innerHTML=="="){
            display.value=eval(string)
        }
        else if(e.target.innerHTML=="AC"){
            display.value=""
            string=""
        }
        else if(e.target.innerHTML=="B"){
            string=string.substring(0,string.length-1)
            display.value=string
            
        }
        else{
            let values=e.target.innerHTML
            let operators=["+","-","*","/"]
            if (
                operators.includes(values)&&
                operators.includes(string[string.length-1])
            ){
                display.value="ERROR"
                string=""
            }
    else{        string+=values
        display.value=string
        }
    }

    })
})
