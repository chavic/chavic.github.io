(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(t,e,r){var content=r(219);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("56b15182",content,!0,{sourceMap:!1})},143:function(t,e,r){var content=r(221);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("1c32e888",content,!0,{sourceMap:!1})},144:function(t,e,r){var content=r(223);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("32862ed8",content,!0,{sourceMap:!1})},145:function(t,e,r){var content=r(225);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(34).default)("1b8b979f",content,!0,{sourceMap:!1})},157:function(t,e,r){"use strict";r.r(e);r(41);var n=r(0).a.extend({data:function(){return{index:0,open:!1,isMobile:!1}},mounted:function(){this.shouldOpen(),window.addEventListener("resize",this.shouldOpen)},destroyed:function(){window.removeEventListener("resize",this.shouldOpen)},methods:{home:function(){this.$router.push("/")},swichIndex:function(t){this.index=t},toggleMenu:function(){var t=this;this.isMobile&&setTimeout((function(){t.open=!t.open}),500)},shouldOpen:function(){this.isMobile=document.body.clientWidth<1024,this.isMobile?this.isMobile&&(this.open=!1):this.open=!0}}}),o=(r(220),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"w-full fixed z-50 lg:pt-2 flex flex-col lg:flex-row text-2xl lg:text-lg font-bold text-dark-primary bg-white"},[r("div",{staticClass:"w-full lg:w-24 h-16 flex"},[r("div",{staticClass:"w-24 md:w-40 h-full flex",on:{click:function(e){return t.home()}}},[r("Logo",{staticClass:"m-auto"})],1),t._v(" "),r("div",{staticClass:"w-8 h-full lg:hidden flex ml-auto mr-5",on:{click:function(e){return t.toggleMenu()}}},[r("button",{staticClass:"my-auto focus:outline-none",attrs:{"aria-label":"Navigation Button"}},[r("svg",{attrs:{width:"32",height:"25",viewBox:"0 0 32 25",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("rect",{class:[{"turn-left":t.open},{"turn-left-reverse":!t.open}],attrs:{width:"32",height:"3",rx:"1",fill:"#181818"}}),t._v(" "),t.open?t._e():r("rect",{attrs:{y:"11",width:"32",height:"3",rx:"1",fill:"#181818"}}),t._v(" "),r("rect",{class:[{"turn-right":t.open},{"turn-right-reverse":!t.open}],attrs:{y:"22",width:"32",height:"3",rx:"1",fill:"#181818"}})])])])]),t._v(" "),t.open?r("div",{staticClass:"w-full min-h-screen h-screen lg:h-auto lg:min-h-full flex flex-col lg:flex-row flex-grow-0 bg-white"},[r("ul",{staticClass:"mt-24 lg:my-auto lg:ml-auto flex flex-col lg:flex-row lg:space-x-8 items-center"},[r("nuxt-link",{attrs:{"aria-label":t.about,to:"/about"}},[t._v("about ")]),t._v(" "),r("Bar",{attrs:{shown:3==t.index}})],1),t._v(" "),r("div",{staticClass:"lg:hidden w-2/3 ml-12 mt-auto text-lg text-dark-primary"},[t._m(0),t._v(" "),r("button",{staticClass:"w-32 m-auto text-lg font-bold action-btn",on:{click:function(e){return t.toggleMenu()}}},[r("a",{attrs:{"aria-label":"call me",href:"tel:+260761799501"}},[t._v(" Call Me ")])]),t._v(" "),r("span",{staticStyle:{margin:"12px 48px",opacity:"60%",display:"block"}},[t._v("or")]),t._v(" "),r("button",{staticClass:"w-32 m-auto text-lg font-bold action-btn",on:{click:function(e){return t.toggleMenu()}}},[r("nuxt-link",{attrs:{"aria-label":"email me",to:"/email"}},[t._v(" Email Me ")])],1)]),t._v(" "),r("SocialLinks",{staticClass:"mt-8 mb-24 mx-auto lg:hidden"})],1):t._e(),t._v(" "),r("div",{staticClass:"hidden lg:inline mx-8 my-auto"},[r("button",{staticClass:"w-32 m-auto items-center justify-center text-lg font-bold action-btn",attrs:{id:"email-me-btn"},on:{click:function(e){return t.toggleMenu()}}},[r("nuxt-link",{attrs:{"aria-label":"email me",to:"/#email-me"}},[t._v("\n        Email Me\n      ")])],1)])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticStyle:{"margin-bottom":"24px",opacity:"60%",display:"block"}},[t._v("\n        Have a job or intersted\n        "),r("br"),t._v("\n        in talking to me?\n      ")])}],!1,null,"6b06357c",null);e.default=component.exports;installComponents(component,{Logo:r(234).default,Bar:r(173).default,SocialLinks:r(172).default,Nav:r(157).default})},158:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("footer",{staticClass:"w-full h-5 mt-2 lg:h-20 xl:h-36 bg-dark-primary"})}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(158).default})},167:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({data:function(){return{percent:0,loading:!1}},methods:{start:function(){this.loading=!0},finish:function(){this.loading=!1},erro:function(){this.$router.push("error")},increase:function(t){this.percent=t}}}),o=r(7),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loading?r("div",{staticClass:"w-full h-screen flex absolute z-50 bg-white"},[r("div",{staticClass:"relative flex m-auto"},[r("div",[r("svg",{staticClass:"animate-ping",attrs:{width:"300",height:"300"}})]),t._v(" "),r("div",{staticClass:"absolute animate-bounce",staticStyle:{top:"126px",left:"119px"}},[r("svg",{staticStyle:{transform:"scale(1.5)"},attrs:{width:"62",height:"48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{staticClass:"w-full",attrs:{d:"M21.6135 42.1142L22.3786 42.758L22.3787 42.758L22.3788 42.7578L22.3793 42.7572L22.3813 42.7548L22.3893 42.7453L22.42 42.7089L22.5307 42.5775C22.623 42.4682 22.7471 42.3212 22.8752 42.1701C23.0035 42.0187 23.1348 41.8644 23.2414 41.7402C23.2949 41.6779 23.341 41.6246 23.3768 41.5835C23.3996 41.5574 23.4145 41.5407 23.4229 41.5313C23.4295 41.524 23.4322 41.5211 23.4316 41.5216L23.4724 41.4789L23.5079 41.4316L27.3064 36.3684L27.3201 36.3501L27.333 36.3312C27.7 35.7925 28.0252 35.0921 27.8494 34.3549C27.6608 33.564 27.011 33.15 26.4076 32.9414C26.1067 32.8193 25.7769 32.7383 25.4314 32.6865C25.0555 32.6302 24.6716 32.62 24.3054 32.6968L24.1471 32.73L24.0073 32.8114C23.6141 33.0404 23.2012 33.291 22.7686 33.563C22.2985 33.839 21.8659 34.1896 21.4692 34.6055L21.4608 34.6144L21.4527 34.6234C21.0257 35.0935 20.6885 35.458 20.4391 35.7195C20.3357 35.8279 20.2499 35.916 20.1807 35.9851C20.0133 36.0168 19.895 36.0799 19.8655 36.0956C19.8639 36.0965 19.8626 36.0972 19.8615 36.0978C19.737 36.163 19.6167 36.2525 19.5283 36.3216C19.4299 36.3951 19.3337 36.4876 19.2691 36.5506C19.1792 36.6384 19.0694 36.7507 18.9422 36.884C18.6888 37.1498 18.3472 37.5194 17.9199 37.9898C17.2135 38.73 16.465 39.4493 15.6741 40.1477C14.9159 40.8102 14.1145 41.4737 13.2695 42.1382L13.2571 42.148L13.245 42.1581C12.9796 42.3807 12.8537 42.3608 12.8053 42.3506C12.805 42.3505 12.8046 42.3505 12.8042 42.3504C12.7997 42.3498 12.7885 42.3481 12.7603 42.3185C12.7202 42.2764 12.6482 42.1771 12.5731 41.9723L12.561 41.9393L12.5466 41.9072C12.2143 41.1667 11.9026 40.4266 11.6116 39.687C11.372 38.9287 11.1939 38.1974 11.0753 37.4926L11.0753 37.4926L11.0737 37.4838C10.7495 35.6566 10.7294 33.8322 11.0129 32.0061L11.0134 32.0027C11.3116 30.0377 11.6308 28.1178 11.9712 26.243C13.0987 21.087 15.2211 16.4165 18.3409 12.2221C18.3658 12.1926 18.3906 12.1631 18.4154 12.1336C18.407 12.1671 18.3986 12.2006 18.3902 12.2341L18.3844 12.2572L18.3797 12.2806C18.2179 13.0862 17.9952 13.8943 17.7107 14.705C17.4945 15.2945 17.3333 15.7744 17.2364 16.1301C17.1144 16.5781 17.0828 17.077 17.2669 17.5596L17.2813 17.5972L17.2986 17.6335C17.5115 18.08 17.8872 18.3701 18.2519 18.5614L18.2788 18.5754L18.3064 18.5878C18.6246 18.7308 19.0679 18.9166 19.6299 19.1432L19.6664 19.1579L19.7039 19.1697L20.3423 19.3705C21.0843 19.6129 21.9388 19.7481 22.6572 19.3715L22.677 19.3611L22.6963 19.3499C23.4193 18.9287 23.8366 18.0991 24.1099 17.2415C24.4933 16.0802 24.8767 14.9412 25.2599 13.8247C25.6951 12.6375 26.0872 11.4497 26.4359 10.2612L26.4432 10.2365L26.4491 10.2115C26.6917 9.19413 26.7243 8.1976 26.5249 7.2349C26.3313 6.02066 25.5397 5.09288 24.4136 4.41571C24.3775 4.38957 24.348 4.3662 24.3242 4.34584L24.26 4.24487L24.1313 4.04234L24.1228 4.02897L24.1139 4.01588C23.128 2.5686 21.8159 1.64882 20.19 1.36835C18.6294 1.04633 17.1583 1.38412 15.8388 2.33186C15.4069 2.6042 14.9946 2.87746 14.6023 3.15168C14.2518 3.39675 13.8804 3.62234 13.4877 3.82823L13.4409 3.85275L13.397 3.88207C12.9663 4.16942 12.4916 4.43954 11.9712 4.69138L11.9568 4.69839L11.9425 4.70585C11.3766 5.00255 10.8356 5.34804 10.3197 5.74148L10.2888 5.765L10.2599 5.79084C9.04624 6.87493 7.96673 8.07758 7.02239 9.39787L7.01573 9.40718L7.00929 9.41664C6.0951 10.7587 5.38775 12.2193 4.88691 13.7948C4.28355 15.6928 3.70179 17.6132 3.14162 19.5559C2.57944 21.4606 2.06055 23.3878 1.58494 25.3373L1.58315 25.3446L1.58147 25.352C1.08859 27.5133 0.908478 29.6793 1.04332 31.8473L1.04401 31.8585L1.04496 31.8697C1.22081 33.944 1.55041 36.017 2.03323 38.0881L2.03781 38.1077L2.04317 38.1272C2.53716 39.9166 3.21673 41.5156 4.0905 42.9141L4.10098 42.9308L4.1121 42.9472C5.1268 44.4368 6.70998 45.4901 8.74252 46.1682L8.75383 46.172L8.76523 46.1755C11.3655 46.9746 13.7994 47.2046 16.0458 46.814C16.7433 46.7049 17.4841 46.3603 18.1448 45.9819C18.8291 45.5901 19.5183 45.1086 20.1244 44.65C20.733 44.1896 21.2728 43.741 21.6598 43.4083C21.8537 43.2415 22.0103 43.103 22.1191 43.0055C22.1736 42.9567 22.2161 42.9181 22.2455 42.8914L22.2795 42.8602L22.2889 42.8516L22.2915 42.8492L22.2924 42.8484L22.2927 42.8481C22.2928 42.848 22.2929 42.8479 21.6135 42.1142ZM21.6135 42.1142L22.3786 42.758L22.3385 42.8056L22.2929 42.8479L21.6135 42.1142ZM48.7077 7.7727C44.6348 13.3944 41.2001 19.4734 38.403 26.008L38.1518 23.3209L37.8301 19.8797C37.83 19.8793 37.83 19.879 37.83 19.8786C37.6493 17.909 37.4687 15.9553 37.2881 14.0176H37.5123V13.0176V5.59151V5.56984L37.5114 5.5482C37.4888 5.02634 37.4423 4.56574 37.3618 4.18589C37.293 3.86122 37.1692 3.43553 36.8822 3.11382C36.6233 2.80462 36.2682 2.60894 35.9495 2.47528C35.6012 2.32919 35.1852 2.21215 34.7217 2.11495L34.7052 2.11149L34.6886 2.10859C34.3887 2.05617 34.0756 2.02988 33.7514 2.02652C33.3837 1.97879 33.0065 1.98234 32.6237 2.02956C32.176 2.05454 31.7694 2.10437 31.4235 2.1914C31.0961 2.27381 30.6847 2.42219 30.3806 2.74106L30.3426 2.78089L30.3092 2.82464C30.0727 3.13467 29.9647 3.55151 29.8992 3.87232C29.8236 4.24235 29.7659 4.70258 29.7214 5.23883L29.7194 5.26246L29.7186 5.28617C29.6315 7.75184 29.675 10.2175 29.8492 12.683C30.0213 15.1187 30.2148 17.5769 30.4299 20.0574L30.4303 20.0615C30.7772 23.8809 31.3411 27.6113 32.1224 31.2524L32.1223 31.2524L32.1254 31.2662C32.9446 34.8377 33.9141 38.3862 35.0339 41.9119C35.1778 42.4895 35.4563 43.0397 35.9581 43.4186C36.4655 43.8017 37.067 43.9087 37.6569 43.8565C38.1047 43.8528 38.5504 43.7987 38.9926 43.6957L39.0449 43.6835L39.0956 43.6657C39.4441 43.544 39.7908 43.4428 40.1361 43.3617C40.9925 43.1896 41.7818 42.7704 42.1792 41.937C42.426 41.4195 42.638 40.8203 42.8209 40.1492L42.8266 40.1281L42.8315 40.1067C43.2151 38.408 43.6201 36.7093 44.0463 35.0105C44.5086 33.3373 45.0549 31.6628 45.6854 29.987C46.5787 27.7574 47.5357 25.5499 48.5564 23.3647C49.5806 21.1721 50.6474 19.002 51.7568 16.8542C52.9489 14.5776 54.2047 12.3458 55.5242 10.1587L55.5243 10.1587L55.5288 10.151C56.7955 8.00871 58.3658 6.1001 60.2428 4.42303C60.4961 4.24415 60.7506 3.98948 60.8927 3.6317C61.0492 3.2379 61.021 2.84293 60.8953 2.50255C60.6494 1.70453 59.9414 1.35981 59.3129 1.23667C58.4149 1.03963 57.5127 0.965133 56.6087 1.01502L56.6057 1.01519C55.5598 1.07612 54.6375 1.53617 53.8542 2.29739C52.8973 3.16457 51.983 4.05504 51.1115 4.96887C50.2718 5.8494 49.4766 6.77594 48.7259 7.7483L48.7166 7.76036L48.7077 7.7727Z",stroke:"#181818","stroke-width":"2"}})])])])]):t._e()}),[],!1,null,null,null);e.default=component.exports},168:function(t,e,r){"use strict";r(218);var n=r(7),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("Nav"),t._v(" "),r("Nuxt"),t._v(" "),r("Footer")],1)}),[],!1,null,null,null);e.a=component.exports;installComponents(component,{Nav:r(157).default,Footer:r(158).default})},169:function(t,e,r){"use strict";r(224);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("Nuxt")],1)}),[],!1,null,null,null);e.a=component.exports},172:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{isCols:{type:Boolean,default:!1}}}),o=r(7),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex space-x-6",class:{"flex-col space-y-8":t.isCols}},[r("a",{attrs:{"aria-label":"github",href:"https://github.com/chavic"}},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M21 5.958C21.009 6.565 20.933 7.326 20.866 7.881C20.8448 8.06435 20.8114 8.24608 20.766 8.425C21.622 10.01 22 11.917 22 14C22 16.468 20.813 18.501 18.964 19.887C17.132 21.26 14.66 22 12 22C9.34 22 6.868 21.26 5.036 19.887C3.187 18.501 2 16.468 2 14C2 11.917 2.377 10.01 3.235 8.425C3.18965 8.24608 3.15625 8.06435 3.135 7.881C3.066 7.326 2.99 6.565 3 5.958C3.01 5.275 3.1 4.592 3.199 3.914C3.245 3.6 3.317 3.305 3.658 3.119C4.006 2.929 4.372 2.999 4.733 3.102C5.951 3.447 7.093 3.932 8.167 4.512C9.3 4.173 10.578 4 12 4C13.422 4 14.7 4.173 15.832 4.513C16.9211 3.9176 18.0728 3.44472 19.266 3.103C19.627 3 19.994 2.929 20.341 3.119C20.681 3.305 20.754 3.6 20.801 3.914C20.899 4.592 20.99 5.275 21 5.958ZM20 14C20 12.313 19.612 10 17.5 10C16.548 10 15.647 10.25 14.747 10.5C13.848 10.75 12.95 11 12 11C11.05 11 10.152 10.75 9.253 10.5C8.353 10.25 7.453 10 6.5 10C4.394 10 4 12.32 4 14C4 15.764 4.827 17.231 6.236 18.287C7.66 19.356 9.69 20 12 20C14.31 20 16.339 19.355 17.764 18.287C19.173 17.23 20 15.764 20 14ZM10 14.5C10 15.88 9.328 17 8.5 17C7.672 17 7 15.88 7 14.5C7 13.12 7.672 12 8.5 12C9.328 12 10 13.12 10 14.5ZM15.5 17C16.328 17 17 15.88 17 14.5C17 13.12 16.328 12 15.5 12C14.672 12 14 13.12 14 14.5C14 15.88 14.672 17 15.5 17Z",fill:"#181818"}})])]),t._v(" "),r("a",{attrs:{"aria-label":"linkedIn",href:"https://zm.linkedin.com/in/victor-chabunda-a63126201"}},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M6 2C4.93913 2 3.92172 2.42143 3.17157 3.17157C2.42143 3.92172 2 4.93913 2 6V18C2 19.0609 2.42143 20.0783 3.17157 20.8284C3.92172 21.5786 4.93913 22 6 22H18C19.0609 22 20.0783 21.5786 20.8284 20.8284C21.5786 20.0783 22 19.0609 22 18V6C22 4.93913 21.5786 3.92172 20.8284 3.17157C20.0783 2.42143 19.0609 2 18 2H6ZM4 6C4 5.46957 4.21071 4.96086 4.58579 4.58579C4.96086 4.21071 5.46957 4 6 4H18C18.5304 4 19.0391 4.21071 19.4142 4.58579C19.7893 4.96086 20 5.46957 20 6V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V6ZM9 11C9 10.7348 8.89464 10.4804 8.70711 10.2929C8.51957 10.1054 8.26522 10 8 10C7.73478 10 7.48043 10.1054 7.29289 10.2929C7.10536 10.4804 7 10.7348 7 11V17C7 17.2652 7.10536 17.5196 7.29289 17.7071C7.48043 17.8946 7.73478 18 8 18C8.26522 18 8.51957 17.8946 8.70711 17.7071C8.89464 17.5196 9 17.2652 9 17V11ZM9.5 7.5C9.5 7.89782 9.34196 8.27936 9.06066 8.56066C8.77936 8.84196 8.39782 9 8 9C7.60218 9 7.22064 8.84196 6.93934 8.56066C6.65804 8.27936 6.5 7.89782 6.5 7.5C6.5 7.10218 6.65804 6.72064 6.93934 6.43934C7.22064 6.15804 7.60218 6 8 6C8.39782 6 8.77936 6.15804 9.06066 6.43934C9.34196 6.72064 9.5 7.10218 9.5 7.5ZM12 10C12.34 10 12.64 10.17 12.82 10.428C13.3354 10.1471 13.913 9.99995 14.5 10C16.66 10 18 11.926 18 13.571V17C18 17.2652 17.8946 17.5196 17.7071 17.7071C17.5196 17.8946 17.2652 18 17 18C16.7348 18 16.4804 17.8946 16.2929 17.7071C16.1054 17.5196 16 17.2652 16 17V13.57C16 12.802 15.34 11.999 14.5 11.999C13.976 11.999 13.397 12.284 13 12.962V17C13 17.2652 12.8946 17.5196 12.7071 17.7071C12.5196 17.8946 12.2652 18 12 18C11.7348 18 11.4804 17.8946 11.2929 17.7071C11.1054 17.5196 11 17.2652 11 17V11C11 10.7348 11.1054 10.4804 11.2929 10.2929C11.4804 10.1054 11.7348 10 12 10Z",fill:"#181818"}})])]),t._v(" "),r("a",{attrs:{"aria-label":"youtube",href:"https://www.youtube.com/channel/UCkTE-19iXihyhvApK4r7aBg"}},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.84499 4.77499C10.437 4.40799 13.563 4.40799 16.155 4.77499C18.51 5.10899 20.335 6.76099 20.683 8.54099C21.106 10.696 21.106 13.304 20.683 15.459C20.334 17.239 18.51 18.891 16.155 19.225C13.563 19.592 10.436 19.592 7.84499 19.225C5.48999 18.891 3.66599 17.239 3.31699 15.459C2.89399 13.304 2.89399 10.696 3.31699 8.54099C3.66599 6.76099 5.48999 5.10899 7.84499 4.77499ZM16.435 2.79499C13.658 2.40199 10.342 2.40199 7.56499 2.79499C4.54999 3.22199 1.89999 5.37299 1.35499 8.15699C0.881994 10.566 0.881994 13.434 1.35499 15.843C1.89999 18.627 4.54999 20.778 7.56499 21.205C10.342 21.598 13.658 21.598 16.435 21.205C19.45 20.778 22.1 18.627 22.645 15.843C23.118 13.434 23.118 10.566 22.645 8.15699C22.1 5.37299 19.45 3.22199 16.435 2.79499ZM10.555 7.16799C10.4044 7.06752 10.2293 7.00981 10.0485 7.00102C9.86768 6.99224 9.68786 7.03271 9.52823 7.11812C9.3686 7.20353 9.23515 7.33067 9.14212 7.48599C9.04909 7.6413 8.99997 7.81895 8.99999 7.99999V16C8.99997 16.181 9.04909 16.3587 9.14212 16.514C9.23515 16.6693 9.3686 16.7965 9.52823 16.8819C9.68786 16.9673 9.86768 17.0077 10.0485 16.999C10.2293 16.9902 10.4044 16.9325 10.555 16.832L16.555 12.832C16.692 12.7407 16.8042 12.617 16.8819 12.4718C16.9596 12.3267 17.0002 12.1646 17.0002 12C17.0002 11.8354 16.9596 11.6733 16.8819 11.5282C16.8042 11.383 16.692 11.2593 16.555 11.168L10.555 7.16799ZM14.197 12L11 14.132V9.86899L14.197 12Z",fill:"#181818"}})])]),t._v(" "),r("a",{attrs:{"aria-label":"twitter",href:"https://twitter.com/chabundavictor"}},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M14.8489 5.65801C14.3921 5.65782 13.9409 5.75906 13.5279 5.95442C13.115 6.14979 12.7506 6.4344 12.4609 6.78772C12.1713 7.14104 11.9638 7.55426 11.8533 7.99753C11.7428 8.44081 11.7321 8.90309 11.8219 9.35101C11.8529 9.5062 11.8465 9.66653 11.8035 9.8188C11.7604 9.97107 11.6817 10.1109 11.5741 10.2269C11.4664 10.3429 11.3327 10.4317 11.1841 10.4859C11.0354 10.5402 10.876 10.5584 10.7189 10.539C8.56867 10.2749 6.54166 9.39096 4.88494 7.99501C4.91594 8.59701 5.12494 9.23701 5.57794 9.90701L6.25694 10.911L5.14194 11.386L4.92694 11.478C5.08694 11.661 5.27894 11.848 5.49394 12.033C5.78135 12.279 6.08541 12.5049 6.40394 12.709L6.41494 12.716H6.41594L7.96394 13.655L6.34394 14.465C6.26394 14.505 6.18394 14.541 6.10394 14.573C6.45228 14.8625 6.83602 15.1064 7.24594 15.299L8.63594 15.956L7.47194 16.96C6.83694 17.508 6.19794 17.917 5.36894 18.133C6.64037 18.8102 8.05938 19.163 9.49994 19.16C14.3059 19.16 18.1759 15.325 18.1759 10.626V10.106L18.6009 9.80701C19.2649 9.34101 19.7339 8.71101 20.0699 7.99001H17.9099L17.6379 7.42001C17.3875 6.89267 16.9926 6.4472 16.4991 6.13532C16.0056 5.82343 15.4337 5.65792 14.8499 5.65801H14.8489ZM3.56894 12.958C3.47457 13.0661 3.40457 13.1932 3.36367 13.3307C3.32278 13.4682 3.31196 13.6129 3.33194 13.755C3.44494 14.556 3.92394 15.246 4.45394 15.773C4.59794 15.916 4.75194 16.053 4.91394 16.184L4.83894 16.204C4.35794 16.324 3.70894 16.349 2.62794 16.244C2.4238 16.224 2.21843 16.2672 2.03969 16.3678C1.86095 16.4685 1.71748 16.6216 1.62873 16.8065C1.53997 16.9915 1.51024 17.1992 1.54355 17.4016C1.57686 17.604 1.6716 17.7913 1.81494 17.938C2.81571 18.9609 4.01123 19.773 5.33096 20.3264C6.65069 20.8798 8.06789 21.1632 9.49894 21.16C15.2119 21.16 19.8979 16.724 20.1629 11.126C21.4529 10.043 22.0979 8.57601 22.4459 7.24301C22.4846 7.09506 22.4889 6.94021 22.4583 6.79036C22.4278 6.64051 22.3633 6.49967 22.2698 6.37865C22.1763 6.25763 22.0563 6.15967 21.9191 6.09229C21.7818 6.02492 21.6309 5.98992 21.4779 5.99001H19.1249C18.5494 5.09633 17.7083 4.40545 16.7198 4.01444C15.7314 3.62343 14.6453 3.55195 13.6141 3.81005C12.5829 4.06815 11.6585 4.64284 10.9708 5.45338C10.2831 6.26393 9.86664 7.26957 9.77994 8.32901C7.93659 7.84916 6.28727 6.80981 5.05894 5.35401C4.95016 5.22539 4.81065 5.12633 4.65336 5.06604C4.49607 5.00574 4.32609 4.98615 4.15921 5.0091C3.99233 5.03204 3.83395 5.09677 3.69876 5.19727C3.56358 5.29778 3.45598 5.43081 3.38594 5.58401C2.77994 6.90601 2.66394 8.43001 3.33994 9.98001L3.10594 10.08C2.88201 10.1754 2.70058 10.3492 2.59564 10.5689C2.49071 10.7885 2.46948 11.0388 2.53594 11.273C2.72194 11.925 3.13994 12.501 3.56794 12.958H3.56894Z",fill:"#181818"}})])]),t._v(" "),r("a",{attrs:{"aria-label":"instagram",href:"https://www.instagram.com/victorchabunda/"}},[r("svg",{attrs:{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M2 6C2 4.93913 2.42143 3.92172 3.17157 3.17157C3.92172 2.42143 4.93913 2 6 2H18C19.0609 2 20.0783 2.42143 20.8284 3.17157C21.5786 3.92172 22 4.93913 22 6V18C22 19.0609 21.5786 20.0783 20.8284 20.8284C20.0783 21.5786 19.0609 22 18 22H6C4.93913 22 3.92172 21.5786 3.17157 20.8284C2.42143 20.0783 2 19.0609 2 18V6ZM6 4C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V18C4 18.5304 4.21071 19.0391 4.58579 19.4142C4.96086 19.7893 5.46957 20 6 20H18C18.5304 20 19.0391 19.7893 19.4142 19.4142C19.7893 19.0391 20 18.5304 20 18V6C20 5.46957 19.7893 4.96086 19.4142 4.58579C19.0391 4.21071 18.5304 4 18 4H6ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9ZM7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12ZM17.5 8C17.8978 8 18.2794 7.84196 18.5607 7.56066C18.842 7.27936 19 6.89782 19 6.5C19 6.10218 18.842 5.72064 18.5607 5.43934C18.2794 5.15804 17.8978 5 17.5 5C17.1022 5 16.7206 5.15804 16.4393 5.43934C16.158 5.72064 16 6.10218 16 6.5C16 6.89782 16.158 7.27936 16.4393 7.56066C16.7206 7.84196 17.1022 8 17.5 8Z",fill:"#181818"}})])])])}),[],!1,null,null,null);e.default=component.exports},173:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({props:{shown:{type:Boolean,default:!1},color:{type:String,default:""}}}),o=(r(222),r(7)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.shown?r("div",{staticClass:"w-full h-1 bg-dark-primary animation-appear-grow",class:{color:t.color}}):t._e()}),[],!1,null,null,null);e.default=component.exports},181:function(t,e,r){r(182),t.exports=r(183)},218:function(t,e,r){"use strict";r(142)},219:function(t,e,r){var n=r(33)(!1);n.push([t.i,'html{font-family:"Quicksand",sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;scroll-behavior:smooth}*,:after,:before{box-sizing:border-box;margin:0;outline:none}.action-btn{height:43px;border:1px solid #181818;border-radius:12px}.action-btn:hover{color:#fff;background:#181818}',""]),t.exports=n},220:function(t,e,r){"use strict";r(143)},221:function(t,e,r){var n=r(33)(!1);n.push([t.i,".turn-left[data-v-6b06357c]{-webkit-animation-name:rotate-left-data-v-6b06357c;animation-name:rotate-left-data-v-6b06357c;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.turn-left[data-v-6b06357c],.turn-left-reverse[data-v-6b06357c]{-webkit-animation-duration:.3s;animation-duration:.3s}.turn-left-reverse[data-v-6b06357c]{-webkit-animation-name:rotate-left-reverse-data-v-6b06357c;animation-name:rotate-left-reverse-data-v-6b06357c}.turn-right[data-v-6b06357c]{-webkit-animation-name:rotate-right-data-v-6b06357c;animation-name:rotate-right-data-v-6b06357c;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.turn-right[data-v-6b06357c],.turn-right-reverse[data-v-6b06357c]{-webkit-animation-duration:.3s;animation-duration:.3s}.turn-right-reverse[data-v-6b06357c]{-webkit-animation-name:rotate-right-reverse-data-v-6b06357c;animation-name:rotate-right-reverse-data-v-6b06357c;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}@-webkit-keyframes rotate-left-data-v-6b06357c{0%{transform:rotate(0)}to{transform:rotate(45deg) translateX(2px)}}@keyframes rotate-left-data-v-6b06357c{0%{transform:rotate(0)}to{transform:rotate(45deg) translateX(2px)}}@-webkit-keyframes rotate-left-reverse-data-v-6b06357c{0%{transform:rotate(45deg)}to{transform:rotate(0)}}@keyframes rotate-left-reverse-data-v-6b06357c{0%{transform:rotate(45deg)}to{transform:rotate(0)}}@-webkit-keyframes rotate-right-data-v-6b06357c{0%{transform:rotate(0)}to{transform:translate(-16px,7px) rotate(-45deg)}}@keyframes rotate-right-data-v-6b06357c{0%{transform:rotate(0)}to{transform:translate(-16px,7px) rotate(-45deg)}}@-webkit-keyframes rotate-right-reverse-data-v-6b06357c{0%{transform:translate(-16px,7px) rotate(-45deg)}to{transform:rotate(0)}}@keyframes rotate-right-reverse-data-v-6b06357c{0%{transform:translate(-16px,7px) rotate(-45deg)}to{transform:rotate(0)}}",""]),t.exports=n},222:function(t,e,r){"use strict";r(144)},223:function(t,e,r){var n=r(33)(!1);n.push([t.i,".animation-appear-grow{-webkit-animation-name:center-grow;animation-name:center-grow;-webkit-animation-duration:.3s;animation-duration:.3s}@-webkit-keyframes center-grow{0%{transform:scaleX(0)}to{transform:scaleX(1)}}@keyframes center-grow{0%{transform:scaleX(0)}to{transform:scaleX(1)}}",""]),t.exports=n},224:function(t,e,r){"use strict";r(145)},225:function(t,e,r){var n=r(33)(!1);n.push([t.i,'html{font-family:"Quicksand",sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;box-sizing:border-box;scroll-behavior:smooth}*,:after,:before{box-sizing:border-box;margin:0;outline:none}.action-btn{height:43px;border:1px solid #181818;border-radius:12px}.action-btn:hover{color:#fff;background:#181818}',""]),t.exports=n},234:function(t,e,r){"use strict";r.r(e);var n=r(7),component=Object(n.a)({},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{width:"62",height:"48",viewBox:"0 0 62 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[e("path",{attrs:{d:"M21.6135 42.1142L22.3786 42.758L22.3787 42.758L22.3788 42.7578L22.3793 42.7572L22.3813 42.7548L22.3893 42.7453L22.42 42.7089L22.5307 42.5775C22.623 42.4682 22.7471 42.3212 22.8752 42.1701C23.0035 42.0187 23.1348 41.8644 23.2414 41.7402C23.2949 41.6779 23.341 41.6246 23.3768 41.5835C23.3996 41.5574 23.4145 41.5407 23.4229 41.5313C23.4295 41.524 23.4322 41.5211 23.4316 41.5216L23.4724 41.4789L23.5079 41.4316L27.3064 36.3684L27.3201 36.3501L27.333 36.3312C27.7 35.7925 28.0252 35.0921 27.8494 34.3549C27.6608 33.564 27.011 33.15 26.4076 32.9414C26.1067 32.8193 25.7769 32.7383 25.4314 32.6865C25.0555 32.6302 24.6716 32.62 24.3054 32.6968L24.1471 32.73L24.0073 32.8114C23.6141 33.0404 23.2012 33.291 22.7686 33.563C22.2985 33.839 21.8659 34.1896 21.4692 34.6055L21.4608 34.6144L21.4527 34.6234C21.0257 35.0935 20.6885 35.458 20.4391 35.7195C20.3357 35.8279 20.2499 35.916 20.1807 35.9851C20.0133 36.0168 19.895 36.0799 19.8655 36.0956C19.8639 36.0965 19.8626 36.0972 19.8615 36.0978C19.737 36.163 19.6167 36.2525 19.5283 36.3216C19.4299 36.3951 19.3337 36.4876 19.2691 36.5506C19.1792 36.6384 19.0694 36.7507 18.9422 36.884C18.6888 37.1498 18.3472 37.5194 17.9199 37.9898C17.2135 38.73 16.465 39.4493 15.6741 40.1477C14.9159 40.8102 14.1145 41.4737 13.2695 42.1382L13.2571 42.148L13.245 42.1581C12.9796 42.3807 12.8537 42.3608 12.8053 42.3506C12.805 42.3505 12.8046 42.3505 12.8042 42.3504C12.7997 42.3498 12.7885 42.3481 12.7603 42.3185C12.7202 42.2764 12.6482 42.1771 12.5731 41.9723L12.561 41.9393L12.5466 41.9072C12.2143 41.1667 11.9026 40.4266 11.6116 39.687C11.372 38.9287 11.1939 38.1974 11.0753 37.4926L11.0753 37.4926L11.0737 37.4838C10.7495 35.6566 10.7294 33.8322 11.0129 32.0061L11.0134 32.0027C11.3116 30.0377 11.6308 28.1178 11.9712 26.243C13.0987 21.087 15.2211 16.4165 18.3409 12.2221C18.3658 12.1926 18.3906 12.1631 18.4154 12.1336C18.407 12.1671 18.3986 12.2006 18.3902 12.2341L18.3844 12.2572L18.3797 12.2806C18.2179 13.0862 17.9952 13.8943 17.7107 14.705C17.4945 15.2945 17.3333 15.7744 17.2364 16.1301C17.1144 16.5781 17.0828 17.077 17.2669 17.5596L17.2813 17.5972L17.2986 17.6335C17.5115 18.08 17.8872 18.3701 18.2519 18.5614L18.2788 18.5754L18.3064 18.5878C18.6246 18.7308 19.0679 18.9166 19.6299 19.1432L19.6664 19.1579L19.7039 19.1697L20.3423 19.3705C21.0843 19.6129 21.9388 19.7481 22.6572 19.3715L22.677 19.3611L22.6963 19.3499C23.4193 18.9287 23.8366 18.0991 24.1099 17.2415C24.4933 16.0802 24.8767 14.9412 25.2599 13.8247C25.6951 12.6375 26.0872 11.4497 26.4359 10.2612L26.4432 10.2365L26.4491 10.2115C26.6917 9.19413 26.7243 8.1976 26.5249 7.2349C26.3313 6.02066 25.5397 5.09288 24.4136 4.41571C24.3775 4.38957 24.348 4.3662 24.3242 4.34584L24.26 4.24487L24.1313 4.04234L24.1228 4.02897L24.1139 4.01588C23.128 2.5686 21.8159 1.64882 20.19 1.36835C18.6294 1.04633 17.1583 1.38412 15.8388 2.33186C15.4069 2.6042 14.9946 2.87746 14.6023 3.15168C14.2518 3.39675 13.8804 3.62234 13.4877 3.82823L13.4409 3.85275L13.397 3.88207C12.9663 4.16942 12.4916 4.43954 11.9712 4.69138L11.9568 4.69839L11.9425 4.70585C11.3766 5.00255 10.8356 5.34804 10.3197 5.74148L10.2888 5.765L10.2599 5.79084C9.04624 6.87493 7.96673 8.07758 7.02239 9.39787L7.01573 9.40718L7.00929 9.41664C6.0951 10.7587 5.38775 12.2193 4.88691 13.7948C4.28355 15.6928 3.70179 17.6132 3.14162 19.5559C2.57944 21.4606 2.06055 23.3878 1.58494 25.3373L1.58315 25.3446L1.58147 25.352C1.08859 27.5133 0.908478 29.6793 1.04332 31.8473L1.04401 31.8585L1.04496 31.8697C1.22081 33.944 1.55041 36.017 2.03323 38.0881L2.03781 38.1077L2.04317 38.1272C2.53716 39.9166 3.21673 41.5156 4.0905 42.9141L4.10098 42.9308L4.1121 42.9472C5.1268 44.4368 6.70998 45.4901 8.74252 46.1682L8.75383 46.172L8.76523 46.1755C11.3655 46.9746 13.7994 47.2046 16.0458 46.814C16.7433 46.7049 17.4841 46.3603 18.1448 45.9819C18.8291 45.5901 19.5183 45.1086 20.1244 44.65C20.733 44.1896 21.2728 43.741 21.6598 43.4083C21.8537 43.2415 22.0103 43.103 22.1191 43.0055C22.1736 42.9567 22.2161 42.9181 22.2455 42.8914L22.2795 42.8602L22.2889 42.8516L22.2915 42.8492L22.2924 42.8484L22.2927 42.8481C22.2928 42.848 22.2929 42.8479 21.6135 42.1142ZM21.6135 42.1142L22.3786 42.758L22.3385 42.8056L22.2929 42.8479L21.6135 42.1142ZM48.7077 7.7727C44.6348 13.3944 41.2001 19.4734 38.403 26.008L38.1518 23.3209L37.8301 19.8797C37.83 19.8793 37.83 19.879 37.83 19.8786C37.6493 17.909 37.4687 15.9553 37.2881 14.0176H37.5123V13.0176V5.59151V5.56984L37.5114 5.5482C37.4888 5.02634 37.4423 4.56574 37.3618 4.18589C37.293 3.86122 37.1692 3.43553 36.8822 3.11382C36.6233 2.80462 36.2682 2.60894 35.9495 2.47528C35.6012 2.32919 35.1852 2.21215 34.7217 2.11495L34.7052 2.11149L34.6886 2.10859C34.3887 2.05617 34.0756 2.02988 33.7514 2.02652C33.3837 1.97879 33.0065 1.98234 32.6237 2.02956C32.176 2.05454 31.7694 2.10437 31.4235 2.1914C31.0961 2.27381 30.6847 2.42219 30.3806 2.74106L30.3426 2.78089L30.3092 2.82464C30.0727 3.13467 29.9647 3.55151 29.8992 3.87232C29.8236 4.24235 29.7659 4.70258 29.7214 5.23883L29.7194 5.26246L29.7186 5.28617C29.6315 7.75184 29.675 10.2175 29.8492 12.683C30.0213 15.1187 30.2148 17.5769 30.4299 20.0574L30.4303 20.0615C30.7772 23.8809 31.3411 27.6113 32.1224 31.2524L32.1223 31.2524L32.1254 31.2662C32.9446 34.8377 33.9141 38.3862 35.0339 41.9119C35.1778 42.4895 35.4563 43.0397 35.9581 43.4186C36.4655 43.8017 37.067 43.9087 37.6569 43.8565C38.1047 43.8528 38.5504 43.7987 38.9926 43.6957L39.0449 43.6835L39.0956 43.6657C39.4441 43.544 39.7908 43.4428 40.1361 43.3617C40.9925 43.1896 41.7818 42.7704 42.1792 41.937C42.426 41.4195 42.638 40.8203 42.8209 40.1492L42.8266 40.1281L42.8315 40.1067C43.2151 38.408 43.6201 36.7093 44.0463 35.0105C44.5086 33.3373 45.0549 31.6628 45.6854 29.987C46.5787 27.7574 47.5357 25.5499 48.5564 23.3647C49.5806 21.1721 50.6474 19.002 51.7568 16.8542C52.9489 14.5776 54.2047 12.3458 55.5242 10.1587L55.5243 10.1587L55.5288 10.151C56.7955 8.00871 58.3658 6.1001 60.2428 4.42303C60.4961 4.24415 60.7506 3.98948 60.8927 3.6317C61.0492 3.2379 61.021 2.84293 60.8953 2.50255C60.6494 1.70453 59.9414 1.35981 59.3129 1.23667C58.4149 1.03963 57.5127 0.965133 56.6087 1.01502L56.6057 1.01519C55.5598 1.07612 54.6375 1.53617 53.8542 2.29739C52.8973 3.16457 51.983 4.05504 51.1115 4.96887C50.2718 5.8494 49.4766 6.77594 48.7259 7.7483L48.7166 7.76036L48.7077 7.7727Z",stroke:"#181818","stroke-width":"2"}})])}),[],!1,null,null,null);e.default=component.exports},26:function(t,e,r){"use strict";var n={props:{error:{type:Object,default:function(){return{}}}}},o=r(7),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"w-full h-screen flex"},[r("div",{staticClass:"flex flex-col space-y-2 items-center mx-auto mt-48 text-text-color font-bold"},[r("h1",{staticClass:"text-5xl opacity-80"},[t._v(t._s(t.error.statusCode))]),t._v(" "),404===t.error.statusCode?r("h1",[t._v("Page not found")]):r("h1",[t._v("An error occurred")]),t._v(" "),r("nuxt-link",{staticClass:"underline text-base",attrs:{to:"/"}},[t._v("Back to home page")])],1)])}),[],!1,null,null,null);e.a=component.exports}},[[181,15,1,16]]]);