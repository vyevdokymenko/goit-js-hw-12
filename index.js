import{a as v,S as b,i as x}from"./assets/vendor-ZGq6K_iM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function r(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=r(s);fetch(s.href,o)}})();const F="https://pixabay.com/api/",I="57120606-d69b26f25a6d0d516b33d9d09",u=15,M=async(t,e=1)=>(await v.get(F,{params:{q:t,image_type:"photo",orientation:"horizontal",per_page:u,page:e,safesearch:!0,key:I}})).data,l=()=>{try{return JSON.parse(localStorage.getItem("searchState")||"{}")}catch{return{}}},p=t=>{const e=l();return t.toLowerCase()!==e.searchText},P=t=>{const e=l();return e.page=p(t)?1:(e.page??1)+1,e.searchText=t.toLowerCase(),localStorage.setItem("searchState",JSON.stringify(e)),e.page},q=()=>l().searchText,O="/goit-js-hw-12/assets/sprite-Dk9nDJGV.svg",m=document.querySelector(".gallery"),g=document.querySelector(".loader-container"),h=document.querySelector(".load-more-display"),f=document.querySelector(".end-of-search-display"),$=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),E=t=>{const e=[];for(const r of t){const{webformatURL:a,largeImageURL:s,tags:o,likes:n,views:L,comments:S,downloads:w}=r;e.push(`
    <li class="gallery-item">
      <a class="gallery-link" href="${s}">
        <img
            class="gallery-image"
            src="${a}"
            data-source="${s}"
            alt="${o}"
        />
        <ul class="img-description">
        <li>
          <p class="desc-name">Likes</p>
          <p class="desc-value">${n}</p>
        </li>
        <li>
          <p class="desc-name">Views</p>
          <p class="desc-value">${L}</p>
        </li>
        <li>
          <p class="desc-name">Comments</p>
          <p class="desc-value">${S}</p>
        </li>
        <li>
          <p class="desc-name">Downloads</p>
          <p class="desc-value">${w}</p>
        </li>
      </ul>
      </a>
    </li>
  `)}m.insertAdjacentHTML("beforeend",e.join("")),$.refresh()},T=()=>{m.innerHTML=""},C=()=>{g.classList.remove("hidden")},c=()=>{g.classList.add("hidden")},D=()=>{h.classList.remove("hidden"),f.classList.add("hidden")},N=()=>{h.classList.add("hidden"),f.classList.remove("hidden")},i=document.querySelector("form"),A=document.querySelector(".load-more"),d=t=>{x.show({titleColor:"#FFFFFF",message:t,messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,backgroundColor:"#ef4040",color:"#fff",icon:"toast-icon",class:"snackbar-toast",progressBarColor:"#b51b1b",maxWidth:"432px",onOpening(e,r){const a=r.querySelector(".iziToast-icon");a.innerHTML=`
        <svg width="24" height="24" aria-hidden="true">
          <use href="${O}#x-octagon"></use>
        </svg>
      `}})},y=async t=>{try{C();let e=P(t);const r=await M(t,e),a=r.hits;if(a.length===0){c(),d("Sorry, there are no images matching your search query. Please try again!");return}c(),E(a),r.totalHits>e*u?D():N()}catch(e){c(),d(e.message)}finally{i.reset()}};i.addEventListener("submit",async t=>{t.preventDefault();const e=i.elements["search-text"].value.trim();if(!e){c(),i.reset();return}p(e)&&T(),await y(e)});A.addEventListener("click",async t=>{t.preventDefault();let e=q();e&&await y(e)});
//# sourceMappingURL=index.js.map
