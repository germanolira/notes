_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{RNiq:function(e,n,t){"use strict";t.r(n);var r=t("nKUr"),o=t("YFqc"),c=t.n(o);n.default=function(){return function(){r.Fragment,c.a}}},YFqc:function(e,n,t){e.exports=t("cTJO")},cTJO:function(e,n,t){"use strict";var r=t("J4zp"),o=t("284h");n.__esModule=!0,n.default=void 0;var c=o(t("q1tI")),a=t("elyg"),u=t("nOHt"),i=t("vNVm"),f={};function s(e,n,t,r){if((0,a.isLocalURL)(n)){e.prefetch(n,t,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;f[n+"%"+t+(o?"%"+o:"")]=!0}}var l=function(e){var n=!1!==e.prefetch,t=(0,u.useRouter)(),o=t&&t.pathname||"/",l=c.default.useMemo((function(){var n=(0,a.resolveHref)(o,e.href,!0),t=r(n,2),c=t[0],u=t[1];return{href:c,as:e.as?(0,a.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),p=l.href,d=l.as,v=e.children,h=e.replace,y=e.shallow,w=e.scroll,_=e.locale;"string"===typeof v&&(v=c.default.createElement("a",null,v));var g=c.Children.only(v),E=g&&"object"===typeof g&&g.ref,b=(0,i.useIntersection)({rootMargin:"200px"}),m=r(b,2),M=m[0],R=m[1],N=c.default.useCallback((function(e){M(e),E&&("function"===typeof E?E(e):"object"===typeof E&&(E.current=e))}),[E,M]);(0,c.useEffect)((function(){var e=R&&n&&(0,a.isLocalURL)(p),r="undefined"!==typeof _?_:t&&t.locale,o=f[p+"%"+d+(r?"%"+r:"")];e&&!o&&s(t,p,d,{locale:r})}),[d,p,R,_,n,t]);var L={ref:N,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,n,t,r,o,c,u,i){("A"!==e.currentTarget.nodeName||!function(e){var n=e.currentTarget.target;return n&&"_self"!==n||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,a.isLocalURL)(t))&&(e.preventDefault(),null==u&&(u=r.indexOf("#")<0),n[o?"replace":"push"](t,r,{shallow:c,locale:i}).then((function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())})))}(e,t,p,d,h,y,w,_)},onMouseEnter:function(e){(0,a.isLocalURL)(p)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),s(t,p,d,{priority:!0}))}};return(e.passHref||"a"===g.type&&!("href"in g.props))&&(L.href=(0,a.addBasePath)((0,a.addLocale)(d,"undefined"!==typeof _?_:t&&t.locale,t&&t.defaultLocale))),c.default.cloneElement(g,L)};n.default=l},vNVm:function(e,n,t){"use strict";var r=t("J4zp"),o=t("TqRt");n.__esModule=!0,n.useIntersection=function(e){var n=e.rootMargin,t=e.disabled||!u,o=(0,c.useRef)(),f=(0,c.useState)(!1),s=r(f,2),l=s[0],p=s[1],d=(0,c.useCallback)((function(e){o.current&&(o.current(),o.current=void 0),t||l||e&&e.tagName&&(o.current=function(e,n,t){var r=function(e){var n=e.rootMargin||"",t=i.get(n);if(t)return t;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var n=r.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;n&&t&&n(t)}))}),e);return i.set(n,t={id:n,observer:o,elements:r}),t}(t),o=r.id,c=r.observer,a=r.elements;return a.set(e,n),c.observe(e),function(){c.unobserve(e),0===a.size&&(c.disconnect(),i.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:n}))}),[t,n,l]);return(0,c.useEffect)((function(){u||l||(0,a.default)((function(){return p(!0)}))}),[l]),[d,l]};var c=t("q1tI"),a=o(t("0G5g")),u="undefined"!==typeof IntersectionObserver;var i=new Map},vlRD:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t("RNiq")}])}},[["vlRD",0,2,1]]]);