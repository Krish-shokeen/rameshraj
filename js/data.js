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

// Books Catalog (प्रमाणिक प्रकाशित कृतियाँ एवं संपादित संग्रह)
const BOOKS_DATA = [
    {
        id: "charchit-tewari-sangrah",
        titleHi: "रमेशराज के चर्चित तेवरी संग्रह",
        titleEn: "Charchit Tewari Sangrah by Rameshraj",
        category: "tewari",
        categoryNameHi: "तेवरी महाग्रंथ",
        categoryNameEn: "Tewari Masterwork",
        year: "2010",
        publisher: "सार्थक सृजन प्रकाशन, 15/109, ईसानगर, अलीगढ़",
        cover: "assets/images/books/charchit_tewari.jpg",
        fallbackCover: "assets/images/books/book_1.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/",
        pages: "256",
        isbn: "978-81-923451-0-2",
        blurbHi: "अनेक तेवरी-संग्रहों ('सिस्टम में बदलाव ला', 'घड़ा पाप का भर रहा', 'दे लंका में आग', 'होगा वक्त दबंग' आदि) का एक ही भव्य पुस्तकाकार रूप।",
        blurbEn: "A monumental masterwork combining multiple landmark Tewari anthologies in a single comprehensive volume.",
        detailsHi: "सार्थक सृजन प्रकाशन, अलीगढ़ से प्रकाशित इस ऐतिहासिक महाग्रंथ में तेवरी आंदोलन के जनक रमेशराज ने अपने अनेक विख्यात तेवरी संग्रहों को एक ही स्थान पर पुस्तकाकार परोसा है। इसमें 'सिस्टम में बदलाव ला' (19 तेवरियां, जनक छन्द में), 'घड़ा पाप का भर रहा', 'दे लंका में आग', 'होगा वक्त दबंग', 'आग जरूरी', 'मोहन भोग खलों को' आदि कालजयी कृतियों का समग्र समावेश है। वरिष्ठ समीक्षक अशोक अंजुम (संपादक 'अभिनव प्रयास') के अनुसार यह पुस्तक व्यवस्था के पाखंड पर करारा प्रहार और आमजन के संघर्षों की ओजस्वी आवाज़ है।"
    },
    {
        id: "vichar-aur-ras",
        titleHi: "विचार और रस (विवेचनात्मक निबन्ध)",
        titleEn: "Vichar aur Ras (Critical Poetics)",
        category: "research",
        categoryNameHi: "शोध एवं आलोचना",
        categoryNameEn: "Research & Criticism",
        year: "2014",
        publisher: "सार्थक सृजन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/vichar_aur_ras.jpg",
        fallbackCover: "assets/images/books/book_2.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2014/05/blog-post.html",
        pages: "168",
        isbn: "978-81-923451-4-0",
        blurbHi: "काव्यशास्त्र में 'विरोध-रस' (स्थायी भाव: आक्रोश) एवं 'विद्रोह-रस' की सैद्धांतिक स्थापना करने वाला युगांतरकारी शोध ग्रंथ।",
        blurbEn: "A groundbreaking critical treatise formalizing 'Virodh-Ras' (Aesthetics of Dissent) and 'Vidroh-Ras' in Hindi poetics.",
        detailsHi: "डॉ. ललित सिंह (अलीगढ़) के अनुसार— इस ग्रंथ में रमेशराज ने भारतीय रस-मीमांसा के पारंपरिक चौखटे को तोड़ते हुए 'विरोध-रस' (स्थायी भाव: आक्रोश) और 'विद्रोह-रस' (स्थायी भाव: असंतोष) को शास्त्रीय प्रतिष्ठा दी है। इसमें 'अनुभाव, अनुभव और अनुभूति' की दार्शनिक त्रयी तथा 'प्रतिवेदनात्मक प्रतिक्रिया सिद्धांत' का मौलिक प्रतिपादन किया गया है।"
    },
    {
        id: "abhi-zuban-kati-nahi",
        titleHi: "अभी जुबां कटी नहीं (प्रथम तेवरी संग्रह)",
        titleEn: "Abhi Zubaan Kati Nahi (First Tewari Anthology)",
        category: "tewari",
        categoryNameHi: "ऐतिहासिक तेवरी संग्रह",
        categoryNameEn: "Historic Tewari Collection",
        year: "1983",
        publisher: "तेवरीपक्ष संस्थान, अलीगढ़ (प्रथम संस्करण: फ़रवरी 1983)",
        cover: "assets/images/books/abhi_juban_kati_nahi.jpg",
        fallbackCover: "assets/images/books/book_7.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2012/03/blog-post_27.html",
        pages: "128",
        isbn: "978-81-89745-08-1",
        blurbHi: "हिन्दी साहित्य का ऐतिहासिक प्रथम तेवरी संग्रह (फ़रवरी 1983), जिसने तेवरी विधा को राष्ट्रव्यापी जन-आंदोलन बनाया।",
        blurbEn: "The historic first Tewari anthology in Hindi literature (Feb 1983), edited by Rameshraj, launching the movement nationwide.",
        detailsHi: "मदन मोहन 'उपेंद्र' के अनुसार— फ़रवरी 1983 में रमेशराज के संपादन में प्रकाशित 'अभी जुबां कटी नहीं' हिन्दी साहित्य का पहला तेवरी संग्रह है। जब ग़ज़ल को लेकर हिंदी साहित्य में उहापोह थी, तब इस संग्रह ने विशुद्ध भारतीय तेवर, जन-प्रतिरोध और आम आदमी के आक्रोश को एक नई विधा 'तेवरी' का स्थायी स्वरूप प्रदान किया।"
    },
    {
        id: "kabir-zinda-hai",
        titleHi: "कबीर ज़िन्दा है (द्वितीय तेवरी संग्रह)",
        titleEn: "Kabir Zinda Hai (Second Tewari Anthology)",
        category: "edited",
        categoryNameHi: "संपादित ग्रंथ",
        categoryNameEn: "Edited Anthologies",
        year: "1987",
        publisher: "सार्थक सृजन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/kabir_zinda_hai.jpg",
        fallbackCover: "assets/images/books/book_9.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2016/11/blog-post.html",
        pages: "220",
        isbn: "978-81-923451-9-5",
        blurbHi: "संत कबीर की निर्भीक विद्रोही परम्परा को समकालीन तेवरी कविता से जोड़ने वाला दूसरा मील का पत्थर तेवरी संग्रह।",
        blurbEn: "The second landmark edited Tewari anthology carrying forward Saint Kabir's fearless rebel spirit in contemporary verse.",
        detailsHi: "रमेशराज द्वारा संपादित यह दूसरा ऐतिहासिक तेवरी संग्रह है। इसमें देश भर के शीर्षस्थ जनवादी रचनाकारों की तेवरियों के माध्यम से यह संदेश गुंजायमान किया गया कि अन्याय, पाखंड और शोषण के विरुद्ध कबीर की क्रांति-चेतना आज भी उतनी ही जीवंत है।"
    },
    {
        id: "itihas-ghayal-hai",
        titleHi: "इतिहास घायल है (तृतीय तेवरी संग्रह)",
        titleEn: "Itihas Ghayal Hai (Third Tewari Anthology)",
        category: "edited",
        categoryNameHi: "संपादित ग्रंथ",
        categoryNameEn: "Edited Anthologies",
        year: "1992",
        publisher: "परिवर्तन प्रकाशन, अलीगढ़",
        cover: "assets/images/books/itihas_ghayal_hai.jpg",
        fallbackCover: "assets/images/books/book_8.jpg",
        bloggerUrl: "https://hinditewari-25.blogspot.com/2012/03/blog-post_28.html",
        pages: "152",
        isbn: "978-81-89745-04-3",
        blurbHi: "सांप्रदायिकता, सामाजिक विसंगतियों और दंगों के घावों पर उकेरा गया तीसरा युगांतरकारी राष्ट्रीय तेवरी संकलन।",
        blurbEn: "The third iconic national Tewari anthology confronting communal discord and societal fractures with poetic courage.",
        detailsHi: "सांप्रदायिकता और मानवीय त्रासदियों से आहत समय में प्रकाशित यह तीसरा राष्ट्रीय तेवरी संकलन है। मदन मोहन 'उपेंद्र' के शब्दों में, इसने हिन्दी कविता को कोरे आदर्शवाद से निकालकर धधकते यथार्थ के रूबरू खड़ा किया।"
    },
    {
        id: "rashtriya-bal-kavitaen",
        titleHi: "राष्ट्रीय बाल कविताएँ (नदिया पार हिंडोलना)",
        titleEn: "Rashtriya Bal Kavitaen (Patriotic Children's Verses)",
        category: "children",
        categoryNameHi: "बाल साहित्य",
        categoryNameEn: "Children's Literature",
        year: "2019",
        publisher: "सुभद्रा बाल साहित्य संस्थान, अलीगढ़",
        cover: "assets/images/books/rashtriya_baal_kavitaen.jpg",
        fallbackCover: "assets/images/books/book_10.jpg",
        bloggerUrl: "https://rameshraj-balkavita.blogspot.com/",
        pages: "96",
        isbn: "978-81-923452-1-8",
        blurbHi: "तिरंगा, सुभाष, भगत सिंह, शास्त्री जी, कश्मीर और पर्यावरण चेतना से सजी प्रेरक देशभक्ति बाल कविताओं का अनुपम संकलन।",
        blurbEn: "An inspiring collection of patriotic children's poems honoring freedom fighters, the national flag, and moral ideals.",
        detailsHi: "वरिष्ठ साहित्यकार डॉ. गोपाल बाबू शर्मा (आगरा) के अनुसार— रमेशराज जी का यह बाल काव्य-संग्रह नौनिहालों में राष्ट्रप्रेम, स्वाभिमान, पर्यावरण और चारित्रिक चेतना का पावन संचार करता है। इसमें तिरंगा, नेताजी सुभाष, शहीद भगत सिंह, लाल बहादुर शास्त्री जैसे अमर राष्ट्रनायकों पर सहज, गेय बाल कविताएँ हैं।"
    },
    {
        id: "tewaripaksh-patrika",
        titleHi: "तेवरी-पक्ष (राष्ट्रीय त्रैमासिक पत्रिका)",
        titleEn: "Tewaripaksh (National Quarterly Literary Journal)",
        category: "edited",
        categoryNameHi: "पत्रिका व सम्पादन",
        categoryNameEn: "Journal & Editorial",
        year: "1985 से निरंतर",
        publisher: "सार्थक सृजन संस्थान, अलीगढ़",
        cover: "assets/images/books/tewaripaksh_issue_12.jpg",
        fallbackCover: "assets/images/books/book_4.jpg",
        bloggerUrl: "https://hinditewaripaksh.blogspot.com/",
        pages: "पत्रिका विशेषांक",
        isbn: "ISSN 2348-XXXX",
        blurbHi: "गत तीन दशकों से प्रकाशित तेवरी आंदोलन की अधिकृत राष्ट्रीय त्रैमासिक पत्रिका (प्रधान सम्पादक: रमेशराज)।",
        blurbEn: "The flagship national quarterly journal of the Tewari movement, edited by Rameshraj for over 30 years.",
        detailsHi: "तेवरी आंदोलन की मुख्य वैचारिक पत्रिका जिसने देश के सैकड़ों प्रगतिशील रचनाकारों को मंच दिया। तीन दशकों से रमेशराज जी के निष्पक्ष एवं कर्मठ संपादन में यह पत्रिका हिन्दी साहित्य में जनवादी पत्रकारिता का कीर्तिस्तंभ है।"
    },
    {
        id: "virodh-ras",
        titleHi: "विरोध - रस (काव्यशास्त्रीय ग्रंथ)",
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
        detailsHi: "इस ग्रंथ में लेखक ने विस्तार से सिद्ध किया है कि जनचेतना और प्रतिरोध केवल एक क्षणिक भाव नहीं, अपितु काव्य का एक स्वतंत्र और पूर्ण रस है। साहित्य-जगत में यह पुस्तक एक युगांतरकारी विमर्श के रूप में प्रतिष्ठित है।"
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
        blurbHi: "सूरदास के भ्रमरगीत के मिथकीय संदर्भ को आधुनिक युग की विसंगतियों और राजनीतिक पाखंड से जोड़ता चर्चित संग्रह।",
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
        publisher: "सार्थक सृजन संस्थान, अलीगढ़",
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
        blurbHi: "व्यंग्य और तेवर का बेजोड़ संगम — सामाजिक विसंगतियों व ढोंग पर करारा व्यंग्य प्रहार।",
        blurbEn: "A magnificent blend of satire and rebellious poetry dissecting social orthodoxies.",
        detailsHi: "धार्मिक ढोंग, छद्म राष्ट्रवाद और नैतिक पतन पर रमेशराज की कलम का यह एक ऐसा प्रहार है जो पाठक को झकझोर कर सोचने पर विवश करता है।"
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

// Literary Awards & Honors (साहित्यिक उपलब्धियाँ एवं अलंकरण)
const AWARDS_DATA = [
    {
        year: "2015",
        titleHi: "साहित्यश्री राष्ट्रीय सम्मान 2015",
        titleEn: "Sahitya-Shri National Honor 2015",
        awardedByHi: "ग्रन्थायन (श्रीमती श्यामवती गुप्त स्मृति, 25 दिसम्बर 2015)",
        awardedByEn: "Granthayan, Aligarh (25 Dec 2015)",
        certificateImage: "assets/images/awards/sahitya_shri_certificate_2015.jpg",
        descHi: "श्री रमेश राज के विशिष्ट एवं विपुल साहित्यिक अवदान तथा विशेषज्ञ समिति (डॉ. सत्यप्रकाश मिश्र, डॉ. वेदप्रकाश 'अमिताभ', श्री प्रेम कुमार, अभयकुमार गुप्त) की सर्वसम्मत संस्तुति पर ग्रन्थायन द्वारा साहित्यश्री सम्मान से समलंकृत किया गया।",
        descEn: "Conferred upon Shri Ramesh Raj by Granthayan on 25 December 2015 for his distinguished and prolific literary contribution to Hindi literature and the Tewari movement."
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
        descHi: "'तेवरीपक्ष' पत्रिका के तीन दशकों के निरंतर और निष्पक्ष सम्पादन के लिए विशेष रूप से सम्मानित।"
    }
];

// Press, Media & Gallery (चित्रशाला एवं ऐतिहासिक छायाचित्र)
const GALLERY_DATA = [
    {
        id: "gal-cert",
        titleHi: "साहित्यश्री सम्मान 2015 — मूल मानपत्र",
        titleEn: "Sahitya-Shri Award 2015 — Original Citation",
        category: "award",
        categoryHi: "सम्मान प्रमाणपत्र",
        categoryEn: "Award Certificate",
        image: "assets/images/awards/sahitya_shri_certificate_2015.jpg",
        captionHi: "25 दिसम्बर 2015 को ग्रन्थायन द्वारा रमेशराज जी को विशिष्ट एवं विपुल साहित्यिक अवदान हेतु प्रदत्त मूल मानपत्र।",
        captionEn: "Original citation certificate of Sahitya-Shri Honor conferred upon Shri Ramesh Raj on 25 December 2015."
    },
    {
        id: "gal-portrait",
        titleHi: "रमेशराज तेवरीकार — सौम्य व्यक्तित्व",
        titleEn: "Rameshraj Tewarikar — Author Portrait",
        category: "portrait",
        categoryHi: "कवि व्यक्तित्व",
        categoryEn: "Author Portrait",
        image: "assets/images/gallery/author-smiling-portrait.jpg",
        captionHi: "तेवरी आंदोलन के प्रणेता, प्रख्यात चिंतक एवं वरिष्ठ साहित्यकार रमेशराज जी का आत्मीय छायाचित्र।",
        captionEn: "Warm portrait photograph of eminent author, thinker, and Tewari pioneer Shri Rameshraj."
    },
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
    },
    {
        id: "gal-jacket",
        titleHi: "पारम्परिक परिधान में साहित्यकार रमेशराज",
        titleEn: "Author Rameshraj in Traditional Attire",
        category: "portrait",
        categoryHi: "कवि व्यक्तित्व",
        categoryEn: "Author Portrait",
        image: "assets/images/gallery/author-nehru-jacket.jpg",
        captionHi: "पारम्परिक भारतीय परिधान में तेवरी आन्दोलन के अग्रदूत रमेशराज जी की भव्य छवि।",
        captionEn: "Distinguished portrait of Shri Rameshraj in traditional Indian attire."
    }
];

// Reader & Critic Testimonials (विद्वानों एवं समालोचकों के प्रामाणिक विचार)
const TESTIMONIALS_DATA = [
    {
        nameHi: "मधुर नज़्मी",
        nameEn: "Madhur Nazmi",
        titleHi: "महानिदेशक: 'काव्यमुखी साहित्य अकादमी', संपादक: 'परिवर्तन'",
        titleEn: "Director General: Kavyamukhi Sahitya Akademi, Editor 'Parivartan'",
        quoteHi: "राजेंद्र प्रसाद सिंह ने नवगीत को आंदोलन बनाया, दुष्यंत कुमार ने ग़ज़ल को तेवर दिया, और रमेशराज ने 'तेवरी' को एक सशक्त जन-आंदोलन और स्वतंत्र विधा के रूप में प्रतिष्ठापित किया। उनका यह ऐतिहासिक योगदान हिन्दी साहित्य के इतिहास में स्वर्णाक्षरों में अंकित रहेगा।",
        quoteEn: "Rajendra Prasad Singh made Navgeet a movement, Dushyant Kumar gave teeth to the Ghazal, and Rameshraj established 'Tewari' as a formidable nationwide people's movement. His contribution is forever etched in golden letters."
    },
    {
        nameHi: "डॉ. ललित सिंह",
        nameEn: "Dr. Lalit Singh",
        titleHi: "वरिष्ठ समालोचक एवं शोध अध्येता, अलीगढ़",
        titleEn: "Eminent Literary Critic & Research Scholar, Aligarh",
        quoteHi: "रमेशराज जी का 'विचार और रस' हिन्दी आलोचना और रस-मीमांसा का क्रांतिकारी ग्रंथ है। उन्होंने 'विरोध-रस' (स्थायी भाव: आक्रोश) और 'विद्रोह-रस' (स्थायी भाव: असंतोष) की शास्त्रीय स्थापना कर तथा 'अनुभाव, अनुभव और अनुभूति' की त्रयी का प्रतिपादन कर काव्यशास्त्र को नया वैज्ञानिक धरातल दिया है।",
        quoteEn: "Rameshraj's 'Vichar aur Ras' is a revolutionary milestone in Hindi poetics. By formalizing 'Virodh-Ras' (Aesthetic of Dissent) and the trinity of emotion, experience, and perception, he gifted poetics a modern scientific dimension."
    },
    {
        nameHi: "अशोक अंजुम",
        nameEn: "Ashok Anjum",
        titleHi: "संपादक: 'अभिनव प्रयास', वरिष्ठ साहित्यकार",
        titleEn: "Editor: 'Abhinav Prayas', Senior Litterateur",
        quoteHi: "'रमेशराज के चर्चित तेवरी संग्रह' तेवरी आंदोलन का महाग्रंथ है। जनक छन्द और जन-विद्रोह के स्वरों से सजी यह पुस्तक शोषितों की आवाज़ और व्यवस्था के पाखंड पर करारा प्रहार है। रमेशराज जी ने सिद्ध कर दिया कि कविता केवल मनोरंजन नहीं, सामाजिक क्रांति का अस्त्र है।",
        quoteEn: "'Rameshraj Ke Charchit Tewari Sangrah' is the magnum opus of the Tewari movement. Set in Janak Chhand and armed with righteous public rage, it proves poetry is an engine of profound social change."
    },
    {
        nameHi: "डॉ. गोपाल बाबू शर्मा",
        nameEn: "Dr. Gopal Babu Sharma",
        titleHi: "वरिष्ठ साहित्यकार एवं बाल साहित्य मर्मज्ञ, आगरा",
        titleEn: "Renowned Hindi Author & Children's Literature Scholar, Agra",
        quoteHi: "रमेशराज जी की 'राष्ट्रीय बाल कविताएँ' बालमन में राष्ट्रप्रेम, स्वाभिमान, पर्यावरण और चारित्रिक चेतना का पावन संचार करती हैं। तिरंगा, सुभाष, भगत सिंह और शास्त्री जी पर लिखी उनकी कविताएँ प्रत्येक बालक के कंठ का हार बनने योग्य हैं।",
        quoteEn: "Rameshraj's patriotic children's poetry awakens deep patriotism, self-respect, and ecological awareness in young minds. Verses on the Tricolor, Subhash, and Bhagat Singh resonate in every schoolroom."
    },
    {
        nameHi: "मदन मोहन 'उपेंद्र'",
        nameEn: "Madan Mohan 'Upendra'",
        titleHi: "वरिष्ठ साहित्यकार एवं समीक्षक",
        titleEn: "Senior Author & Critic of the Tewari Movement",
        quoteHi: "फ़रवरी 1983 में रमेशराज के संपादन में प्रकाशित 'अभी जुबां कटी नहीं' पहला तेवरी संग्रह था। इसके बाद 'कबीर ज़िन्दा है' और 'इतिहास घायल है' ने मिलकर हिन्दी कविता में जन-सरोकारों और प्रतिरोध की एक ऐसी मशाल जलाई जो आज भी देदीप्यमान है।",
        quoteEn: "In February 1983, under Rameshraj's editorship, 'Abhi Zubaan Kati Nahi' emerged as the historic first Tewari anthology. Together with 'Kabir Zinda Hai' and 'Itihas Ghayal Hai', it ignited an unquenchable flame of public resistance."
    },
    {
        nameHi: "डॉ. भगत सिंह",
        nameEn: "Dr. Bhagat Singh",
        titleHi: "संयोजक, विशेषज्ञ समिति, ग्रन्थायन",
        titleEn: "Convenor, Expert Committee, Granthayan",
        quoteHi: "श्री रमेश राज के विशिष्ट एवं विपुल साहित्यिक अवदान तथा तेवरी आंदोलन की चार दशकों की ऐतिहासिक साधना के समादर स्वरूप ग्रन्थायन द्वारा उन्हें 'साहित्यश्री सम्मान' से अलंकृत करना सम्पूर्ण साहित्य समाज के लिए गौरव का क्षण है।",
        quoteEn: "Conferring the prestigious Sahitya-Shri Honor upon Shri Ramesh Raj for four decades of selfless devotion to the Tewari movement and Hindi poetics is a proud celebration for the entire literary fraternity."
    }
];
