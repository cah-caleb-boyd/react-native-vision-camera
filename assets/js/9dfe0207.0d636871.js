(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[7620],{3905:function(e,a,t){"use strict";t.d(a,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),m=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):o(o({},a),e)),t},l=function(e){var a=m(e.components);return r.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(t),d=n,v=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return t?r.createElement(v,o(o({ref:a},l),{},{components:t})):r.createElement(v,o({ref:a},l))}));function d(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in a)hasOwnProperty.call(a,s)&&(c[s]=a[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var m=2;m<i;m++)o[m]=t[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8082:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s},default:function(){return l}});var r=t(2122),n=t(9756),i=(t(7294),t(3905)),o={id:"hooks_usecameradevices",title:"Module: hooks/useCameraDevices",sidebar_label:"hooks/useCameraDevices",custom_edit_url:null},c={unversionedId:"api/modules/hooks_usecameradevices",id:"api/modules/hooks_usecameradevices",isDocsHomePage:!1,title:"Module: hooks/useCameraDevices",description:"Functions",source:"@site/docs/api/modules/hooks_usecameradevices.md",sourceDirName:"api/modules",slug:"/api/modules/hooks_usecameradevices",permalink:"/react-native-vision-camera/docs/api/modules/hooks_usecameradevices",editUrl:null,version:"current",sidebar_label:"hooks/useCameraDevices",frontMatter:{id:"hooks_usecameradevices",title:"Module: hooks/useCameraDevices",sidebar_label:"hooks/useCameraDevices",custom_edit_url:null},sidebar:"visionSidebar",previous:{title:"Module: globals",permalink:"/react-native-vision-camera/docs/api/modules/globals"},next:{title:"Module: hooks/useCameraFormat",permalink:"/react-native-vision-camera/docs/api/modules/hooks_usecameraformat"}},s=[{value:"Functions",id:"functions",children:[{value:"useCameraDevices",id:"usecameradevices",children:[]}]}],m={toc:s};function l(e){var a=e.components,t=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"functions"},"Functions"),(0,i.kt)("h3",{id:"usecameradevices"},"useCameraDevices"),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useCameraDevices"),"(): CameraDevices"),(0,i.kt)("p",null,"Gets the best available ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice")),". Devices with more cameras are preferred."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," if no device was found."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const device = useCameraDevice()\n// ...\nreturn <Camera device={device} />\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," CameraDevices"),(0,i.kt)("p",null,"The best matching ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice")),"."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6a67d5/src/hooks/useCameraDevices.ts#L29"},"hooks/useCameraDevices.ts:29")),(0,i.kt)("p",null,"\u25b8 ",(0,i.kt)("strong",{parentName:"p"},"useCameraDevices"),"(",(0,i.kt)("inlineCode",{parentName:"p"},"deviceType"),": ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#physicalcameradevicetype"},(0,i.kt)("em",{parentName:"a"},"PhysicalCameraDeviceType"))," ","|"," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice#logicalcameradevicetype"},(0,i.kt)("em",{parentName:"a"},"LogicalCameraDeviceType")),"): CameraDevices"),(0,i.kt)("p",null,"Gets a ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice"))," for the requested device type."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"throws"))," ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/classes/cameraerror.cameraruntimeerror"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraRuntimeError"))," if no device was found."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("inlineCode",{parentName:"strong"},"example"))," "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"const device = useCameraDevice('wide-angle-camera')\n// ...\nreturn <Camera device={device} />\n")),(0,i.kt)("h4",{id:"parameters"},"Parameters:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"deviceType")),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/modules/cameradevice#physicalcameradevicetype"},(0,i.kt)("em",{parentName:"a"},"PhysicalCameraDeviceType"))," ","|"," ",(0,i.kt)("a",{parentName:"td",href:"/react-native-vision-camera/docs/api/modules/cameradevice#logicalcameradevicetype"},(0,i.kt)("em",{parentName:"a"},"LogicalCameraDeviceType"))),(0,i.kt)("td",{parentName:"tr",align:"left"},"Specifies a device type which will be used as a device filter.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Returns:")," CameraDevices"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"/react-native-vision-camera/docs/api/modules/cameradevice"},(0,i.kt)("inlineCode",{parentName:"a"},"CameraDevice"))," for the requested device type."),(0,i.kt)("p",null,"Defined in: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/cuvent/react-native-vision-camera/blob/b6a67d5/src/hooks/useCameraDevices.ts#L44"},"hooks/useCameraDevices.ts:44")))}l.isMDXComponent=!0}}]);