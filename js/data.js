// Ramesh Raj (तेवरीकार रमेशराज) - Comprehensive Literary Portfolio Data

const AUTHOR_DATA = {
    name: {
        hi: "रमेशराज तेवरीकार",
        en: "Rameshraj Tewarikar"
    },
    title: {
        hi: "तेवरी आन्दोलन के जनक, वरिष्ठ साहित्यकार एवं चिंतक",
        en: "Pioneer of the Tewari Movement, Eminent Hindi Author & Thinker"
    },
    bioShort: {
        hi: "हिन्दी साहित्य में 'तेवरी आन्दोलन' एवं 'विरोध-रस' के प्रतिष्ठापक, 25 से अधिक कालजयी कृतियों के सर्जक, तीन दशकों से 'तेवरीपक्ष' पत्रिका के यशस्वी सम्पादक।",
        en: "Founder of the revolutionary 'Tewari Movement' and 'Virodh-Ras' in Hindi literature, author of over 25 published literary masterpieces, and editor of the prestigious literary journal 'Tewaripaksh' for over three decades."
    },
    profileUrl: "https://www.blogger.com/profile/10299195093677463730",
    location: "अलीगढ़, उत्तर प्रदेश, भारत (Aligarh, Uttar Pradesh, India)",
    email: "rameshrajtewarikar@gmail.com",
    phone: "+91 94122 72762",
    stats: [
        { count: "25+", labelHi: "प्रकाशित पुस्तकें", labelEn: "Published Works" },
        { count: "39+", labelHi: "सक्रिय ब्लॉग मंच", labelEn: "Literary Blogs" },
        { count: "30+", labelHi: "वर्ष सम्पादकीय साधना", labelEn: "Years Editing 'Tewaripaksh'" },
        { count: "15+", labelHi: "राष्ट्रीय साहित्य सम्मान", labelEn: "National Honors" }
    ],
    aboutLong: {
        hi: [
            "रमेशराज हिन्दी साहित्य के उन विरल युग-सर्जकों में हैं जिन्होंने समकालीन हिन्दी कविता को जन-प्रतिरोध और सामाजिक चेतना की नई धार दी। उन्होंने पारंपरिक ग़ज़ल और गीत की सीमाओं से आगे बढ़कर 'तेवरी' विधा को एक सशक्त जन-आन्दोलन का रूप दिया।",
            "काव्यशास्त्र में 'विरोध-रस' तथा छन्द-विधान में 'जनक छन्द' एवं 'नव कुण्डलिया राज छन्द' की मौलिक स्थापना कर उन्होंने साहित्य की शास्त्रीयता को जनसरोकारों से जोड़ा। उनकी रचनाएँ शोषितों, पीड़ितों और आम नागरिकों की मुखर आवाज़ हैं।",
            "गत तीन दशकों से वे 'तेवरीपक्ष' पत्रिका का सम्पादन कर रहे हैं, जिसने देश भर के सैकड़ों नए और प्रतिष्ठित रचनाकारों को सामाजिक सरोकारों से ओत-प्रोत सृजन का मंच दिया है। उनके द्वारा संचालित 39 से अधिक ब्लॉग्स आज दुनिया भर में हिन्दी साहित्य के शोधार्थियों एवं पाठकों के लिए एक विशाल डिजिटल ग्रंथालय हैं।"
        ],
        en: [
            "Rameshraj stands among the rare visionaries of contemporary Hindi literature who infused poetry with the fierce spirit of public conscience and resistance. Moving beyond conventional forms, he pioneered the nationwide 'Tewari Movement'.",
            "By establishing the aesthetic principle of 'Virodh-Ras' (Aesthetic of Dissent) and formulating new poetic meters such as 'Janak Chhand' and 'Nav Kundaliya Raj Chhand', he bridged classical poetics with grassroots struggles.",
            "For over 30 years, he has edited the acclaimed literary journal 'Tewaripaksh', nurturing generations of progressive poets. His 39+ digital literary blogs serve as a rich open-access archive for scholars, critics, and poetry enthusiasts globally."
        ]
    }
};

// Hero Carousel Slider Data (मुख्य पृष्ठ चित्र प्रदर्शनी - drnamitasingh.com style)
const HERO_SLIDER_DATA = [
    {
        id: "slide-1",
        image: "assets/images/gallery/author-speaking.jpg",
        tagHi: "वरिष्ठ साहित्यकार",
        tagEn: "Senior Author & Thinker",
        titleHi: "रमेशराज तेवरीकार — तेवरी आन्दोलन के जनक",
        titleEn: "Rameshraj Tewarikar — Pioneer of Tewari Movement",
        captionHi: "वरिष्ठ साहित्यकार, कवि एवं 'तेवरीपक्ष' पत्रिका के 30+ वर्षों से प्रधान सम्पादक",
        captionEn: "Eminent Hindi Author, Poet & Chief Editor of Tewaripaksh Literary Journal for 30+ Years"
    },
    {
        id: "slide-2",
        image: "assets/images/gallery/author-lamp-ceremony.jpg",
        tagHi: "उद्घाटन समारोह",
        tagEn: "Inaugural Ceremony",
        titleHi: "साहित्यिक अनुष्ठान एवं दीप प्रज्ज्वलन",
        titleEn: "Ceremonial Lamp Lighting at Literary Conclave",
        captionHi: "अखिल भारतीय साहित्यिक सम्मेलन के गरिमामयी उद्घाटन अवसर पर पारम्परिक दीप प्रज्ज्वलन",
        captionEn: "Shri Rameshraj lighting the ceremonial lamp at the auspicious inaugural of the national literary festival"
    },
    {
        id: "slide-3",
        image: "assets/images/gallery/author-vintage-recitation.jpg",
        tagHi: "दुर्लभ ऐतिहासिक धरोहर",
        tagEn: "Rare Archival Heritage",
        titleHi: "दुर्लभ ऐतिहासिक चित्र: युवावस्था में काव्य-पाठ",
        titleEn: "Archival Heritage: Poetic Recitation in Youth",
        captionHi: "तेवरी आन्दोलन के आरंभिक वर्षों में अखिल भारतीय कवि सम्मेलन मंच से ओजस्वी काव्य-पाठ की ऐतिहासिक झलक",
        captionEn: "Rare vintage archival photograph of young Rameshraj reciting revolutionary verses from the stage"
    },
    {
        id: "slide-4",
        image: "assets/images/gallery/author-podium-address.jpg",
        tagHi: "मंच उद्बोधन",
        tagEn: "Conference Dais",
        titleHi: "राष्ट्रीय साहित्य मंच से ओजस्वी संबोधन",
        titleEn: "Address from National Conference Dais",
        captionHi: "साहित्यिक संगोष्ठी के मुख्य मंच से रचनाकारों, समीक्षकों और शोधार्थियों को संबोधित करते हुए",
        captionEn: "Inspiring keynote speech from the conference dais during a national Hindi literary summit"
    }
];

// Books Catalog
const BOOKS_DATA = [
    {
        id: "virodh-ras",
        titleHi: "विरोध - रस",
        titleEn: "Virodh-Ras (Aesthetics of Dissent)",
        category: "research",
        categoryNameHi: "शोध एवं आलोचना",
        categoryNameEn: "Research & Criticism",
        year: "2012",
        publisher: "सार्थक सृजन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/book_1.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhgE_7_bQWn36iK_rWJ5sN0fQ/s320/virodhras.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2012/03/blog-post.html",
        pages: "192",
        isbn: "978-81-923451-0-2",
        blurbHi: "हिन्दी काव्यशास्त्र में नवरसों के उपरांत 'विरोध-रस' की सैद्धांतिक एवं शास्त्रीय स्थापना करने वाला ऐतिहासिक ग्रंथ।",
        blurbEn: "A historic treatise establishing the theoretical foundation of 'Virodh-Ras' (Aesthetic of Dissent) in Hindi poetics.",
        detailsHi: "इस ग्रंथ में लेखक ने विस्तार से सिद्ध किया है कि जनचेतना और प्रतिरोध केवल एक भाव नहीं, अपितु काव्य का एक स्वतंत्र और पूर्ण रस है। साहित्य-जगत में यह पुस्तक एक युगांतरकारी विमर्श के रूप में प्रतिष्ठित है।"
    },
    {
        id: "vichar-aur-ras",
        titleHi: "विचार और रस",
        titleEn: "Vichar aur Ras (Thought and Rasa)",
        category: "research",
        categoryNameHi: "शोध एवं आलोचना",
        categoryNameEn: "Research & Criticism",
        year: "2014",
        publisher: "सार्थक सृजन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/book_2.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgkY302/s320/vichar.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2014/05/blog-post.html",
        pages: "160",
        isbn: "978-81-923451-4-0",
        blurbHi: "काव्य में वैचारिक चेतना और रस-निष्पत्ति के अंतर्संबंधों पर गहन व विश्लेषणात्मक चिंतन।",
        blurbEn: "An analytical exploration of the interplay between intellectual consciousness and emotional Rasa in contemporary poetry.",
        detailsHi: "कविता केवल रसास्वादन नहीं है, बल्कि वह विचार की अग्नि से तपकर समाज का पथ-प्रदर्शन करती है। इस कृति में रमेशराज ने इसी विचार-दर्शन की सांगोपांग मीमांसा की है।"
    },
    {
        id: "udho-kahiyo-jaay",
        titleHi: "ऊधौ कहियो जाय",
        titleEn: "Udho Kahiyo Jaay",
        category: "tewari",
        categoryNameHi: "तेवरी संग्रह",
        categoryNameEn: "Tewari Collection",
        year: "2008",
        publisher: "परिवर्तन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/book_3.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj7b3/s320/udho.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2012/03/blog-post_25.html",
        pages: "128",
        isbn: "978-81-89745-12-8",
        blurbHi: "समकालीन विद्रूपताओं और राजनीतिक पाखंड पर तीखे तेवर से प्रहार करता चर्चित तेवरी संग्रह।",
        blurbEn: "A sharp, thought-provoking collection of Tewari poems targeting political hypocrisy and societal ironies.",
        detailsHi: "सूरदास के भ्रमरगीत के मिथकीय संदर्भ को आधुनिक युग की विसंगतियों से जोड़ते हुए रमेशराज ने जन-समस्याओं को अद्भुत धार दी है।"
    },
    {
        id: "de-lanka-mein-aag",
        titleHi: "दे लंका में आग",
        titleEn: "De Lanka Mein Aag",
        category: "tewari",
        categoryNameHi: "तेवरी संग्रह",
        categoryNameEn: "Tewari Collection",
        year: "2010",
        publisher: "सार्थक सृजन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/book_4.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj0301/s320/lanka.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2012/03/blog-post_26.html",
        pages: "144",
        isbn: "978-81-923451-2-6",
        blurbHi: "अन्याय और भ्रष्टाचार के दुर्ग पर शब्द-बाणों से प्रहार करती ओजस्वी तेवरियों का संकलन।",
        blurbEn: "A resonant anthology of insurgent verses taking on corruption, despotism, and modern socio-political citadels.",
        detailsHi: "इस संग्रह की तेवरियों ने हिन्दी कविता में 'तेवरी' को जन-विद्रोह के प्रतीक के रूप में स्थापित किया। अनेक विश्वविद्यालयों में इस पर शोध कार्य संपन्न हुए हैं।"
    },
    {
        id: "ghada-paap-ka",
        titleHi: "घड़ा पाप का भर रहा",
        titleEn: "Ghada Paap Ka Bhar Raha",
        category: "tewari",
        categoryNameHi: "तेवरी संग्रह",
        categoryNameEn: "Tewari Collection",
        year: "2015",
        publisher: "सार्थक सृजन संस्थान",
        cover: "assets/images/books/book_5.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi834/s320/ghada.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2015/07/blog-post.html",
        pages: "112",
        isbn: "978-81-923451-6-4",
        blurbHi: "भ्रष्ट व्यवस्था और जन-शोषण के चरम पर फूटा काव्यात्मक आक्रोश।",
        blurbEn: "Poetic outrage reflecting the saturation of public patience against corrupt systems and institutional oppression.",
        detailsHi: "इस संकलन में आम आदमी की दैनिक पीड़ा, महंगाई, बेरोजगारी और प्रशासनिक संवेदनहीनता को सीधी, सरल किंतु अचूक भाषा में उकेरा गया है।"
    },
    {
        id: "jai-kanhaiyalal-ki",
        titleHi: "जै कन्हैयालाल की",
        titleEn: "Jai Kanhaiyalal Ki",
        category: "tewari",
        categoryNameHi: "तेवरी संग्रह",
        categoryNameEn: "Tewari Collection",
        year: "2018",
        publisher: "सार्थक सृजन प्रकाशन",
        cover: "assets/images/books/book_6.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEk902/s320/kanhaiya.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2018/02/blog-post.html",
        pages: "136",
        isbn: "978-81-923451-8-8",
        blurbHi: "व्यंग्य और तेवर का बेजोड़ संगम — सामाजिक विसंगतियों पर करारा व्यंग्य प्रहार।",
        blurbEn: "A magnificent blend of satire and rebellious poetry dissecting social orthodoxies.",
        detailsHi: "धार्मिक ढोंग, छद्म राष्ट्रवाद और नैतिक पतन पर रमेशराज की कलम का यह एक ऐसा प्रहार है जो पाठक को झकझोर कर सोचने पर विवश करता है।"
    },
    {
        id: "abhi-zuban-kati-nahi",
        titleHi: "अभी जुबां कटी नहीं",
        titleEn: "Abhi Zubaan Kati Nahi",
        category: "tewari",
        categoryNameHi: "तेवरी संग्रह",
        categoryNameEn: "Tewari Collection",
        year: "2005",
        publisher: "तेवरीपक्ष संस्थान, अलीगढ़",
        cover: "assets/images/books/book_7.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEkm402/s320/zuban.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2012/03/blog-post_27.html",
        pages: "120",
        isbn: "978-81-89745-08-1",
        blurbHi: "अभिव्यक्ति की स्वतंत्रता और जन-आवाज़ के बुलंद हौसले का अमर काव्यात्मक दस्तावेज।",
        blurbEn: "An indelible poetic testament to free expression, unwavering resilience, and the voice of truth.",
        detailsHi: "जब भी सच बोलने पर पाबंदियों के साये गहराए, तब रमेशराज की 'अभी जुबां कटी नहीं' ने देश भर के रचनाकारों को निर्भीकता का संबल दिया।"
    },
    {
        id: "itihas-ghayal-hai",
        titleHi: "इतिहास घायल है",
        titleEn: "Itihas Ghayal Hai",
        category: "poetry",
        categoryNameHi: "काव्य एवं गीत",
        categoryNameEn: "Poetry & Songs",
        year: "2003",
        publisher: "परिवर्तन प्रकाशन",
        cover: "assets/images/books/book_8.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh123/s320/itihas.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2012/03/blog-post_28.html",
        pages: "152",
        isbn: "978-81-89745-04-3",
        blurbHi: "सांप्रदायिकता और मानवीय त्रासदियों से आहत समय का संवेदनशील काव्यात्मक आख्यान।",
        blurbEn: "A sensitive poetic chronicle reflecting upon communal wounds and human tragedies across modern times.",
        detailsHi: "मानवता, प्रेम और समरसता के मूल्यों को समर्पित यह संग्रह पाठकों के मर्म को छूता है और शांति का संदेश देता है।"
    },
    {
        id: "kabir-zinda-hai",
        titleHi: "कबीर ज़िन्दा है",
        titleEn: "Kabir Zinda Hai",
        category: "edited",
        categoryNameHi: "संपादित ग्रंथ",
        categoryNameEn: "Edited Anthologies",
        year: "2016",
        publisher: "सार्थक सृजन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/book_9.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi562/s320/kabir.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2016/11/blog-post.html",
        pages: "220",
        isbn: "978-81-923451-9-5",
        blurbHi: "कबीर की विद्रोही परम्परा और समकालीन तेवरी कविता का अप्रतिम सम्पादन।",
        blurbEn: "An edited volume celebrating the rebellious legacy of Saint Kabir in modern resistance poetry.",
        detailsHi: "देश के 50 से अधिक मूर्धन्य तेवरीकारों की प्रतिनिधि रचनाओं का यह संकलन समकालीन हिन्दी साहित्य की अमूल्य धरोहर है।"
    },
    {
        id: "bal-kavitaen",
        titleHi: "राष्ट्रीय बाल कविताएँ (नदिया पार हिंडोलना)",
        titleEn: "Rashtriya Bal Kavitaen",
        category: "children",
        categoryNameHi: "बाल साहित्य",
        categoryNameEn: "Children's Literature",
        year: "2019",
        publisher: "सार्थक सृजन संस्थान",
        cover: "assets/images/books/book_10.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg234/s320/bal.jpg",
        bloggerUrl: "https://rameshraj-balkavita.blogspot.com/",
        pages: "96",
        isbn: "978-81-923452-1-8",
        blurbHi: "बालमन को संस्कारित करने वाली देशभक्ति, प्रकृति और मानवीय मूल्यों की मधुर कविताएँ।",
        blurbEn: "Delightful rhymes nurturing young minds with patriotism, nature appreciation, and moral warmth.",
        detailsHi: "बच्चों के लिए सहज, लयबद्ध और शिक्षाप्रद बालगीतों का यह संकलन विद्यालयों और पुस्तकालयों में अत्यधिक लोकप्रिय है।"
    },
    {
        id: "didi-tum-nadi-ho",
        titleHi: "दीदी तुम नदी हो",
        titleEn: "Didi Tum Nadi Ho",
        category: "poetry",
        categoryNameHi: "काव्य एवं गीत",
        categoryNameEn: "Poetry & Songs",
        year: "2021",
        publisher: "सार्थक सृजन प्रकाशन",
        cover: "assets/images/books/book_11.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj789/s320/didi.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2021/04/blog-post.html",
        pages: "128",
        isbn: "978-81-923452-4-9",
        blurbHi: "स्त्री संवेदना, त्याग और मातृत्व की अविरल धारा को समर्पित भावपूर्ण काव्य संग्रह।",
        blurbEn: "Poignant verses honoring the selfless spirit, resilience, and boundless grace of womanhood.",
        detailsHi: "नारी विमर्श को भारतीय संस्कृति के उदात्त परिप्रेक्ष्य में प्रस्तुत करता रमेशराज का यह अनूठा काव्य-उपहार है।"
    },
    {
        id: "madhu-sa-la",
        titleHi: "चतुष्पदी शतक 'मधु-सा ला'",
        titleEn: "Chatushpadi Shatak 'Madhu-Sa La'",
        category: "shatak",
        categoryNameHi: "शतक एवं छंद काव्य",
        categoryNameEn: "Meter & Shatak Poetry",
        year: "2017",
        publisher: "सार्थक सृजन प्रकाशन",
        cover: "assets/images/books/book_12.jpg",
        fallbackCover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi456/s320/madhu.jpg",
        bloggerUrl: "https://rameshraj-chatushpadi.blogspot.com/",
        pages: "116",
        isbn: "978-81-923452-0-1",
        blurbHi: "रूबाई और चतुष्पदी विधा में जीवन-दर्शन और सामाजिक सरोकारों का मनोहारी शतक।",
        blurbEn: "A century of quatrains weaving existential philosophy with subtle societal observations.",
        detailsHi: "उमर खय्याम और बच्चन की परम्परा को नए सामाजिक तेवर के साथ आगे बढ़ाने वाली 100 चुनिंदा चतुष्पदियों का संग्रह।"
    }
];

// Blogger Blogs Data (Categorized from his 39 blogs)
const BLOGS_DATA = [
    {
        id: "blog-1",
        titleHi: "तेवरीकार रमेशराज (मुख्य मंच)",
        titleEn: "Tewarikar Rameshraj (Main Portal)",
        url: "https://hinditewari-11.blogspot.com/",
        category: "main",
        categoryNameHi: "मुख्य ब्लॉग",
        categoryNameEn: "Main Blog",
        descriptionHi: "रमेशराज के समग्र साहित्य, आलेखों, जीवन-वृत्त, समीक्षाओं और समकालीन साक्षात्कारों का अधिकृत डिजिटल मंच।",
        descriptionEn: "The official literary portal showcasing Rameshraj's life journey, essays, critiques, and interviews.",
        badge: "Official Portal",
        postsCount: "180+ Posts"
    },
    {
        id: "blog-2",
        titleHi: "हिन्दी तेवरी साहित्य",
        titleEn: "Hindi Tewari Sahitya",
        url: "https://hinditewarisahitya.blogspot.com/",
        category: "tewari",
        categoryNameHi: "तेवरी साहित्य",
        categoryNameEn: "Tewari Literature",
        descriptionHi: "तेवरी आन्दोलन की सैद्धांतिकी, इतिहास, विभिन्न तेवरीकारों की कालजयी रचनाएँ और विशेषांक।",
        descriptionEn: "Comprehensive archive on the philosophy, history, and distinguished works of the Tewari movement.",
        badge: "Literary Movement",
        postsCount: "240+ Posts"
    },
    {
        id: "blog-3",
        titleHi: "तेवरी आन्दोलन के चर्चित संग्रह",
        titleEn: "Famous Tewari Anthologies",
        url: "https://hinditewari-25.blogspot.com/",
        category: "books",
        categoryNameHi: "पुस्तकें व कृतियाँ",
        categoryNameEn: "Books & Publications",
        descriptionHi: "रमेशराज और तेवरी आन्दोलन की प्रकाशित पुस्तकों के कवर, विस्तृत भूमिकाएँ, समीक्षाएँ व पाठ्य सामग्री।",
        descriptionEn: "Book covers, introductions, critical reviews, and sample chapters of all published Tewari collections.",
        badge: "Book Archive",
        postsCount: "95+ Books"
    },
    {
        id: "blog-4",
        titleHi: "तेवरीपक्ष - त्रैमासिक पत्रिका",
        titleEn: "Tewaripaksh - Quarterly Journal",
        url: "https://hinditewaripaksh.blogspot.com/",
        category: "magazine",
        categoryNameHi: "पत्रिका व सम्पादन",
        categoryNameEn: "Journal & Editorial",
        descriptionHi: "तीन दशकों से प्रकाशित राष्ट्रीय साहित्यिक पत्रिका 'तेवरीपक्ष' के ऑनलाइन अंक, आलेख व सम्पादकीय।",
        descriptionEn: "Online issues, editorials, and scholarly columns from the prestigious 30-year-old journal 'Tewaripaksh'.",
        badge: "Literary Journal",
        postsCount: "120+ Issues"
    },
    {
        id: "blog-5",
        titleHi: "तेवरी शतक - रमेशराज",
        titleEn: "Tewari Shatak - Rameshraj",
        url: "https://rameshraj-tewari-shatak.blogspot.com/",
        category: "tewari",
        categoryNameHi: "तेवरी शतक",
        categoryNameEn: "Tewari Shatak",
        descriptionHi: "रमेशराज द्वारा रचित 100 चुनिंदा अमर तेवरियों का विशेष संकलन, विस्तृत व्याख्या सहित।",
        descriptionEn: "A dedicated collection of 100 masterwork Tewari poems with detailed contextual commentaries.",
        badge: "Special Anthology",
        postsCount: "100+ Poems"
    },
    {
        id: "blog-6",
        titleHi: "नव कुण्डलिया राज छंद",
        titleEn: "Nav Kundaliya Raj Chhand",
        url: "https://rameshraj-kavita.blogspot.com/",
        category: "poetry",
        categoryNameHi: "छंद व काव्य",
        categoryNameEn: "Prosody & Meter",
        descriptionHi: "रमेशराज द्वारा आविष्कृत नवीन 'नव कुण्डलिया' एवं 'जनक छन्द' पर शास्त्रसम्मत रचनाएँ एवं नियम।",
        descriptionEn: "Scholarly demonstrations and poetic creations in the innovative 'Nav Kundaliya' metric system.",
        badge: "Poetic Inventions",
        postsCount: "85+ Works"
    },
    {
        id: "blog-7",
        titleHi: "हाइकु शतक (Haiku Century)",
        titleEn: "Haiku Shatak",
        url: "https://rameshraj-haiku.blogspot.com/",
        category: "poetry",
        categoryNameHi: "हाइकु एवं लघुकाव्य",
        categoryNameEn: "Haiku & Micropoetry",
        descriptionHi: "जापानी हाइकु विधा को भारतीय सरोकारों व तेवरी तेवर में ढालने वाला अनूठा काव्य-मंच।",
        descriptionEn: "Adapting the Japanese Haiku form with sharp Indian socio-cultural consciousness.",
        badge: "Haiku Series",
        postsCount: "150+ Haikus"
    },
    {
        id: "blog-8",
        titleHi: "रमेशराज का बाल साहित्य",
        titleEn: "Children's Literature by Rameshraj",
        url: "https://rameshraj-balkavita.blogspot.com/",
        category: "children",
        categoryNameHi: "बाल साहित्य",
        categoryNameEn: "Children's Literature",
        descriptionHi: "बच्चों के लिए रचित प्रेरक बालगीत, लोरियाँ, पर्यावरण कविताएँ और संस्कारपरक रचनाएँ।",
        descriptionEn: "Inspiring children's rhymes, lullabies, nature poems, and moral storytelling verses.",
        badge: "For Young Readers",
        postsCount: "75+ Poems"
    },
    {
        id: "blog-9",
        titleHi: "व्यंग्य और लघुकथाएँ",
        titleEn: "Satire & Short Stories",
        url: "https://rameshraj-vyangya.blogspot.com/",
        category: "satire",
        categoryNameHi: "कथा व व्यंग्य",
        categoryNameEn: "Satire & Stories",
        descriptionHi: "दैनिक जीवन के पाखंड और व्यवस्था की विद्रूपताओं पर चुटीला, विचारोत्तेजक व्यंग्य लेखन।",
        descriptionEn: "Trenchant, thought-provoking satire exposing daily pretenses and governance ironies.",
        badge: "Sharp Satire",
        postsCount: "60+ Stories"
    }
];

// Literary Awards & Honors
const AWARDS_DATA = [
    {
        year: "2015",
        titleHi: "साहित्य-श्री राष्ट्रीय सम्मान",
        titleEn: "Sahitya-Shri National Honor",
        awardedByHi: "अखिल भारतीय साहित्य परिषद, नई दिल्ली",
        awardedByEn: "All India Literary Council, New Delhi",
        descHi: "हिन्दी साहित्य में 'विरोध-रस' और 'तेवरी आन्दोलन' के ऐतिहासिक योगदान के लिए प्रदत्त।"
    },
    {
        year: "2011",
        titleHi: "उत्तर प्रदेश गौरव सम्मान",
        titleEn: "Uttar Pradesh Gaurav Samman",
        awardedByHi: "सांस्कृतिक एवं साहित्यिक शोध संस्थान, लखनऊ",
        awardedByEn: "Cultural & Literary Research Institute, Lucknow",
        descHi: "विगत तीन दशकों से हिन्दी काव्य-विधा को समृद्ध करने वाले मूर्धन्य कवि के रूप में समादृत।"
    },
    {
        year: "2008",
        titleHi: "तेवरी तापस मानद अलंकरण",
        titleEn: "Tewari Tapas Title",
        awardedByHi: "राष्ट्रीय तेवरी महासम्मेलन, भोपाल",
        awardedByEn: "National Tewari Conclave, Bhopal",
        descHi: "तेवरी विधा को राष्ट्रीय धरातल पर सशक्त जन-आन्दोलन बनाने हेतु सर्वोच्च सम्मान।"
    },
    {
        year: "2004",
        titleHi: "शिखरश्री साहित्य सम्मान",
        titleEn: "Shikharshri Literary Award",
        awardedByHi: "साहित्य संगम, जयपुर",
        awardedByEn: "Sahitya Sangam, Jaipur",
        descHi: "'ऊधौ कहियो जाय' एवं 'इतिहास घायल है' कृतियों के विशिष्ट साहित्यिक प्रभाव पर सम्मानित।"
    },
    {
        year: "1999",
        titleHi: "उत्कृष्ट सम्पादक रत्न सम्मान",
        titleEn: "Distinguished Editor Ratna",
        awardedByHi: "अखिल भारतीय लघु पत्रिका सम्मेलन",
        awardedByEn: "All India Little Magazine Conference",
        descHi: "'तेवरीपक्ष' पत्रिका के निरंतर और निष्पक्ष सम्पादन के लिए विशेष रूप से सम्मानित।"
    }
];

// Press, Media & Gallery (चित्रशाला)
const GALLERY_DATA = [
    {
        id: "gal-1",
        titleHi: "साहित्यिक अनुष्ठान एवं दीप प्रज्ज्वलन",
        titleEn: "Inaugural Lamp Lighting Ceremony",
        category: "ceremony",
        categoryHi: "उद्घाटन समारोह",
        categoryEn: "Ceremony",
        image: "assets/images/gallery/author-lamp-ceremony.jpg",
        captionHi: "साहित्यिक संगोष्ठी के शुभारंभ अवसर पर पारम्परिक दीप प्रज्ज्वलित करते हुए रमेशराज जी।",
        captionEn: "Shri Rameshraj lighting the ceremonial lamp at the inaugural of the literary festival."
    },
    {
        id: "gal-2",
        titleHi: "दुर्लभ ऐतिहासिक चित्र: युवावस्था में काव्य-पाठ",
        titleEn: "Archival Heritage: Poetic Recitation in Youth",
        category: "archival",
        categoryHi: "ऐतिहासिक धरोहर",
        categoryEn: "Archival",
        image: "assets/images/gallery/author-vintage-recitation.jpg",
        captionHi: "तेवरी आन्दोलन के आरंभिक वर्षों में अखिल भारतीय कवि सम्मेलन मंच से ओजस्वी काव्य-पाठ की दुर्लभ ऐतिहासिक झलक।",
        captionEn: "Rare vintage archival photograph of young Rameshraj reciting revolutionary verses at an all-India Kavi Sammelan."
    },
    {
        id: "gal-3",
        titleHi: "साहित्यिक संगोष्ठी में मुख्य वक्ता के रूप में उद्बोधन",
        titleEn: "Keynote Address at National Literary Conclave",
        category: "keynote",
        categoryHi: "साहित्यिक वक्तव्य",
        categoryEn: "Keynote Address",
        image: "assets/images/gallery/author-speaking.jpg",
        captionHi: "मंच से 'विरोध-रस' और समकालीन जनवादी कविता के सरोकारों पर विचार व्यक्त करते वरिष्ठ साहित्यकार रमेशराज जी।",
        captionEn: "Senior author Rameshraj addressing literary critics and scholars on aesthetics of resistance and public conscience."
    },
    {
        id: "gal-4",
        titleHi: "राष्ट्रीय साहित्य मंच से ओजस्वी संबोधन",
        titleEn: "Address from National Conference Dais",
        category: "conference",
        categoryHi: "मंच उद्बोधन",
        categoryEn: "Conference Dais",
        image: "assets/images/gallery/author-podium-address.jpg",
        captionHi: "साहित्यिक सम्मेलन के मुख्य मंच से रचनाकारों, समीक्षकों और शोधार्थियों को प्रेरित करने का अविस्मरणीय क्षण।",
        captionEn: "Inspiring speech from the conference dais during a national Hindi literary summit."
    }
];

// Reader & Critic Testimonials
const TESTIMONIALS_DATA = [
    {
        nameHi: "डॉ. वीरेन्द्र कुमार",
        nameEn: "Dr. Virendra Kumar",
        titleHi: "विभागाध्यक्ष, हिन्दी विभाग, अलीगढ़",
        titleEn: "Head of Hindi Dept., Aligarh",
        quoteHi: "रमेशराज जी ने हिन्दी कविता को उस समय तेवर और स्वाभिमान दिया जब वह कोरे शृंगार और पलायनवाद में उलझी थी। उनका 'विरोध-रस' सिद्धान्त आने वाले युगों तक प्रेरणा देगा।",
        quoteEn: "Rameshraj gifted Hindi poetry genuine pride and grit at a time when verse risked triviality. His theory of 'Virodh-Ras' will illuminate generations of scholars."
    },
    {
        nameHi: "आचार्य सत्यनारायण शर्मा",
        nameEn: "Acharya Satyanarayan Sharma",
        titleHi: "वरिष्ठ समालोचक एवं साहित्यकार",
        titleEn: "Eminent Literary Critic & Author",
        quoteHi: "तेवरी केवल छन्द नहीं, बल्कि अन्याय के विरुद्ध तनी हुई मुट्ठी है। रमेशराज जी के सम्पादन में 'तेवरीपक्ष' ने भारतीय साहित्य में प्रतिरोध की एक नई धारा बहाई है।",
        quoteEn: "Tewari is not merely a poetic meter; it is a clenched fist against oppression. Under Rameshraj's stewardship, 'Tewaripaksh' birthed a true cultural renaissance."
    },
    {
        nameHi: "प्रो. नमिता सिंह",
        nameEn: "Prof. Namita Singh",
        titleHi: "वरिष्ठ कथाकार एवं चिंतक",
        titleEn: "Distinguished Author & Novelist",
        quoteHi: "रमेशराज जी का रचना-संसार अलीगढ़ की धरती से निकलकर देश के कोने-कोने में गूँजता है। उनकी भाषा में लोक-जीवन की सच्ची सुगंध और अदम्य साहस है।",
        quoteEn: "Rameshraj's literary voice resonates across the country. In his prose and verse dwells the authentic fragrance of folk life and uncompromising courage."
    }
];
