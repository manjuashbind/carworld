function addCar(){
    if(brand.value=='' || price.value=='' || key.value==''){
        alert("Enter All Fields ")
    }
    else{  
        if(key.value in localStorage)  {
            alert("Car Already Exists")
        }
        else{
        const Car={
                name:brand.value,
                price:price.value,
                key:key.value
            }
            localStorage.setItem(Car.key,JSON.stringify(Car))
            alert("Car Details Added Successfully")
            document.getElementById("form1").reset();
         }
        }
}

function searchCar(event){
    event.preventDefault();
    let key=searchKey.value;   

    if(key ==''){
        alert("Enter Key");
        console.log(key);
    }
    else{
        
        if(key in localStorage){
           let Car=JSON.parse(localStorage.getItem(key));
            console.log(`${Car}`);
            
            result.innerHTML=`<div class="bg-primary-subtle p-2 mt-2 border border-1 rounded shadow text-primary"><h5 class="text-center text-primary ">Car Details</h5>
            <p>Car Brand : ${Car.name}</p>
            <p>Car Price : ${Car.price}</p>
            <p>Car Key   : ${Car.key}</p>
            </div>`;
            document.getElementById("form2").reset();
        }
        else{
            alert("Car Doesn't Exist in records")
            document.getElementById("form2").reset();
        }
    }

}
function deleteCar(event){

    event.preventDefault();
    let key=deleteKey.value;   

    if(key ==''){
        alert("Enter Key");
        console.log(key);
    }
    else{
         if(key in localStorage){
        localStorage.removeItem(key) ;
        alert("Car Deleted Successfully")  
        document.getElementById("form3").reset(); 
                    
        }
         else{
                alert("Key Doesn't Exist")
                document.getElementById("form3").reset();
            }
        }
}
function clearAll(){

    localStorage.clear();
    result.innerHTML=""
}