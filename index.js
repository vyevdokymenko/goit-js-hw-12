import{a as g,S as f,i as h}from"./assets/vendor-ZGq6K_iM.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const y="https://pixabay.com/api/",L="57120606-d69b26f25a6d0d516b33d9d09",b=a=>g.get(y,{params:{key:L,q:a,image_type:"photo",orientation:"horizontal",per_page:9,safesearch:!0}}).then(t=>t.data),v="/goit-js-hw-12/assets/sprite-Dk9nDJGV.svg",c=document.querySelector(".gallery"),d=document.querySelector(".loader-container"),w=new f(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}),F=a=>{const t=[];for(const o of a){const{webformatURL:r,largeImageURL:e,tags:s,likes:i,views:p,comments:u,downloads:m}=o;t.push(`
    <li class="gallery-item">
      <a class="gallery-link" href="${e}">
        <img
            class="gallery-image"
            src="${r}"
            data-source="${e}"
            alt="${s}"
        />
        <ul class="img-description">
        <li>
          <p class="desc-name">Likes</p>
          <p class="desc-value">${i}</p>
        </li>
        <li>
          <p class="desc-name">Views</p>
          <p class="desc-value">${p}</p>
        </li>
        <li>
          <p class="desc-name">Comments</p>
          <p class="desc-value">${u}</p>
        </li>
        <li>
          <p class="desc-name">Downloads</p>
          <p class="desc-value">${m}</p>
        </li>
      </ul>
      </a>
    </li>
  `)}c.insertAdjacentHTML("beforeend",t.join("")),w.refresh()},x=()=>{c.innerHTML=""},I=()=>{d.classList.add("visible")},l=()=>{d.classList.remove("visible")},n=document.querySelector("form");n.addEventListener("submit",a=>{a.preventDefault(),x(),I();const t=n.elements["search-text"].value.trim();if(!t){l(),n.reset();return}b(t).then(o=>{const r=o.hits;if(r.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");l(),F(r)}).catch(o=>{l(),h.show({titleColor:"#FFFFFF",message:o.message,messageColor:"#FFFFFF",position:"topRight",transitionIn:"fadeIn",animateInside:!1,backgroundColor:"#ef4040",color:"#fff",icon:"toast-icon",class:"snackbar-toast",progressBarColor:"#b51b1b",maxWidth:"432px",onOpening(r,e){const s=e.querySelector(".iziToast-icon");s.innerHTML=`
            <svg width="24" height="24" aria-hidden="true">
              <use href="${v}#x-octagon"></use>
            </svg>
          `}})}).finally(()=>n.reset())});
//# sourceMappingURL=index.js.map
