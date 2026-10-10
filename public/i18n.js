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
      "nav.caseStudy": "How it works",
      "nav.about": "About",
      "nav.workWithUs": "Work with us",
      "nav.brandAria": "EOAI Lab home",
      "nav.menuAria": "Open navigation",

      "home.metaTitle": "EOAI Lab — Own your intelligence.",
      "home.navCta": "Start a conversation",
      "home.heroEyebrow": "Production AI on your data, owned by you",
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
      "home.roundLink": "Start here",

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
      "home.servicesH2": "Narrow focus.<br><em>Deep ownership.</em>",
      "home.servicesP":
        "Our focus today is education: catching student dropout before it happens. The same core engine extends to any decision your own data can inform.",
      "home.svc1Title": "EO-Churn<br>early warning",
      "home.svc1Desc":
        "Who is about to leave, why, and what to do this week — every morning, for every active student.",
      "home.svc2Title": "Enterprise-owned<br>AI systems",
      "home.svc2Desc":
        "Production systems trained on your own data, running in your environment, and handed over to you.",
      "home.svcCtaP": "Don’t see a category for your opportunity?",
      "home.svcCtaLink": "Tell us what<br>should be owned",
      "home.svc1Aria": "See EO-Churn",
      "home.svcAlso":
        "We can also help with: private language models · agents &amp; automation · knowledge systems (RAG) · AI infrastructure &amp; security.",

      "home.kicker04": "Services / Solutions",
      "home.solutionsH2": "Built and tested.<br><em>Now in pilot.</em>",
      "home.solutionsP":
        "Not concepts on a slide: pipelines we built end to end, explainable by design and deployable on infrastructure you control. None is running at a client yet — the next step is a backtest on your own data.",
      "home.eocTag": "SOLUTION 01 · EDUCATION · V1 — PILOT STAGE",
      "home.eocH3": "EO-Churn: Student<br>Dropout Early Warning",
      "home.eocCopy":
        "A student doesn’t leave overnight. Replies slow down, mock-exam scores slip, payments run late, attendance drops — signals your systems already record but nobody reads together. Every morning, EO-Churn answers three questions for each active student: who is about to leave, why, and what your team should do this week.",
      "home.eocShot1Alt":
        "EO-Churn daily risk list: students ranked by dropout probability, each with its top three SHAP reasons",
      "home.eocShot1Cap":
        "Daily risk list — ranked by probability, top three reasons per student.",
      "home.eocShot2Alt":
        "EO-Churn outreach draft: a mentor message chosen from approved templates, marked as not sent",
      "home.eocShot2Cap":
        "Outreach draft — picked from your approved templates, never sent automatically.",
      "home.eocFlow1Title": "Export &amp; mapping",
      "home.eocFlow1Desc":
        "A CSV or LMS export from the system you already use. Your column headers are mapped to our schema once — no new data collection.",
      "home.eocFlow2Title": "Trained on your history",
      "home.eocFlow2Desc":
        "Not another institution’s data. Unusable rows are set aside and reported back to you.",
      "home.eocFlow3Title": "Every morning at 09:00",
      "home.eocFlow3Desc":
        "Every active student re-scored. A ranked list with reasons, sized to your team’s capacity — on the dashboard, by e-mail, Telegram, or webhook.",
      "home.eocFlow4Title": "Mentor action &amp; feedback",
      "home.eocFlow4Desc":
        "The mentor reaches out and logs the outcome. That outcome feeds the next training run, so the model adapts to your institution.",
      "home.eocFact1": "Daily risk list,<br>no login needed",
      "home.eocFact2": "Reasons per student,<br>by column name (SHAP)",
      "home.eocFact3": "Identity fields needed —<br>an anonymous code is enough",
      "home.eocFact4": "Messages sent without<br>human approval",
      "home.eocFootP":
        "DEMO SCREENS USE SYNTHETIC DATA — THEY SHOW THE PIPELINE WORKS END TO END, NOT THE PRODUCT’S ACCURACY",
      "home.eocFootLink": "Request a free backtest",

      "home.solTag": "SOLUTION 02 · TELECOM · REFERENCE BUILD",
      "home.solH3": "AI-Assisted Customer<br>Churn Warning",
      "home.solCopy":
        "A private early-warning system that scores every customer’s likelihood of leaving — every morning, automatically — and explains why, in terms your team can act on. We built it on a well-known public telecom churn dataset to prove the pipeline end to end: it shows the system works, not how accurate it would be on your customers.",
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
      "home.solFootP":
        "TRAINING PIPELINE · DAILY BATCH · REST API · SHAP · DOCKER — ALL ON INFRASTRUCTURE YOU OWN",
      "home.solFootLink": "Ask about this solution",
      "home.solMoreP": "More solutions are in active development.",
      "home.solMoreLink": "Tell us what you’d<br>want us to build",

      "home.kicker05": "How EO-Churn works",
      "home.caseTag": "THE REAL ARCHITECTURE",
      "home.caseH2": "One core engine.<br>Your <em>column mapping.</em>",
      "home.caseCopy":
        "EO-Churn isn’t rewritten for every client. The core engine stays the same; only a mapping file that translates your column headers into our schema changes. The model is trained on your own student history, runs in your environment, and its weights are handed over to you — it keeps working even if our relationship ends.",
      "home.caseLink1": "Request a free backtest",
      "home.caseLink2": "Read the EOAI paper",
      "home.archTag1": "EO-CHURN ARCHITECTURE",
      "home.archTag2": "YOUR ENVIRONMENT / YOUR MODEL",
      "home.arch1": "CSV / LMS<br>export",
      "home.arch2": "Column<br>mapping",
      "home.arch3": "Calibrated model<br>+ SHAP",
      "home.arch4": "Ranked list,<br>reasons, draft",
      "home.claimsH3": "What we don’t claim yet",
      "home.claim1":
        "We don’t have a field case study yet. EO-Churn is in pilot stage and isn’t running at an institution today.",
      "home.claim2":
        "The numbers in our demo come from synthetic data. They show the pipeline works end to end — they are not the product’s accuracy.",
      "home.claim3":
        "The real number comes from your data. Send two anonymized CSVs and within two weeks you’ll see how many dropouts we would have caught last term, and how many days early. If the result is weak, we’ll say so just as clearly.",

      "home.kicker06": "The difference",
      "home.comparisonH2":
        "A vendor can<br>rent you AI.<br><em>Or make it yours.</em>",
      "home.thWhat": "What changes",
      "home.thTraditional": "Rented AI service",
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
      "home.toTopAria": "Back to top",

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
      "nav.caseStudy": "Nasıl çalışır",
      "nav.about": "Hakkımızda",
      "nav.workWithUs": "Bizimle çalışın",
      "nav.brandAria": "EOAI Lab ana sayfa",
      "nav.menuAria": "Menüyü aç",

      "home.metaTitle": "EOAI Lab — Sizin için düşünen sistem sizin olsun.",
      "home.navCta": "Bir görüşme başlatın",
      "home.heroEyebrow": "Kendi verinizle çalışan, size ait yapay zekâ",
      "home.heroH1": "Sizin için düşünen<br>sistem <em>sizin olsun.</em>",
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
      "home.roundLink": "Buradan başlayın",

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
      "home.servicesH2": "Dar odak.<br><em>Derin sahiplik.</em>",
      "home.servicesP":
        "Bugünkü odağımız eğitim: öğrenci kaybını gerçekleşmeden yakalamak. Aynı çekirdek motor, kendi verinizin besleyebileceği her karara genişletilebilir.",
      "home.svc1Title": "EO-Churn<br>erken uyarı",
      "home.svc1Desc":
        "Kim ayrılmak üzere, neden ve bu hafta ne yapılmalı — her sabah, aktif her öğrenci için.",
      "home.svc2Title": "Kuruma ait<br>yapay zekâ sistemleri",
      "home.svc2Desc":
        "Kendi verinizle eğitilen, sizin ortamınızda çalışan ve size teslim edilen üretim sistemleri.",
      "home.svcCtaP": "Fırsatınıza uygun bir kategori göremiyor musunuz?",
      "home.svcCtaLink": "Neyin sahiplenilmesi<br>gerektiğini anlatın",
      "home.svc1Aria": "EO-Churn’ü inceleyin",
      "home.svcAlso":
        "Ayrıca şunlarda da yardımcı olabiliriz: özel dil modelleri · ajanlar ve otomasyon · bilgi sistemleri (RAG) · yapay zekâ altyapısı ve güvenlik.",

      "home.kicker04": "Hizmetler / Çözümler",
      "home.solutionsH2": "Kuruldu, test edildi.<br><em>Şimdi pilotta.</em>",
      "home.solutionsP":
        "Slaytta kalan kavramlar değil: uçtan uca kurduğumuz, tasarımdan itibaren açıklanabilir ve kontrolünüzdeki altyapıda çalışabilen sistemler. Henüz hiçbiri bir müşteride canlı çalışmıyor — sıradaki adım sizin verinizle bir backtest.",
      "home.eocTag": "ÇÖZÜM 01 · EĞİTİM · V1 — PİLOT AŞAMASINDA",
      "home.eocH3": "EO-Churn: Öğrenci Kaybı<br>Erken Uyarı Sistemi",
      "home.eocCopy":
        "Bir öğrenci bir sabah aniden ayrılmaz. Önce mesajlara geç döner, deneme netleri düşer, ödeme gecikir, derse devamı azalır. Bu sinyaller sisteminizde zaten kayıtlıdır — ama hiçbir yerde birlikte okunmaz. EO-Churn her sabah, aktif her öğrenci için üç soruyu cevaplar: kim ayrılmak üzere, neden ve ekibiniz bu hafta ne yapmalı.",
      "home.eocShot1Alt":
        "EO-Churn günlük risk listesi: ayrılma olasılığına göre sıralı öğrenciler ve her biri için öne çıkan üç SHAP sebebi",
      "home.eocShot1Cap":
        "Günlük risk listesi — olasılığa göre sıralı, her öğrenci için öne çıkan üç sebep.",
      "home.eocShot2Alt":
        "EO-Churn temas taslağı: onaylı şablonlardan seçilmiş, gönderilmemiş bir mentor mesajı",
      "home.eocShot2Cap":
        "Temas taslağı — kurumun onaylı şablonlarından seçilir, asla otomatik gönderilmez.",
      "home.eocFlow1Title": "Dışa aktarım ve eşleme",
      "home.eocFlow1Desc":
        "Hâlihazırda kullandığınız sistemden bir CSV veya LMS dışa aktarımı. Kolon başlıklarınız şemamıza bir kez eşlenir — yeni veri toplamıyoruz.",
      "home.eocFlow2Title": "Kendi geçmişinizle eğitim",
      "home.eocFlow2Desc":
        "Başka bir kurumun verisiyle değil. Kullanılamayan satırlar ayrılır ve size raporlanır.",
      "home.eocFlow3Title": "Her sabah 09.00’da",
      "home.eocFlow3Desc":
        "Aktif öğrencilerin tamamı yeniden puanlanır. Ekibinizin kapasitesi kadar, sebepleriyle sıralı bir liste — panelde, e-postada, Telegram’da veya webhook ile.",
      "home.eocFlow4Title": "Mentor aksiyonu ve geri besleme",
      "home.eocFlow4Desc":
        "Mentor temas kurar, sonucu panele işler. Bu sonuç bir sonraki eğitime girer; model zamanla kurumunuza uyum sağlar.",
      "home.eocFact1": "Günlük risk listesi,<br>panele girmeye gerek yok",
      "home.eocFact2": "Öğrenci başına sebep,<br>kolon adıyla (SHAP)",
      "home.eocFact3": "Kimlik bilgisi gerekmez —<br>anonim bir kod yeterli",
      "home.eocFact4": "İnsan onayı olmadan<br>gönderilen mesaj",
      "home.eocFootP":
        "DEMO EKRANLARI SENTETİK VERİ KULLANIR — BORU HATTININ UÇTAN UCA ÇALIŞTIĞINI GÖSTERİR, ÜRÜNÜN DOĞRULUĞUNU DEĞİL",
      "home.eocFootLink": "Ücretsiz backtest isteyin",

      "home.solTag": "ÇÖZÜM 02 · TELEKOM · REFERANS ÇALIŞMA",
      "home.solH3": "Yapay Zekâ Destekli<br>Müşteri Kaybı Uyarısı",
      "home.solCopy":
        "Her sabah otomatik olarak her müşterinin ayrılma olasılığını puanlayan ve nedenini ekibinizin harekete geçebileceği şekilde açıklayan özel bir erken uyarı sistemi. Boru hattını uçtan uca kanıtlamak için herkesçe bilinen, halka açık bir telekom churn veri setiyle kurduk: sistemin çalıştığını gösterir, sizin müşterilerinizde ne kadar doğru olacağını değil.",
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
      "home.solFootP":
        "EĞİTİM HATTI · GÜNLÜK TOPLU İŞLEM · REST API · SHAP · DOCKER — TAMAMI SİZİN ALTYAPINIZDA",
      "home.solFootLink": "Bu çözüm hakkında bilgi alın",
      "home.solMoreP": "Daha fazla çözüm aktif olarak geliştiriliyor.",
      "home.solMoreLink": "Ne inşa etmemizi<br>istediğinizi anlatın",

      "home.kicker05": "EO-Churn nasıl çalışır",
      "home.caseTag": "GERÇEK MİMARİ",
      "home.caseH2": "Tek çekirdek motor.<br>Sizin <em>kolon eşlemeniz.</em>",
      "home.caseCopy":
        "EO-Churn her müşteri için sıfırdan yazılmaz. Çekirdek motor aynı kalır; yalnızca kolon başlıklarınızı şemamıza çeviren eşleme dosyası değişir. Model kendi öğrenci geçmişinizle eğitilir, sizin ortamınızda çalışır ve ağırlıkları size teslim edilir — iş ilişkimiz sona erse bile çalışmaya devam eder.",
      "home.caseLink1": "Ücretsiz backtest isteyin",
      "home.caseLink2": "EOAI makalesini okuyun",
      "home.archTag1": "EO-CHURN MİMARİSİ",
      "home.archTag2": "SİZİN ORTAMINIZ / SİZİN MODELİNİZ",
      "home.arch1": "CSV / LMS<br>dışa aktarımı",
      "home.arch2": "Kolon<br>eşleme",
      "home.arch3": "Kalibre model<br>+ SHAP",
      "home.arch4": "Sıralı liste,<br>sebepler, taslak",
      "home.claimsH3": "Henüz iddia etmediklerimiz",
      "home.claim1":
        "Henüz sahadan bir vaka çalışmamız yok. EO-Churn pilot aşamasında; bugün bir kurumda canlı çalışmıyor.",
      "home.claim2":
        "Demodaki sayılar sentetik veriden geliyor. Boru hattının uçtan uca çalıştığını gösterir — ürünün doğruluğu değildir.",
      "home.claim3":
        "Gerçek sayı sizin verinizden çıkar. Anonimleştirilmiş iki CSV gönderin; iki hafta içinde geçen dönem kaç ayrılmayı, kaç gün önceden yakalardık görün. Sonuç zayıf çıkarsa bunu da aynı netlikte yazarız.",

      "home.kicker06": "Fark",
      "home.comparisonH2":
        "Bir sağlayıcı size<br>yapay zekâ kiralar.<br><em>Ya da sizin olur.</em>",
      "home.thWhat": "Ne değişir",
      "home.thTraditional": "Kiralık yapay zekâ servisi",
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
        "Sizi farklı kılan şey<br><em>sizin olsun.</em>",
      "home.contactFootTag": "Kurumsal Sahipli Yapay Zekâ",
      "home.toTopAria": "Başa dön",

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

  // The home page has a shareable Turkish URL: /tr. Firebase rewrites it to
  // index.html, so the path is the only thing that tells us the language.
  const TR_PATH = /^\/tr(\/|$)/;
  const path = window.location.pathname;
  const isHome = path === "/" || path === "/index.html" || TR_PATH.test(path);

  function readSaved() {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  }

  function prefersTurkish() {
    const langs = navigator.languages || [navigator.language || ""];
    return langs.some((l) => /^tr\b/i.test(l));
  }

  // Resolved once on load: an explicit /tr URL wins, then a saved choice,
  // then (home page only) the browser language.
  let currentLang = (function () {
    if (TR_PATH.test(path)) return "tr";
    const saved = readSaved();
    if (saved === "tr" || saved === "en") return saved;
    return isHome && prefersTurkish() ? "tr" : "en";
  })();

  function getLang() {
    return currentLang;
  }

  // Keep the address bar in sync on the home page so the link a visitor
  // copies opens in the language they're reading.
  function syncUrl(lang) {
    if (!isHome) return;
    const target = lang === "tr" ? "/tr" : "/";
    if (window.location.pathname === target) return;
    history.replaceState(null, "", target + window.location.search + window.location.hash);
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
    document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
      const key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
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
    currentLang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {}
    syncUrl(lang);
    applyLang(lang);
  }

  document.addEventListener("DOMContentLoaded", () => {
    // Landing on /tr counts as choosing Turkish, so the other pages follow.
    if (TR_PATH.test(path)) {
      try {
        localStorage.setItem(STORAGE_KEY, "tr");
      } catch (e) {}
    }
    syncUrl(getLang());
    applyLang(getLang());
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.addEventListener("click", () => setLang(btn.getAttribute("data-lang")));
    });
  });

  window.i18n = { t, getLang, setLang };
})();
