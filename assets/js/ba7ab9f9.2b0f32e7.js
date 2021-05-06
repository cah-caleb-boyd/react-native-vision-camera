(self.webpackChunkvision_camera=self.webpackChunkvision_camera||[]).push([[1534],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var m={};for(var s in t)hasOwnProperty.call(t,s)&&(m[s]=t[s]);m.originalType=e,m.mdxType="string"==typeof e?e:r,o[1]=m;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3919:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,{b:function(){return a},Z:function(){return r}})},4996:function(e,t,n){"use strict";n.d(t,{C:function(){return i},Z:function(){return o}});var a=n(2263),r=n(3919);function i(){var e=(0,a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,i=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var i=void 0===a?{}:a,o=i.forcePrependBaseUrl,m=void 0!==o&&o,s=i.absolute,l=void 0!==s&&s;if(!n)return n;if(n.startsWith("#"))return n;if((0,r.b)(n))return n;if(m)return t+n;var p=n.startsWith(t)?n:t+n.replace(/^\//,"");return l?e+p:p}(i,n,e,t)}}}function o(e,t){return void 0===t&&(t={}),(0,i().withBaseUrl)(e,t)}},3533:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return m},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=n(4996),m={id:"animated",title:"Zooming with Reanimated",sidebar_label:"Zooming with Reanimated"},s={unversionedId:"guides/animated",id:"guides/animated",isDocsHomePage:!1,title:"Zooming with Reanimated",description:"Animations",source:"@site/docs/guides/ANIMATED.mdx",sourceDirName:"guides",slug:"/guides/animated",permalink:"/react-native-vision-camera/docs/guides/animated",editUrl:"https://github.com/cuvent/react-native-vision-camera/edit/main/docs/docs/guides/ANIMATED.mdx",version:"current",sidebar_label:"Zooming with Reanimated",frontMatter:{id:"animated",title:"Zooming with Reanimated",sidebar_label:"Zooming with Reanimated"},sidebar:"visionSidebar",previous:{title:"Community Plugins",permalink:"/react-native-vision-camera/docs/guides/frame-processor-plugin-list"},next:{title:"Camera Errors",permalink:"/react-native-vision-camera/docs/guides/errors"}},l=[{value:"Animations",id:"animations",children:[{value:"Animation libraries",id:"animation-libraries",children:[]},{value:"Implementation",id:"implementation",children:[]},{value:"Explanation",id:"explanation",children:[]},{value:"Logarithmic scale",id:"logarithmic-scale",children:[]}]}],p={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",null,(0,i.kt)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"283",height:"535",style:{float:"right"}},(0,i.kt)("image",{href:(0,o.Z)("img/demo.gif"),x:"18",y:"33",width:"247",height:"469"}),(0,i.kt)("image",{href:(0,o.Z)("img/frame.png"),width:"283",height:"535"}))),(0,i.kt)("h2",{id:"animations"},"Animations"),(0,i.kt)("p",null,"Often you'd want to animate specific props in the Camera. For example, if you'd want to create a custom zoom gesture, you can smoothly animate the Camera's ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom")," property."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"<Camera>")," component already provides a natively implemented zoom gesture which you can enable with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/interfaces/cameraprops.cameraprops-1#enablezoomgesture"},(0,i.kt)("inlineCode",{parentName:"a"},"enableZoomGesture"))," prop. This does not require any additional work, but if you want to setup a custom gesture, such as the one in Snapchat or Instagram where you move up your finger while recording, continue reading."),(0,i.kt)("h3",{id:"animation-libraries"},"Animation libraries"),(0,i.kt)("p",null,"While you can use any animation library to animate the ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom")," property (or use no animation library at all) it is recommended to use ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated")," (v2) to achieve best performance. Head over to their ",(0,i.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/docs/installation"},"Installation guide")," to install Reanimated if you haven't already."),(0,i.kt)("h3",{id:"implementation"},"Implementation"),(0,i.kt)("p",null,"The following example implements a button which smoothly zooms to a random value using ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated"},"react-native-reanimated"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},'import Reanimated, {\n  useAnimatedProps,\n  useSharedValue,\n  withSpring,\n} from "react-native-reanimated"\n\nconst ReanimatedCamera = Reanimated.createAnimatedComponent(Camera)\nReanimated.addWhitelistedNativeProps({\n  zoom: true,\n})\n\nexport function App() {\n  const devices = useCameraDevices()\n  const device = devices.back\n  const zoom = useSharedValue(0)\n\n  const onRandomZoomPress = useCallback(() => {\n    zoom.value = withSpring(Math.random())\n  }, [])\n\n  const animatedProps = useAnimatedProps<Partial<CameraProps>>(\n    () => ({ zoom: zoom.value }),\n    [zoom]\n  )\n\n  if (device == null) return <LoadingView />\n  return (\n    <>\n      <ReanimatedCamera\n        style={StyleSheet.absoluteFill}\n        device={device}\n        isActive={true}\n        animatedProps={animatedProps}\n      />\n      <TouchableOpacity\n        style={styles.zoomButton}\n        onPress={onRandomZoomPress}>\n        <Text>Zoom randomly!</Text>\n      </TouchableOpacity>\n    </>\n  )\n}\n')),(0,i.kt)("h3",{id:"explanation"},"Explanation"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Camera")," was made animatable using ",(0,i.kt)("inlineCode",{parentName:"li"},"Reanimated.createAnimatedComponent")),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"zoom")," property is added to the whitelisted native props to make it animatable.",(0,i.kt)("blockquote",{parentName:"li"},(0,i.kt)("p",{parentName:"blockquote"},"Note that this might not be needed in the future, see: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/pull/1409"},"reanimated#1409")))),(0,i.kt)("li",{parentName:"ol"},"Using ",(0,i.kt)("a",{parentName:"li",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/useSharedValue"},(0,i.kt)("inlineCode",{parentName:"a"},"useSharedValue")),", we're creating a shared value that holds the value for the ",(0,i.kt)("inlineCode",{parentName:"li"},"zoom")," property."),(0,i.kt)("li",{parentName:"ol"},"Using the ",(0,i.kt)("a",{parentName:"li",href:"https://docs.swmansion.com/react-native-reanimated/docs/api/useAnimatedProps"},(0,i.kt)("inlineCode",{parentName:"a"},"useAnimatedProps"))," hook, we apply the shared value to Camera's ",(0,i.kt)("inlineCode",{parentName:"li"},"zoom")," property."),(0,i.kt)("li",{parentName:"ol"},"We apply the animated props to the ",(0,i.kt)("inlineCode",{parentName:"li"},"ReanimatedCamera")," component's ",(0,i.kt)("inlineCode",{parentName:"li"},"animatedProps")," property.")),(0,i.kt)("h3",{id:"logarithmic-scale"},"Logarithmic scale"),(0,i.kt)("p",null,"A Camera's ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom")," property is represented in a ",(0,i.kt)("strong",{parentName:"p"},"logarithmic scale"),". That means, increasing from ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"0.1")," will appear to be a much larger offset than increasing from ",(0,i.kt)("inlineCode",{parentName:"p"},"0.9")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"1"),". If you want to implement a zoom gesture (",(0,i.kt)("inlineCode",{parentName:"p"},"<PinchGestureHandler>"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"<PanGestureHandler>"),"), try to flatten the ",(0,i.kt)("inlineCode",{parentName:"p"},"zoom")," property to a ",(0,i.kt)("strong",{parentName:"p"},"linear scale")," by raising it ",(0,i.kt)("strong",{parentName:"p"},"exponentially"),". (",(0,i.kt)("inlineCode",{parentName:"p"},"zoom.value ** 2"),")"),(0,i.kt)("br",null),(0,i.kt)("h4",{id:"-next-section-camera-errors"},"\ud83d\ude80 Next section: ",(0,i.kt)("a",{parentName:"h4",href:"errors"},"Camera Errors")))}c.isMDXComponent=!0}}]);