// let costomBtn = document.querySelector(".customer");
// let customers =document.getElementById("customers")
// costomBtn.addEventListener("click", loadCustomer);
// customers.addEventListener("click", loadCustomers);

// function loadCustomer(){
//     let xhr=new XMLHttpRequest();
//     xhr.open("GET","https://jsonplaceholder.typicode.com/posts/1",true);
//     xhr.onload =function(){
//         if (this.status===200) {
//             let data=JSON.parse(this.responseText);
//             let output = `
//             <ul>
//             <li>${data.body}</li>
//             <li>${data.id}
//             <li>${data.title}</li>
            
//             </ul>
//             `;
//             document.getElementById("demo").innerHTML=output;
//         }

//     }
//     xhr.send(); 
// }
// function loadCustomers() {
//     let xhr=new XMLHttpRequest();
//     xhr.open("GET","https://jsonplaceholder.typicode.com/posts",true);
//     xhr.onload = function() {
//         if(this.status===200){
//             let data =JSON.parse(this.responseText);
//             let output ="";
//             data.forEach(data => {
//                 output += `<ul>
//                 <li>${data.id}</li>
//                 <li>${data.title}</li>
//                 <li>${data.body}                
//                 </ul>
//                 document.querySelector("#demo1").innerHTML=output;
//         });
//         }
//         console.log(status.length);
//     }
//     xhr.send();
// }

 window.setInterval(() => {
    let xhr=new XMLHttpRequest();
    xhr.open("GET","https://fakestoreapi.com/products",true);
    xhr.onload= function(){
        if (this.status===200){
            let data= JSON.parse(this.response);
            let output="";
            data.forEach(data=>{
                output += `
                <div class="demo1">
                <img src="${data.image}" />
                <p>${data.title}</p>
                <p>${data.price} $</p>
                <h3>${data.category}</h3>
                <div>
                <p>${data.description}</p>
                </div>


                </div>

                `

               document.getElementById("demo").innerHTML=output;
           })
       }
   }
   xhr.send();
},1500);
let products = document.querySelector("#product");
 products.addEventListener("click",stor);
 function stor() {
     let xhr=new XMLHttpRequest();
     xhr.open("GET","https://fakestoreapi.com/products",true);
     xhr.onload= function(){
         if (this.status===200){
             let data= JSON.parse(this.response);
             let output="";
             data.forEach(data=>{
                 output += `
                 <div class="demo1">
                 <img src="${data.image}" />
                 <p>${data.title}</p>
                 <p>${data.price} $</p>
                 <h3>${data.category}</h3>
                 <div>
                 <p>${data.description}</p>
                 </div>


                 </div>

                 `

                document.getElementById("demo").innerHTML=output;
            })
        }
    }
    xhr.send();
}
let counters = document.querySelector("#counter");
let counter = document.querySelector("#counter1");

let cart=0;
 counters.addEventListener("click",()=>{
    cart++;
    document.getElementById("carts").innerHTML=cart;
    console.log(cart);
});
// // if (cart===0){
//
// //     document.querySelector(".nav").innerHTML += `<button>+</button>`;
// // }else{
// //     document.querySelector(".nav").innerHTML += `<button id="counter1">-</button>`;
// // };
counter.addEventListener("click",()=>{
    if(cart==0){
        cart=0;

    }else{
        cart--;
    }

    document.getElementById("carts").innerHTML=cart;

})

// let http = new EasyHTTP();

// //get all posts
// let posts = http.getPosts("https://jsonplaceholder.typicode.com/posts", function(err, posts)
// {
//     if(err){
//         console.log(err);
//     }else{
//         console.log(posts);
//     }
// });
// var i = 0;
// while(i<=20){
//     console.log(i);
//     i++;
// }

// setInterval(() => {
//     if (navigator.onLine==true) {
       
            
//     }else
//     {
//         
//     }    
// }, 3000);
window.setInterval(()=>{
    document.querySelector(".loader-wrapper").style.display = `none`;
},1400)
document.addEventListener("DOMContentLoaded",(event)=>{
    
})