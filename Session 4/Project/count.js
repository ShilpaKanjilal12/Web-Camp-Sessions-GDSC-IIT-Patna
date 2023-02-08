const counter = document.querySelector('#counter')
const btns = document.querySelectorAll('.btn')


let count = 0;
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
    const styles = e.currentTarget.classList

    if(styles.contains('decrease')){
        count--
        if (count<0) {
            document.getElementById("error").style.display ="block";
            count=0;
        }

    }
    else  if(styles.contains('increase')){
        count++
        if (count>0) {
            document.getElementById("error").style.display ="none";
        }
    } 
    else{
        count = 0
        document.getElementById("error").style.display ="none";

    }

    counter.textContent = count;
})
    

})