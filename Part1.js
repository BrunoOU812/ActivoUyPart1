 const load = () => {
    return new Promise(async function (resolve, reject) {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      resolve(res.json())
    })
  }
  load().then(response=>{
        let index=0;
        const keys=Object.keys(response.bpi);
        let length=keys.length-1;
        const element =(index)=>{
        const item=keys[index];
        const data=response.bpi[item];
                    document.querySelector("h1").innerHTML=`${data.code} `;
                    document.querySelector("p").innerHTML=`${data.description} `;
                    document.querySelector("span").innerHTML= `${data.symbol} ${data.rate} `;

                    }
        const next=()=>{
        index===0?index=length:index-=1;    
        element(index);
        }
        const previous=()=>{
            index===length?index=0:index+=1;    
            element(index);
            }
        next();
        previous();
        document.querySelector("#left").addEventListener("click", previous);
        document.querySelector("#right").addEventListener("click", next);
    })
