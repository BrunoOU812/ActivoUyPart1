
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
        const previous=()=>{
            index===length?index=0:index+=1;    
            element(index);
            }
        document.querySelector("#left").addEventListener("click", previous);
        document.querySelector("#right").addEventListener("click", next);
    })
