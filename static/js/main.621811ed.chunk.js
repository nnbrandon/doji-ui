(this["webpackJsonpdoji-ui"]=this["webpackJsonpdoji-ui"]||[]).push([[0],{121:function(e,t,a){e.exports={container:"Dashboard_container__GkuTH",view:"Dashboard_view__1R6_y"}},167:function(e,t,a){e.exports={container:"CandlestickChart_container__2jddO",upGreenArrow:"CandlestickChart_upGreenArrow__1T64d",downRedArrow:"CandlestickChart_downRedArrow__ZlsMz",upArrow:"CandlestickChart_upArrow__2OmEX",downArrow:"CandlestickChart_downArrow__jKKmv",axis:"CandlestickChart_axis__3G8Ie"}},279:function(e,t,a){},392:function(e,t,a){"use strict";a.r(t);var r=a(0),o=a.n(r),n=a(45),i=a.n(n),l=(a(279),a(10)),c=a(91),d=a(16),p=a(177),s=a.n(p),u=a(451),m=a(17),b=a(2);var h=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("h1",{children:"Welcome to Doji!"})})},y=a(18),g=a(165),f=a.n(g),j=a(166),k=a.n(j),O=a.p+"static/media/FTSE.300e1f4b.csv";var x=a(167),v=a.n(x);function C(e){e.data;return Object(r.useEffect)((function(){y.c(O).then((function(e){for(var t={0:"Jan",1:"Feb",2:"Mar",3:"Apr",4:"May",5:"Jun",6:"Jul",7:"Aug",8:"Sep",9:"Oct",10:"Nov",11:"Dec"},a=y.l("%Y-%m-%d"),r=0;r<e.length;r++)e[r].Date=a(e[r].Date);var o=15,n=65,i=205,l=50,c=1e3-l-n,d=625-o-i,p=y.j("#container").attr("width",c+l+n).attr("height",d+o+i).append("g").attr("transform","translate("+l+","+o+")"),s=f()(e,"Date");console.log(e);var u=y.d(e.map((function(e){return e.Date.getTime()}))),m=y.h().domain([-1,s.length]).range([0,c]),b=y.i().domain([0,s.length]).range(s),h=y.g().domain(y.f(-1,s.length)).range([0,c]).padding(.3),g=y.a().scale(m).tickFormat((function(e){return e=s[e],t[e.getMonth()]+" "+e.getDate()+" "+e.getFullYear()}));p.append("rect").attr("id","rect").attr("width",c).attr("height",d).style("fill","none").style("pointer-events","all").attr("clip-path","url(#clip)");var j=p.append("g").attr("class","axis x-axis").attr("transform","translate(0,"+d+")").call(g),O=y.e(e.map((function(e){return e.Low}))),x=y.d(e.map((function(e){return e.High}))),v=y.h().domain([O,x]).range([d,0]).nice(),C=y.b().scale(v),F=p.append("g").attr("class","axis y-axis").call(C),D=p.append("g").attr("class","chartBody").attr("clip-path","url(#clip)"),M=D.selectAll(".candle").data(e).enter().append("rect").attr("x",(function(e,t){return m(t)-h.bandwidth()})).attr("class","candle").attr("y",(function(e){return v(Math.max(e.Open,e.Close))})).attr("width",h.bandwidth()).attr("height",(function(e){return e.Open===e.Close?1:v(Math.min(e.Open,e.Close))-v(Math.max(e.Open,e.Close))})).attr("fill",(function(e){return e.Open===e.Close?"silver":e.Open>e.Close?"red":"green"})),S=D.selectAll("g.line").data(e).enter().append("line").attr("class","stem").attr("x1",(function(e,t){return m(t)-h.bandwidth()/2})).attr("x2",(function(e,t){return m(t)-h.bandwidth()/2})).attr("y1",(function(e){return v(e.High)})).attr("y2",(function(e){return v(e.Low)})).attr("stroke",(function(e){return e.Open===e.Close?"white":e.Open>e.Close?"red":"green"}));p.append("defs").append("clipPath").attr("id","clip").append("rect").attr("width",c).attr("height",d);var w,_=[[0,0],[c,d]],A=y.m().scaleExtent([1,100]).translateExtent(_).extent(_).on("zoom",(function(e){var a=e.transform,r=a.rescaleX(m);j.call(y.a(r).tickFormat((function(e,a,r){if(e>=0&&e<=s.length-1){if(void 0===(e=s[e]))return;return t[e.getMonth()]+" "+e.getDate()+" "+e.getFullYear()}}))),M.attr("x",(function(e,t){return r(t)-h.bandwidth()*a.k/2})).attr("width",h.bandwidth()*a.k),S.attr("x1",(function(e,t){return r(t)-h.bandwidth()/2+.5*h.bandwidth()})),S.attr("x2",(function(e,t){return r(t)-h.bandwidth()/2+.5*h.bandwidth()})),y.k(".xAxis .tick text").each((function(e){""===this.innerHTML&&(this.parentNode.style.display="none")}))})).on("zoom.end",(function(t){var a=t.transform.rescaleX(m);clearTimeout(w),w=setTimeout((function(){var t=new Date(b(Math.floor(a.domain()[0])));u=new Date(b(Math.floor(a.domain()[1])));var r=k()(e,(function(e){return e.Date>=t&&e.Date<=u})),o=+y.e(r,(function(e){return e.Low})),n=+y.d(r,(function(e){return e.High})),i=Math.floor(.1*(n-o));v.domain([o-i,n+i]),M.transition().duration(100).attr("y",(function(e){return v(Math.max(e.Open,e.Close))})).attr("height",(function(e){return e.Open===e.Close?1:v(Math.min(e.Open,e.Close))-v(Math.max(e.Open,e.Close))})),S.transition().duration(100).attr("y1",(function(e){return v(e.High)})).attr("y2",(function(e){return v(e.Low)})),F.transition().duration(100).call(y.b().scale(v))}),500)}));p.call(A)}))}),[]),Object(b.jsx)("svg",{id:"container",className:v.a.container})}var F=function(e){var t=e.match.params.ticker;return Object(b.jsxs)("div",{children:[Object(b.jsxs)("h1",{children:["Ticker page for ",t]}),Object(b.jsx)(C,{})]})};var D=function(){var e=Object(r.useCallback)((function(e){return Object(b.jsx)(h,{})}),[]),t=Object(r.useCallback)((function(e){return Object(b.jsx)(F,Object(m.a)({},e))}),[]);return Object(b.jsxs)(d.c,{children:[Object(b.jsx)(d.a,{exact:!0,path:"/",render:e}),Object(b.jsx)(d.a,{path:"/:ticker",render:t})]})},M=a(121),S=a.n(M),w=a(446),_=a(445),A=a(449),B=a(96),E=a.n(B),T=a(452),N=a(444),I=a(66),R=a.n(I),W=a(40),H=a.n(W),L=a(15),z=a(169),P=a(170),J=a.n(P);function G(){return(G=Object(z.a)(H.a.mark((function e(){return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,J.a.get("http://127.0.0.1:5000/api/v1/tickers");case 3:return e.next=5,e.sent.data;case 5:return e.abrupt("return",e.sent);case 8:throw e.prev=8,e.t0=e.catch(0),e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function Y(){var e=localStorage.getItem("tickers");return e?JSON.parse(e):[]}var U=a(3),X=a(179),V=a(171),K=a.n(V),Q=a(178),q=a(99);var Z=Object(Q.a)(),$={50:"#F0F7FF",100:"#C2E0FF",200:"#99CCF3",300:"#66B2FF",400:"#3399FF",main:"#007FFF",500:"#007FFF",600:"#0072E5",700:"#0059B2",800:"#004C99",900:"#003A75"},ee={50:"#E2EDF8",100:"#CEE0F3",200:"#91B9E3",300:"#5090D3",main:"#5090D3",400:"#265D97",500:"#1E4976",600:"#173A5E",700:"#132F4C",800:"#001E3C",900:"#0A1929"},te={50:"#F3F6F9",100:"#E7EBF0",200:"#E0E3E7",300:"#CDD2D7",400:"#B2BAC2",500:"#A0AAB4",600:"#6F7E8C",700:"#3E5060",800:"#2D3843",900:"#1A2027"},ae=["-apple-system","BlinkMacSystemFont",'"Segoe UI"',"Roboto",'"Helvetica Neue"',"Arial","sans-serif",'"Apple Color Emoji"','"Segoe UI Emoji"','"Segoe UI Symbol"'],re=function(e){return{light:te[50],dark:te[900]}[e]},oe=function(e){return{palette:Object(m.a)(Object(m.a)(Object(m.a)(Object(m.a)({primary:Object(m.a)(Object(m.a)({},$),"dark"===e&&{main:$[400]}),divider:"dark"===e?Object(q.a)($[100],.08):te[100],primaryDark:ee,mode:e},"dark"===e&&{background:{default:ee[800],paper:ee[900]}}),{},{common:{black:"#1D1D1D"}},"light"===e&&{text:{primary:te[900],secondary:te[700]}}),"dark"===e&&{text:{primary:"#fff",secondary:te[400]}}),{},{grey:te,error:{50:"#FFF0F1",100:"#FFDBDE",200:"#FFBDC2",300:"#FF99A2",400:"#FF7A86",500:"#FF505F",main:"#EB0014",600:"#EB0014",700:"#C70011",800:"#94000D",900:"#570007"},success:Object(m.a)(Object(m.a)(Object(m.a)({50:"#E9FBF0",100:"#C6F6D9",200:"#9AEFBC",300:"#6AE79C",400:"#3EE07F",500:"#21CC66",600:"#1DB45A"},"dark"===e&&{main:"#1DB45A"}),"light"===e&&{main:"#1AA251"}),{},{700:"#1AA251",800:"#178D46",900:"#0F5C2E"}),warning:{50:"#FFF9EB",100:"#FFF3C1",200:"#FFECA1",300:"#FFDC48",400:"#F4C000",500:"#DEA500",main:"#DEA500",600:"#D18E00",700:"#AB6800",800:"#8C5800",900:"#5A3600"}}),shape:{borderRadius:10},spacing:10,typography:{fontFamily:['"IBM Plex Sans"'].concat(ae).join(","),fontFamilyCode:["Consolas","Menlo","Monaco","Andale Mono","Ubuntu Mono","monospace"].join(","),fontFamilyTagline:['"PlusJakartaSans-ExtraBold"'].concat(ae).join(","),fontFamilySystem:ae.join(","),fontWeightExtraBold:800,h1:Object(m.a)({fontFamily:['"PlusJakartaSans-ExtraBold"'].concat(ae).join(","),fontSize:"clamp(2.625rem, 1.2857rem + 3.5714vw, 4rem)",fontWeight:800,lineHeight:78/70},"light"===e&&{color:ee[900]}),h2:{fontFamily:['"PlusJakartaSans-ExtraBold"'].concat(ae).join(","),fontSize:"clamp(1.5rem, 0.9643rem + 1.4286vw, 2.25rem)",fontWeight:800,lineHeight:44/36,color:"dark"===e?te[100]:ee[700]},h3:{fontFamily:['"PlusJakartaSans-Bold"'].concat(ae).join(","),fontSize:Z.typography.pxToRem(36),lineHeight:44/36,letterSpacing:.2},h4:{fontFamily:['"PlusJakartaSans-Bold"'].concat(ae).join(","),fontSize:Z.typography.pxToRem(28),lineHeight:1.5,letterSpacing:.2},h5:{fontFamily:['"PlusJakartaSans-Bold"'].concat(ae).join(","),fontSize:Z.typography.pxToRem(24),lineHeight:1.5,letterSpacing:.1,color:"dark"===e?$[300]:$.main},h6:{fontSize:Z.typography.pxToRem(20),lineHeight:1.5},button:{textTransform:"initial",fontWeight:700,letterSpacing:0},subtitle1:{fontSize:Z.typography.pxToRem(18),lineHeight:24/18,letterSpacing:0,fontWeight:500},body1:{fontSize:Z.typography.pxToRem(16),lineHeight:1.5,letterSpacing:0},body2:{fontSize:Z.typography.pxToRem(14),lineHeight:1.5,letterSpacing:0},caption:{display:"inline-block",fontSize:Z.typography.pxToRem(12),lineHeight:1.5,letterSpacing:0,fontWeight:700}}}};function ne(e){return{components:{MuiButtonBase:{defaultProps:{disableTouchRipple:!0}},MuiButton:{defaultProps:{disableElevation:!0},styleOverrides:{sizeLarge:Object(m.a)(Object(m.a)({padding:"0.875rem 1rem"},e.typography.body1),{},{lineHeight:21/16,fontWeight:700}),sizeSmall:Object(U.a)({padding:e.spacing(.5,0)},e.breakpoints.up("md"),{padding:e.spacing(.5,1)}),containedPrimary:{backgroundColor:e.palette.primary[500],color:"#fff"}},variants:[{props:{variant:"code"},style:{color:"dark"===e.palette.mode?e.palette.grey[400]:e.palette.grey[800],border:"1px solid",borderColor:"dark"===e.palette.mode?e.palette.primaryDark[400]:e.palette.grey[300],backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[50],fontFamily:e.typography.fontFamilyCode,fontWeight:400,fontSize:Z.typography.pxToRem(13),lineHeight:1.5,letterSpacing:0,WebkitFontSmoothing:"subpixel-antialiased","&:hover, &.Mui-focusVisible":{borderColor:e.palette.primary.main,backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.primary[50],"& .MuiButton-endIcon":{color:"dark"===e.palette.mode?e.palette.primary[300]:e.palette.primary.main}},"& .MuiButton-startIcon":{color:e.palette.grey[400]},"& .MuiButton-endIcon":{display:"inline-block",position:"absolute",right:0,marginRight:10,color:"dark"===e.palette.mode?e.palette.grey[400]:e.palette.grey[700]}}},{props:{variant:"link"},style:{fontSize:e.typography.pxToRem(14),fontWeight:700,color:"dark"===e.palette.mode?e.palette.primary[300]:e.palette.primary[600],mb:1,"& svg":{ml:-.5}}}]},MuiIconButton:{variants:[{props:{color:"primary"},style:{height:34,width:34,border:"1px solid ".concat("dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[200]),borderRadius:e.shape.borderRadius,color:"dark"===e.palette.mode?e.palette.primary[300]:e.palette.primary[500],"&:hover":{borderColor:"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.grey[300],background:"dark"===e.palette.mode?Object(q.a)(e.palette.primaryDark[700],.4):e.palette.grey[50]}}}]},MuiMenu:{styleOverrides:{paper:{mt:.5,minWidth:160,elevation:0,color:e.palette.text.secondary,backgroundImage:"none",bgColor:"dark"===e.palette.mode?e.palette.primaryDark[900]:e.palette.background.paper,border:"1px solid ".concat("dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.grey[200]),"& .MuiMenuItem-root":{fontSize:e.typography.pxToRem(14),fontWeight:500,"&:hover":{backgroundColor:"dark"===e.palette.mode?Object(q.a)(e.palette.primaryDark[700],.4):e.palette.grey[50]},"&:focus":{backgroundColor:"dark"===e.palette.mode?Object(q.a)(e.palette.primaryDark[700],.4):e.palette.grey[50]},"&.Mui-selected":{fontWeight:500,color:"dark"===e.palette.mode?e.palette.primary[300]:e.palette.primary[600],backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:Object(q.a)(e.palette.primary[100],.6)}}}}},MuiPopover:{styleOverrides:{paper:{boxShadow:"0px 4px 20px ".concat("dark"===e.palette.mode?"rgba(0, 0, 0, 0.5)":"rgba(170, 180, 190, 0.3)")}}},MuiContainer:{styleOverrides:{root:Object(U.a)({},e.breakpoints.up("md"),{paddingLeft:e.spacing(2),paddingRight:e.spacing(2)})}},MuiDivider:{styleOverrides:{root:{borderColor:"dark"===e.palette.mode?Object(q.a)(e.palette.primary[100],.08):e.palette.grey[100]}}},MuiLink:{defaultProps:{underline:"none"},styleOverrides:{root:{color:"dark"===e.palette.mode?e.palette.primary[300]:e.palette.primary[600],fontWeight:700,display:"inline-flex",alignItems:"center","&:hover":{color:"dark"===e.palette.mode?e.palette.primary[200]:e.palette.primary[700]},"&.MuiTypography-body1 > svg":{marginTop:2},"& svg:last-child":{marginLeft:2}}}},MuiChip:{styleOverrides:{root:{fontWeight:500},outlined:{color:"dark"===e.palette.mode?"#fff":e.palette.grey[900],backgroundColor:"transparent",borderColor:"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.grey[300]},filled:{border:"1px solid transparent",color:"dark"===e.palette.mode?"#fff":e.palette.primary[800],backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.primary[100],"&:hover":{backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.primary[200]}},deleteIcon:{color:"dark"===e.palette.mode?"#fff":e.palette.primary[700],"&:hover":{color:"dark"===e.palette.mode?e.palette.grey[100]:e.palette.primary[900]}}}},MuiList:{styleOverrides:{root:{padding:0}}},MuiListItemButton:{styleOverrides:{root:{padding:"8px",textTransform:"none",fontWeight:500,fontSize:e.typography.pxToRem(14),color:"dark"===e.palette.mode?e.palette.grey[300]:e.palette.grey[700],borderRadius:0,"&:hover":{backgroundColor:"dark"===e.palette.mode?Object(q.a)(e.palette.primaryDark[700],.4):e.palette.grey[50]},"&.Mui-selected":{color:"dark"===e.palette.mode?"#fff":e.palette.primary[500],borderRadius:10,border:"1px solid",borderColor:"dark"===e.palette.mode?"".concat(e.palette.primary[700]," !important"):"".concat(e.palette.primary[500]," !important"),backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.primary[50],"&:hover":{backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.primary[100]}}}}},MuiSelect:{defaultProps:{IconComponent:K.a},styleOverrides:{iconFilled:{top:"calc(50% - .25em)"}}},MuiTab:{defaultProps:{disableTouchRipple:!0}},MuiPaper:{styleOverrides:{root:{backgroundImage:"none",backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[900]:"#fff","&[href]":{textDecorationLine:"none"}},outlined:Object(m.a)(Object(m.a)({display:"block",borderColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.grey[200]},"dark"===e.palette.mode&&{backgroundColor:e.palette.primaryDark[700]}),{},{"a&, button&":{"&:hover":{boxShadow:"0px 4px 20px ".concat("dark"===e.palette.mode?"rgba(0, 0, 0, 0.5)":"rgba(170, 180, 190, 0.3)")}}})}},MuiTableCell:{styleOverrides:{root:{padding:e.spacing(1,2),borderColor:e.palette.divider},head:{color:e.palette.text.primary,fontWeight:700},body:{color:e.palette.text.secondary}}},MuiToggleButtonGroup:{styleOverrides:{root:{backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[900]:"#fff"}}},MuiToggleButton:{styleOverrides:{root:{textTransform:"none",fontWeight:500,color:"dark"===e.palette.mode?e.palette.grey[300]:e.palette.grey[700],borderColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.grey[200],"&.Mui-selected":{color:"dark"===e.palette.mode?"#fff":e.palette.primary[500],borderColor:"dark"===e.palette.mode?"".concat(e.palette.primary[700]," !important"):"".concat(e.palette.primary[500]," !important"),backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.primary[50],"&:hover":{backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.primary[100]}}}}},MuiTooltip:{styleOverrides:{tooltip:{padding:"5px 9px"}}},MuiSwitch:{styleOverrides:{root:{width:32,height:20,padding:0,"& .MuiSwitch-switchBase":{"&.Mui-checked":{transform:"translateX(11px)",color:"#fff"}}},switchBase:{height:20,width:20,padding:0,color:"#fff","&.Mui-checked + .MuiSwitch-track":{opacity:1}},track:{opacity:1,borderRadius:32,backgroundColor:"dark"===e.palette.mode?e.palette.grey[800]:e.palette.grey[400]},thumb:{flexShrink:0,width:"14px",height:"14px"}}},MuiPaginationItem:{styleOverrides:{root:{textTransform:"none",fontWeight:700,color:"dark"===e.palette.mode?e.palette.grey[300]:e.palette.grey[700],borderColor:"dark"===e.palette.mode?e.palette.primaryDark[500]:e.palette.grey[200],"&.Mui-selected":{color:"dark"===e.palette.mode?"#fff":e.palette.primary[500],borderColor:"dark"===e.palette.mode?"".concat(e.palette.primary[700]," !important"):"".concat(e.palette.primary[500]," !important"),backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[700]:e.palette.primary[50],"&:hover":{backgroundColor:"dark"===e.palette.mode?e.palette.primaryDark[600]:e.palette.primary[100]}}}}},MuiCssBaseline:{defaultProps:{enableColorScheme:!0}}}}}var ie=Object(Q.a)(oe("dark")),le=(Object(X.a)(ie,ne(ie)),Object(r.createContext)({mode:"light",setMode:function(e){}})),ce=a(60),de=a.n(ce);var pe=function(e){var t=e.onClose,a=e.refreshTickers,o=Object(r.useContext)(le).mode,n=Object(r.useState)([]),i=Object(l.a)(n,2),c=i[0],d=i[1],p=Object(r.useState)(""),s=Object(l.a)(p,2),u=s[0],h=s[1],y=Object(r.useState)(""),g=Object(l.a)(y,2),f=g[0],j=g[1],k=Object(r.useState)(!1),O=Object(l.a)(k,2),x=O[0],v=O[1];return console.log(c),Object(r.useEffect)((function(){(function(){return G.apply(this,arguments)})().then((function(e){d(e)})).catch((function(e){d([{symbol:"",companyName:"",sector:""}]),console.error(e)}))}),[]),Object(b.jsx)(w.a,{open:!0,onClose:t,"aria-labelledby":"Add Ticker","aria-describedby":"Add a ticker",children:Object(b.jsx)("form",{className:de.a.layout,style:{backgroundColor:re(o)},onSubmit:function(e){e.preventDefault(),u?!function(e){var t,a=Y(),r=Object(L.a)(a);try{for(r.s();!(t=r.n()).done;)if(t.value.symbol===e)return!1}catch(o){r.e(o)}finally{r.f()}return a.push({symbol:e,path:"/"+e}),localStorage.setItem("tickers",JSON.stringify(a)),!0}(u)?(j("Unable to add ticker symbol ".concat(u,".")),v(!0)):(a(),t()):(j("A ticker symbol must be provided."),v(!0))},children:Object(b.jsxs)(T.a,{className:de.a.controlLayout,fullWidth:!0,children:[Object(b.jsx)("span",{className:de.a.closeButton,children:Object(b.jsx)(E.a,{alt:"Close",onClick:t,fontSize:"medium"})}),Object(b.jsx)("div",{className:de.a.subredditInput,children:Object(b.jsx)(N.a,{freeSolo:!0,disablePortal:!0,fullWidth:!0,id:"ticker-symbol",options:c,getOptionLabel:function(e){return R()(e)?"".concat(e.symbol," | ").concat(e.companyName):e},inputValue:u,onInputChange:function(e,t){if(j(""),v(!1),t){var a=t.split("|")[0].trim();h(a)}else h("")},renderInput:function(e){return Object(b.jsx)(_.a,Object(m.a)(Object(m.a)({},e),{},{error:x,helperText:f,label:"Enter a ticker symbol",variant:"outlined",fullWidth:!0}))}})}),Object(b.jsx)("div",{className:de.a.addButton,children:Object(b.jsx)(A.a,{type:"submit",variant:"contained",fullWidth:!0,children:"Add"})})]})})})},se=a(174),ue=a.n(se),me=a(454),be=a(448),he=a(442),ye=a(455),ge=a(447),fe=a(453),je=a(176),ke=a.n(je),Oe=a(175),xe=a.n(Oe),ve=a(79),Ce=a.n(ve);var Fe=function(e){var t=e.path,a=e.navData,o=e.onCloseNav,n=e.onClickAddTickerModal,i=Object(r.useContext)(le),l=i.mode,c=i.setMode,p=Object(d.f)(),s=a.map((function(e,a){return Object(b.jsx)(be.a,{children:Object(b.jsx)(he.a,{selected:t===e.path,onClick:function(){return p.push(e.path)},children:Object(b.jsx)(ge.a,{primary:e.symbol})})},a)}));function m(){c()}return Object(b.jsxs)("div",{className:Ce.a.sidebar,children:[Object(b.jsx)("span",{children:Object(b.jsx)(E.a,{alt:"Close",onClick:o,fontSize:"large"})}),Object(b.jsx)(u.a,{}),Object(b.jsx)("nav",{className:Ce.a.nav,"aria-label":"navigation sidebar of ticker symbols",children:Object(b.jsxs)(me.a,{children:[Object(b.jsx)(be.a,{index:"Home",children:Object(b.jsxs)(he.a,{selected:"/"===t,onClick:function(){return p.push("/")},children:[Object(b.jsx)(ye.a,{children:Object(b.jsx)(ue.a,{})}),Object(b.jsx)(ge.a,{primary:"Home"})]})}),s]})}),Object(b.jsx)(u.a,{}),Object(b.jsxs)("div",{className:Ce.a.bottomNav,children:[Object(b.jsx)("div",{className:Ce.a.buttons,children:Object(b.jsx)(A.a,{variant:"outlined",onClick:n,fullWidth:!0,children:"Add Ticker"})}),Object(b.jsxs)("div",{children:["dark"===l&&Object(b.jsx)(fe.a,{onClick:m,children:Object(b.jsx)(xe.a,{})}),"light"===l&&Object(b.jsx)(fe.a,{onClick:m,children:Object(b.jsx)(ke.a,{})})]})]})]})};var De=function(e){var t=e.match.url,a=Object(r.useState)([]),o=Object(l.a)(a,2),n=o[0],i=o[1],c=Object(r.useState)(!0),d=Object(l.a)(c,2),p=d[0],m=d[1],h=Object(r.useState)(!1),y=Object(l.a)(h,2),g=y[0],f=y[1],j=Object(r.useCallback)((function(){var e=Y().sort((function(e,t){var a=e.symbol.toLowerCase(),r=t.symbol.toLowerCase();return a<r?-1:a>r?1:0}));i(e)}),[]),k=Object(r.useCallback)((function(){m(!p)}),[p,m]),O=Object(r.useCallback)((function(){f(!g)}),[g]);return Object(r.useEffect)((function(){j()}),[j]),Object(b.jsxs)("main",{className:S.a.container,children:[g&&Object(b.jsx)(pe,{onClose:O,refreshTickers:j}),p&&Object(b.jsx)(Fe,{navData:n,path:t,onCloseNav:k,onClickAddTickerModal:O}),!p&&Object(b.jsx)(s.a,{alt:"menu",onClick:k,fontSize:"large"}),p&&Object(b.jsx)(u.a,{orientation:"vertical"}),Object(b.jsx)("div",{className:S.a.view,children:Object(b.jsx)(D,{})})]})};var Me=function(){return Object(b.jsx)(o.a.Fragment,{children:Object(b.jsx)(c.a,{children:Object(b.jsx)(d.c,{children:Object(b.jsx)(d.a,{path:"*",component:De})})})})},Se=a(450),we=a(443);function _e(e){var t=e.children,a=Object(r.useContext)(le).mode,o=r.useMemo((function(){var e=oe(a),t=Object(Q.a)(e);return t=Object(X.a)(t,ne(t))}),[a]);return Object(b.jsxs)(Se.a,{theme:o,children:[Object(b.jsx)(we.a,{}),t]})}var Ae=function(){var e=Object(r.useState)(localStorage.getItem("theme")||"light"),t=Object(l.a)(e,2),a=t[0],o=t[1];return Object(b.jsx)(r.Fragment,{children:Object(b.jsx)(le.Provider,{value:{mode:a,setMode:function(){o((function(e){var t,a="light"===e?"dark":"light";return t=a,localStorage.setItem("theme",t),a}))}},children:Object(b.jsx)(_e,{children:Object(b.jsx)(Me,{})})})})},Be=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,458)).then((function(t){var a=t.getCLS,r=t.getFID,o=t.getFCP,n=t.getLCP,i=t.getTTFB;a(e),r(e),o(e),n(e),i(e)}))};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(Ae,{})}),document.getElementById("root")),Be()},60:function(e,t,a){e.exports={layout:"AddTickerModal_layout__14s6E",controlLayout:"AddTickerModal_controlLayout__1GGem",subredditInput:"AddTickerModal_subredditInput__gM0o2",addButton:"AddTickerModal_addButton__YlN49",closeButton:"AddTickerModal_closeButton__2DBkI"}},79:function(e,t,a){e.exports={sidebar:"Navbar_sidebar__mwQyv",buttons:"Navbar_buttons__3W0vS",buttonLayout:"Navbar_buttonLayout__2VQ-d",selected:"Navbar_selected__2aHYN",nav:"Navbar_nav__3cHYR",bottomNav:"Navbar_bottomNav__3-qLA"}}},[[392,1,2]]]);
//# sourceMappingURL=main.621811ed.chunk.js.map