(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"/1x4":function(e){e.exports=JSON.parse('{"4c31df":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"aaa1bf":[{"name":"`audio` or `video` avoids automatically playing audio","slug":"rules/80f0bf"}],"2eb176":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"afb423":[{"name":"`audio` element content has text alternative","slug":"rules/e7aa44"}],"a1b64e":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ebe86a":[{"name":"Focusable element has no keyboard trap","slug":"rules/80af7b"}],"ab4d13":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"},{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"f51b46":[{"name":"`video` element auditory content has accessible alternative","slug":"rules/eac66b"}],"1ea59c":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"1a02b0":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"}],"f196ce":[{"name":"`video` element visual content has accessible alternative","slug":"rules/c5a4ea"},{"name":"`video` element visual content has strict accessible alternative","slug":"rules/1ec09b"}],"fd26cf":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ac7dc6":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"ee13b5":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}],"d7ba54":[{"name":"`video` element visual-only content has accessible alternative","slug":"rules/c3232f"}]}')},"6vEM":function(e,a,t){},Yh6b:function(e,a,t){},"e+bk":function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),l=t.n(i),n=t("Wbzz"),c=t("M55E"),s=t.n(c),r=t("sWYD"),o=t("vrFN"),m=t("Bl7J"),u=t("ua6q"),d=function(e){var a=e.scrollLinkId,t=e.items,i=e.contributors,n=Object(u.getAcknowledgements)(t,i);return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:a,href:"#"+a},l.a.createElement("h2",null,"Acknowledgments")),n.map((function(e){var a=e.title,t=e.items;return t&&t.length?l.a.createElement("div",{className:"meta",key:a},l.a.createElement("h3",{className:"heading"},a),l.a.createElement("ul",null,t.map((function(e){var a=e.text,t=e.url;return l.a.createElement(b,{url:t,text:a,key:a})})))):null})))};function b(e){var a=e.text,t=e.url;return t?l.a.createElement("li",null,l.a.createElement("a",{className:"sc-item block",target:"_blank",rel:"noopener noreferrer",href:t},a)):l.a.createElement("li",null,a)}d.defaultProps={scrollLinkId:"",items:{authors:[],previous_authors:[],reviewers:[]},contributors:[]};var f=d,h=t("t1PT"),p=function(e){var a=e.ruleId,t=e.glossaryData,i=h[a];i.includes("#outcome")||i.push("#outcome");var n=t.edges.filter((function(e){var a=e.node.frontmatter;return i.includes("#"+a.key)}));return l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"glossary-listing",href:"#glossary-listing"},l.a.createElement("h2",null,"Glossary")),n.map((function(e){var a=e.node,t=a.frontmatter,i=a.html;return l.a.createElement("article",{key:a.id},l.a.createElement("a",{id:t.key,href:"#"+t.key},l.a.createElement("h3",null,t.title)),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}))})))},v=t("3OQw"),g=t("rbzX"),y=t("TSYQ"),E=t.n(y),k=t("lU33"),w=(t("6vEM"),function(e){var a=e.toc,t=Object(i.useState)(!0),n=t[0],c=t[1];return l.a.createElement("section",{className:E()("tableOfContents",{hide:!n})},l.a.createElement(k.a,{queries:{large:"(min-width: 1200px)"},onChange:function(e){return c(e.large)}}),l.a.createElement("span",{role:"heading","aria-level":"1",className:"heading"},"Table of Contents"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:a}}),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{href:"#glossary-listing"},"Glossary")),l.a.createElement("li",null,l.a.createElement("a",{href:"#useful-links"},"Useful Links")),l.a.createElement("li",null,l.a.createElement("a",{href:"#implementation-metrics"},"Implementations")),l.a.createElement("li",null,l.a.createElement("a",{href:"#acknowledgments"},"Acknowledgments"))))}),x=t("hmaj"),_=t("/1x4"),N=t("IQve"),T=t.n(N),I=t("rlp3");t("Yh6b"),a.default=function(e){var a=e.location,t=e.data,i=t.rule,c=t.allRules,u=t.allGlossary,d=t.site,b=i.html,h=i.frontmatter,y=i.tableOfContents,E=i.fields,k=E.fastmatterAttributes,N=E.changelog,S=E.fileName.relativePath,M=JSON.parse(N),C=JSON.parse(k),L=new s.a.Converter,j=JSON.parse(d.siteMetadata.actRulesPackage),H=j.repository,O=j.config,q=j.contributors,z=T()(H.url),A=h.id,J="/testcases/"+A+"/rule-"+A+"-testcases-for-em-report-tool.json",R=z+"/edit/develop/_rules/"+S,P="/rules/"+A+"/changelog",U=z+"/issues?utf8=%E2%9C%93&q=is%3Aissue+is%3Aopen+"+A+"+",D=O["rule-format-metadata"]["input-aspects"],F=_[A],G=I.filter((function(e){return e.actMapping.filter((function(e){var a=e.ruleId,t=e.consistency;return a===A&&["consistent","partially-consistent"].includes(t)})).length>0}));return l.a.createElement(m.a,{location:a},l.a.createElement(o.a,{title:"Rule | "+h.name}),l.a.createElement("section",{className:"page-rule"},l.a.createElement("header",null,l.a.createElement("h1",{dangerouslySetInnerHTML:{__html:L.makeHtml(h.name)}})),l.a.createElement("ul",{className:"meta"},h.rule_type&&l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Type:"),l.a.createElement("span",null,h.rule_type)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Rule Id:"),l.a.createElement("span",null," ",A)),l.a.createElement("li",null,l.a.createElement("span",{className:"heading"},"Last modified:"),l.a.createElement("span",null," ",M&&M.length?Object(r.a)(new Date(M[0].date),"MMM dd, yyyy"):"-")),l.a.createElement("li",null,l.a.createElement(v.a,{accessibility_requirements:C.accessibility_requirements})),F&&F.length>0&&l.a.createElement("li",null,l.a.createElement(x.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Used in rules:")},itemTemplate:function(e){return l.a.createElement("li",{key:e.slug},l.a.createElement(n.Link,{to:"/"+e.slug},l.a.createElement("span",{dangerouslySetInnerHTML:{__html:L.makeHtml(e.name)}})))},items:F})),h.input_aspects&&h.input_aspects.length&&l.a.createElement("li",null,l.a.createElement(x.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Aspects:")},itemTemplate:function(e){var a=D[e]?D[e]:D.default;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:a},e))},items:h.input_aspects})),h.input_rules&&h.input_rules.length&&l.a.createElement("li",null,l.a.createElement(x.a,{cls:"side-notes",headingTemplate:function(){return l.a.createElement("span",{className:"heading"},"Input Rules:")},itemTemplate:function(e){var a=c.edges.find((function(a){return a.node.frontmatter.id===e})),t=a.node.fields.slug.replace("rules/",""),i=a.node.frontmatter.name;return l.a.createElement("li",{key:e},l.a.createElement("a",{className:"sc-item block",href:t,dangerouslySetInnerHTML:{__html:L.makeHtml(i)}}))},items:h.input_rules}))),l.a.createElement("hr",null),l.a.createElement("h2",{id:"description"},l.a.createElement("a",{href:"#description","aria-label":"description permalink",className:"anchor before"},l.a.createElement("svg",{"aria-hidden":"true",focusable:"false",height:"16",viewBox:"0 0 16 16",width:"16"},l.a.createElement("path",{fillRule:"evenodd",d:"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"}))),"Description"),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:L.makeHtml(h.description)}}),l.a.createElement("div",{dangerouslySetInnerHTML:{__html:b}}),l.a.createElement("hr",null),l.a.createElement(p,{ruleId:A,glossaryData:u}),l.a.createElement("hr",null),l.a.createElement("a",{href:"#useful-links",id:"useful-links"},l.a.createElement("h2",null,"Useful Links")),l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:U},"Github issues related to this rule")),l.a.createElement("li",null,l.a.createElement("a",{rel:"noopener noreferrer",href:P},"Changelog")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:R},"Propose a change to the rule")),l.a.createElement("li",null,l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:J},"Test case file for use in the WCAG-EM Report Tool"))),l.a.createElement("hr",null),l.a.createElement(l.a.Fragment,null,l.a.createElement("a",{id:"implementation-metrics",href:"#implementation-metrics"},l.a.createElement("h2",null,"Implementations")),l.a.createElement("p",null,"This section is not part of the official rule. It is populated dynamically and not accounted for in the change history or the last modified date. This section will not be included in the rule when it is published on the W3C website."),l.a.createElement(g.a,{implementers:G,ruleId:A})),l.a.createElement(f,{scrollLinkId:"acknowledgments",items:C.acknowledgments||C.acknowledgements,contributors:q})),l.a.createElement(w,{toc:y}))}},hmaj:function(e,a,t){"use strict";var i=t("q1tI"),l=t.n(i),n=function(e){var a=e.cls,t=e.headingTemplate,i=e.itemTemplate,n=e.items,c=void 0===n?[]:n;return l.a.createElement("div",{className:a},t(),(!c||!c.length)&&l.a.createElement("div",{className:"note"},"No Data"),c.length>0&&l.a.createElement("ul",null,c.map((function(e){return i(e)}))))};n.defaultProps={cls:"",heading:"",items:[]},a.a=n},t1PT:function(e){e.exports=JSON.parse('{"5f99a7":["#wai-aria-specifications"],"6cfa84":["#attribute-value","#focusable","#visible"],"ff89c9":["#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#owned-by","#semantic-role","#wai-aria-specifications"],"bc4a75":["#attribute-value","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#owned-by","#semantic-role","#wai-aria-specifications"],"5c01ea":["#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#wai-aria-specifications"],"6a7281":["#wai-aria-specifications"],"e6952f":[],"afb423":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#visible"],"80f0bf":["#attribute-value","#instrument-to-achieve-an-objective","#outcome","#web-page-html"],"e7aa44":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#outcome","#visible"],"2eb176":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#visible"],"aaa1bf":["#attribute-value"],"4c31df":["#accessible-name","#attribute-value","#focusable","#included-in-the-accessibility-tree","#instrument-to-achieve-an-objective","#visible","#web-page-html","#whitespace"],"efbfc7":["#clearly-labeled-location","#instrument-to-achieve-an-objective","#semantic-role","#user-interaction","#visible","#visible-text-content","#web-page-html"],"73f2c2":["#appropriate-field-for-the-form-control","#attribute-value","#correct-autocomplete-field","#disabled-element","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#visible"],"97a4e1":["#accessible-name","#attribute-value","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#wai-aria-specifications"],"b33eff":["#visible"],"c249d5":["#blocked-event","#changes-in-content","#clearly-labeled-location","#instrument-to-achieve-an-objective","#set-of-clearly-labeled-instruments","#web-page-html"],"7677a9":["#changes-in-content","#clearly-labeled-location","#instrument-to-achieve-an-objective","#semantic-role","#web-page-html"],"de46e4":["#attribute-value","#focusable","#included-in-the-accessibility-tree","#valid-language-tag","#visible","#whitespace"],"46ca7f":["#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role"],"7d6734":["#accessible-name","#explicit-role","#focusable","#included-in-the-accessibility-tree","#wai-aria-specifications"],"80af7b":["#focusable","#outcome"],"ebe86a":["#focusable","#included-in-the-accessibility-tree","#standard-keyboard-navigation","#visible"],"a1b64e":["#focusable","#standard-keyboard-navigation"],"cc0f0a":["#accessible-name","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatic-label","#semantic-role","#visible","#visual-context","#wai-aria-specifications"],"e086e5":["#accessible-name","#attribute-value","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatic-label","#semantic-role","#visible","#wai-aria-specifications"],"b49b2e":["#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#visible"],"ffd0e9":["#accessible-name","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#visible","#wai-aria-specifications"],"b5c3f8":[],"ucwvc8":["#accessible-name","#attribute-value","#default-page-language","#included-in-the-accessibility-tree","#valid-language-tag","#visible","#web-page-html"],"bf051a":["#valid-language-tag"],"5b7ae0":["#valid-language-tag"],"2779a5":["#whitespace"],"c4a8a4":["#whitespace"],"3ea0c8":["#focusable","#included-in-the-accessibility-tree","#programmatic-label","#visible"],"4b1c6c":["#accessible-name","#equivalent-resource","#focusable","#included-in-the-accessibility-tree","#matching-characters","#same-resource","#web-page-html"],"cae760":["#accessible-name","#explicit-role","#focusable","#included-in-the-accessibility-tree","#wai-aria-specifications","#whitespace"],"akn7bn":["#attribute-value","#visible"],"qt1vmo":["#accessible-name","#focusable","#included-in-the-accessibility-tree","#visible"],"59796f":["#accessibility-support","#accessible-name","#attribute-value","#focusable","#included-in-the-accessibility-tree",null],"9eb3f6":["#accessible-name","#explicit-role","#filename","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#whitespace"],"23a2a8":["#accessible-name","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#wai-aria-specifications"],"e88epe":["#accessible-name","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#visible","#wai-aria-specifications"],"36b590":["#accessible-name","#explicit-role","#focusable","#form-field-error-indicator","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#visible"],"24afc2":["#visible"],"78fd32":["#visible"],"aizyf1":["#accessible-name","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-link","#semantic-role","#wai-aria-specifications"],"5effbb":["#accessible-name","#expectation","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#programmatically-determined-link-context","#semantic-link","#semantic-role",null],"c487ae":["#accessible-name","#attribute-value","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#wai-aria-specifications"],"b20e66":["#accessible-name","#equivalent-resource","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#matching-characters","#same-resource","#semantic-role","#wai-aria-specifications","#web-page-html"],"fd3a94":["#accessible-name","#equivalent-resource","#expectation","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#matching-characters","#programmatically-determined-link-context","#same-resource","#semantic-role","#wai-aria-specifications","#web-page-html",null],"m6b1q3":["#accessible-name","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role"],"bc659a":["#attribute-value","#expectation",null],"bisz58":["#attribute-value"],"b4f0c3":["#visible"],"9bd38c":["#accessible-name","#focusable","#included-in-the-accessibility-tree","#visible","#visible-text-content","#visual-reference-words"],"8fc3b6":["#accessible-name","#explicit-role","#focusable","#hidden-state","#included-in-the-accessibility-tree","#marked-as-decorative"],"307n5z":["#accessible-name","#attribute-value","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role"],"ffbc54":["#blocked-event","#changes-in-content","#clearly-labeled-location","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#instrument-to-achieve-an-objective","#marked-as-decorative","#printable-characters","#same-key-events","#semantic-role","#set-of-clearly-labeled-instruments","#web-page-html"],"674b10":["#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#wai-aria-specifications","#whitespace"],"4e8ab6":["#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#wai-aria-specifications"],"0ssw9k":["#attribute-value","#scrollable-element","#visible"],"oj04fd":["#focusable","#focused"],"d0f69e":["#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#visible","#wai-aria-specifications"],"a25f45":["#attribute-value","#focusable","#included-in-the-accessibility-tree","#visible"],"afw4f7":["#accessible-name","#attribute-value","#background-colors-of-text","#bounding-box-around-text","#disabled-element","#expectation","#explicit-role","#focusable","#foreground-colors-of-text","#hidden-state","#highest-possible-contrast","#implicit-role","#included-in-the-accessibility-tree","#large-scale-text","#marked-as-decorative","#semantic-role","#semantic-widget","#visible",null],"09o5cg":["#accessible-name","#attribute-value","#background-colors-of-text","#bounding-box-around-text","#disabled-element","#explicit-role","#focusable","#foreground-colors-of-text","#hidden-state","#highest-possible-contrast","#implicit-role","#included-in-the-accessibility-tree","#large-scale-text","#marked-as-decorative","#semantic-role","#semantic-widget","#visible"],"eac66b":["#non-streaming-media-element","#outcome","#visible"],"c5a4ea":["#expectation","#non-streaming-media-element","#outcome","#visible",null],"ab4d13":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#visible"],"1ea59c":["#non-streaming-media-element","#visible"],"f51b46":["#audio-output","#non-streaming-media-element","#visible"],"f196ce":["#attribute-value","#non-streaming-media-element","#visible"],"c3232f":["#non-streaming-media-element","#outcome","#visible"],"fd26cf":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#visible"],"d7ba54":["#non-streaming-media-element","#visible"],"ac7dc6":["#attribute-value","#non-streaming-media-element","#visible"],"ee13b5":["#focusable","#included-in-the-accessibility-tree","#non-streaming-media-element","#visible"],"1ec09b":["#non-streaming-media-element","#outcome","#visible"],"1a02b0":["#non-streaming-media-element","#visible"],"2ee8b8":["#accessible-name","#explicit-role","#focusable","#hidden-state","#implicit-role","#included-in-the-accessibility-tree","#marked-as-decorative","#semantic-role","#visible","#visible-text-content","#whitespace"],"9e45ec":["#visible"],"59br37":["#attribute-value","#clipped-by-overflow","#viewport-size","#visible"]}')},ua6q:function(e,a){function t(e,a){var t=e[0],i=a[0],l=["funding","reviewers","previous_authors","authors"],n=l.indexOf(t),c=l.indexOf(i);return-1!==n||-1!==c?c-n:t.toUpperCase()>i.toUpperCase()?1:-1}e.exports={getAcknowledgements:function(e,a){return Object.entries(e).sort(t).map((function(e){return function(e,a,t){return a=a.map((function(e){return function(e,a){var t=a.find((function(a){var t=a.name;return e.toLowerCase()===t.toLowerCase()}));if(!t)return{text:e};return{text:t.name,url:t.url}}(e,t)})),{title:e=function(e){return e.split(/_/g).map((function(e){return e[0].toUpperCase()+e.substr(1)})).join(" ")}(e),items:a}}(e[0],e[1],a)}))}}}}]);
//# sourceMappingURL=component---src-templates-rule-js-2c164f45dc72a62bd9aa.js.map