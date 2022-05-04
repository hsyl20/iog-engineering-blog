"use strict";(self.webpackChunkengineering_iog_io=self.webpackChunkengineering_iog_io||[]).push([[269],{3905:function(e,t,a){a.d(t,{Zo:function(){return g},kt:function(){return m}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function n(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var h=r.createContext({}),o=function(e){var t=r.useContext(h),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},g=function(e){var t=o(e.components);return r.createElement(h.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,l=e.originalType,h=e.parentName,g=n(e,["components","mdxType","originalType","parentName"]),c=o(a),m=i,u=c["".concat(h,".").concat(m)]||c[m]||p[m]||l;return a?r.createElement(u,s(s({ref:t},g),{},{components:a})):r.createElement(u,s({ref:t},g))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=a.length,s=new Array(l);s[0]=c;var n={};for(var h in t)hasOwnProperty.call(t,h)&&(n[h]=t[h]);n.originalType=e,n.mdxType="string"==typeof e?e:i,s[1]=n;for(var o=2;o<l;o++)s[o]=a[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},7729:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return n},contentTitle:function(){return h},metadata:function(){return o},assets:function(){return g},toc:function(){return p},default:function(){return m}});var r=a(7462),i=a(3366),l=(a(7294),a(3905)),s=["components"],n={slug:"2022-03-01-2021-ghc-update",title:"2021 GHC update",authors:[],tags:["ghc"],custom_edit_url:null},h=void 0,o={permalink:"/2022-03-01-2021-ghc-update",source:"@site/blog/2022-03-01-2021-ghc-update-g8gkJay36G-import.md",title:"2021 GHC update",description:"IOG is committed to improving Haskell developer experience, both by sponsoring the Haskell Foundation and by directly founding a team committed to this task: the Haskell DX team.",date:"2022-03-01T00:00:00.000Z",formattedDate:"March 1, 2022",tags:[{label:"ghc",permalink:"/tags/ghc"}],readingTime:8.415,truncated:!1,authors:[],frontMatter:{slug:"2022-03-01-2021-ghc-update",title:"2021 GHC update",authors:[],tags:["ghc"],custom_edit_url:null},prevItem:{title:"GHC February 2022 Update",permalink:"/2022-03-09-ghc-february-2022-update"},nextItem:{title:"haskell.nix February Update",permalink:"/2022-03-01-haskell-nix-february-update"}},g={authorsImageUrls:[]},p=[{value:"Code generation",id:"code-generation",children:[],level:2},{value:"Linker",id:"linker",children:[],level:2},{value:"Cross-compilation",id:"cross-compilation",children:[],level:2},{value:"GHCJS",id:"ghcjs",children:[],level:2},{value:"Windows",id:"windows",children:[],level:2},{value:"Numeric",id:"numeric",children:[],level:2},{value:"Technical debt &amp; modularity",id:"technical-debt--modularity",children:[],level:2},{value:"Performance",id:"performance",children:[],level:2},{value:"RTS",id:"rts",children:[],level:2},{value:"Build system / CI",id:"build-system--ci",children:[],level:2},{value:"Misc",id:"misc",children:[],level:2}],c={toc:p};function m(e){var t=e.components,a=(0,i.Z)(e,s);return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"IOG is committed to improving Haskell developer experience, both by ",(0,l.kt)("a",{parentName:"p",href:"https://iohk.io/en/blog/posts/2020/11/04/iohk-sponsors-new-haskell-foundation"},"sponsoring the Haskell Foundation")," and by directly founding a team committed to this task: the Haskell DX team."),(0,l.kt)("p",null,"The team now tries to provide regular (monthly) updates about its work. This post is a bit longer because it covers all of 2021 which has not been covered anywhere else."),(0,l.kt)("h2",{id:"code-generation"},"Code generation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Added a new backend for AArch64 architectures, especially to support Apple\u2019s M1. Previously AArch64 was only supported via the LLVM based backend which is much slower. ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5884"},"!5884"),"]"),(0,l.kt)("li",{parentName:"ul"},"Added support for Apple\u2019s M1 calling convention. In GHC 9.2.1 it implied making lifted sized types (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"Word8"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Int16"),"...) use their unlifted counterparts (e.g. ",(0,l.kt)("inlineCode",{parentName:"li"},"Word8#"),", ",(0,l.kt)("inlineCode",{parentName:"li"},"Int16#"),"...); in GHC 8.10.7 \u2013 a minor release \u2013\xa0 a less invasive but more fragile solution was implemented ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/commit/c49250d88915db6acf88d2574db827cc2c4fa080"},"commit"),"]","."),(0,l.kt)("li",{parentName:"ul"},"Fixed a very old GHC issue ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/1257"},"#1257"),"]"," by making GHCi support unboxed values ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4412"},"!4412"),"]",": ByteCode is now generated from STG instead of directly from Core. It allows more Haskell codes to be supported by HLS and it even allows GHC code to be loaded into GHCi ","[",(0,l.kt)("a",{parentName:"li",href:"https://mail.haskell.org/pipermail/ghc-devs/2021-October/020345.html"},"link"),"]","."),(0,l.kt)("li",{parentName:"ul"},"Fixed a bug in the Cmm sinking pass that led to register corruption at runtime with the C backend. Even if we don\u2019t use the C backend, fixing this avoided spurious errors in CI jobs using it ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19237"},"#19237"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5755/"},"!5755"),"]"),(0,l.kt)("li",{parentName:"ul"},"Fixed a register clobbering issue for 64-bit comparisons generated with the 32-bit x86 NCG backend ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/commit/ecd6d14215eb40ac441c075e432ddaa0237f3c72"},"commit"),"]","."),(0,l.kt)("li",{parentName:"ul"},"Fixed generation of switches on sized literals in StgToCmm ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6211"},"!6211"),"]"),(0,l.kt)("li",{parentName:"ul"},"Fixed LLVM shifts ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19215"},"#19215"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4822"},"!4822"),"]")),(0,l.kt)("h2",{id:"linker"},"Linker"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed an off-by-one error in the MachO (Darwin) linker ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6041/"},"!6041"),"]",". The fix is simple but the debugging session was epic!"),(0,l.kt)("li",{parentName:"ul"},"Fix to avoid linking plugin units unconditionally with target code, which is wrong in general but even more so when GHC is used as a cross-compiler: plugins and target code aren\u2019t for the same platform ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20218"},"#20218"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6496"},"!6496"),"]")),(0,l.kt)("h2",{id:"cross-compilation"},"Cross-compilation"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"With John Ericson (Obsidian Systems) we finally made GHC independent of its target ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6791"},"!6791"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6539"},"!6539"),"]",". It means that there is no need to rebuild GHC to make it target another platform, so it now becomes possible to add support for a ",(0,l.kt)("inlineCode",{parentName:"li"},"--target=...")," command-line flag ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/11470"},"#11470"),"]",". It also means that a cross-compiling GHC could build plugins for its host platform in addition to building code for its target platform."),(0,l.kt)("li",{parentName:"ul"},"A side-effect of the previous bullet is that primops\u2019 types are now platform independent. Previously some of them would use Word64 on 32-bit architectures and Word on 64-bit architectures: now Word64 is used on every platform. A side-effect of this side-effect is that we had to make Word64 as efficient as Word: it now benefits from the same optimizations (constant folding ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19024"},"#19024"),", etc.). On 32-bit platforms, it reduced allocations by a fair amount in some cases: e.g. -25.8% in T9203 test and -11.5% when running haddock on base library ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6167"},"!6167"),"]",". We hope it will benefit other 32-bit architectures such as JavaScript or WebAssembly."),(0,l.kt)("li",{parentName:"ul"},"GHC built as a cross-compiler doesn\u2019t support compiler plugins ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/14335"},"#14335"),"]",". We have been working on refactoring GHC to make it support two separate environments in a given compiler session \u2013 one for target code and another for the plugin/compiler code. The implementation in ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6748"},"!6748"),"]"," conflicts quite a lot with the support of multiple home-units that was added at about the same time. GHC needs to be refactored a lot more to correctly support this approach, so instead we implemented a different approach to load plugins which is more low-level and bypasses the issue ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20964"},"#20964"),", ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7377"},"!7377"),"]","."),(0,l.kt)("li",{parentName:"ul"},"We made GHC consider the target platform instead of the host platform in guessOutputFile ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6116"},"!6116"),"]"),(0,l.kt)("li",{parentName:"ul"},"Use target platform instead of host platform to detect literal overflows ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/17336"},"#17336"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4986"},"!4986"),"]")),(0,l.kt)("h2",{id:"ghcjs"},"GHCJS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We updated GHCJS to use GHC 8.10.7 ","[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ghcjs/ghcjs/tree/ghc-8.10"},"branch"),"]"),(0,l.kt)("li",{parentName:"ul"},"We worked on making GHCJS\u2019s codebase more suitable for integration into GHC: reducing the number of dependencies, avoiding the use of Template Haskell, reusing GHC\u2019s build system, etc. There is now a GHCJS integrated into a GHC 8.10.7 fork ","[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/ghcjs/ghc/tree/ghc-8.10-ghcjs"},"branch"),"]","."),(0,l.kt)("li",{parentName:"ul"},"This experience led us to plan the realization of a JS backend into GHC head based on GHCJS. More information about this topic in our next report."),(0,l.kt)("li",{parentName:"ul"},"We worked on making GHC\u2019s testsuite pass with GHCJS, triaging tests that legitimately fail on a JS platform from tests revealing real GHCJS issues. ",(0,l.kt)("strong",{parentName:"li"},"[","LINK","]"))),(0,l.kt)("h2",{id:"windows"},"Windows"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"We seemed to be the first to try to build GHC on Windows with the updated GNU autotools 2.70 and this release made a breaking change to the way auxiliary files (config.guess, config.sub) were handled, breaking GHC\u2019s build (",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19189#note_332168"},"#19189"),"). The root cause of the issue couldn\u2019t be easily solved so we modified GHC\u2019s build system to avoid the use of these auxiliary files, bypassing the issue. Most GHC devs won\u2019t ever notice that something was broken to begin with when they will update their GNU toolchain on Windows. ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4768"},"!4768"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4987"},"!4987"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5065/"},"!5065"),"]"),(0,l.kt)("li",{parentName:"ul"},"Fixed cross-compilation of GHC from Linux to Windows using Hadrian ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20657"},"#20657"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6945"},"!6945"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6958"},"!6958"),"]")),(0,l.kt)("h2",{id:"numeric"},"Numeric"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed Natural to Float/Double conversions to align with the method used for Integer to Float/Double and added missing rewrite rules ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6004/"},"!6004"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made most bignum literals be desugared into their final form in HsToCore stage instead of CoreToStg stage to ensure that Core optimizations were applied correctly to them ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20245"},"#20245"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6376"},"!6376"),"]"),(0,l.kt)("li",{parentName:"ul"},"Some constant folding rules were missing and were added:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"bitwise ",(0,l.kt)("inlineCode",{parentName:"li"},"and")," primops when applied to a full mask (e.g. 0xFF for a 8-bit word). ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20448"},"#20448"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6629"},"!6629"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"negate")," primops ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20347"},"#20347"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6535"},"!6535")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"timesInt2#")," primop ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20374"},"#20374"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6531"},"!6531")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"ctz#/clz#/popCnt#")," ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20376"},"#20376"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6532"},"!6532")),(0,l.kt)("li",{parentName:"ul"},"missing rewrite rule to make the implementation of ",(0,l.kt)("inlineCode",{parentName:"li"},"nat2Word#")," efficient ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/15547"},"#15547"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6847"},"!6847"),"]"),(0,l.kt)("li",{parentName:"ul"},"rules for ",(0,l.kt)("inlineCode",{parentName:"li"},"Natural")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/15821"},"#15821"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4837"},"!4837"),"]"))),(0,l.kt)("li",{parentName:"ul"},"Allowed some ghc-bignum operations to inline to get better performance, while still managing to keep constant-folding working ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19641"},"#19641"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6677"},"!6677"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6696"},"!6696"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6306"},"!6306"),"]",". There is some work left to do (cf ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20361"},"#20361"),") but it is blocked by ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19313"},"#19313")," which in turn is blocked by ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20554"},"#20554")," which should be fixed soon (",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6865"},"!6865"),", thanks Joachim!)."),(0,l.kt)("li",{parentName:"ul"},"The ubiquitous ",(0,l.kt)("inlineCode",{parentName:"li"},"fromIntegral")," function used to have many associated rewrite rules to make it fast (avoiding heap allocation of a passthrough Integer when possible) that were difficult to manage due to the combinatorial number of needed rules (",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19907"},"#19907"),", ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20062"},"#20062"),"). We found a way to remove all these rules (",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5862"},"!5862"),").")),(0,l.kt)("h2",{id:"technical-debt--modularity"},"Technical debt & modularity"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Made several component of the compiler independent of ",(0,l.kt)("inlineCode",{parentName:"li"},"DynFlags")," (parsed command-line flags):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TmpFS (dealing with temporary files) ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6186"},"!6186"),"]"),(0,l.kt)("li",{parentName:"ul"},"Diagnostic options ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6043"},"!6043"),"]"),(0,l.kt)("li",{parentName:"ul"},"Tracing functions ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5970"},"!5970"),"]"),(0,l.kt)("li",{parentName:"ul"},"Logger ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4757"},"!4757"),"]"),(0,l.kt)("li",{parentName:"ul"},"Logger & Parser ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5845"},"!5845"),"]"),(0,l.kt)("li",{parentName:"ul"},"Hooks ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4812"},"!4812"),"]"))),(0,l.kt)("li",{parentName:"ul"},"Made the handling of \u201cpackage imports\u201d less fragile ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6586"},"!6586"),"]"," and refactored some code related to dependencies and recompilation avoidance ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6528"},"!6528"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6346"},"!6346"),"]","."),(0,l.kt)("li",{parentName:"ul"},"Abstracted plugin related fields from HscEnv ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7175"},"!7175"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made a home-unit optional in several places ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7013/"},"!7013"),"]",": the home-unit should only be required when compiling code, not when loading code (e.g. when loading plugins in cross-compilers ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/14335"},"#14335"),")."),(0,l.kt)("li",{parentName:"ul"},"Made GHC no longer expose the (wrong) selected ghc-bignum backend with ",(0,l.kt)("inlineCode",{parentName:"li"},"ghc --info"),". ghc-bignum now exposes a backendName function for this purpose ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20495"},"#20495"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6903"},"!6903"),"]"),(0,l.kt)("li",{parentName:"ul"},"Moved ",(0,l.kt)("inlineCode",{parentName:"li"},"tmpDir")," from Settings to ",(0,l.kt)("inlineCode",{parentName:"li"},"DynFlags")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6297/"},"!6297"),"]"),(0,l.kt)("li",{parentName:"ul"},"Removed use of ",(0,l.kt)("inlineCode",{parentName:"li"},"unsafePerfomIO")," in ",(0,l.kt)("inlineCode",{parentName:"li"},"getProgName")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6137/"},"!6137"),"]"),(0,l.kt)("li",{parentName:"ul"},"Refactored warning flags handling ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5815"},"!5815"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made assertions use normal functions instead of CPP ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5693"},"!5693"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made the interpreter more independent of the driver ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5627"},"!5627"),"]"),(0,l.kt)("li",{parentName:"ul"},"Replaced ",(0,l.kt)("inlineCode",{parentName:"li"},"ptext . sLit")," with ",(0,l.kt)("inlineCode",{parentName:"li"},"text")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5625"},"!5625"),"]"),(0,l.kt)("li",{parentName:"ul"},"Removed broken \u201cdynamic-by-default\u201d setting ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/16782"},"#16782"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5467"},"!5467"),"]"),(0,l.kt)("li",{parentName:"ul"},"Abstracted some components from the compiler session state (",(0,l.kt)("inlineCode",{parentName:"li"},"HscEnv"),"):",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"unit-related fields into a new ",(0,l.kt)("inlineCode",{parentName:"li"},"UnitEnv"),"datatype ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5425"},"!5425"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"FinderCache")," and ",(0,l.kt)("inlineCode",{parentName:"li"},"NameCache"),"[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4951"},"!4951"),"]"),(0,l.kt)("li",{parentName:"ul"},"Loader state ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5287"},"!5287"),"]"))),(0,l.kt)("li",{parentName:"ul"},"Removed the need for a home unit-id to initialize an external package state (EPS) ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5043"},"!5043"),"]"),(0,l.kt)("li",{parentName:"ul"},"Refactored ",(0,l.kt)("inlineCode",{parentName:"li"},"-dynamic-too")," handling ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19264"},"#19264"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4905"},"!4905"),"]")),(0,l.kt)("h2",{id:"performance"},"Performance"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Made ",(0,l.kt)("inlineCode",{parentName:"li"},"divInt#, modInt# and divModInt#")," branchless and inlineable ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/18067"},"#18067"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19636"},"#19636"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/3229"},"!3229"),"]"),(0,l.kt)("li",{parentName:"ul"},"Fixed Integral instances for Word8/16/32 and ",(0,l.kt)("inlineCode",{parentName:"li"},"showWord")," to use ",(0,l.kt)("inlineCode",{parentName:"li"},"quotRemWordN")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5891"},"!5891"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5846/"},"!5846"),"]"),(0,l.kt)("li",{parentName:"ul"},"Improved performance of occurrence analysis ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19989"},"#19989"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5977"},"!5977"),"]"),(0,l.kt)("li",{parentName:"ul"},"Fixed unnecessary pinned allocations in ",(0,l.kt)("inlineCode",{parentName:"li"},"appendFS")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5989/"},"!5989"),"]"),(0,l.kt)("li",{parentName:"ul"},"Added a rewrite rules for string literals:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Concatenation of string literals ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20174"},"#20174"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/16373"},"#16373"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6259"},"!6259"),"]"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"(++) . unpackCString# \u21d2 unpackAppendCString#")," leading to a 15% reduction in compilation time on a specific example. ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6619"},"!6619"),"]"),(0,l.kt)("li",{parentName:"ul"},"Compute SDoc literal size at compilation time ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19266"},"#19266"),", ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4901"},"!4901"),"]"))),(0,l.kt)("li",{parentName:"ul"},"Fix for Dwarf strings generated by the NCG that were unnecessarily retained in the FastString table ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6621"},"!6621"),"]"),(0,l.kt)("li",{parentName:"ul"},"Worked on improving inlining heuristics by taking into account applied constructors at call sites ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20516"},"#20516"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6732"},"!6732"),"]",". More work is needed though."),(0,l.kt)("li",{parentName:"ul"},"Fixed ",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20857"},"#20857")," by making the Id cache for primops used more often ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7241"},"!7241"),"]"),(0,l.kt)("li",{parentName:"ul"},"Replaced some avoidable uses of ",(0,l.kt)("inlineCode",{parentName:"li"},"replicateM . length")," with more efficient code ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7198"},"!7198"),"]",". No performance gain this time but the next reader of this code won\u2019t have to wonder if fixing it could improve performance."),(0,l.kt)("li",{parentName:"ul"},"Made ",(0,l.kt)("inlineCode",{parentName:"li"},"exprIsCheapX")," inline for modest but easy perf improvements ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7183"},"!7183"),"]"),(0,l.kt)("li",{parentName:"ul"},"Removed an allocation in the code used to write text on a Handle (used by putStrLn, etc.) ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7160"},"!7160"),"]"),(0,l.kt)("li",{parentName:"ul"},"Replaced inefficient list operations with more efficient ",(0,l.kt)("inlineCode",{parentName:"li"},"Monoid ([a],[b])")," operations in the driver ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/7069"},"!7069"),"]",", leading to 1.9% reduction in compiler allocations in MultiLayerModules test."),(0,l.kt)("li",{parentName:"ul"},"Disabled some callstack allocations in non-debug builds ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6252/"},"!6252"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made file copy in GHC more efficient ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5801"},"!5801"),"]"),(0,l.kt)("li",{parentName:"ul"},"Miscellaneous pretty-printer enhancements ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5226"},"!5226"),"]"),(0,l.kt)("li",{parentName:"ul"},"Type tidying perf improvements with strictness ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/14738"},"#14738"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4892"},"!4892"),"]")),(0,l.kt)("h2",{id:"rts"},"RTS"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed issues related to the RTS\u2019s ticker",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Fixed some races ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/18033"},"#18033"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20132"},"#20132"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6201"},"!6201"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made the RTS open the file descriptor for its timer (",(0,l.kt)("inlineCode",{parentName:"li"},"timerfd"),") on Linux synchronously to avoid weird interactions with Haskell code manipulating file descriptors ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20618"},"#20618"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6902"},"!6902"),"]","."))),(0,l.kt)("li",{parentName:"ul"},"Moved GHC\u2019s global variables used to manage Uniques into the RTS to fix plugin issues ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19940"},"#19940"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5900"},"!5900"),"]")),(0,l.kt)("h2",{id:"build-system--ci"},"Build system / CI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Fixed Hadrian output to display warnings and errors after the multi screen long command lines ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/20490"},"#20490"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/6690"},"!6690"),"]"),(0,l.kt)("li",{parentName:"ul"},"Avoided the installation of a global ",(0,l.kt)("inlineCode",{parentName:"li"},"platformConstants")," file; made GHC load constants from the RTS unit instead, allowing it to be reinstalled with different constants ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5427"},"!5427"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made ",(0,l.kt)("inlineCode",{parentName:"li"},"deriveConstants")," output its file atomically ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/19684"},"#19684"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5520"},"!5520"),"]"),(0,l.kt)("li",{parentName:"ul"},"Made compression with ",(0,l.kt)("inlineCode",{parentName:"li"},"xz")," faster on CI ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/5066"},"!5066"),"]"),(0,l.kt)("li",{parentName:"ul"},"Don\u2019t build extra object with ",(0,l.kt)("inlineCode",{parentName:"li"},"-no-hs-main")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/18938"},"#18938"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4974"},"!4974"),"]"),(0,l.kt)("li",{parentName:"ul"},"Add ",(0,l.kt)("inlineCode",{parentName:"li"},"hi-boot")," dependencies with ",(0,l.kt)("inlineCode",{parentName:"li"},"ghc -M")," ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/issues/14482"},"#14482"),",",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4876"},"!4876"),"]")),(0,l.kt)("h2",{id:"misc"},"Misc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Stack: fixed interface reading in ",(0,l.kt)("inlineCode",{parentName:"li"},"hi-file-parser")," to support GHC 8.10 and 9.0 ","[",(0,l.kt)("a",{parentName:"li",href:"https://github.com/commercialhaskell/hi-file-parser/pull/2"},"PR"),", ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/commercialhaskell/stack/issues/5134"},"Stack#5134"),"]"),(0,l.kt)("li",{parentName:"ul"},"Enhanced pretty-printing of coercions in Core dumps ","[",(0,l.kt)("a",{parentName:"li",href:"https://gitlab.haskell.org/ghc/ghc/-/merge_requests/4856"},"!4856"),"]")))}m.isMDXComponent=!0}}]);