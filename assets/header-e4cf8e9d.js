(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();function l(){const o=document.querySelector(".mobile-menu-wrapper"),n=document.querySelectorAll(".nav-link"),s=document.querySelector(".burger-menu"),i=document.querySelector(".burger-menu-close");s.addEventListener("click",()=>{o.classList.toggle("is-open")}),i.addEventListener("click",()=>{o.classList.toggle("is-open")}),n.forEach(e=>e.addEventListener("click",()=>{o.classList.remove("is-open")}))}l();function c(){const o=document.querySelectorAll(".nav-link");window.addEventListener("load",()=>{const n=window.location.pathname;console.log(n),n.includes("index.html")||n=="/header-test/"?(o[0].classList.add("active-link"),o[2].classList.add("active-link")):n.includes("page-2.html")&&(o[1].classList.add("active-link"),o[3].classList.add("active-link"))})}c();
//# sourceMappingURL=header-e4cf8e9d.js.map
