const form = document.querySelector("form");

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const height = parseInt(document.querySelector("#height").value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector("#results");
    if(!height || !weight || isNaN(height) || isNaN(weight)){
        results.innerHTML = "Please enter both height and weight";
    }
    else{
        const result = ((height*height)/10000).toFixed(2);
        results.innerText = `${result}`
    }
})