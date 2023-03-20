let grade=document.getElementById('grade')
let speed=document.getElementById('speed')
let salary=document.getElementById('salary')


grade.addEventListener('click', (e)=>{
e.preventDefault()
let inputGrade=parseInt(document.getElementById('input-grade').value)
console.log(inputGrade)
let finalOutput 
// write Code For the Code challenge


function gradeGenerator(score) { //return the grade
    if (score>79 && score <=100) {
        //  returns A if the value is above and below 79 and 100 respectively
        return 'A';
    }
    else if (score <= 79 && score >= 60) {
    // evaluates scores less than or equal to 79 and greater or equal to 60 to produce grade 'B'
        return 'B'
    }
    else if (score <= 59 && score >= 50) {
       // evaluates scores less than or equal to 59 and greater or equal to 50 to return grade 'C'
        return 'C'
    }
    else if (score > 40 && score <= 49) {
        // evaluates scores greater than 40 and less than or equal to 49 to produce grade 'D'
        return 'D'
    }
    else if (score <=40 && score >=0) {
        // any score less than or equal to 40 and greater than and equal to 0 returns a 'E'
        return 'E'
    }
    else{
        // any other value that is not assigned above will return as "Not a value"
        return 'Not a value!!!'
    }



}


finalOutput=gradeGenerator(inputGrade);
document.getElementById('marks-id').append(finalOutput)

})
speed.addEventListener('click', (e)=>{
    e.preventDefault()
    let inputSpeed=parseInt(document.getElementById('input-speed').value)
    console.log(inputSpeed)
    let finalOutput
// write Code For the Code challenge

// 

function speedDetector(speed) {
    // calculates for speed that is above the speed limit
    const demerit= (speed - 70)/5

    if (speed<=70) {
        // checks the speed limit
        return 'Ok';
        
    } else if(demerit<=12){
        // evaluates and returns the total number of demerits 
        return demerit;
    
        
    }else{
        // for values above the 12 demerits the driver's license should be suspended
        return "License suspended";

    
}

}


finalOutput=speedDetector(inputSpeed)
    document.getElementById('speed-id').append(finalOutput)

})
salary.addEventListener('click', (e)=>{
        e.preventDefault()
        let inputSalary=parseInt(document.getElementById('input-salary').value)
        console.log(inputSalary)
let finalOutput
// write Code For the Code challenge
function PAYE(salary) {
// calculates the PAYE
    if (salary>0 && salary<= 24000) {
        return (salary)*0.1;

        
        
    } else if(salary>24000 && salary<=32333) {
        return (salary)*0.25;
        
    }
    else if(salary>32333){
        return (salary)*0.3;

    }
    
}

// evaluates to give value of the NSSF deductions
function NSSF(deduction) {
    if (deduction>0 && deduction<= 6000) {
        return (deduction)*0.6;
        
    } else if (deduction>6000 && deduction<= 1800){
        return (deduction)*0.6;
        
    }
    
}
// evaluates to calculate the NHIF deductions according to the salary earned
function NHIF(insurance){
if (insurance>0 && insurance>= 5999) {
    return (insurance)-150;
    
} else if(insurance>=6000 && insurance<=7999) {
    return{insurance}-300;
    
}else if(insurance>=8000 && insurance<=11999) {
    return{insurance}-400;

}else if(insurance>=12000 && insurance<=14999) {
    return{insurance}-500;

}else if(insurance>=15000 && insurance<=19999) {
    return{insurance}-600;
}
else if(insurance>=20000 && insurance<=24999) {
    return{insurance}-750;
}
else if(insurance>=25000 && insurance<=29999) {
    return{insurance}-850;
}
else if(insurance>=30000 && insurance<=34999) {
    return{insurance}-900;
}
else if(insurance>=35000 && insurance<=39999) {
    return{insurance}-950;
}
else if(insurance>=40000 && insurance<=44999) {
    return{insurance}-1000;
}
else if(insurance>=45000 && insurance<=49999) {
    return{insurance}-1100;
}
else if(insurance>=50000 && insurance<=59999) {
    return{insurance}-1200;
}
else if(insurance>=60000 && insurance<=69999) {
    return{insurance}-1300;
}
else if(insurance>=70000 && insurance<=79999) {
    return{insurance}-1400;
}
else if(insurance>=80000 && insurance<=89999) {
    return{insurance}-1500;
}
else if(insurance>=90000 && insurance<=99999) {
    return{insurance}-1600;
}
else if(insurance>=100000) {
    return{insurance}-1700;
}


}





// finalOutput= PAYE(salary)-NSSF(deduction)-NHIF(insurance)

// giving the final output

finalOutput = inputSalary-PAYE(inputSalary)-(NHIF(inputSalary));
document.getElementById('salary-id').append(finalOutput)
        
})