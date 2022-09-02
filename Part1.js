const carousel = document.getElementById("caroussel");

const load= (url) => {
    return new Promise(async function (resolve, reject) {
      const res = await fetch(url)
      resolve(res.json())
    })
  }

const promise = load('https://api.coindesk.com/v1/bpi/currentprice.json')

const cards =promise.then(response=>{
        return Object.keys(response.bpi)
            .map(item=>{
                        const data=response.bpi[item];
                        return {
                        isoCode: data.code,
                        description: data.description,
                        symbol: data.symbol,
                        rate: data.rate}
                    })
            })

console.log(cards[0])



// console.log(cards.map(data=>{data}));
/*
        cards.forEach(data=>{
            const card= document.createElement("li");
            const isoCode= document.createElement("h1");
            const description= document.createElement("p");
            const rate= document.createElement("span");
            isoCode.innerHTML= `${data.isoCode} `;
            description.innerHTML= `${data.description} `;
            rate.innerHTML= `${data.symbol} ${data.rate} `;
            card.classList.add("slide");
            card.appendChild(isoCode);
            card.appendChild(description);
            card.appendChild(rate);
            carousel.appendChild(card);
        });*/
