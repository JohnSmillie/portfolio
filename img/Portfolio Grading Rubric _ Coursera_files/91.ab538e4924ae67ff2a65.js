(window.webpackJsonp=window.webpackJsonp||[]).push([[91],{"7hDj":function(module,e,t){"use strict";var r=t("RIqP"),n=t.n(r),o=t("3tO9"),a=t.n(o),i=t("q1tI"),c=t("qhky"),s=t("17x9"),u=t.n(s),l=t("MnCE"),d=t("8cuT"),p=t("pR6o"),f=t("+LJP"),b=t("TGWU"),h=t("sQ/U"),g=t("ti7j"),m=t("tRjs"),v=t("yzzz"),j=t("YrOX"),O=t("fw5G"),x=t.n(O),C=t("cVIm"),R=t("tCgl"),P=new x.a(C.a.url.base),S=P.host().split(".").slice(1).join(".");function generateHref(e,t){var r=e.pathname,n;return new x.a("https://".concat(t,".").concat(S)).setPath(r).toString()}var y=function defaultHrefLangOverrides(e,t){var r=t.query,n=void 0===r?{}:r,o;if(t.hash||Object.keys(n).length)return[];return e};function generateHreflangLinks(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:y,r=arguments.length>2?arguments[2]:void 0,n;if(r)return null!==(n=r.map((function(e){var t,r;return{href:e.href,hreflang:e.hreflang,rel:"alternate"}})))&&void 0!==n?n:[];var o=[{rel:"alternate",hreflang:"x-default",href:generateHref(e,"www")},{rel:"alternate",hreflang:"en",href:generateHref(e,"www")}];if(t)return t(o,e);return o}function generateLinkTagsForPaginatedPages(e,t,r){var n=e.absolutePageHref,o=e.absolutePrevPageHref,a=e.absoluteNextPageHref,i=e.canonicalLinkHrefOverride,c=e.productLocale,s=[],u=Object(R.c)(n,t),l;if(c&&u){var d=new x.a(u),p=P.host();d.setHost(p),l=d.toString()}var f=(null==r?void 0:r.canonicalLinkHrefOverride)||i||l;return f&&s.push({rel:"canonical",href:f}),o&&s.push({rel:"prev",href:o}),a&&s.push({rel:"next",href:a}),s}var H=generateHref,w=t("SWW0"),M=t("f2vG"),k=t("hS5U"),I=t.n(k),L=t("TjYC"),N=t.n(L),T=function CourseraMetatagsBaseComponent(e,t){var r=t.router.location,o,s=Object(j.b)().metaTags,u=e.metaNameAndProperties,l=e.hrefLangOverrides,d=e.paginationProperties,p=void 0===d?{}:d,f=e.seoOverrideRule,b=u.title,h=u.disableCourseraSuffix,g=Object(i.useMemo)((function(){var e,t;s?t=Object(w.c)(s):null!=f&&f.length&&(t=Object(M.b)(f));var o=N.a.merge(I.a),i=Object(w.b)(b,o,h,t),c=generateHreflangLinks(r,l,null!==(e=null==s?void 0:s.hreflangLinks)&&void 0!==e?e:void 0),d=generateLinkTagsForPaginatedPages(p,r,t),g=!l&&0===c.length,m;return{title:i,meta:Object(w.a)(o,a()(a()({},u),{},{disableCrawlerIndexing:void 0!==u.enableCrawlerIndexing?!u.enableCrawlerIndexing:g||u.disableCrawlerIndexing}),r,t),link:[].concat(n()(c),n()(d))}}),[h,l,r,u,s,p,f,b]);return i.createElement(c.a,g)};T.contextTypes={router:u.a.object.isRequired,fluxibleContext:u.a.object};var W=function CourseraMetatags(e,t){var r=t.router.location,n=r.pathname,o=r.search,a=Object(b.a)().hostname;return i.createElement(v.a,{path:a+n+o},i.createElement(T,e))};W.contextTypes={router:u.a.object.isRequired,fluxibleContext:u.a.object};var D=Object(l.a)((function(){return h.a.isAuthenticatedUser()}),Object(l.p)((function(e){return e})),Object(l.b)(Object(l.p)((function(e){return a()(a()({},e),{},{appName:"ondemand"})})),Object(l.a)((function(e){var t=e.appName,r;return g.a.get("seoOverrideEnabledApps").includes(t)}),Object(l.b)(Object(f.a)((function(e){var t;return{location:e.location}})),Object(d.a)(["SeoRulesStore"],(function(e,t){var r=e.SeoRulesStore.seoRules;return a()(a()({},t),{},{seoRules:r})})),Object(l.a)((function(e){var t;return!e.seoRules}),Object(p.a)((function(e,t){var r=e.executeAction,n=t.location;r(m.a.bind(null,{location:n,isInternalTool:!1}))})),Object(l.p)((function(e){return e}))),Object(d.a)(["SeoRulesStore"],(function(e,t){return a()(a()({},t),{},{seoOverrideRule:e.SeoRulesStore.getData()})}))))))(W),E=T,q=t("OQDE");t.d(e,"a",(function(){return D}))},FM79:function(module,exports,e){e("quHx")},H4ky:function(module,e,t){"use strict";var r=t("VbXa"),n=t.n(r),o=t("q1tI"),a=t.n(o),i=t("17x9"),c=t.n(i),s=t("jGbM");e.a=function(e){return function(t){var r=t.displayName||t.name,a=function(r){function RedirectWrapper(){for(var e,t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return(e=r.call.apply(r,[this].concat(n))||this).state={haveRedirected:!1},e}n()(RedirectWrapper,r);var a=RedirectWrapper.prototype;return a.componentWillMount=function componentWillMount(){this.conditionallyRedirect(this.props)},a.componentWillReceiveProps=function componentWillReceiveProps(e){this.conditionallyRedirect(e)},a.conditionallyRedirect=function conditionallyRedirect(t){var r=e(t),n=r.redirectUrl,o=r.shouldRedirect;!this.state.haveRedirected&&o&&(this.setState({haveRedirected:!0}),this.context.router.push(n))},a.render=function render(){var r,n;if(e(this.props).shouldRedirect)return null;return(o.createElement(t,this.props))},RedirectWrapper}(o.Component);return a.displayName=r+"RedirectWrapper",a.contextTypes={router:c.a.object.isRequired},Object(s.a)(a,t),a}}},n8LY:function(module,e,t){"use strict";t.r(e);var r=t("VbXa"),n=t.n(r),o=t("AeFk"),a=t("q1tI"),i=t("17x9"),c=t.n(i),s=t("F/us"),u=t("ngyh"),l=t("L1vm"),d=t("1HaE"),p=t("Jrms"),f=t("Ns7p"),b=t("TSYQ"),h=t.n(b),g={"python-for-applied-data-science-ai":"https://guido.us-south.cf.appdomain.cloud/","building-ai-powered-chatbots":"https://poweredai.eu-gb.mybluemix.net/","introduction-to-ai":"https://intro-ai.eu-gb.mybluemix.net/"},m=function isIBMChatbotEnabled(e){return Object.keys(g).includes(e)},v=function getIBMChatbotURL(e){return m(e)?g[e]:null},j=t("FM79"),O,x=function IBMChatbot(e){var t=e.courseSlug,r=v(t);return r&&a.createElement("iframe",{title:"chatbot_".concat(t),src:r,frameBorder:"0",scrolling:"no",className:h()("frame-area","rc-IBMChatbot")})},C=t("2T3l"),R=t("H4ky"),P=t("emlC"),S=t("7hDj"),y=t("GP6s"),H=t.n(y);t.d(e,"default",(function(){return k}));var w=function CourseHomeDiscussionsPage(e){var t=e.courseName,r=e.courseSlug,n=e.children,i=H()("#{courseName} - Discussions",{courseName:t});return Object(a.useEffect)((function(){f.a.get("LearnerForumPendoSampleIncluded")&&Object(d.a)()}),[]),Object(o.d)("div",{className:"rc-CourseHomeDiscussionsPage"},Object(o.d)(S.a,{metaNameAndProperties:{title:i}}),m(r)&&Object(o.d)(x,{courseSlug:r}),n)};w.propTypes={courseName:c.a.string,courseSlug:c.a.string,children:c.a.node};var M=Object(s.compose)(l.a.createTrackedContainer((function(){return{namespace:{page:"discussions"}}})),Object(P.a)(["CourseStore","CourseMembershipStore","ApplicationStore"],(function(e,t){var r=e.CourseStore,n=e.CourseMembershipStore,o=e.ApplicationStore,a=n.isEnrolled()&&!n.isPreEnrolled(),i=r.getCourseId(),c=n.hasModerationRole()||o.isSuperuser(),s=a;return{courseId:i,courseSlug:r.getMetadata().get("slug"),courseName:r.getMetadata().get("name"),courseRootPath:r.getCourseRootPath(),canAccessDiscussions:!Object(C.a)(i)&&(s||c)}})),Object(R.a)((function(e){var t,r;return{redirectUrl:e.courseRootPath,shouldRedirect:!e.canAccessDiscussions}})))(w),k=function(e){function FluxibleCourseHomeDiscussionsPage(){return e.apply(this,arguments)||this}n()(FluxibleCourseHomeDiscussionsPage,e);var t=FluxibleCourseHomeDiscussionsPage.prototype;return t.componentWillMount=function componentWillMount(){this.fluxibleContext=Object(p.j)(this.context.fluxibleContext)},t.render=function render(){return Object(o.d)(u.a,{context:this.fluxibleContext.getComponentContext()},Object(o.d)(M,this.props))},FluxibleCourseHomeDiscussionsPage}(a.Component);k.contextTypes={fluxibleContext:c.a.object}},quHx:function(module,exports,e){}}]);
//# sourceMappingURL=91.ab538e4924ae67ff2a65.js.map