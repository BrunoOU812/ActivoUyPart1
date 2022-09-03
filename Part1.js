
//   function load (url) {
//     return new Promise(async function (resolve, reject) {
//       const res = await fetch(url)
//       resolve(res.json())
//     })
//   }
//   const promise = load('https://api.coindesk.com/v1/bpi/currentprice.json')
//   let index=0;

//   promise.then(response=>{
//     const carousel = document.getElementById("carousel");
//     let length=Object.keys(response.bpi).length;
//     // document.querySelector("#left").onclick=()=>{index===0?index=length:index-=1}
//     // document.querySelector("#right").onclick=()=>{index===length?index=0:index+=1}
//     document.querySelector("#right").onclick=()=>{console.log(index+=1)}
//                     console.log(index);
//                     const item =Object.keys(response.bpi)[index];
//                     const card= document.createElement("li");
//                     const isoCode= document.createElement("h1");
//                     const description= document.createElement("p");
//                     const rate= document.createElement("span");
//                     const data=response.bpi[item];
//                     isoCode.innerHTML= `${data.code} `;
//                     description.innerHTML= `${data.description} `;
//                     rate.innerHTML= `${data.symbol} ${data.rate} `;
//                     card.appendChild(isoCode);
//                     card.appendChild(description);
//                     card.appendChild(rate);
//                     carousel.appendChild(card);               
//             })

// function load (url) {
//     return new Promise(async function (resolve, reject) {
//       const res = await fetch(url)
//       resolve(res.json())
//     })
//   }
//   const promise = load('https://api.coindesk.com/v1/bpi/currentprice.json')
 const load = () => {
    return new Promise(async function (resolve, reject) {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      resolve(res.json())
    })
  }
  load().then(response=>{
        let index=0;
        let length=Object.keys(response.bpi).length-1;
        const element =(index)=>{
        const item=Object.keys(response.bpi)[index];
        const data=response.bpi[item];
                    document.querySelector("h1").innerHTML=`${data.code} `;
                    document.querySelector("p").innerHTML=`${data.description} `;
                    document.querySelector("span").innerHTML= `${data.symbol} ${data.rate} `;

                    }
        const next=()=>{
        index===0?index=length:index-=1;    
        element(index);
    }

        document.querySelector("#right").addEventListener("click", next);

        document.querySelector("form").onsubmit=()=>{  
        return false;
        }
    })
    // const currency= document.querySelector("#currency").value;
    // const rates=response;
    // document.querySelector("#result").innerHTML=`${rates}`;
