this.wc=this.wc||{},this.wc.blocks=this.wc.blocks||{},this.wc.blocks["product-categories"]=function(e){function t(t){for(var n,a,i=t[0],l=t[1],s=t[2],d=0,b=[];d<i.length;d++)a=i[d],c[a]&&b.push(c[a][0]),c[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);for(u&&u(t);b.length;)b.shift()();return o.push.apply(o,s||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==c[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},c={9:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="";var i=window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var s=0;s<i.length;s++)t(i[s]);var u=l;return o.push([546,1,2,0]),r()}({0:function(e,t){!function(){e.exports=this.wp.element}()},1:function(e,t){!function(){e.exports=this.wp.i18n}()},114:function(e,t,r){"use strict";var n=r(22),c=r.n(n),o=r(23),a=r.n(o),i=r(24),l=r.n(i),s=r(25),u=r.n(s),d=r(33),b=r.n(d),p=r(26),h=r.n(p),g=r(0),m=r(1),f=r(6),w=r.n(f),v=r(3),O=r(4),j=r(5),_=r.n(j),y=r(30),E=r(77),k=r.n(E),C=r(15),x=r.n(C);function z(e){var t=e.hasEmpty,r=e.isHierarchical,n=wc_product_block_data.productCategories.filter(function(e){return t||!!e.count});return r?function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(O.groupBy)(e,"parent"),r=function e(r){return r.map(function(r){var n=t[r.term_id];return delete t[r.term_id],x()({},r,{children:n&&n.length?e(n):[]})})},n=r(t[0]||[]);return delete t[0],Object(O.forEach)(t,function(e){n.push.apply(n,k()(r(e||[])))}),n}(n):n}var N=function(e){function t(){var e;return c()(this,t),(e=l()(this,u()(t).apply(this,arguments))).select=Object(g.createRef)(),e.onNavigate=e.onNavigate.bind(b()(e)),e.renderList=e.renderList.bind(b()(e)),e.renderOptions=e.renderOptions.bind(b()(e)),e}return h()(t,e),a()(t,[{key:"onNavigate",value:function(){var e=this.props.isPreview,t=void 0!==e&&e,r=this.select.current.value;if("false"!==r){var n=wc_product_block_data.homeUrl;t||0!==r.indexOf(n)||(document.location.href=r)}}},{key:"renderList",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.props.isPreview,c=void 0!==n&&n,o=this.props.attributes.hasCount,a="parent-"+e[0].term_id;return Object(g.createElement)("ul",{key:a},e.map(function(e){var n=o?Object(g.createElement)("span",null,"(",e.count,")"):null;return[Object(g.createElement)("li",{key:e.term_id},Object(g.createElement)("a",{href:c?null:e.link},e.name)," ",n," "),!!e.children&&!!e.children.length&&t.renderList(e.children,r+1)]}))}},{key:"renderOptions",value:function(e){var t=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=this.props.attributes.hasCount;return e.map(function(e){var c=n?"(".concat(e.count,")"):null;return[Object(g.createElement)("option",{key:e.term_id,value:e.link},Object(O.repeat)("–",r)," ",e.name," ",c),!!e.children&&!!e.children.length&&t.renderOptions(e.children,r+1)]})}},{key:"render",value:function(){var e=this.props,t=e.attributes,r=e.instanceId,n=t.isDropdown,c=z(t),o=w()({"wc-block-product-categories":!0,"is-dropdown":n,"is-list":!n}),a="prod-categories-".concat(r);return Object(g.createElement)("div",{className:o},n?Object(g.createElement)(g.Fragment,null,Object(g.createElement)("div",{className:"wc-block-product-categories__dropdown"},Object(g.createElement)("label",{className:"screen-reader-text",htmlFor:a},Object(m.__)("Select a category","woo-gutenberg-products-block")),Object(g.createElement)("select",{id:a,ref:this.select},Object(g.createElement)("option",{value:"false",hidden:!0},Object(m.__)("Select a category","woo-gutenberg-products-block")),this.renderOptions(c))),Object(g.createElement)(v.IconButton,{icon:"arrow-right-alt2",label:Object(m.__)("Go to category","woo-gutenberg-products-block"),onClick:this.onNavigate})):this.renderList(c))}}]),t}(g.Component);N.propTypes={attributes:_.a.object.isRequired,instanceId:_.a.number,isPreview:_.a.bool};t.a=Object(y.withInstanceId)(N)},18:function(e,t){!function(){e.exports=this.wp.editor}()},27:function(e,t){!function(){e.exports=this.wp.blocks}()},285:function(e,t,r){var n=r(530);"string"==typeof n&&(n=[[e.i,n,""]]);var c={hmr:!0,transform:void 0,insertInto:void 0};r(66)(n,c);n.locals&&(e.exports=n.locals)},3:function(e,t){!function(){e.exports=this.wp.components}()},30:function(e,t){!function(){e.exports=this.wp.compose}()},4:function(e,t){!function(){e.exports=this.lodash}()},530:function(e,t,r){},546:function(e,t,r){"use strict";r.r(t);var n=r(53),c=r.n(n),o=r(0),a=r(1),i=r(27),l=(r(285),r(531),r(18)),s=r(3),u=r(114),d=r(61);Object(i.registerBlockType)("woocommerce/product-categories",{title:Object(a.__)("Product Categories List","woo-gutenberg-products-block"),icon:{src:Object(o.createElement)(d.a,null),foreground:"#96588a"},category:"woocommerce",keywords:[Object(a.__)("WooCommerce","woo-gutenberg-products-block")],description:Object(a.__)("Show your product categories as a list or dropdown.","woo-gutenberg-products-block"),supports:{align:["wide","full"]},attributes:{hasCount:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-has-count"},hasEmpty:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-has-empty"},isDropdown:{type:"boolean",default:!1,source:"attribute",selector:"div",attribute:"data-is-dropdown"},isHierarchical:{type:"boolean",default:!0,source:"attribute",selector:"div",attribute:"data-is-hierarchical"}},edit:function(e){var t=e.attributes,r=e.setAttributes,n=t.hasCount,c=t.hasEmpty,i=t.isDropdown,d=t.isHierarchical;return Object(o.createElement)(o.Fragment,null,Object(o.createElement)(l.InspectorControls,{key:"inspector"},Object(o.createElement)(s.PanelBody,{title:Object(a.__)("Content","woo-gutenberg-products-block"),initialOpen:!0},Object(o.createElement)(s.ToggleControl,{label:Object(a.__)("Show as dropdown","woo-gutenberg-products-block"),help:i?Object(a.__)("Categories are shown in a dropdown.","woo-gutenberg-products-block"):Object(a.__)("Categories are shown in a list.","woo-gutenberg-products-block"),checked:i,onChange:function(){return r({isDropdown:!i})}}),Object(o.createElement)(s.ToggleControl,{label:Object(a.__)("Show product count","woo-gutenberg-products-block"),help:n?Object(a.__)("Product count is visible.","woo-gutenberg-products-block"):Object(a.__)("Product count is hidden.","woo-gutenberg-products-block"),checked:n,onChange:function(){return r({hasCount:!n})}}),Object(o.createElement)(s.ToggleControl,{label:Object(a.__)("Show hierarchy","woo-gutenberg-products-block"),help:d?Object(a.__)("Hierarchy is visible.","woo-gutenberg-products-block"):Object(a.__)("Hierarchy is hidden.","woo-gutenberg-products-block"),checked:d,onChange:function(){return r({isHierarchical:!d})}}),Object(o.createElement)(s.ToggleControl,{label:Object(a.__)("Show empty categories","woo-gutenberg-products-block"),help:c?Object(a.__)("Empty categories are visible.","woo-gutenberg-products-block"):Object(a.__)("Empty categories are hidden.","woo-gutenberg-products-block"),checked:c,onChange:function(){return r({hasEmpty:!c})}}))),Object(o.createElement)(u.a,{attributes:t,isPreview:!0}))},save:function(e){var t=e.attributes,r=t.hasCount,n=t.hasEmpty,a=t.isDropdown,i=t.isHierarchical,l={};return r&&(l["data-has-count"]=!0),n&&(l["data-has-empty"]=!0),a&&(l["data-is-dropdown"]=!0),i&&(l["data-is-hierarchical"]=!0),Object(o.createElement)("div",c()({className:"is-loading"},l),a?Object(o.createElement)("span",{"aria-hidden":!0,className:"wc-block-product-categories__placeholder"}):Object(o.createElement)("ul",{"aria-hidden":!0},Object(o.createElement)("li",null,Object(o.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(o.createElement)("li",null,Object(o.createElement)("span",{className:"wc-block-product-categories__placeholder"})),Object(o.createElement)("li",null,Object(o.createElement)("span",{className:"wc-block-product-categories__placeholder"}))))}})},61:function(e,t,r){"use strict";var n=r(0),c=r(3),o=function(){return Object(n.createElement)(c.Icon,{icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{fillRule:"nonzero",d:"M21.913 7.0946H2.0254c-1.1708 0-2.0984.9908-2.0205 2.16l.741 11.0724c.0714 1.0638.9552 1.8892 2.0206 1.8892h18.4054c1.0654 0 1.9492-.8254 2.0205-1.8892l.7411-11.0724c.0779-1.1692-.8497-2.16-2.0205-2.16zm-8.8006-4.6573h5.987c1.119 0 2.0255.9065 2.0255 2.0254v.934H2.8103V2.0255C2.8103.9064 3.7168 0 4.8357 0h6.2513c1.119 0 2.0254.9065 2.0254 2.0254v.4119zm-7.0589 11.619a.926.926 0 1 1 0-1.852h11.8297a.926.926 0 1 1 0 1.852H6.0535z"}))})},a=function(){return Object(n.createElement)(c.Icon,{className:"material-icon",icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}),Object(n.createElement)("path",{d:"M23 12l-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12zm-10 5h-2v-2h2v2zm0-4h-2V7h2v6z"}))})},i=function(){return Object(n.createElement)(c.Icon,{className:"material-icon",icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},Object(n.createElement)("path",{d:"M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"}),Object(n.createElement)("path",{d:"M0 0h24v24H0z",fill:"none"}))})},l=r(6),s=r.n(l),u=r(5),d=r.n(u),b=function(e){var t=e.size,r=void 0===t?20:t,o=e.className;return Object(n.createElement)(c.Icon,{className:s()("woo-icon",o),icon:Object(n.createElement)("svg",{xmlns:"http://www.w3.org/2000/svg",height:r,width:Math.floor(1.67*r),viewBox:"0 0 245 145"},Object(n.createElement)("path",{fill:"#96588A",d:"M22.76 0h199.1a22.77 22.77 0 0 1 22.8 22.76v75.92a22.77 22.77 0 0 1-22.78 22.78h-71.41l9.77 24-43.13-24H22.76C10.1946 121.449.011 111.2654 0 98.7V22.76C.011 10.1946 10.1946.011 22.76 0z"}),Object(n.createElement)("path",{fill:"#FFF",fillRule:"nonzero",d:"M12.32 20.63a8.16 8.16 0 0 1 6.25-3.09c5.0733-.36 7.9867 2.0333 8.74 7.18 3.14 20.86 6.4933 38.5633 10.06 53.11l21.92-41.69c2-3.76 4.49-5.76 7.52-6 4.3867-.3067 7.13 2.49 8.23 8.39a186 186 0 0 0 9.47 34.23c2.62-25.38 7.0133-43.7133 13.18-55a7.73 7.73 0 0 1 6.6-4.43 8.8 8.8 0 0 1 6.32 2 7.75 7.75 0 0 1 3.05 5.74 8.52 8.52 0 0 1-1 4.77c-3.9 7.24-7.12 19.28-9.66 36.12-2.48 16.2533-3.3967 28.9633-2.75 38.13a12.25 12.25 0 0 1-1.16 6.56 6.32 6.32 0 0 1-5.33 3.53c-2.6667.18-5.3033-1.0567-7.91-3.71-9.2933-9.54-16.6567-23.7267-22.09-42.56C57.3 76.7167 52.48 86.3333 49.3 92.76c-5.86 11.3333-10.89 17.13-15.09 17.39-2.7333.1933-5.0667-2.0933-7-6.86-5.1-13.0933-10.5833-38.4033-16.45-75.93a8.56 8.56 0 0 1 1.56-6.73zM227.23 36.34a23.17 23.17 0 0 0-16-11.59 26.25 26.25 0 0 0-5.42-.58c-9.5867 0-17.41 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6167 14.3333 4.85 19.8a23.15 23.15 0 0 0 16 11.59 26.28 26.28 0 0 0 5.42.59c9.68 0 17.5033-5 23.47-15A53.89 53.89 0 0 0 232.08 56c0-7.7333-1.6167-14.2867-4.85-19.66zm-12.61 27.72c-1.3733 6.56-3.9167 11.5-7.63 14.82-2.9267 2.6667-5.6133 3.7433-8.06 3.23-2.4467-.5133-4.4033-2.6667-5.87-6.46a25.68 25.68 0 0 1-1.76-9.09 35.9 35.9 0 0 1 .73-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.68 25.68 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03zM164.57 36.34a23.2 23.2 0 0 0-16-11.59 26.42 26.42 0 0 0-5.43-.58c-9.5933 0-17.4167 5-23.47 15a53 53 0 0 0-7.78 28.16c0 7.7333 1.6133 14.3333 4.84 19.8a23.19 23.19 0 0 0 16 11.59 26.44 26.44 0 0 0 5.43.59c9.68 0 17.5033-5 23.47-15A53.88 53.88 0 0 0 169.4 56c0-7.7333-1.6133-14.2867-4.84-19.66h.01zm-12.61 27.72c-1.3667 6.56-3.91 11.5-7.63 14.82-2.93 2.64-5.63 3.72-8.07 3.23-2.44-.49-4.4-2.64-5.86-6.46a25.7 25.7 0 0 1-1.77-9.09 35.9 35.9 0 0 1 .74-7.34 33 33 0 0 1 5.28-11.88c3.3333-4.8933 6.8067-6.9467 10.42-6.16 2.44.4867 4.3933 2.64 5.86 6.46a25.91 25.91 0 0 1 1.76 9.12 35.73 35.73 0 0 1-.73 7.33v-.03z"}))})};b.propTypes={size:d.a.number,className:d.a.string};var p=b;r.d(t,"a",function(){return o}),r.d(t,"b",function(){return a}),r.d(t,"c",function(){return i}),r.d(t,"d",function(){return p})}});