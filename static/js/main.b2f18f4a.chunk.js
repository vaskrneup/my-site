(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{110:function(t,e,a){"use strict";a.r(e);var n=a(1),c=a(0),r=a.n(c),o=a(29),i=a.n(o),s=(a(86),a(20)),l=a(19),j=a(8),d=a(141),b=a(142),u=a(135),p=a(137),h=a(139),m=a(140),O=a(65),g=a.n(O),x=a(112),f=Object(u.a)((function(t){return{toolbar:{borderBottom:"1px solid ".concat(t.palette.divider)},toolbarTitle:{flex:1},toolbarSecondary:{justifyContent:"space-between",overflowX:"auto"},toolbarLink:{padding:t.spacing(1),flexShrink:0}}}));var v=function(t){var e=f(),a=t.sections,r=t.title;return Object(n.jsxs)(c.Fragment,{children:[Object(n.jsxs)(p.a,{className:e.toolbar,children:[Object(n.jsx)(h.a,{size:"small",children:"Subscribe"}),Object(n.jsx)(x.a,{component:"h2",variant:"h5",color:"inherit",align:"center",noWrap:!0,className:e.toolbarTitle,children:r}),Object(n.jsx)(m.a,{children:Object(n.jsx)(g.a,{})}),Object(n.jsx)(h.a,{variant:"outlined",size:"small",children:"Sign up"})]}),Object(n.jsx)(p.a,{component:"nav",variant:"dense",className:e.toolbarSecondary,children:a.map((function(t){return Object(n.jsx)(l.b,{to:t.url,children:t.title},t.url)}))})]})},y=[{title:"blog",url:"/blog"}];var P=function(){return Object(n.jsxs)(r.a.Fragment,{children:[Object(n.jsx)(d.a,{}),Object(n.jsx)(b.a,{maxWidth:"lg",children:Object(n.jsx)(v,{title:"Home",sections:y})})]})},S=a(143),w=a(44),F=a(113),k=Object(u.a)((function(t){return{mainFeaturedPost:{position:"relative",backgroundColor:t.palette.grey[800],color:t.palette.common.white,marginBottom:t.spacing(4),backgroundImage:"url(https://source.unsplash.com/random)",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(w.a)({position:"relative",padding:t.spacing(3)},t.breakpoints.up("md"),{padding:t.spacing(6),paddingRight:0})}}));var B=function(t){var e=k(),a=t.post,c=t.postUrl;return Object(n.jsxs)(F.a,{className:e.mainFeaturedPost,style:{backgroundImage:"url(".concat(a.image,")")},children:[Object(n.jsx)("img",{style:{display:"none"},src:a.image,alt:a.imageText}),Object(n.jsx)("div",{className:e.overlay}),Object(n.jsx)(S.a,{container:!0,children:Object(n.jsx)(S.a,{item:!0,md:6,children:Object(n.jsxs)("div",{className:e.mainFeaturedPostContent,children:[Object(n.jsx)(x.a,{component:"h1",variant:"h3",color:"inherit",gutterBottom:!0,children:a.title}),Object(n.jsx)(x.a,{variant:"h5",color:"inherit",paragraph:!0,children:a.description}),c?Object(n.jsx)(l.b,{to:c,style:{color:"lightBlue"},children:"continue reading..."}):null]})})})]})},C=a(145),T=a(144),N=a(146),_=a(147),D=a(151),M=Object(u.a)({card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160}});var E=function(t){var e=M(),a=t.post;return Object(n.jsx)(S.a,{item:!0,xs:12,md:6,children:Object(n.jsx)(T.a,{children:Object(n.jsxs)(C.a,{className:e.card,children:[Object(n.jsx)("div",{className:e.cardDetails,children:Object(n.jsxs)(N.a,{children:[Object(n.jsx)(x.a,{component:"h2",variant:"h5",children:a.title}),Object(n.jsx)(x.a,{variant:"subtitle1",color:"textSecondary",children:a.date}),Object(n.jsx)(x.a,{variant:"subtitle1",paragraph:!0,children:a.description}),Object(n.jsx)(x.a,{variant:"subtitle1",color:"primary",children:Object(n.jsx)(l.b,{to:"/blog/".concat(a.slug),children:"Continue reading..."})})]})}),Object(n.jsx)(D.a,{smDown:!0,children:Object(n.jsx)(_.a,{className:e.cardMedia,image:a.image,title:a.imageText})})]})})})},G=Object(c.createContext)([]),L=G.Provider,I=(G.Consumer,G);var q=function(t){var e=t.categories,a=t.children,r=Object(c.useContext)(I).categories;return Object(n.jsxs)(c.Fragment,{children:[Object(n.jsx)(d.a,{}),Object(n.jsxs)(b.a,{maxWidth:"lg",children:[Object(n.jsx)(v,{title:"Blog",sections:e||r}),Object(n.jsx)("main",{children:a})]})]})},z=Object(c.createContext)({mainFeaturedPost:{},featuredPosts:[]}),A=z.Provider,U=(z.Consumer,z),W=a(16),H=a(148),R=a(71),J=a(66),X=a(6),Y={overrides:{h1:{component:x.a,props:{gutterBottom:!0,variant:"h4"}},h2:{component:x.a,props:{gutterBottom:!0,variant:"h6"}},h3:{component:x.a,props:{gutterBottom:!0,variant:"subtitle1"}},h4:{component:x.a,props:{gutterBottom:!0,variant:"caption",paragraph:!0}},p:{component:x.a,props:{paragraph:!0}},a:{component:function(t){return Object(n.jsx)(l.b,{to:t.href,children:t.children})}},li:{component:Object(X.a)((function(t){return{listItem:{marginTop:t.spacing(1)}}}))((function(t){var e=t.classes,a=Object(R.a)(t,["classes"]);return Object(n.jsx)("li",{className:e.listItem,children:Object(n.jsx)(x.a,Object(W.a)({component:"span"},a))})}))}}};function V(t){return Object(n.jsx)(J.a,Object(W.a)(Object(W.a)({options:Y},t),{},{children:t.children}))}var K=Object(u.a)((function(t){return{markdown:Object(W.a)(Object(W.a)({},t.typography.body2),{},{padding:t.spacing(3,0)})}}));var Q=function(t){var e=t.posts,a=t.title,c=t.postTitle,r=t.creationDate,o=t.username,i=K();return Object(n.jsxs)(S.a,{item:!0,xs:12,md:8,children:[Object(n.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:a}),Object(n.jsx)(H.a,{}),e.map((function(t){return t="# ".concat(c,"\n\n#### ").concat(r," by [").concat(o,"](/profile/").concat(o,")\n")+t,Object(n.jsx)(V,{className:i.markdown,children:t},t.substring(0,40))}))]})},Z=a(149),$=Object(u.a)((function(t){return{sidebarAboutBox:{padding:t.spacing(2),backgroundColor:t.palette.grey[200]},sidebarSection:{marginTop:t.spacing(3)}}}));var tt=function(t){var e=$(),a=t.archives,c=t.description,r=t.social,o=t.title;return Object(n.jsxs)(S.a,{item:!0,xs:12,md:4,children:[Object(n.jsxs)(F.a,{elevation:0,className:e.sidebarAboutBox,children:[Object(n.jsx)(x.a,{variant:"h6",gutterBottom:!0,children:o}),Object(n.jsx)(x.a,{children:c})]}),a?Object(n.jsx)(x.a,{variant:"h6",gutterBottom:!0,className:e.sidebarSection,children:"Archives"}):null,a?a.map((function(t){return Object(n.jsx)(Z.a,{display:"block",variant:"body1",href:t.url,children:t.title},t.title)})):null,0!==r.length?Object(n.jsx)(x.a,{variant:"h6",gutterBottom:!0,className:e.sidebarSection,children:"Social"}):null,r.map((function(t){return Object(n.jsx)(Z.a,{display:"block",variant:"body1",target:"_blank",href:t.url,children:Object(n.jsxs)(S.a,{container:!0,direction:"row",spacing:1,alignItems:"center",children:[Object(n.jsx)(S.a,{item:!0,children:Object(n.jsx)(t.icon,{})}),Object(n.jsx)(S.a,{item:!0,children:t.name})]})},t.name)}))]})},et=a(26),at=a.n(et),nt=a(67),ct=a.n(nt),rt=a(68),ot=a.n(rt),it=a(69),st=a.n(it),lt=a(70),jt=a.n(lt),dt={github:ct.a,facebook:ot.a,twitter:st.a,youtube:jt.a};var bt="http://localhost:8000";var ut=function(t){var e=t.blogSlug,a=t.dataSetter,r=Object(c.useState)({author:"",data:[],socialUrl:[]}),o=Object(s.a)(r,2),i=o[0],l=o[1];return Object(c.useEffect)((function(){at()({method:"GET",url:"".concat(bt,"/api/portfolio/get-home-page-posts/"),params:e?{slug:e}:{}}).then((function(t){var e,n=[],c="",r="",o=[],i={};for(var s in t.data.home_page_posts)if(t.data.home_page_posts.hasOwnProperty(s)){var j=t.data.home_page_posts[s];for(var d in j.social)if(j.social.hasOwnProperty(d)){var b=j.social[d];b&&o.push({name:d,icon:(e=d,e=e.toLowerCase(),dt[e]),url:b})}n.push(j.markdown),c=j.username,r=j.bio,i.postTitle=j.title,i.creationDate=j.date}l(Object(W.a)({author:c,bio:r,socialUrl:o,data:n},i)),a&&a({additional:t.data.home_page_posts,author:c,bio:r,socialUrl:o,data:n})}))}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(Q,{title:"From ".concat(i.author),posts:i.data,postTitle:i.postTitle,creationDate:i.creationDate,username:i.author}),Object(n.jsx)(tt,{title:"About ".concat(i.author),description:i.bio,social:i.socialUrl})]})},pt=Object(u.a)((function(t){return{mainGrid:{marginTop:t.spacing(3)}}}));function ht(){var t=pt(),e=Object(c.useContext)(U).featuredPosts;return Object(n.jsxs)(q,{children:[Object(n.jsx)(B,{post:e.mainFeaturedPost,postUrl:"/blog/".concat(e.mainFeaturedPost.slug)}),Object(n.jsx)(S.a,{container:!0,spacing:4,children:e.featuredPosts.map((function(t){return Object(n.jsx)(E,{post:t},t.title)}))}),Object(n.jsx)(S.a,{container:!0,spacing:5,className:t.mainGrid,children:Object(n.jsx)(ut,{blogSlug:e.mainFeaturedPost.slug})})]})}var mt=function(t){var e=t.match.params.blogDetail,a=Object(c.useState)(null),r=Object(s.a)(a,2),o=r[0],i=r[1];return Object(n.jsxs)(q,{children:[Object(n.jsx)(B,{post:o&&o.additional[0]?o.additional[0]:{}}),Object(n.jsx)(S.a,{container:!0,spacing:5,children:Object(n.jsx)(ut,{blogSlug:e,dataSetter:i})})]})},Ot=a(49);var gt=function(t){var e=Object(c.useState)(1),a=Object(s.a)(e,2),r=a[0],o=a[1],i=Object(c.useState)([]),l=Object(s.a)(i,2),j=l[0],d=l[1];function b(e){e&&at()({method:"GET",url:"".concat(bt,"/api/portfolio/get-posts/"),params:Object(W.a)(Object(W.a)({},t.match.params),{},{p:e})}).then((function(t){console.log(t.data),t.data.has_pagination_data&&(o(t.data.pagination.next_page_number),d(1===e?t.data.posts:[].concat(Object(Ot.a)(j),Object(Ot.a)(t.data.posts))))}))}return Object(c.useEffect)((function(){b(1)}),[t.match.params.q,t.match.params.category]),Object(n.jsxs)(q,{children:[Object(n.jsx)(S.a,{container:!0,spacing:4,children:j.map((function(t){return Object(n.jsx)(E,{post:t},t.slug)}))}),r?Object(n.jsx)(h.a,{onClick:function(){b(r)},children:"Load More"}):Object(n.jsx)("div",{style:{paddingTop:"30px"},children:Object(n.jsx)(h.a,{disabled:!0,children:"Seems Like you have come to an end, You can always select different category or search for your interest."})})]})},xt=a(150),ft=Object(u.a)({root:{maxWidth:345},media:{height:300}});var vt=function(t){var e=t.match,a=ft();return Object(n.jsxs)(q,{categories:[],children:[Object(n.jsxs)(T.a,{children:[Object(n.jsx)(_.a,{className:a.media,image:"https://images.unsplash.com/photo-1605528017351-8635bb3d6a3a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1351&q=80",title:"Contemplative Reptile"}),Object(n.jsxs)(N.a,{children:[Object(n.jsx)(x.a,{gutterBottom:!0,variant:"h5",component:"h2",children:e.params.username}),Object(n.jsx)(x.a,{variant:"body2",color:"textSecondary",component:"p",children:"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"})]})]}),Object(n.jsxs)(xt.a,{children:[Object(n.jsx)(h.a,{size:"small",color:"primary",children:"Share"}),Object(n.jsx)(h.a,{size:"small",color:"primary",children:"Learn More"})]})]})};var yt=function(){return Object(n.jsx)(l.a,{children:Object(n.jsxs)(j.c,{square:!0,children:[Object(n.jsx)(j.a,{path:"/",exact:!0,component:P}),Object(n.jsx)(j.a,{path:"/blog",exact:!0,component:ht}),Object(n.jsx)(j.a,{path:"/blog/search/:q",exact:!0,component:gt}),Object(n.jsx)(j.a,{path:"/blog/category/:category",exact:!0,component:gt}),Object(n.jsx)(j.a,{path:"/blog/search/:q/:category",exact:!0,component:gt}),Object(n.jsx)(j.a,{path:"/blog/:blogDetail",exact:!0,component:mt}),Object(n.jsx)(j.a,{path:"/profile/:username",exact:!0,component:vt})]})})};var Pt=function(){var t=Object(c.useState)({mainFeaturedPost:{},featuredPosts:[]}),e=Object(s.a)(t,2),a=e[0],r=e[1],o=Object(c.useState)([]),i=Object(s.a)(o,2),l=i[0],j=i[1];return Object(c.useEffect)((function(){at()({url:"".concat(bt,"/api/portfolio/get-featured-posts/"),method:"GET"}).then((function(t){var e={},a=[];for(var n in t.data.featured_posts)if(t.data.featured_posts.hasOwnProperty(n)){var c=t.data.featured_posts[n];c.hasOwnProperty("isMainFeaturedPost")&&(c.isMainFeaturedPost?e=c:a.push(c))}r({mainFeaturedPost:e,featuredPosts:a})}))}),[]),Object(c.useEffect)((function(){at()({url:"".concat(bt,"/api/portfolio/get-category/"),method:"GET"}).then((function(t){var e=[];for(var a in t.data.categories)if(t.data.categories.hasOwnProperty(a)){var n=t.data.categories[a];e.push({title:n.name,url:"/blog/category/".concat(n.slug)})}j(e)}))}),[]),0===a.featuredPosts.length||0===l.length?Object(n.jsx)(n.Fragment,{}):Object(n.jsx)(A,{value:{featuredPosts:a,setFeaturedPosts:r},children:Object(n.jsx)(L,{value:{categories:l,setCategories:j},children:Object(n.jsx)("div",{children:Object(n.jsx)(yt,{})})})})},St=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,153)).then((function(e){var a=e.getCLS,n=e.getFID,c=e.getFCP,r=e.getLCP,o=e.getTTFB;a(t),n(t),c(t),r(t),o(t)}))};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(Pt,{})}),document.getElementById("root")),St()},86:function(t,e,a){}},[[110,1,2]]]);
//# sourceMappingURL=main.b2f18f4a.chunk.js.map