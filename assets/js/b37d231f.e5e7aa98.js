"use strict";(self.webpackChunkflutter_news_toolkit_docs=self.webpackChunkflutter_news_toolkit_docs||[]).push([[173],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=s(n),u=r,k=m["".concat(d,".").concat(u)]||m[u]||c[u]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9787:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={sidebar_position:4,description:"Learn how to configure or remove ads in your application."},l="Ads Setup",o={unversionedId:"project_configuration/ads",id:"project_configuration/ads",title:"Ads Setup",description:"Learn how to configure or remove ads in your application.",source:"@site/docs/project_configuration/ads.md",sourceDirName:"project_configuration",slug:"/project_configuration/ads",permalink:"/news_toolkit/project_configuration/ads",draft:!1,editUrl:"https://github.com/flutter/news_toolkit/tree/main/docs/docs/project_configuration/ads.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Learn how to configure or remove ads in your application."},sidebar:"tutorialSidebar",previous:{title:"Firebase Setup",permalink:"/news_toolkit/project_configuration/firebase"},next:{title:"Notifications Setup",permalink:"/news_toolkit/project_configuration/notifications"}},d={},s=[{value:"Google Ad Manager",id:"google-ad-manager",level:2},{value:"Google AdMob",id:"google-admob",level:2},{value:"Removing Ads",id:"removing-ads",level:2},{value:"Removing Banner Ads",id:"removing-banner-ads",level:3},{value:"Removing Interstitial Ads",id:"removing-interstitial-ads",level:3},{value:"Removing Sticky Ads",id:"removing-sticky-ads",level:3},{value:"Removing Rewarded Ads",id:"removing-rewarded-ads",level:3},{value:"Removing Advertisement Dependencies",id:"removing-advertisement-dependencies",level:3}],p={toc:s};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ads-setup"},"Ads Setup"),(0,r.kt)("h2",{id:"google-ad-manager"},"Google Ad Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Create apps for each platform and flavor (4 apps total)."),(0,r.kt)("li",{parentName:"ul"},"Link the apps to the appropriate Firebase project (",(0,r.kt)("inlineCode",{parentName:"li"},"Engage --\x3e AdMob"),")"),(0,r.kt)("li",{parentName:"ul"},"Share the app IDs with your developer team and store them within your app configuration file.")),(0,r.kt)("h2",{id:"google-admob"},"Google AdMob"),(0,r.kt)("h2",{id:"removing-ads"},"Removing Ads"),(0,r.kt)("p",null,"You may want to remove advertisements from your app. This section discusses how to remove the various advertisement types and their dependencies."),(0,r.kt)("h3",{id:"removing-banner-ads"},"Removing Banner Ads"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"static_news_data.dart")," file which your app displays contains banner ads by default. As you ",(0,r.kt)("a",{parentName:"p",href:"#implementing-an-api-data-source"},"implement your data source"),", do not insert ",(0,r.kt)("inlineCode",{parentName:"p"},"AdBlocks")," into the data returned from your data source. This will ensure that your app will not display ",(0,r.kt)("inlineCode",{parentName:"p"},"BannerAds"),"."),(0,r.kt)("h3",{id:"removing-interstitial-ads"},"Removing Interstitial Ads"),(0,r.kt)("p",null,"By default, interstitial ads are displayed upon article entry by ",(0,r.kt)("inlineCode",{parentName:"p"},"_ArticleViewState"),"'s ",(0,r.kt)("inlineCode",{parentName:"p"},"initState")," method in ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/article/view/article_page.dart"),". To remove interstitial ads entirely, you can delete"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"context.read<FullScreenAdsBloc>().add(const ShowInterstitialAdRequested());\n")),(0,r.kt)("h3",{id:"removing-sticky-ads"},"Removing Sticky Ads"),(0,r.kt)("p",null,"In the template, there is a sticky ad placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"ArticleContent")," inside ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/article/widgets/article_content.dart"),". In order to remove it, delete the ",(0,r.kt)("inlineCode",{parentName:"p"},"StickyAd()")," constructor call from the ",(0,r.kt)("inlineCode",{parentName:"p"},"ArticleContent")," widget's ",(0,r.kt)("inlineCode",{parentName:"p"},"Stack.children"),"."),(0,r.kt)("h3",{id:"removing-rewarded-ads"},"Removing Rewarded Ads"),(0,r.kt)("p",null,"Rewarded ads are built inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubscribeWithArticleLimitModal")," widget in the ",(0,r.kt)("inlineCode",{parentName:"p"},"lib/subscriptions/widgets/subscribe_with_article_limit_modal.dart")," file."),(0,r.kt)("p",null,"Remove the show rewarded ad button block within the ",(0,r.kt)("inlineCode",{parentName:"p"},"SubscribeWithArticleLimitModal")," widget to remove the rewarded ad option for premium articles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"Padding(\n    padding: const EdgeInsets.symmetric(\n        horizontal: AppSpacing.lg + AppSpacing.xxs,\n    ),\n    child: AppButton.transparentWhite(\n        key: const Key(\n            'subscribeWithArticleLimitModal_watchVideoButton',\n        ),\n        onPressed: () => context\n            .read<FullScreenAdsBloc>()\n            .add(const ShowRewardedAdRequested()),\n        child: Row(\n            mainAxisAlignment: MainAxisAlignment.center,\n            children: [\n                Assets.icons.video.svg(),\n                const SizedBox(width: AppSpacing.sm),\n                Text(watchVideoButtonTitle),\n            ],\n        ),\n    ),\n),\n")),(0,r.kt)("h3",{id:"removing-advertisement-dependencies"},"Removing Advertisement Dependencies"),(0,r.kt)("p",null,"If you are removing advertisements from your app, it's a good idea to remove all advertisement-related dependencies from your codebase."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Ad Source Code")),(0,r.kt)("p",null,"Remove the following directories and files entirely:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/lib/ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/test/ads")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/ads_consent_client")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/lib/src/widgets/banner_ad_content.dart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/test/src/widgets/banner_ad_content_test.dart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/lib/src/banner_ad.dart")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flutter_news_example/packages/news_blocks_ui/test/src/banner_ad_test.dart"))),(0,r.kt)("p",null,"Remove the noted snippets from the files below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/app/view/app.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"required AdsConsentClient adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"_adsConsentClient = adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final AdsConsentClient _adsConsentClient;\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"RepositoryProvider.value(value: _adsConsentClient),\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"BlocProvider(\n  create: (context) => FullScreenAdsBloc(\n    interstitialAdLoader: ads.InterstitialAd.load,\n    rewardedAdLoader: ads.RewardedAd.load,\n    adsRetryPolicy: const AdsRetryPolicy(),\n    localPlatform: const LocalPlatform(),\n  )\n    ..add(const LoadInterstitialAdRequested())\n    ..add(const LoadRewardedAdRequested()),\n  lazy: false,\n),\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/article/view/article_page.dart")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HasWatchedRewardedAdListener")," class"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"HasWatchedRewardedAdListener")," widget (retain the child ",(0,r.kt)("inlineCode",{parentName:"li"},"Scaffold")," widget)"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/main/main_development.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final adsConsentClient = AdsConsentClient();\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"adsConsentClient: adsConsentClient,\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/main/main_production.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final adsConsentClient = AdsConsentClient();\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"adsConsentClient: adsConsentClient,\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/onboarding/bloc/onboarding_bloc.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"required AdsConsentClient adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"_adsConsentClient = adsConsentClient,\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"on<EnableAdTrackingRequested>(\n  _onEnableAdTrackingRequested,\n  transformer: droppable(),\n);\n")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"final AdsConsentClient _adsConsentClient;\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"_onEnableAdTrackingRequested()")," function"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/onboarding/view/onboarding_page.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"adsConsentClient: context.read<AdsConsentClient>(),\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/article/widgets/article_content_item.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"else if (newsBlock is BannerAdBlock) {\n  return BannerAd(\n    block: newsBlock,\n    adFailedToLoadTitle: context.l10n.adLoadFailure,\n  );\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/lib/article/widgets/article_content_item.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"else if (newsBlock is BannerAdBlock) {\n  return BannerAd(\n    block: newsBlock,\n    adFailedToLoadTitle: context.l10n.adLoadFailure,\n  );\n}\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/packages/news_blocks_ui/lib/news_blocks_ui.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"export 'src/banner_ad.dart' show BannerAd;\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/packages/news_blocks_ui/lib/src/widgets/widges.dart")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"export 'banner_ad_content.dart';\n")))),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Pubspec Ad Depenedencies")),(0,r.kt)("p",null,"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"google_mobile_ads")," dependency from the ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/packages/news_blocks_ui/pubspec.yaml")," file, as well as all corresponding"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import  'package:google_mobile_ads/google_mobile_ads.dart'\n")),(0,r.kt)("p",null,"statements."),(0,r.kt)("p",null,"Remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"ads_consent_client")," dependency from ",(0,r.kt)("inlineCode",{parentName:"p"},"flutter_news_example/pubspec.yaml"),", as well as all ",(0,r.kt)("inlineCode",{parentName:"p"},"ads_consent_client")," and all ",(0,r.kt)("inlineCode",{parentName:"p"},"ads")," import statements:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-dart"},"import 'package:ads_consent_client/ads_consent_client.dart';\nimport 'package:flutter_news_template/ads/ads.dart';\n")))}c.isMDXComponent=!0}}]);