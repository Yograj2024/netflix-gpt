
export const SUPPORTED_LANGUAGES = [
    {
        lanCode: 'zh', // Chinese
        name: '中文', // Simplified: 中文 / Traditional: 中文繁體
    },
    {
        lanCode: 'en', // English
        name: 'English',
    },
    {
        lanCode: 'hin', // Hindi
        name: 'हिन्दी',
    },
    {
        lanCode: 'nep', // Nepali
        name: 'नेपाली',
    },
    {
        lanCode: 'jap', // Japanese
        name: '日本語',
    },
];

export const selectLanguageBtnText = {
    en  : { lanBtnText : "language" },
    hin : { lanBtnText : "भाषा" },
    zh  : { lanBtnText : "语言" },
    nep : { lanBtnText : "भाषा" },
    jap : { lanBtnText : "言語" }
}

export const gptSearchPageLan = {
    en :{
        h2          : "describe what you want to watch, we’ll suggest...",
        p           : "let us know your mood",
        h3          : "skip the endless scrolling, find and watching something you’ll love",
        getStartBtn : "get start" ,
        gptSearchPlaceHolder : "what wold you like to watch today...?" 
    },
    hin :{
        h2          :  "आप क्या देखना चाहते हैं, इसका वर्णन करें, हम सुझाव देंगे...",
        p           :  "हमें अपना विचार बताएं",
        h3          :  "स्क्रॉल करना छोड़ें, कुछ ऐसा खोजें और देखें जो आपको पसंद आए",
        getStartBtn :  "शुरू करें" ,
        gptSearchPlaceHolder : "आज आप क्या देखना चाहेंगे...?" ,
    },
    zh : {
        h2: "描述你想看的内容，我们会给你推荐……",
        p: "告诉我们你的心情",
        h3: "跳过无休止的滚动，找到并观看你会喜欢的内容",
        getStartBtn: "开始",
        gptSearchPlaceHolder: "你今天想看什么...?"
    },
    nep : {
        h2: "तपाईंले हेर्न चाहेको कुरा वर्णन गर्नुहोस्, हामी सिफारिस गर्नेछौं…",
        p: "हामीलाई तपाईंको मुड बताउनुहोस्",
        h3: "अनन्त स्क्रोलिङ छोड्नुहोस्, तपाईंलाई मनपर्ने केही खोज्नुहोस् र हेर्नुहोस्",
        getStartBtn: "सुरु गर्नुहोस्",
        gptSearchPlaceHolder: "आज तपाईं के हेर्न चाहनुहुन्छ...?"
    },
    jap : {
        h2: "観たいものを説明してください、私たちが提案します…",
        p: "あなたの気分を教えてください",
        h3: "終わりのないスクロールをやめて、きっと気に入る作品を見つけて観ましょう",
        getStartBtn: "開始",
        gptSearchPlaceHolder: "今日は何を観たいですか...?"
    }
}
