const colors=["green", "yellow", "red", "white", "purple", "gray", "blue"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    let len=colors.length;
    const randomnumber=Math.floor((Math.random() * (len)));
    console.log(randomnumber);
    document.body.style.backgroundColor = colors[randomnumber];
    color.textContent = colors[randomnumber];

})
