(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{FIpM:function(module,exports,t){t("OKkt")},OKkt:function(module,exports,t){},lcok:function(module,exports,t){t("vLo/")},pr3t:function(module,t,e){"use strict";e.r(t);var n=e("q1tI"),s=e("F/us"),o=e.n(s),i=e("8cuT"),r=e("pR6o"),a=e("L1vm"),c=e("sQ/U"),u=e("EdUP"),l=e("VbXa"),m=e.n(l),d=e("17x9"),p=e.n(d),b=e("pVnL"),g=e.n(b),S=e("N1om"),I=e.n(S),f=e("q5zD"),v=e("yhVA"),h=e.n(v),y=e("FIpM"),E,A,x=function MoreOrLess(t){var e=t.ariaProps,s=t.buttonContext,o=t.onClick,i=t.more,r=h()("More about #{buttonContext}",{buttonContext:s}),a=h()("Less about #{buttonContext}",{buttonContext:s});return n.createElement("span",{className:"rc-MoreOrLess body-2-text color-hint-text"},i?n.createElement("button",g()({type:"button",onClick:o,"aria-label":r,className:"nostyle button-link"},e),h()("more")," ",E||(E=n.createElement(f.a,{name:"chevron-down",className:"toggle-arrow"}))):n.createElement("button",g()({type:"button",onClick:o,"aria-label":a,className:"nostyle button-link"},e),h()("less")," ",A||(A=n.createElement(f.a,{name:"chevron-up",className:"toggle-arrow"}))))},k,P=function(t){function AssignmentInstructionSection(){for(var e,n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))||this).state={expanded:!0},e.toggleExpand=function(){e.setState((function(t){var e;return{expanded:!t.expanded}}))},e}var e;return m()(AssignmentInstructionSection,t),AssignmentInstructionSection.prototype.render=function render(){var t=this.state.expanded,e=this.props,s=e.title,o=e.children,i="instructions-container-".concat(I()(s)),r={"aria-controls":i};return n.createElement("div",{className:"rc-AssignmentInstructionSection"},n.createElement("div",{className:"title-container bgcolor-primary-light"},n.createElement("h2",{className:"body-2-text"},s),n.createElement(x,{more:!t,onClick:this.toggleExpand,ariaProps:r,buttonContext:s})),t&&n.createElement("div",{className:"instructions-content-container",id:i},o))},AssignmentInstructionSection}(n.Component),w=e("beC1"),C=e("lcok"),N=function(t){function AssignmentInstructions(){return t.apply(this,arguments)||this}var e;return m()(AssignmentInstructions,t),AssignmentInstructions.prototype.render=function render(){var t=this.props.instructions;if(null==t)return null;return(n.createElement("div",{className:"rc-AssignmentInstructions"},n.createElement("div",{className:"introduction"},n.createElement(w.a,{content:t.introduction,assumeStringIsHtml:!0,display:"inline-block"})),t.sections&&t.sections.map((function(t){return n.createElement(P,{title:t.title,key:t.title},n.createElement(w.a,{content:t.content,assumeStringIsHtml:!0,display:"inline-block"}))}))))},AssignmentInstructions}(n.Component);N.propTypes={instructions:p.a.shape({introduction:p.a.any.isRequired,sections:p.a.arrayOf(p.a.shape({content:p.a.object.isRequired,title:p.a.string.isRequired}))})};var L=N,O=e("VMeS"),V=e("JAmU"),M=o.a.compose(a.a.createTrackedContainer((function(){return{namespace:{page:"peer_review_instructions"}}})),Object(i.a)(["PeerAssignmentStore","PeerPermissionsAndProgressesStore","PeerViewSubmissionStore"],(function(t,e){var n=t.PeerAssignmentStore,s=t.PeerPermissionsAndProgressesStore,o=t.PeerViewSubmissionStore,i,r=n.getState().assignment;return{hasLoaded:"loaded"===n.getState().loadState&&"loaded"===s.getState().loadState,instructions:r&&r.instructions,loadedPeerViewSubmissionId:o.getState().submissionId,isSubmitted:s.getState().isSubmitted,latestSubmissionId:s.getState().latestSubmissionId}})),Object(u.a)((function(t){var e;return t.hasLoaded}),n.createElement(O.a,{className:"rc-PeerItemInstructions"})),Object(r.a)((function(t,e){var n=e.itemMetadata,s=e.isSubmitted,o=e.latestSubmissionId,i=e.loadedPeerViewSubmissionId,r;s&&o&&(i!==o&&t.executeAction(V.d,{userId:c.a.get().id,courseId:n.get("course").get("id"),itemId:n.get("id"),submissionId:o}))})))(L),q=t.default=M},"vLo/":function(module,exports,t){}}]);
//# sourceMappingURL=90.c0f0dd27f145d2f9c34d.js.map