// Simple EN/TR site translator. Elements opt in with data-i18n
// (innerHTML), data-i18n-placeholder, or data-i18n-aria-label attributes
// whose value is a key into the `translations` dictionary below. The
// chosen language is remembered in localStorage so it carries across
// pages, and window.i18n is exposed so other scripts (e.g. the form
// status messages in apply.js / apply-client.js) can look up strings too.
(function () {
  const STORAGE_KEY = "eoai-lang";

  const translations = {
    en: {
      "nav.capabilities": "Capabilities",
      "nav.solutions": "Solutions",
      "nav.caseStudy": "Case study",
      "nav.about": "About",
      "nav.workWithUs": "Work with us",
      "nav.brandAria": "EOAI Lab home",
      "nav.menuAria": "Open navigation",

      "home.metaTitle": "EOAI Lab — Own your intelligence.",
      "home.navCta": "Start a conversation",
      "home.heroEyebrow": "The Enterprise-Owned AI Agency",
      "home.heroH1": "Own what<br>\n<em>thinks</em> for you.",
      "home.heroLede":
        "We architect private intelligence that belongs entirely to your enterprise — models, knowledge, workflows, and the advantage they create.",
      "home.heroCtaGhost": "Discover EOAI",
      "home.heroArtAria":
        "Abstract visualization of an enterprise-owned intelligence system",
      "home.artTop": "YOUR KNOWLEDGE",
      "home.artRight": "YOUR MODEL",
      "home.artBottom": "YOUR INTELLIGENCE",
      "home.scrollHint": "Scroll to enter",

      "home.kicker01": "A new category",
      "home.introH2":
        "Software became<br>owned. <em>Intelligence</em><br>is next.",
      "home.introP1":
        "EOAI is Enterprise-Owned Artificial Intelligence: dedicated systems made for the way your organization actually operates.",
      "home.introP2":
        "Not an API dependency. Not a rented capability. Your intellectual infrastructure, built to compound.",
      "home.introLink": "Why ownership matters",

      "home.ownershipTag1": "THE SHIFT",
      "home.ownershipTag2": "FROM RENTING TO OWNING",
      "home.cardIndex01": "01 — Traditional AI",
      "home.cardH3_01": "Borrowed<br>intelligence.",
      "home.cardLi_01_1": "Third-party models",
      "home.cardLi_01_2": "Shared learning surface",
      "home.cardLi_01_3": "Usage-based dependency",
      "home.cardLi_01_4": "Generic capability",
      "home.cardIndex02": "02 — Enterprise-Owned AI",
      "home.cardH3_02": "Intelligence<br>with your name on it.",
      "home.cardLi_02_1": "Private models &amp; data",
      "home.cardLi_02_2": "Institutional memory",
      "home.cardLi_02_3": "Full control &amp; governance",
      "home.cardLi_02_4": "Compounding differentiation",

      "home.manifestoEyebrow": "The ownership principle",
      "home.manifestoH2":
        "Your data has a home.<br>Your software has a home.<br><em>Your intelligence should too.</em>",
      "home.roundLink": "Start<br>here",

      "home.kicker02": "How we build",
      "home.processH2": "Intelligence,<br><em>made specific.</em>",
      "home.processP":
        "From the first signal to self-improving operations, every layer is designed around your business — and left entirely in your hands.",
      "home.step1Title": "Discovery",
      "home.step1Desc":
        "We find the decisions, patterns, and expertise worth turning into an owned advantage.",
      "home.step2Title": "Architecture",
      "home.step2Desc":
        "We design the model, data, security, and workflow system around the reality of your enterprise.",
      "home.step3Title": "Custom intelligence",
      "home.step3Desc":
        "Private models and agents are shaped on your knowledge — not someone else’s public cloud.",
      "home.step4Title": "Deployment",
      "home.step4Desc":
        "We put intelligence into the work, with governance built in from day one.",
      "home.step5Title": "Continuous edge",
      "home.step5Desc":
        "Your system learns from your operation, making your advantage harder to replicate over time.",

      "home.kicker03": "What we make",
      "home.servicesH2": "The full stack<br>of <em>ownership.</em>",
      "home.servicesP":
        "Strategy to sovereign infrastructure. We build the systems underneath the promise.",
      "home.svc1Title": "Enterprise<br>AI strategy",
      "home.svc1Desc": "Find the intelligent edge your business can truly own.",
      "home.svc2Title": "Private<br>language models",
      "home.svc2Desc": "Models trained, tuned, and governed for your enterprise.",
      "home.svc3Title": "Agents &amp;<br>automation",
      "home.svc3Desc": "Autonomous systems that move work forward, safely.",
      "home.svc4Title": "Knowledge<br>systems",
      "home.svc4Desc": "RAG and retrieval architectures built around your truth.",
      "home.svc5Title": "AI infrastructure<br>&amp; security",
      "home.svc5Desc":
        "Private-by-design foundations that pass enterprise scrutiny.",
      "home.svcCtaP": "Don’t see a category for your opportunity?",
      "home.svcCtaLink": "Tell us what<br>should be owned",

      "home.kicker04": "Services / Solutions",
      "home.solutionsH2": "Solutions,<br>already <em>working.</em>",
      "home.solutionsP":
        "Not concepts on a slide. Systems we build end-to-end — trained on real data, explainable by design, and deployed on infrastructure you control.",
      "home.solTag": "SOLUTION 01 · V1 DEMO",
      "home.solH3": "AI-Assisted Customer<br>Churn Warning",
      "home.solCopy":
        "A private early-warning system that scores every customer’s likelihood of leaving — every morning, automatically. Trained on a real telecom dataset of 3,333 customers, it doesn’t just flag who’s at risk: it explains why, in terms your team can act on, and delivers the answer straight into the tools you already use.",
      "home.flow1Title": "Daily batch",
      "home.flow1Desc":
        "Yesterday’s customer data ingested every morning, preprocessed identically to training — same scaler, same features.",
      "home.flow2Title": "Neural network",
      "home.flow2Desc":
        "A churn probability computed for every customer, flagged the moment it crosses a tuned risk threshold.",
      "home.flow3Title": "SHAP explanation",
      "home.flow3Desc":
        "Not just who — why. Every flag ships with its top drivers, ranked and readable.",
      "home.flow4Title": "Delivery",
      "home.flow4Desc":
        "A Dockerized REST API plus a daily risk alert — where your team already works.",
      "home.metric1Label": "ROC-AUC<br>ranking quality",
      "home.metric2Label": "Recall<br>126 of 145 churners caught",
      "home.metric3Label": "F1 @ 0.73<br>tuned threshold",
      "home.metric4Label": "Baseline churn<br>caught before it happens",
      "home.solFootP":
        "TRAINING PIPELINE · DAILY BATCH · REST API · SHAP · DOCKER — ALL ON INFRASTRUCTURE YOU OWN",
      "home.solFootLink": "Ask about this solution",
      "home.solMoreP": "More solutions are in active development.",
      "home.solMoreLink": "Tell us what you’d<br>want us to build",

      "home.kicker05": "Selected work",
      "home.caseTag": "ILLUSTRATIVE ENGAGEMENT",
      "home.caseH2":
        "A private intelligence<br>layer for <em>customer loyalty.</em>",
      "home.caseCopy":
        "For a global hospitality group, we designed a proprietary intelligence system that understands individual guest context across every property, every moment.",
      "home.caseLink1": "Explore an EOAI brief",
      "home.caseLink2": "Download the Paper",
      "home.archTag1": "EOAI ARCHITECTURE",
      "home.archTag2": "PRIVATE / SECURE / COMPOUNDING",
      "home.arch1": "Guest<br>signals",
      "home.arch2": "Private<br>knowledge",
      "home.arch3": "Loyalty<br>intelligence",
      "home.arch4": "Personalized<br>actions",
      "home.caseMetric1": "faster response<br>to guest intent",
      "home.caseMetric2": "more decisions<br>automated",
      "home.caseMetric3": "customer data<br>leaves the estate",
      "home.metricsNote": "Sample outcomes shown for illustrative purposes.",

      "home.kicker06": "The difference",
      "home.comparisonH2":
        "An agency can<br>integrate AI.<br><em>Or make it yours.</em>",
      "home.thWhat": "What changes",
      "home.thTraditional": "Traditional AI agency",
      "home.row1c1": "Core intelligence",
      "home.row1c2": "Rents third-party APIs",
      "home.row1c3": "Built for your enterprise",
      "home.row2c1": "Knowledge",
      "home.row2c2": "Lives in prompts &amp; tools",
      "home.row2c3": "Becomes institutional memory",
      "home.row3c1": "Data posture",
      "home.row3c2": "Leaves your perimeter",
      "home.row3c3": "Governed on your terms",
      "home.row4c1": "Strategic value",
      "home.row4c2": "Replicable capability",
      "home.row4c3": "Compounding asset",
      "home.row5c1": "Control",
      "home.row5c2": "Subject to provider roadmaps",
      "home.row5c3": "Entirely yours",

      "home.kicker07": "Questions, answered",
      "home.faqH2": "The intelligent<br><em>questions.</em>",
      "home.faq1Q": "What exactly is EOAI?",
      "home.faq1A":
        "Enterprise-Owned Artificial Intelligence is a dedicated intelligence system — models, knowledge, workflows, and infrastructure — controlled by your organization, for your organization.",
      "home.faq2Q": "Why not use ChatGPT or Claude?",
      "home.faq2A":
        "Public models can be powerful tools. But they are not your long-term intellectual property, operating system, or differentiated advantage. EOAI turns intelligence into an owned asset.",
      "home.faq3Q": "How long does deployment take?",
      "home.faq3A":
        "Focused systems can launch in weeks. Larger enterprise platforms evolve in deliberate phases, balancing impact, readiness, and governance.",
      "home.faq4Q": "Who is EOAI for?",
      "home.faq4A":
        "Organizations ready to make intelligence part of their core operating model — without outsourcing their future to a third-party API.",

      "home.contactEyebrow": "The next enterprise advantage",
      "home.contactH2":
        "It’s time to own<br><em>what makes you different.</em>",
      "home.contactFootTag": "Enterprise-Owned Artificial Intelligence",

      "work.metaTitle": "Work with us — EOAI Lab",
      "work.navCta": "Apply now",
      "work.eyebrow": "We’re hiring",
      "work.h1": "Build what<br>you’ll <em>own.</em>",
      "work.lede":
        "EOAI Lab is a small, fast-moving startup building Enterprise-Owned Artificial Intelligence — private models, agents, and infrastructure for companies that refuse to rent their intelligence. There are no layers here, no legacy process: just an early team shipping real systems into production, learning the full stack along the way, and growing with the company from day one. If you want direct impact and real ownership over what you build, tell us about yourself below — we read every submission ourselves.",
      "work.labelName": "Full name",
      "work.labelEmail": "Email",
      "work.labelPhone": "Phone",
      "work.labelLinkedin": "LinkedIn / portfolio",
      "work.labelPosition": "Area you’re interested in",
      "work.optChoose": "Choose an area",
      "work.opt1": "AI Strategy &amp; Delivery",
      "work.opt2": "Machine Learning",
      "work.opt3": "Agents &amp; Automation",
      "work.opt4": "Infrastructure &amp; Security",
      "work.opt5": "Design &amp; Brand",
      "work.opt6": "Business Development",
      "work.opt7": "Something else",
      "work.labelMessage": "A short note",
      "work.placeholderName": "Jane Doe",
      "work.placeholderEmail": "jane@email.com",
      "work.placeholderMessage": "Why EOAI Lab, and what would you bring?",
      "work.submitBtn": "Send application",
      "work.statusMissing":
        "Please fill in your name, email, and area of interest.",
      "work.statusSending": "Sending…",
      "work.statusThanks": "Thanks — we’ve got it, and we’ll be in touch.",
      "work.statusError":
        "Something went wrong. Please email info@eoailab.com instead.",

      "client.metaTitle": "Become a client — EOAI Lab",
      "client.navCta": "Get started",
      "client.eyebrow": "Let’s talk",
      "client.h1": "Own what<br>makes you <em>different.</em>",
      "client.lede":
        "EOAI Lab builds Enterprise-Owned Artificial Intelligence — private models, agents, and infrastructure for companies that refuse to rent their intelligence. Tell us a bit about your business and what you’d want us to build, and we’ll follow up to find the right next step — we read every submission ourselves.",
      "client.labelName": "Full name",
      "client.labelEmail": "Email",
      "client.labelPhone": "Phone",
      "client.labelCompany": "Company",
      "client.placeholderCompany": "Company name",
      "client.labelMessage": "A short note",
      "client.placeholderName": "Jane Doe",
      "client.placeholderEmail": "jane@company.com",
      "client.placeholderMessage": "What would you want us to build?",
      "client.submitBtn": "Send",
      "client.statusMissing": "Please fill in your name, email, and company.",
      "client.statusSending": "Sending…",
      "client.statusThanks": "Thanks — we’ve got it, and we’ll be in touch.",
      "client.statusError":
        "Something went wrong. Please email info@eoailab.com instead.",
    },

    tr: {
      "nav.capabilities": "Yetenekler",
      "nav.solutions": "Çözümler",
      "nav.caseStudy": "Vaka analizi",
      "nav.about": "Hakkımızda",
      "nav.workWithUs": "Bizimle çalışın",
      "nav.brandAria": "EOAI Lab ana sayfa",
      "nav.menuAria": "Menüyü aç",

      "home.metaTitle": "EOAI Lab — Zekânızı sahiplenin.",
      "home.navCta": "Bir görüşme başlatın",
      "home.heroEyebrow": "Kurumsal Sahipli Yapay Zekâ Ajansı",
      "home.heroH1": "Sizin için<br>\n<em>düşüneni</em> sahiplenin.",
      "home.heroLede":
        "Tamamen kurumunuza ait, özel bir zekâ mimarisi kuruyoruz — modeller, bilgi, iş akışları ve bunların yarattığı avantaj.",
      "home.heroCtaGhost": "EOAI’yi keşfedin",
      "home.heroArtAria":
        "Kurumsal sahipli bir zekâ sisteminin soyut görselleştirmesi",
      "home.artTop": "BİLGİNİZ",
      "home.artRight": "MODELİNİZ",
      "home.artBottom": "ZEKÂNIZ",
      "home.scrollHint": "Girmek için kaydırın",

      "home.kicker01": "Yeni bir kategori",
      "home.introH2":
        "Yazılım<br>sahiplenildi. Sırada <em>zekâ</em><br>var.",
      "home.introP1":
        "EOAI, Kurumsal Sahipli Yapay Zekâ’dır: kuruluşunuzun gerçekte nasıl çalıştığına göre tasarlanmış özel sistemlerdir.",
      "home.introP2":
        "Bir API bağımlılığı değil. Kiralanmış bir yetenek değil. Zamanla katlanarak büyüyen, size ait entelektüel altyapı.",
      "home.introLink": "Sahiplenmenin neden önemli olduğu",

      "home.ownershipTag1": "DÖNÜŞÜM",
      "home.ownershipTag2": "KİRALAMAKTAN SAHİPLENMEYE",
      "home.cardIndex01": "01 — Geleneksel Yapay Zekâ",
      "home.cardH3_01": "Ödünç alınmış<br>zekâ.",
      "home.cardLi_01_1": "Üçüncü taraf modeller",
      "home.cardLi_01_2": "Paylaşılan öğrenme yüzeyi",
      "home.cardLi_01_3": "Kullanıma dayalı bağımlılık",
      "home.cardLi_01_4": "Standart yetenek",
      "home.cardIndex02": "02 — Kurumsal Sahipli Yapay Zekâ",
      "home.cardH3_02": "Üzerinde adınızın<br>yazılı olduğu zekâ.",
      "home.cardLi_02_1": "Özel modeller ve veriler",
      "home.cardLi_02_2": "Kurumsal hafıza",
      "home.cardLi_02_3": "Tam kontrol ve yönetişim",
      "home.cardLi_02_4": "Katlanarak büyüyen farklılaşma",

      "home.manifestoEyebrow": "Sahiplenme ilkesi",
      "home.manifestoH2":
        "Verinizin bir evi var.<br>Yazılımınızın bir evi var.<br><em>Zekânızın da olmalı.</em>",
      "home.roundLink": "Buradan<br>başlayın",

      "home.kicker02": "Nasıl inşa ediyoruz",
      "home.processH2": "Zekâ,<br><em>size özel.</em>",
      "home.processP":
        "İlk sinyalden kendini geliştiren operasyonlara kadar her katman işletmeniz etrafında tasarlanır — ve tamamen sizin elinizde kalır.",
      "home.step1Title": "Keşif",
      "home.step1Desc":
        "Sahiplenilebilir bir avantaja dönüştürülmeye değer kararları, kalıpları ve uzmanlığı buluyoruz.",
      "home.step2Title": "Mimari",
      "home.step2Desc":
        "Model, veri, güvenlik ve iş akışı sistemini kurumunuzun gerçekliğine göre tasarlıyoruz.",
      "home.step3Title": "Özel zekâ",
      "home.step3Desc":
        "Özel modeller ve ajanlar, başkasının genel bulutunda değil, sizin bilginiz üzerinde şekillenir.",
      "home.step4Title": "Devreye alma",
      "home.step4Desc":
        "İlk günden itibaren yönetişimi de içine katarak zekâyı işin içine yerleştiriyoruz.",
      "home.step5Title": "Sürekli avantaj",
      "home.step5Desc":
        "Sisteminiz operasyonunuzdan öğrenir ve zamanla avantajınızın taklit edilmesini zorlaştırır.",

      "home.kicker03": "Neler üretiyoruz",
      "home.servicesH2": "Sahiplenmenin<br>tüm <em>katmanları.</em>",
      "home.servicesP":
        "Stratejiden bağımsız altyapıya. Vaadin arkasındaki sistemleri biz kuruyoruz.",
      "home.svc1Title": "Kurumsal<br>yapay zekâ stratejisi",
      "home.svc1Desc":
        "İşletmenizin gerçekten sahiplenebileceği zekâ avantajını bulun.",
      "home.svc2Title": "Özel<br>dil modelleri",
      "home.svc2Desc":
        "Kurumunuz için eğitilmiş, ayarlanmış ve yönetilen modeller.",
      "home.svc3Title": "Ajanlar ve<br>otomasyon",
      "home.svc3Desc":
        "İşi güvenli bir şekilde ileriye taşıyan otonom sistemler.",
      "home.svc4Title": "Bilgi<br>sistemleri",
      "home.svc4Desc":
        "Sizin gerçeğiniz etrafında kurulmuş RAG ve bilgi erişim mimarileri.",
      "home.svc5Title": "Yapay zekâ altyapısı<br>ve güvenlik",
      "home.svc5Desc":
        "Kurumsal denetimden geçen, tasarımdan itibaren özel temeller.",
      "home.svcCtaP": "Fırsatınıza uygun bir kategori göremiyor musunuz?",
      "home.svcCtaLink": "Neyin sahiplenilmesi<br>gerektiğini anlatın",

      "home.kicker04": "Hizmetler / Çözümler",
      "home.solutionsH2": "Zaten <em>çalışan</em><br>çözümler.",
      "home.solutionsP":
        "Slaytta kalan kavramlar değil. Uçtan uca kurduğumuz sistemler — gerçek verilerle eğitilmiş, tasarımdan itibaren açıklanabilir ve kontrolünüzdeki altyapıda devreye alınmış.",
      "home.solTag": "ÇÖZÜM 01 · V1 DEMO",
      "home.solH3": "Yapay Zekâ Destekli<br>Müşteri Kaybı Uyarısı",
      "home.solCopy":
        "Her sabah otomatik olarak her müşterinin ayrılma olasılığını puanlayan özel bir erken uyarı sistemi. 3.333 müşteriden oluşan gerçek bir telekom veri setiyle eğitilen sistem, yalnızca kimin risk altında olduğunu değil, ekibinizin harekete geçebileceği şekilde nedenini de açıklar ve sonucu zaten kullandığınız araçlara doğrudan iletir.",
      "home.flow1Title": "Günlük toplu işlem",
      "home.flow1Desc":
        "Dünün müşteri verileri her sabah alınır ve eğitimle birebir aynı şekilde işlenir — aynı ölçekleyici, aynı öznitelikler.",
      "home.flow2Title": "Sinir ağı",
      "home.flow2Desc":
        "Her müşteri için bir kayıp olasılığı hesaplanır ve ayarlanmış risk eşiğini geçtiği anda işaretlenir.",
      "home.flow3Title": "SHAP açıklaması",
      "home.flow3Desc":
        "Sadece kim değil — neden. Her işaretleme, sıralanmış ve okunabilir en önemli etkenlerle birlikte gelir.",
      "home.flow4Title": "Teslimat",
      "home.flow4Desc":
        "Dockerize edilmiş bir REST API ve ekibinizin zaten çalıştığı yere gönderilen günlük bir risk uyarısı.",
      "home.metric1Label": "ROC-AUC<br>sıralama kalitesi",
      "home.metric2Label": "Duyarlılık<br>145 kayıptan 126’sı yakalandı",
      "home.metric3Label": "F1 @ 0,73<br>ayarlanmış eşik",
      "home.metric4Label": "Temel kayıp oranı<br>gerçekleşmeden önce yakalanır",
      "home.solFootP":
        "EĞİTİM HATTI · GÜNLÜK TOPLU İŞLEM · REST API · SHAP · DOCKER — TAMAMI SİZİN ALTYAPINIZDA",
      "home.solFootLink": "Bu çözüm hakkında bilgi alın",
      "home.solMoreP": "Daha fazla çözüm aktif olarak geliştiriliyor.",
      "home.solMoreLink": "Ne inşa etmemizi<br>istediğinizi anlatın",

      "home.kicker05": "Seçilmiş çalışma",
      "home.caseTag": "ÖRNEK PROJE",
      "home.caseH2":
        "Müşteri sadakati için<br>özel bir <em>zekâ katmanı.</em>",
      "home.caseCopy":
        "Küresel bir konaklama grubu için, her tesiste ve her anda misafirin bireysel bağlamını anlayan özel bir zekâ sistemi tasarladık.",
      "home.caseLink1": "Bir EOAI özetini inceleyin",
      "home.caseLink2": "Raporu indirin",
      "home.archTag1": "EOAI MİMARİSİ",
      "home.archTag2": "ÖZEL / GÜVENLİ / KATLANARAK BÜYÜYEN",
      "home.arch1": "Misafir<br>sinyalleri",
      "home.arch2": "Özel<br>bilgi",
      "home.arch3": "Sadakat<br>zekâsı",
      "home.arch4": "Kişiselleştirilmiş<br>eylemler",
      "home.caseMetric1": "misafir niyetine<br>daha hızlı yanıt",
      "home.caseMetric2": "daha fazla karar<br>otomatikleştirildi",
      "home.caseMetric3": "müşteri verisi<br>tesisten dışarı çıkıyor",
      "home.metricsNote": "Örnek sonuçlar yalnızca gösterim amaçlıdır.",

      "home.kicker06": "Fark",
      "home.comparisonH2":
        "Bir ajans yapay zekâyı<br>entegre edebilir.<br><em>Ya da sizin yapabilir.</em>",
      "home.thWhat": "Ne değişir",
      "home.thTraditional": "Geleneksel yapay zekâ ajansı",
      "home.row1c1": "Temel zekâ",
      "home.row1c2": "Üçüncü taraf API’ler kiralar",
      "home.row1c3": "Kurumunuz için inşa edilir",
      "home.row2c1": "Bilgi",
      "home.row2c2": "Prompt ve araçlarda yaşar",
      "home.row2c3": "Kurumsal hafızaya dönüşür",
      "home.row3c1": "Veri duruşu",
      "home.row3c2": "Sınırlarınızın dışına çıkar",
      "home.row3c3": "Kendi şartlarınızla yönetilir",
      "home.row4c1": "Stratejik değer",
      "home.row4c2": "Taklit edilebilir yetenek",
      "home.row4c3": "Katlanarak büyüyen varlık",
      "home.row5c1": "Kontrol",
      "home.row5c2": "Sağlayıcının yol haritasına bağlı",
      "home.row5c3": "Tamamen size ait",

      "home.kicker07": "Sorular, yanıtlandı",
      "home.faqH2": "Akıllı<br><em>sorular.</em>",
      "home.faq1Q": "EOAI tam olarak nedir?",
      "home.faq1A":
        "Kurumsal Sahipli Yapay Zekâ; modeller, bilgi, iş akışları ve altyapıdan oluşan, kuruluşunuz tarafından kuruluşunuz için kontrol edilen özel bir zekâ sistemidir.",
      "home.faq2Q": "Neden ChatGPT veya Claude kullanılmasın?",
      "home.faq2A":
        "Genel modeller güçlü araçlar olabilir. Ancak bunlar sizin uzun vadeli fikri mülkiyetiniz, işletim sisteminiz veya farklılaştırıcı avantajınız değildir. EOAI, zekâyı sahip olunan bir varlığa dönüştürür.",
      "home.faq3Q": "Devreye alma ne kadar sürer?",
      "home.faq3A":
        "Odaklı sistemler haftalar içinde devreye alınabilir. Daha büyük kurumsal platformlar; etki, hazır oluş ve yönetişimi dengeleyen kademeli aşamalarda gelişir.",
      "home.faq4Q": "EOAI kimin için?",
      "home.faq4A":
        "Geleceğini üçüncü taraf bir API’ye devretmeden zekâyı temel işletim modelinin bir parçası haline getirmeye hazır kuruluşlar için.",

      "home.contactEyebrow": "Bir sonraki kurumsal avantaj",
      "home.contactH2":
        "Sizi farklı kılanı<br><em>sahiplenme zamanı.</em>",
      "home.contactFootTag": "Kurumsal Sahipli Yapay Zekâ",

      "work.metaTitle": "Bizimle çalışın — EOAI Lab",
      "work.navCta": "Şimdi başvurun",
      "work.eyebrow": "İşe alıyoruz",
      "work.h1": "Sahipleneceğiniz<br>şeyi <em>inşa edin.</em>",
      "work.lede":
        "EOAI Lab, Kurumsal Sahipli Yapay Zekâ inşa eden küçük ve hızlı hareket eden bir girişim — zekâsını kiralamayı reddeden şirketler için özel modeller, ajanlar ve altyapı. Burada katmanlar ya da eski süreçler yok: gerçek sistemleri üretime taşıyan, bu süreçte tüm yığını öğrenen ve şirketle birlikte ilk günden büyüyen erken bir ekip var. İnşa ettiğiniz şey üzerinde doğrudan etki ve gerçek bir sahiplik istiyorsanız, aşağıda kendinizden bahsedin — her başvuruyu kendimiz okuyoruz.",
      "work.labelName": "Ad Soyad",
      "work.labelEmail": "E-posta",
      "work.labelPhone": "Telefon",
      "work.labelLinkedin": "LinkedIn / portföy",
      "work.labelPosition": "İlgilendiğiniz alan",
      "work.optChoose": "Bir alan seçin",
      "work.opt1": "Yapay Zekâ Stratejisi ve Uygulama",
      "work.opt2": "Makine Öğrenmesi",
      "work.opt3": "Ajanlar ve Otomasyon",
      "work.opt4": "Altyapı ve Güvenlik",
      "work.opt5": "Tasarım ve Marka",
      "work.opt6": "İş Geliştirme",
      "work.opt7": "Başka bir şey",
      "work.labelMessage": "Kısa bir not",
      "work.placeholderName": "Ayşe Yılmaz",
      "work.placeholderEmail": "ayse@email.com",
      "work.placeholderMessage": "Neden EOAI Lab ve neler katabilirsiniz?",
      "work.submitBtn": "Başvuruyu gönder",
      "work.statusMissing":
        "Lütfen adınızı, e-postanızı ve ilgi alanınızı doldurun.",
      "work.statusSending": "Gönderiliyor…",
      "work.statusThanks":
        "Teşekkürler — başvurunuz elimize ulaştı, sizinle iletişime geçeceğiz.",
      "work.statusError":
        "Bir şeyler ters gitti. Lütfen bunun yerine info@eoailab.com adresine e-posta gönderin.",

      "client.metaTitle": "Müşteri olun — EOAI Lab",
      "client.navCta": "Hemen başlayın",
      "client.eyebrow": "Hadi konuşalım",
      "client.h1": "Sizi <em>farklı kılanı</em><br>sahiplenin.",
      "client.lede":
        "EOAI Lab, Kurumsal Sahipli Yapay Zekâ inşa eder — zekâsını kiralamayı reddeden şirketler için özel modeller, ajanlar ve altyapı. İşletmeniz hakkında ve bizden ne inşa etmemizi istediğiniz hakkında biraz bilgi verin, doğru sonraki adımı bulmak için sizinle iletişime geçelim — her başvuruyu kendimiz okuyoruz.",
      "client.labelName": "Ad Soyad",
      "client.labelEmail": "E-posta",
      "client.labelPhone": "Telefon",
      "client.labelCompany": "Şirket",
      "client.placeholderCompany": "Şirket adı",
      "client.labelMessage": "Kısa bir not",
      "client.placeholderName": "Ayşe Yılmaz",
      "client.placeholderEmail": "ayse@sirket.com",
      "client.placeholderMessage": "Bizden ne inşa etmemizi istersiniz?",
      "client.submitBtn": "Gönder",
      "client.statusMissing":
        "Lütfen adınızı, e-postanızı ve şirketinizi doldurun.",
      "client.statusSending": "Gönderiliyor…",
      "client.statusThanks":
        "Teşekkürler — başvurunuz elimize ulaştı, sizinle iletişime geçeceğiz.",
      "client.statusError":
        "Bir şeyler ters gitti. Lütfen bunun yerine info@eoailab.com adresine e-posta gönderin.",
    },
  };

  function getLang() {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "tr" ? "tr" : "en";
  }

  function t(key) {
    const lang = getLang();
    return translations[lang][key] ?? translations.en[key] ?? key;
  }

  function applyLang(lang) {
    const dict = translations[lang];
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] !== undefined) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] !== undefined) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((el) => {
      const key = el.getAttribute("data-i18n-aria-label");
      if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
    });

    const titleKey = document.body.getAttribute("data-i18n-title");
    if (titleKey && dict[titleKey] !== undefined) document.title = dict[titleKey];

    document.querySelectorAll(".lang-btn").forEach((btn) => {
      const active = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-pressed", active ? "true" : "false");
    });
  }

  function setLang(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    applyLang(getLang());
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  });

  window.i18n = { t, getLang, setLang };
})();
