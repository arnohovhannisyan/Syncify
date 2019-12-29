(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{141:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return a})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return l}));var o=t(1),r=t(9),i=(t(0),t(146)),s={id:"sync-pragmas",title:"Sync Pragmas"},a={id:"features/sync-pragmas",title:"Sync Pragmas",description:"Syncify supports per-os, per-host, and per-env inline settings and keybindings by using Sync Pragmas.",source:"@site/docs/features/sync-pragmas.md",permalink:"/vscode-syncify/docs/features/sync-pragmas",editUrl:"https://github.com/arnohovhannisyan/syncify-docs/edit/master/docs/features/sync-pragmas.md",lastUpdatedBy:"Arno Hovhannisyan",lastUpdatedAt:1577517425,sidebar:"docs",previous:{title:"Custom Extensions",permalink:"/vscode-syncify/docs/features/custom-extensions"}},c=[{value:"Ignoring Certain Settings",id:"ignoring-certain-settings",children:[]},{value:"Keywords",id:"keywords",children:[{value:"Per-Host",id:"per-host",children:[]},{value:"Per-OS",id:"per-os",children:[]},{value:"Per-Env",id:"per-env",children:[]}]},{value:"Example Syntax",id:"example-syntax",children:[{value:"Settings (settings.json)",id:"settings-settingsjson",children:[]},{value:"Keybindings (keybindings.json)",id:"keybindings-keybindingsjson",children:[]}]},{value:"Setup Hostname",id:"setup-hostname",children:[]}],p={rightToc:c},b="wrapper";function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)(b,Object(o.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Syncify supports per-os, per-host, and per-env inline settings and keybindings by using Sync Pragmas."),Object(i.b)("h2",{id:"ignoring-certain-settings"},"Ignoring Certain Settings"),Object(i.b)("p",null,"You can ignore certain settings in ",Object(i.b)("inlineCode",{parentName:"p"},"settings.json")," or ",Object(i.b)("inlineCode",{parentName:"p"},"keybindings.json")," by using the ",Object(i.b)("inlineCode",{parentName:"p"},"@sync-ignore")," pragma."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// settings.json\n\n{\n  // @sync-ignore\n  "window.zoomLevel": "1", /* won\'t upload to gist */\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// keybindings.json\n\n[\n  // @sync-ignore\n  {\n    "key": "alt+v",\n    "command": "workbench.action.closeActiveEditor",\n    "when": "editorTextFocus"\n  }, /* won\'t upload to gist */\n]\n')),Object(i.b)("h2",{id:"keywords"},"Keywords"),Object(i.b)("p",null,"There are 3 different keywords that can be used with Sync Pragmas:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"host"),Object(i.b)("li",{parentName:"ul"},"os"),Object(i.b)("li",{parentName:"ul"},"env")),Object(i.b)("h3",{id:"per-host"},"Per-Host"),Object(i.b)("p",null,"After ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"#setup-hostname"}),"configuring a hostname")," for your computer, you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"host")," keyword to only include certain parts of ",Object(i.b)("inlineCode",{parentName:"p"},"settings.json")," or ",Object(i.b)("inlineCode",{parentName:"p"},"keybindings.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// settings.json on "home" computer\n\n{\n  // @sync host=home\n  "window.zoomLevel": "1"\n}\n')),Object(i.b)("h3",{id:"per-os"},"Per-OS"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"os")," keyword can also be used to only include certain parts of ",Object(i.b)("inlineCode",{parentName:"p"},"settings.json")," or ",Object(i.b)("inlineCode",{parentName:"p"},"keybindings.json"),"."),Object(i.b)("p",null,"Currently, there are 3 operating systems supported:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"windows"),Object(i.b)("li",{parentName:"ul"},"linux"),Object(i.b)("li",{parentName:"ul"},"mac")),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// settings.json on linux\n\n{\n  // @sync os=linux\n  "window.zoomLevel": "1"\n}\n')),Object(i.b)("h3",{id:"per-env"},"Per-Env"),Object(i.b)("p",null,"Syncify can check for the existence of environmental variables using ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"https://nodejs.org/api/process.html#process_process_env"}),Object(i.b)("inlineCode",{parentName:"a"},"process.env"))," to only include certain parts of ",Object(i.b)("inlineCode",{parentName:"p"},"settings.json")," or ",Object(i.b)("inlineCode",{parentName:"p"},"keybindings.json"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// settings.json on a computer with the environmental variable "CODE_ZOOM_1" set\n\n{\n  // @sync env=CODE_ZOOM_1\n  "window.zoomLevel": "1"\n}\n')),Object(i.b)("h2",{id:"example-syntax"},"Example Syntax"),Object(i.b)("h3",{id:"settings-settingsjson"},"Settings (settings.json)"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// settings.json on "home" computer running Linux\n\n{\n  // @sync host=home os=linux\n  "window.zoomLevel": "1",\n  // @sync host=work os=windows\n  // "window.zoomLevel": "0",\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// settings.json on "work" computer running Windows\n\n{\n  // @sync host=home os=linux\n  // "window.zoomLevel": "1",\n  // @sync host=work os=windows\n  "window.zoomLevel": "0",\n}\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// settings.json on "work-pc" running Linux\n\n{\n  // @sync os=linux host=work-pc\n  "python.autoComplete.extraPaths": [\n    "/blah/blah/python2.7/site-packages",\n    "/usr/lib/python2.7/site-packages",\n  ],\n  // @sync os=windows host=home-pc\n  // "python.autoComplete.extraPaths": [\n  //   "C:\\\\Program Files\\\\blah\\\\site-packages",\n  // ],\n}\n')),Object(i.b)("h3",{id:"keybindings-keybindingsjson"},"Keybindings (keybindings.json)"),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// keybindings.json on "home" computer running macOS\n\n[\n  // @sync host=home os=mac\n  {\n    "key": "alt+v",\n    "command": "workbench.action.closeActiveEditor",\n    "when": "editorTextFocus"\n  },\n  // @sync host=work os=linux env=CODE_WORK\n  // {\n  //   "key": "alt+q",\n  //   "command": "workbench.action.closeActiveEditor",\n  //   "when": "editorTextFocus"\n  // }\n]\n')),Object(i.b)("pre",null,Object(i.b)("code",Object(o.a)({parentName:"pre"},{}),'// keybindings.json on "work" computer running Linux\n\n[\n  // @sync host=home os=mac\n  // {\n  //   "key": "alt+v",\n  //   "command": "workbench.action.closeActiveEditor",\n  //   "when": "editorTextFocus"\n  // },\n  // @sync host=work os=linux env=CODE_WORK\n  {\n    "key": "alt+q",\n    "command": "workbench.action.closeActiveEditor",\n    "when": "editorTextFocus"\n  }\n]\n')),Object(i.b)("h2",{id:"setup-hostname"},"Setup Hostname"),Object(i.b)("p",null,"Visit the ",Object(i.b)("a",Object(o.a)({parentName:"p"},{href:"../getting-started/configuring#hostname"}),"Settings Guide")," to learn how to configure the hostname."))}l.isMDXComponent=!0},146:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return y}));var o=t(0),r=t.n(o);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),b=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a({},n,{},e)),t},l=function(e){var n=b(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=Object(o.forwardRef)((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),l=b(t),u=o,m=l["".concat(s,".").concat(u)]||l[u]||d[u]||i;return t?r.a.createElement(m,a({ref:n},p,{components:t})):r.a.createElement(m,a({ref:n},p))}));function y(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,s=new Array(i);s[0]=m;var a={};for(var c in n)hasOwnProperty.call(n,c)&&(a[c]=n[c]);a.originalType=e,a[u]="string"==typeof e?e:o,s[1]=a;for(var p=2;p<i;p++)s[p]=t[p];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);