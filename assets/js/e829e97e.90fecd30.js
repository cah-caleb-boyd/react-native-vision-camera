(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[8567],{3905:function(e,r,t){"use strict";t.d(r,{Zo:function(){return u},kt:function(){return p}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(t),p=a,f=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return t?n.createElement(f,i(i({ref:r},u),{},{components:t})):n.createElement(f,i({ref:r},u))}));function p(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=t[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8215:function(e,r,t){"use strict";var n=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:a},r)}},1395:function(e,r,t){"use strict";t.d(r,{Z:function(){return u}});var n=t(7294),a=t(944),o=t(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,l=39;var u=function(e){var r=e.lazy,t=e.block,u=e.defaultValue,m=e.values,d=e.groupId,p=e.className,f=(0,a.Z)(),g=f.tabGroupChoices,v=f.setTabGroupChoices,h=(0,n.useState)(u),b=h[0],P=h[1],k=n.Children.toArray(e.children),N=[];if(null!=d){var C=g[d];null!=C&&C!==b&&m.some((function(e){return e.value===C}))&&P(C)}var w=function(e){var r=e.currentTarget,t=N.indexOf(r),n=m[t].value;P(n),null!=d&&(v(d,n),setTimeout((function(){var e,t,n,a,o,i,c,l;(e=r.getBoundingClientRect(),t=e.top,n=e.left,a=e.bottom,o=e.right,i=window,c=i.innerHeight,l=i.innerWidth,t>=0&&o<=l&&a<=c&&n>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},y=function(e){var r,t;switch(e.keyCode){case l:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case c:var a=N.indexOf(e.target)-1;t=N[a]||N[N.length-1]}null==(r=t)||r.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},p)},m.map((function(e){var r=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:b===r?0:-1,"aria-selected":b===r,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":b===r}),key:r,ref:function(e){return N.push(e)},onKeyDown:y,onFocus:w,onClick:w},t)}))),r?(0,n.cloneElement)(k.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},k.map((function(e,r){return(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==b})}))))}},9443:function(e,r,t){"use strict";var n=(0,t(7294).createContext)(void 0);r.Z=n},944:function(e,r,t){"use strict";var n=t(7294),a=t(9443);r.Z=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},7750:function(e,r,t){"use strict";t.r(r),t.d(r,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var n=t(2122),a=t(9756),o=(t(7294),t(3905)),i=t(1395),s=t(8215),c={id:"frame-processors-plugins-ios",title:"Creating Frame Processor Plugins for iOS",sidebar_label:"Creating Frame Processor Plugins (iOS)"},l={unversionedId:"guides/frame-processors-plugins-ios",id:"guides/frame-processors-plugins-ios",isDocsHomePage:!1,title:"Creating Frame Processor Plugins for iOS",description:"Creating a Frame Processor",source:"@site/docs/guides/FRAME_PROCESSOR_CREATE_PLUGIN_IOS.mdx",sourceDirName:"guides",slug:"/guides/frame-processors-plugins-ios",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-ios",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/guides/FRAME_PROCESSOR_CREATE_PLUGIN_IOS.mdx",version:"current",sidebar_label:"Creating Frame Processor Plugins (iOS)",frontMatter:{id:"frame-processors-plugins-ios",title:"Creating Frame Processor Plugins for iOS",sidebar_label:"Creating Frame Processor Plugins (iOS)"},sidebar:"visionSidebar",previous:{title:"Creating Frame Processor Plugins",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-overview"},next:{title:"Creating Frame Processor Plugins for Android",permalink:"/react-native-vision-camera/docs/guides/frame-processors-plugins-android"}},u=[{value:"Creating a Frame Processor",id:"creating-a-frame-processor",children:[]}],m={toc:u};function d(e){var r=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"creating-a-frame-processor"},"Creating a Frame Processor"),(0,o.kt)("p",null,"The Frame Processor Plugin API is built to be as extensible as possible, which allows you to create custom Frame Processor Plugins.\nIn this guide we will create a custom QR Code Scanner Plugin which can be used from JS."),(0,o.kt)("p",null,"iOS Frame Processor Plugins can be written in either ",(0,o.kt)("strong",{parentName:"p"},"Objective-C")," or ",(0,o.kt)("strong",{parentName:"p"},"Swift"),"."),(0,o.kt)(i.Z,{defaultValue:"objc",values:[{label:"Objective-C",value:"objc"},{label:"Swift",value:"swift"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"objc",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open your Project in Xcode"),(0,o.kt)("li",{parentName:"ol"},"Create an Objective-C source file, for the QR Code Plugin this will be called ",(0,o.kt)("inlineCode",{parentName:"li"},"QRCodeFrameProcessorPlugin.m"),"."),(0,o.kt)("li",{parentName:"ol"},"Add the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc",metastring:"{9}","{9}":!0},"#import <VisionCamera/FrameProcessorPlugin.h>\n\n@interface QRCodeFrameProcessorPlugin : NSObject\n@end\n\n@implementation QRCodeFrameProcessorPlugin\n\nstatic inline id scanQRCodes(CMSampleBufferRef buffer, NSArray args) {\n  // code goes here\n  return @[];\n}\n\nVISION_EXPORT_FRAME_PROCESSOR(scanQRCodes)\n\n@end\n")),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Implement your Frame Processing.")," See the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cuvent/react-native-vision-camera/blob/main/example/ios/Frame%20Processor%20Plugins/QR%20Code%20Plugin%20%28Objective%2DC%29"},"QR Code Plugin (Objective-C)")," for reference.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The JS function name will be equal to the Objective-C function name you choose (with a ",(0,o.kt)("inlineCode",{parentName:"p"},"__")," prefix). Make sure it is unique across other Frame Processor Plugins, and doesn't shadow a JS runtime variable.")))),(0,o.kt)(s.Z,{value:"swift",mdxType:"TabItem"},(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Create a Swift file, for the QR Code Plugin this will be ",(0,o.kt)("inlineCode",{parentName:"li"},"QRCodeFrameProcessorPlugin.swift"),". If Xcode asks you to create a Bridging Header, press ",(0,o.kt)("strong",{parentName:"li"},"create"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://docs-assets.developer.apple.com/published/7ebca7212c/2a065d1a-7e53-4907-a889-b7fa4f2206c9.png",alt:'Xcode "Create Bridging Header" alert'})),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Inside the newly created Bridging Header, add the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"#import <VisionCamera/FrameProcessorPlugin.h>\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create an Objective-C source file with the same name as the Swift file, for the QR Code Plugin this will be ",(0,o.kt)("inlineCode",{parentName:"li"},"QRCodeFrameProcessorPlugin.m"),". Add the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-objc"},"#import <VisionCamera/FrameProcessorPlugin.h>\n\n@interface VISION_EXPORT_SWIFT_FRAME_PROCESSOR(scanQRCodes, QRCodeFrameProcessorPlugin)\n@end\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The first parameter in the Macro specifies the JS function name. Make sure it is unique across other Frame Processors, and doesn't shadow a JS runtime variable (such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Map"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Number"),", ...)"))),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"In the Swift file, add the following code:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-swift",metastring:"{6}","{6}":!0},"@objc(QRCodeFrameProcessorPlugin)\npublic class QRCodeFrameProcessorPlugin: NSObject, FrameProcessorPluginBase {\n\n  @objc\n  public static func callback(_: CMSampleBuffer!, withArgs _: [Any]!) -> Any! {\n    // code goes here\n    return []\n  }\n}\n")),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Implement your frame processing.")," See ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/cuvent/react-native-vision-camera/blob/main/example/ios/Frame%20Processor%20Plugins/QR%20Code%20Plugin%20%28Swift%29"},"QR Code Plugin (Swift)")," for reference.")))),(0,o.kt)("br",null),(0,o.kt)("h4",{id:"-next-section-finish-creating-your-frame-processor-plugin-or-add-android-support-to-your-frame-processor-plugin"},"\ud83d\ude80 Next section: ",(0,o.kt)("a",{parentName:"h4",href:"frame-processors-plugins-final"},"Finish creating your Frame Processor Plugin")," (or ",(0,o.kt)("a",{parentName:"h4",href:"frame-processors-plugins-android"},"add Android support to your Frame Processor Plugin"),")"))}d.isMDXComponent=!0},6010:function(e,r,t){"use strict";function n(e){var r,t,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=n(e[r]))&&(a&&(a+=" "),a+=t);else for(r in e)e[r]&&(a&&(a+=" "),a+=r);return a}function a(){for(var e,r,t=0,a="";t<arguments.length;)(e=arguments[t++])&&(r=n(e))&&(a&&(a+=" "),a+=r);return a}t.d(r,{Z:function(){return a}})}}]);