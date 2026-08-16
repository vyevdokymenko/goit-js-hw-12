import{a as b,S as w,i as g}from"./assets/vendor-ZGq6K_iM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();const v="https://pixabay.com/api/",S="57120606-d69b26f25a6d0d516b33d9d09",h=15,F=async(s,e)=>(await b.get(v,{params:{q:s,image_type:"photo",orientation:"horizontal",per_page:h,page:e,safesearch:!0,key:S}})).data,I="/goit-js-hw-12/assets/sprite-Dk9nDJGV.svg",y=document.querySelector(".gallery"),p=document.querySelector(".loader"),m=document.querySelector(".load-more-button"),f=document.querySelector(".end-of-search"),q=new w(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),x=({webformatURL:s,largeImageURL:e,tags:o,likes:r,views:t,comments:a,downloads:l})=>`
  <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
            class="gallery-image"
            src="${s}"
            alt="${o}"
        />
        <ul class="gallery-stats">
          <li class="gallery-stat">
            <p class="gallery-stat-label">Likes</p>
            <p class="gallery-stat-value">${r}</p>
          </li>
          <li class="gallery-stat">
            <p class="gallery-stat-label">Views</p>
            <p class="gallery-stat-value">${t}</p>
          </li>
          <li class="gallery-stat">
            <p class="gallery-stat-label">Comments</p>
            <p class="gallery-stat-value">${a}</p>
          </li>
          <li class="gallery-stat">
            <p class="gallery-stat-label">Downloads</p>
            <p class="gallery-stat-value">${l}</p>
          </li>
        </ul>
      </a>
    </li>
`,E=s=>{const e=[];for(const o of s)e.push(x(o));y.insertAdjacentHTML("beforeend",e.join("")),q.refresh()},M=()=>{y.innerHTML=""},O=()=>{p.classList.remove("is-hidden")},c=()=>{p.classList.add("is-hidden")},P=()=>{m.classList.remove("is-hidden")},R=()=>{m.classList.add("is-hidden")},T=()=>{f.classList.remove("is-hidden")},$=()=>{f.classList.add("is-hidden")},n=document.querySelector(".form"),B=document.querySelector(".load-more-button");let i=1,d="";const u=s=>{g.show({titleColor:"#FFFFFF",message:s,messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,backgroundColor:"#ef4040",color:"#fff",icon:"toast-icon",class:"snackbar-toast",progressBarColor:"#b51b1b",maxWidth:"432px",onOpening(e,o){const r=o.querySelector(".iziToast-icon");r.innerHTML=`
        <svg width="24" height="24" aria-hidden="true">
          <use href="${I}#x-octagon"></use>
        </svg>
      `}})},G=()=>{g.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight"})},L=async s=>{try{R(),$(),O();const e=await F(s,i),o=e.hits;if(c(),o.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}E(o),e.totalHits>i*h?P():(T(),G()),i++}catch(e){c(),u(e.message)}},C=()=>{const s=document.querySelector(".gallery-item"),{height:e}=s.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};n.addEventListener("submit",async s=>{s.preventDefault();const e=n.elements["search-input"].value.trim().toLowerCase();if(!e){c(),n.reset();return}i=1,M(),d=e,await L(d),n.reset()});B.addEventListener("click",async s=>{s.preventDefault(),await L(d),C()});
//# sourceMappingURL=index.js.map
