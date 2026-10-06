/* Wani & Sons language switcher.
   Matches the English text already on the page, so index.html needs no data-i18n edits.
   Column order: English, Urdu, Hindi, Kashmiri, Arabic (same as the dropdown). */
(function () {
  var ROWS = [
    ['Products', 'مصنوعات', 'उत्पाद', 'پروڈکٹ', 'المنتجات'],
    ['About', 'ہمارے بارے میں', 'हमारे बारे में', 'اسہِ متعلق', 'من نحن'],
    ['Our craft', 'ہمارا فن', 'हमारी कारीगरी', 'اسہِ ہُند ہنر', 'حرفتنا'],
    ['Contact', 'رابطہ', 'संपर्क', 'رابطہ', 'اتصل بنا'],
    ['Made in Kashmir · Made to last', 'کشمیر میں تیار · دیرپا معیار', 'कश्मीर में निर्मित · लंबे समय के लिए', 'کٲشِر منز تیار · پٲیمہ معیار', 'صُنع في كشمير · صُنع ليدوم'],
    ['Walnut wood with a story to tell.', 'اخروٹ کی لکڑی، ایک کہانی کے ساتھ۔', 'अखरोट की लकड़ी, एक कहानी के साथ।', 'والنٹ لکڑی، اکھ کہانی سۭتۍ۔', 'خشب الجوز يحمل قصة.'],
    ['From heirloom furniture and boxes to custom hand-carved figures and sculptures, we shape walnut wood into pieces inspired by your ideas.',
      'وراثتی فرنیچر اور ڈبوں سے لے کر ہاتھ سے تراشے گئے مجسموں تک، ہم اخروٹ کی لکڑی کو آپ کے خیالات کے مطابق ڈھالتے ہیں۔',
      'पीढ़ियों तक चलने वाले फर्नीचर और बक्सों से लेकर हाथ से तराशी गई मूर्तियों तक, हम अखरोट की लकड़ी को आपके विचारों के अनुसार ढालते हैं।',
      'وراثتی فرنیچر تہِ ڈبو پیٹھ ہاتھہ سۭتۍ ترأشتھ مورتی تام، اسہِ بناوو والنٹ لکڑی توہہِ ہندین خیالن مطابق۔',
      'من الأثاث الموروث والصناديق إلى التماثيل المنحوتة يدوياً، نشكّل خشب الجوز ليتحول إلى قطع مستوحاة من أفكارك.'],
    ['Explore products', 'مصنوعات دیکھیں', 'उत्पाद देखें', 'پروڈکٹ وُچھِو', 'استكشف المنتجات'],
    ['Featured work', 'نمایاں کام', 'विशेष कार्य', 'خاص کام', 'أعمال مميزة'],
    ['Walnut boxes', 'اخروٹ کے ڈبے', 'अखरोट के बक्से', 'والنٹ ڈبہ', 'صناديق الجوز'],
    ['Tables & chairs', 'میزیں اور کرسیاں', 'मेज़ और कुर्सियाँ', 'میز تہِ کُرسی', 'طاولات وكراسي'],
    ['Doors & windows', 'دروازے اور کھڑکیاں', 'दरवाज़े और खिड़कियाँ', 'دروازہ تہِ کھڑکی', 'أبواب ونوافذ'],
    ['Beds & furniture', 'بستر اور فرنیچر', 'बिस्तर और फर्नीचर', 'بستر تہِ فرنیچر', 'أسرّة وأثاث'],
    ['Frames & decor', 'فریم اور سجاوٹ', 'फ्रेम और सजावट', 'فریم تہِ سجاوٹ', 'إطارات وديكور'],
    ['Bookcases', 'کتابوں کی الماریاں', 'किताबों की अलमारियाँ', 'کتابن ہند الماری', 'خزائن كتب'],
    ['Custom orders', 'حسبِ ضرورت آرڈر', 'कस्टम ऑर्डर', 'مطلوب آرڈر', 'طلبات مخصصة'],
    ['Made to measure', 'ناپ کے مطابق', 'माप के अनुसार', 'ناپ مطابق', 'حسب المقاس'],
    ['Project enquiries', 'پروجیکٹ کے لیے پوچھ گچھ', 'प्रोजेक्ट पूछताछ', 'پروجیکٹ بارے پُچھ‌گچھ', 'استفسارات المشاريع'],
    ['Ask for a quote', 'قیمت پوچھیں', 'कोटेशन माँगें', 'قیمت پُچھِو', 'اطلب عرض سعر'],
    ['About Wani & Sons', 'وانی اینڈ سنز کے بارے میں', 'वानी एंड संस के बारे में', 'وانی اینڈ سنز بارے', 'عن وني وأولاده'],
    ['Walnut craft, made around you.', 'اخروٹ کا فن، آپ کے مطابق۔', 'अखरोट की कारीगरी, आपके अनुसार।', 'والنٹ ہنر، توہہِ مطابق۔', 'حرفة الجوز، مصنوعة حولك.'],
    ['The Wani & Sons way', 'وانی اینڈ سنز کا انداز', 'वानी एंड संस का तरीका', 'وانی اینڈ سنز ہُند انداز', 'طريقة وني وأولاده'],
    ['Material first. Details always.', 'پہلے لکڑی، ہمیشہ باریکیاں۔', 'पहले लकड़ी, हमेशा बारीकियाँ।', 'اول لکڑی، ہمیشہ تفصیل۔', 'الخامة أولاً، والتفاصيل دائماً.'],
    ['Start a conversation', 'بات چیت شروع کریں', 'बातचीत शुरू करें', 'گفتگو شروع کرو', 'ابدأ محادثة'],
    ['Have a piece in mind?', 'کوئی خاص چیز ذہن میں ہے؟', 'कोई खास चीज़ मन में है?', 'کانہہ چیز ذہنس منز چھہ؟', 'هل لديك قطعة في ذهنك؟'],
    ['Phone', 'فون', 'फ़ोन', 'فون', 'الهاتف'],
    ['Email', 'ای میل', 'ईमेल', 'ای میل', 'البريد الإلكتروني'],
    ['Address', 'پتہ', 'पता', 'پتہ', 'العنوان'],
    ['Factory outlet', 'فیکٹری آؤٹ لیٹ', 'फ़ैक्टरी आउटलेट', 'فیکٹری آؤٹ لیٹ', 'منفذ المصنع'],
    ['Send an enquiry', 'پوچھ گچھ بھیجیں', 'पूछताछ भेजें', 'پُچھ‌گچھ ہیجِو', 'أرسل استفساراً'],
    ['Ask about this piece', 'اس کے بارے میں پوچھیں', 'इस बारे में पूछें', 'ییٚمِس بارے پُچھِو', 'اسأل عن هذه القطعة']
  ];
  var CODES = ['en', 'ur', 'hi', 'ks', 'ar'];
  var NAMES = ['English', 'Urdu', 'Hindi', 'Kashmiri', 'Arabic'];
  var RTL = [false, true, false, true, true];
  var lookup = {};
  ROWS.forEach(function (r) { lookup[r[0]] = r; });

  // Remember every translatable text node and its original English, captured once at load.
  var items = [];
  var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  while (walker.nextNode()) {
    var node = walker.currentNode;
    var tag = node.parentNode.nodeName;
    if (tag === 'SCRIPT' || tag === 'STYLE' || tag === 'OPTION') continue;
    var text = node.nodeValue.trim();
    if (!lookup[text]) continue;
    var start = node.nodeValue.indexOf(text);
    items.push({ node: node, row: lookup[text], pre: node.nodeValue.slice(0, start), post: node.nodeValue.slice(start + text.length) });
  }

  function apply(i) {
    items.forEach(function (it) { it.node.nodeValue = it.pre + it.row[i] + it.post; });
    document.documentElement.lang = CODES[i];
    document.documentElement.dir = RTL[i] ? 'rtl' : 'ltr';
    try { localStorage.setItem('wani-lang', NAMES[i]); } catch (e) {}
  }

  var select = document.getElementById('language');
  select.addEventListener('change', function () { apply(NAMES.indexOf(select.value)); });

  // Restore the visitor's last choice.
  try {
    var saved = NAMES.indexOf(localStorage.getItem('wani-lang'));
    if (saved > 0) { select.value = NAMES[saved]; apply(saved); }
  } catch (e) {}
})();
