const products=[{id:1,name:"Капучино",price:230,description:"Отличный кофе Капучино"},{id:2,name:"Американо",price:280,description:"Отличный кофе Американо"},{id:3,name:"Латте",price:210,description:"Отличный кофе Латте"},{id:4,name:"Декаф",price:140,description:"Отличный кофе Декаф"},{id:5,name:"Эспрессо",price:300,description:"Отличный кофе Эспрессо"},{id:6,name:"Раф",price:150,description:"Отличный кофе Раф"}],productList=document.querySelector(".catalog__products"),cardTemplate=document.querySelector("#catalog__card").content.querySelector(".catalog__card"),filter=document.querySelector("#sorting-select");let filterKey="default";const filterSort=function(){switch(filterKey){case"default":return products;case"budget":return[...products].sort(((e,t)=>e.price-t.price));case"expensive":return[...products].sort(((e,t)=>t.price-e.price));case"alphabet":return[...products].sort(((e,t)=>e.name.toLowerCase()>t.name.toLowerCase()?1:-1))}},createCards=function(e){const t=[];for(let r=0;r<e.length;r++){const c=e[r].id;t[r]=cardTemplate.cloneNode(!0),t[r].querySelector(".catalog-card__image").src=`images/catalog/coffee-${c}.jpg`,t[r].querySelector(".catalog-card__image").srcset=`images/catalog/coffee-${c}@2x.jpg 2x`,t[r].querySelector("source").srcset=`images/catalog/coffee-${c}.webp, images/catalog/coffee-${c}@2x.webp 2x`,t[r].querySelector(".catalog-card__title").textContent=e[r].name,t[r].querySelector(".catalog-card__description").textContent=e[r].description,t[r].querySelector(".catalog-card__price").textContent=`${e[r].price}₽`,productList.appendChild(t[r])}};createCards(filterSort()),filter.addEventListener("change",(()=>{filterKey=filter.value,productList.innerHTML="",createCards(filterSort())}));