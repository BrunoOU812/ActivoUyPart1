/*const address = fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
    .then(response=>response.json())
    .then(respuestaJSON=>console.log(respuestaJSON));

console.log(address);
console.log(Object.keys(address));*/



  function load (url) {
    return new Promise(async function (resolve, reject) {
      const res = await fetch(url)
      resolve(res.json())
    })
  }

  const promise = load('https://api.coindesk.com/v1/bpi/currentprice.json')

  promise.then(response=>{
    const carousel = document.getElementById("caroussel");
    Object.keys(response.bpi)
        .map(item=>{
                    const card= document.createElement("li");
                    const isoCode= document.createElement("h1");
                    const description= document.createElement("p");
                    const rate= document.createElement("span");
                    const data=response.bpi[item];
                    isoCode.innerHTML= `${data.code} `;
                    description.innerHTML= `${data.description} `;
                    rate.innerHTML= `${data.symbol} ${data.rate} `;
                    card.classList.add("slide");
                    card.appendChild(isoCode);
                    card.appendChild(description);
                    card.appendChild(rate);
                    carousel.appendChild(card);
                });
            })
      
  
  

  /*

const address = "https://api.coindesk.com/v1/bpi/currentprice.json";

const getData =()=>{
    return new Promise ((resolve,reject)=>{
        if(data.length===0){
            reject(new error("No Data"))
        }
        setTimeout(()=>{
            resolve(data);
        },2000)
    })
}

getData()
    .then((response)=> console.log(response))
    .catch((err)=>console.log(err.message))
//no funca
    const address = "https://api.coindesk.com/v1/bpi/currentprice.json";
    const getResponse =()=>{
        return new Promise((resolve,reject)=>{
            const response=fetch(address);
            resolve(response.json());
        })
    }
    const fetchingData=async()=>{
        const response=await getResponse();
        console.log(response)
    }

    fetchingData();*/