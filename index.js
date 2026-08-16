import{a as L,S as b,i as w}from"./assets/vendor-ZGq6K_iM.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const l of a.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function r(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(t){if(t.ep)return;t.ep=!0;const a=r(t);fetch(t.href,a)}})();const v="https://pixabay.com/api/",S="57120606-d69b26f25a6d0d516b33d9d09",g=15,F=async(s,e)=>(await L.get(v,{params:{q:s,image_type:"photo",orientation:"horizontal",per_page:g,page:e,safesearch:!0,key:S}})).data,I="/goit-js-hw-12/assets/sprite-Dk9nDJGV.svg",y=document.querySelector(".gallery"),p=document.querySelector(".loader"),h=document.querySelector(".load-more-button"),m=document.querySelector(".end-of-search"),q=new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),x=({webformatURL:s,largeImageURL:e,tags:r,likes:o,views:t,comments:a,downloads:l})=>`
  <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
            class="gallery-image"
            src="${s}"
            alt="${r}"
        />
        <ul class="gallery-stats">
          <li class="gallery-stat">
            <p class="gallery-stat-label">Likes</p>
            <p class="gallery-stat-value">${o}</p>
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
`,M=s=>{const e=[];for(const r of s)e.push(x(r));y.insertAdjacentHTML("beforeend",e.join("")),q.refresh()},E=()=>{y.innerHTML=""},O=()=>{p.classList.remove("is-hidden")},d=()=>{p.classList.add("is-hidden")},P=()=>{h.classList.remove("is-hidden")},T=()=>{h.classList.add("is-hidden")},$=()=>{m.classList.remove("is-hidden")},B=()=>{m.classList.add("is-hidden")},n=document.querySelector(".form"),G=document.querySelector(".load-more-button");let i=1,c="";const u=s=>{w.show({titleColor:"#FFFFFF",message:s,messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,backgroundColor:"#ef4040",color:"#fff",icon:"toast-icon",class:"snackbar-toast",progressBarColor:"#b51b1b",maxWidth:"432px",onOpening(e,r){const o=r.querySelector(".iziToast-icon");o.innerHTML=`
        <svg width="24" height="24" aria-hidden="true">
          <use href="${I}#x-octagon"></use>
        </svg>
      `}})},f=async s=>{try{T(),B(),O();const e=await F(s,i),r=e.hits;if(d(),r.length===0){u("Sorry, there are no images matching your search query. Please try again!");return}M(r),e.totalHits>i*g?P():$(),i++}catch(e){d(),u(e.message)}},R=()=>{const s=document.querySelector(".gallery-item"),{height:e}=s.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"})};n.addEventListener("submit",async s=>{s.preventDefault();const e=n.elements["search-input"].value.trim().toLowerCase();if(!e){d(),n.reset();return}e!==c&&(i=1,E()),c=e,await f(c),n.reset()});G.addEventListener("click",async s=>{s.preventDefault(),await f(c),R()});
//# sourceMappingURL=index.js.map
