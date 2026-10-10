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
      "nav.eoChurn": "EO-Churn",
      "nav.caseStudy": "How it works",
      "nav.about": "About",
      "nav.workWithUs": "Work with us",
      "nav.brandAria": "EOAI Lab home",
      "nav.menuAria": "Open navigation",
      "nav.menuCloseAria": "Close navigation",

      "home.metaTitle": "EOAI Lab",
      "home.navCta": "Start a conversation",
      "home.heroEyebrow": "Production AI on your data, owned by you",
      "home.heroH1": "Own what<br>\n<em>thinks</em> for you.",
      "home.heroLede":
        "We architect private intelligence that belongs entirely to your enterprise: models, knowledge, workflows, and the advantage they create.",
      "home.heroCtaGhost": "Discover EOAI",
      "home.heroArtAria":
        "Abstract visualization of an enterprise-owned intelligence system",
      "home.artTop": "YOUR KNOWLEDGE",
      "home.artRight": "YOUR MODEL",
      "home.artBottom": "YOUR INTELLIGENCE",
      "home.coreLabel": "YOUR AI",
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
      "home.cardIndex01": "01 · Traditional AI",
      "home.cardH3_01": "Borrowed<br>intelligence.",
      "home.cardLi_01_1": "Third-party models",
      "home.cardLi_01_2": "Shared learning surface",
      "home.cardLi_01_3": "Usage-based dependency",
      "home.cardLi_01_4": "Generic capability",
      "home.cardIndex02": "02 · Enterprise-Owned AI",
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
        "From the first signal to self-improving operations, every layer is designed around your business, and left entirely in your hands.",
      "home.step1Title": "Discovery",
      "home.step1Desc":
        "We find the decisions, patterns, and expertise worth turning into an owned advantage.",
      "home.step2Title": "Architecture",
      "home.step2Desc":
        "We design the model, data, security, and workflow system around the reality of your enterprise.",
      "home.step3Title": "Custom intelligence",
      "home.step3Desc":
        "Private models and agents are shaped on your knowledge, not someone else’s public cloud.",
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
        "Who is about to leave, why, and what to do this week. Every morning, for every active student.",
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
        "Not concepts on a slide: pipelines we built end to end, explainable by design and deployable on infrastructure you control. None is running at a client yet. The next step is a backtest on your own data.",
      "home.eocTag": "SOLUTION 01 · EDUCATION · V1 · PILOT STAGE",
      "home.eocH3": "EO-Churn: Student<br>Dropout Early Warning",
      "home.eocCopy":
        "A student doesn’t leave overnight. Replies slow down, mock-exam scores slip, payments run late, attendance drops: signals your systems already record but nobody reads together. Every morning, EO-Churn answers three questions for each active student: who is about to leave, why, and what your team should do this week.",
      "home.eocShot1Alt":
        "EO-Churn daily risk list: students ranked by dropout probability, each with its top three SHAP reasons",
      "home.eocShot1Cap":
        "Daily risk list: ranked by probability, top three reasons per student.",
      "home.eocShot2Alt":
        "EO-Churn outreach draft: a mentor message chosen from approved templates, marked as not sent",
      "home.eocShot2Cap":
        "Outreach draft: picked from your approved templates, never sent automatically.",
      "home.eocFlow1Title": "Export &amp; mapping",
      "home.eocFlow1Desc":
        "A CSV or LMS export from the system you already use. Your column headers are mapped to our schema once. No new data collection.",
      "home.eocFlow2Title": "Trained on your history",
      "home.eocFlow2Desc":
        "Not another institution’s data. Unusable rows are set aside and reported back to you.",
      "home.eocFlow3Title": "Every morning at 09:00",
      "home.eocFlow3Desc":
        "Every active student re-scored. A ranked list with reasons, sized to your team’s capacity. Delivered on the dashboard, by e-mail, Telegram, or webhook.",
      "home.eocFlow4Title": "Mentor action &amp; feedback",
      "home.eocFlow4Desc":
        "The mentor reaches out and logs the outcome. That outcome feeds the next training run, so the model adapts to your institution.",
      "home.eocFact1": "Daily risk list,<br>no login needed",
      "home.eocFact2": "Reasons per student,<br>by column name (SHAP)",
      "home.eocFact3": "Delivery channels:<br>e-mail, Telegram, webhook",
      "home.eocFact4": "To a free backtest report<br>on your own data",
      "home.eocFact4Unit": " weeks",
      "home.eocFootLink": "Request a free backtest",
      "home.eocPageLink": "Explore EO-Churn",

      "home.solMoreP": "More solutions are in active development.",
      "home.solMoreLink": "Tell us what you’d<br>want us to build",

      "home.kicker05": "How EO-Churn works",
      "home.caseTag": "THE REAL ARCHITECTURE",
      "home.caseH2": "One core engine.<br>Your <em>column mapping.</em>",
      "home.caseCopy":
        "EO-Churn isn’t rewritten for every client. The core engine stays the same; only a mapping file that translates your column headers into our schema changes. The model is trained on your own student history, runs in your environment, and its weights are handed over to you. It keeps working even if our relationship ends.",
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
        "The numbers in our demo come from synthetic data. They show the pipeline works end to end. They are not the product’s accuracy.",
      "home.claim3":
        "The real number comes from your data. Send two anonymized CSVs and within two weeks you’ll see how many dropouts we would have caught last term, and how many days early. If the result is weak, we’ll say so just as clearly.",

      "home.kicker06": "Questions, answered",

      "home.faqH2": "The intelligent<br><em>questions.</em>",
      "home.faq1Q": "What exactly is EOAI?",
      "home.faq1A":
        "Enterprise-Owned Artificial Intelligence is a dedicated intelligence system (models, knowledge, workflows, and infrastructure) controlled by your organization, for your organization.",
      "home.faq2Q": "Why not use ChatGPT or Claude?",
      "home.faq2A":
        "Public models can be powerful tools. But they are not your long-term intellectual property, operating system, or differentiated advantage. EOAI turns intelligence into an owned asset.",
      "home.faq3Q": "How long does deployment take?",
      "home.faq3A":
        "Focused systems can launch in weeks. Larger enterprise platforms evolve in deliberate phases, balancing impact, readiness, and governance.",
      "home.faq4Q": "Who is EOAI for?",
      "home.faq4A":
        "Organizations ready to make intelligence part of their core operating model, without outsourcing their future to a third-party API.",

      "home.contactEyebrow": "The next enterprise advantage",
      "home.contactH2":
        "It’s time to own<br><em>what makes you different.</em>",
      "home.contactFootTag": "Enterprise-Owned Artificial Intelligence",
      "home.toTopAria": "Back to top",

      "churn.metaTitle": "EOAI Lab",
      "churn.navCta": "Request a backtest",
      "churn.ctaBacktest": "Request a free backtest",
      "churn.heroEyebrow": "EO-Churn · Student dropout early warning",
      "churn.heroH1": "Catch the dropout<br><em>before it happens.</em>",
      "churn.heroLede":
        "Which student is about to leave, why, and what your team should do this week. Every morning, on your own data.",
      "churn.heroCtaGhost": "See how it works",
      "churn.shot1Alt":
        "EO-Churn daily risk list: students ranked by dropout probability, each with its top three SHAP reasons",
      "churn.shot2Alt":
        "EO-Churn outreach draft: a mentor message chosen from approved templates, marked as not sent",
      "churn.k01": "The problem",
      "churn.probH2": "A student doesn’t leave<br><em>overnight.</em>",
      "churn.probP1":
        "First, replies to messages slow down. Mock-exam scores drop, a payment runs late, attendance thins out. These signals are already recorded in your systems, but nowhere are they read together.",
      "churn.probP2":
        "Noticing is left to a mentor’s intuition, and it usually comes too late. A student who leaves doesn’t cancel one payment; they erase the rest of the term.",
      "churn.k02": "Every morning",
      "churn.qH2": "Three questions,<br><em>answered daily.</em>",
      "churn.qP":
        "EO-Churn doesn’t send anyone a message. It ranks, gives the reason, and prepares the draft. The decision to send always stays with your team.",
      "churn.q1T": "Who",
      "churn.q1D":
        "A calibrated dropout probability for every active student, ranked by risk. Not a binary “at risk / not at risk” label.",
      "churn.q2T": "Why",
      "churn.q2D":
        "The top three reasons for each student, by column: “message reply time +0.18”, “mock-exam trend +0.17”.",
      "churn.q3T": "What to do",
      "churn.q3D":
        "An outreach draft picked from your own approved templates, with a success measure for the conversation.",
      "churn.k03": "The dashboard",
      "churn.dashH2": "Everything in<br><em>one place.</em>",
      "churn.dashP":
        "Three views: the daily risk list, every student including those below the threshold, and model health: which threshold ran, how many rows were quarantined, when the last run happened.",
      "churn.shot1Cap":
        "Daily risk list: ranked by probability, with the top three reasons, plan and membership on every row.",
      "churn.shot2Cap":
        "Outreach draft: chosen from approved templates. There is no send button on the dashboard.",
      "churn.k04": "How it works",
      "churn.flowH2": "From your export<br><em>to a mentor’s call.</em>",
      "churn.flowP":
        "No new data collection. EO-Churn reads what your systems already record.",
      "churn.s1T": "Export",
      "churn.s1D":
        "A CSV or LMS export from the system you already use is enough.",
      "churn.s2T": "Column mapping",
      "churn.s2D":
        "Your headers are mapped to the system’s schema once, with a single mapping file.",
      "churn.s3T": "Training",
      "churn.s3D":
        "The model learns from your own student history, not another institution’s. Unusable rows are set aside and reported to you.",
      "churn.s4T": "Daily scoring",
      "churn.s4D":
        "Every active student is re-scored automatically each morning.",
      "churn.s5T": "Dashboard and e-mail",
      "churn.s5D":
        "The ranked list, the reasons and the drafts land in front of your team.",
      "churn.s6T": "Mentor action",
      "churn.s6D":
        "The mentor reaches out and logs the outcome on the dashboard.",
      "churn.s7T": "Feedback",
      "churn.s7D":
        "The outcome feeds the next training run, so the model adapts to your institution over time.",
      "churn.k05": "The model",
      "churn.modelH2": "Chosen on your data,<br><em>not on ours.</em>",
      "churn.modelP":
        "Several candidate models are trained and measured on your data, and the one that performs best is selected.",
      "churn.m1T": "Selection by PR-AUC",
      "churn.m1D":
        "On imbalanced data, the real question is “who do I call first?”. PR-AUC answers it; ROC-AUC alone misleads.",
      "churn.m2T": "Calibration",
      "churn.m2D": "Raw scores are calibrated, so that “40%” really means 40%.",
      "churn.m3T": "Cost-based threshold",
      "churn.m3D":
        "A false alarm and a missed dropout don’t cost the same. The threshold is set from that cost ratio and cut to your team’s capacity.",
      "churn.m4T": "Explainability",
      "churn.m4D":
        "SHAP gives the top three reasons per student, by column name: “message reply time +0.18”.",
      "churn.k06": "Reliability",
      "churn.prH2": "Principles we<br><em>don’t bend.</em>",
      "churn.prP":
        "The rules that keep a backtest honest and a daily list usable.",
      "churn.pr1T": "No information<br>leakage",
      "churn.pr1D":
        "At prediction time the model can’t see any data that didn’t exist yet. Without this, backtests look misleadingly good.",
      "churn.pr2T": "A probability,<br>not a label",
      "churn.pr2D":
        "The system never just says “at risk”. It gives a calibrated percentage; your institution decides where to intervene.",
      "churn.pr3T": "Sized to your<br>capacity",
      "churn.pr3D":
        "If your team can hold twenty conversations a day, you get the twenty riskiest students. A list nobody can act on is no list at all.",
      "churn.pr4T": "Missing data<br>is reported",
      "churn.pr4D":
        "Missing data isn’t filled in. The record is set aside and flagged; if too much is missing, no list is produced that day.",
      "churn.pr5T": "Owned by your<br>institution",
      "churn.pr5D":
        "The model weights are handed over to you. The system keeps running even if our relationship ends.",
      "churn.prCtaP": "Want to see it on your own data?",
      "churn.k07": "Delivery",
      "churn.delH2": "On their desk<br><em>by 09:00.</em>",
      "churn.delP":
        "Your team doesn’t need to log in. The list arrives every morning on the channels you choose: all three, one, or none.",
      "churn.ch1T": "E-mail",
      "churn.ch1D":
        "The daily risk list with per-student reasons, to several recipients. Your own SMTP server can be used.",
      "churn.ch2D":
        "Instant notification to your team’s group or to one person. Your institution’s own bot, your own group.",
      "churn.ch3D":
        "Slack, Discord or your institution’s internal system: any endpoint that accepts a message.",
      "churn.op1T": "Your institution’s clock",
      "churn.op1D":
        "Run time and time zone are configurable; the default is 09:00, Europe/Istanbul. Even on a UTC server, the mentor gets it at nine.",
      "churn.op2T": "Weekdays only, if you like",
      "churn.op2D":
        "It can run on weekdays only, so a quiet Monday morning doesn’t look like an outage.",
      "churn.op3T": "We tell you if it goes quiet",
      "churn.op3D":
        "If no successful run happens within a set window, a separate operator channel is alerted. A silent system and a healthy one look the same from outside; this check tells them apart.",
      "churn.roadmap":
        "WhatsApp is on the roadmap: it requires the Business API, sender verification and approved message templates.",
      "churn.k08": "Dashboard & API",
      "churn.apiH2": "Use our dashboard,<br><em>or don’t.</em>",
      "churn.apiP":
        "Every number on the dashboard comes from the system’s own API, and the same endpoints are open to you. They are protected with an API key and ship with an OpenAPI schema, so you can connect your CRM, student tracking system or reporting tool. We provide the dashboard; using it is up to you.",
      "churn.apiTag": "API KEY · OPENAPI",
      "churn.ep1": "Students above the threshold, with reasons",
      "churn.ep2": "A single student’s live score",
      "churn.ep3": "An instant prediction on the data you send",
      "churn.ep4": "The model’s performance metrics",
      "churn.ep5": "Whether the system is up",
      "churn.k09": "Outreach drafts",
      "churn.lmH2":
        "The list says who to call.<br><em>The draft, how to start.</em>",
      "churn.lmP":
        "There is no send button on the dashboard. The responsible team reads, approves or edits the draft; the decision to send is always human.",
      "churn.lm1T": "Open-weight model",
      "churn.lm1D":
        "Built on an open-weight model, not a closed service. It runs in your environment; no student data goes to a third party.",
      "churn.lm2T": "Adapted to you",
      "churn.lm2D":
        "It works with your approved communication templates and your terminology, so the output speaks in your institution’s voice.",
      "churn.lm3T": "It selects, it doesn’t write",
      "churn.lm3D":
        "The three SHAP reasons are matched against your approved template library. The model picks which template fits whom and prepares the draft.",
      "churn.k10": "Data & security",
      "churn.dataH2": "You decide how<br><em>data is shared.</em>",
      "churn.dataP":
        "We don’t ask for identity data; an anonymous student code is enough, and the key that links it to a student stays with you.",
      "churn.d1T": "De-identified<br>sharing",
      "churn.d1D":
        "Data is sent encrypted, without name, surname, e-mail or national ID number. Only behavioural data and the student code are shared.",
      "churn.d2T": "Synthetic<br>data",
      "churn.d2D":
        "You share no real records. Column names and summary statistics (mean, minimum, maximum) are enough; we generate the dataset.",
      "churn.d3T": "Data never<br>leaves",
      "churn.d3D":
        "The system is installed on your server or cloud account; training and prediction run in your environment.",
      "churn.sec1":
        "No column outside the mapping file ever reaches the model. You decide what you send.",
      "churn.sec2":
        "On request, raw data and everything derived from it is deleted after the backtest, with written confirmation.",
      "churn.sec3":
        "Once installed, data and model run in your environment; there is no outbound data flow.",
      "churn.k11": "Free backtest",
      "churn.offerTag": "NO FEE · NO SETUP · NO COMMITMENT",
      "churn.offerH2": "See it work on<br><em>your own data.</em>",
      "churn.askH3": "What we ask for",
      "churn.ask1": "Two CSVs: past student records and dropout dates",
      "churn.ask2": "Anonymized: no names, phone numbers or ID numbers",
      "churn.ask3": "One time only; no system installation",
      "churn.ask4": "A short form: fees, cost of outreach and team capacity",
      "churn.getH3": "What you get, within 2 weeks",
      "churn.get1":
        "How many dropouts we would have caught last term, and how many days early",
      "churn.get2": "How long the daily list would be at your capacity",
      "churn.get3":
        "A data-quality report: which columns are missing, how many rows are unusable",
      "churn.get4": "If the result is weak, we’ll write that just as clearly",
      "churn.n1T": "TODAY",
      "churn.n1D": "Decide who will export the data, and from which system.",
      "churn.n2T": "WITHIN A WEEK",
      "churn.n2D": "Two anonymized CSVs reach us.",
      "churn.n3T": "+2 WEEKS",
      "churn.n3D": "The backtest report is in your hands.",
      "churn.n4T": "THEN",
      "churn.n4D":
        "We look at the numbers together and start the installation.",
      "churn.contactH2": "All we need is<br><em>two CSV files.</em>",
      "churn.footTag": "Student dropout early warning",

      "work.metaTitle": "EOAI Lab",
      "work.navCta": "Apply now",
      "work.eyebrow": "We’re hiring",
      "work.h1": "Build what<br>you’ll <em>own.</em>",
      "work.lede":
        "EOAI Lab is a small, fast-moving startup building Enterprise-Owned Artificial Intelligence: private models, agents, and infrastructure for companies that refuse to rent their intelligence. There are no layers here, no legacy process: just an early team shipping real systems into production, learning the full stack along the way, and growing with the company from day one. If you want direct impact and real ownership over what you build, tell us about yourself below. We read every submission ourselves.",
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
      "work.statusThanks": "Thanks! We’ve got it and we’ll be in touch.",
      "work.statusError":
        "Something went wrong. Please email info@eoailab.com instead.",

      "client.metaTitle": "EOAI Lab",
      "client.navCta": "Get started",
      "client.eyebrow": "Let’s talk",
      "client.h1": "Own what<br>makes you <em>different.</em>",
      "client.lede":
        "EOAI Lab builds Enterprise-Owned Artificial Intelligence: private models, agents, and infrastructure for companies that refuse to rent their intelligence. Tell us a bit about your business and what you’d want us to build, and we’ll follow up to find the right next step. We read every submission ourselves.",
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
      "client.statusThanks": "Thanks! We’ve got it and we’ll be in touch.",
      "client.statusError":
        "Something went wrong. Please email info@eoailab.com instead.",
    },

    tr: {
      "nav.capabilities": "Yetenekler",
      "nav.solutions": "Çözümler",
      "nav.eoChurn": "EO-Churn",
      "nav.caseStudy": "Nasıl çalışır",
      "nav.about": "Hakkımızda",
      "nav.workWithUs": "Bizimle çalışın",
      "nav.brandAria": "EOAI Lab ana sayfa",
      "nav.menuAria": "Menüyü aç",
      "nav.menuCloseAria": "Menüyü kapat",

      "home.metaTitle": "EOAI Lab",
      "home.navCta": "Bir görüşme başlatın",
      "home.heroEyebrow": "Kendi verinizle çalışan, size ait yapay zekâ",
      "home.heroH1": "Sizin için düşünen<br>sistem <em>sizin olsun.</em>",
      "home.heroLede":
        "Tamamen kurumunuza ait, özel bir zekâ mimarisi kuruyoruz: modeller, bilgi, iş akışları ve bunların yarattığı avantaj.",
      "home.heroCtaGhost": "EOAI’yi keşfedin",
      "home.heroArtAria":
        "Kurumsal sahipli bir zekâ sisteminin soyut görselleştirmesi",
      "home.artTop": "BİLGİNİZ",
      "home.artRight": "MODELİNİZ",
      "home.artBottom": "ZEKÂNIZ",
      "home.coreLabel": "YAPAY<br>ZEKÂNIZ",
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
      "home.cardIndex01": "01 · Geleneksel Yapay Zekâ",
      "home.cardH3_01": "Ödünç alınmış<br>zekâ.",
      "home.cardLi_01_1": "Üçüncü taraf modeller",
      "home.cardLi_01_2": "Paylaşılan öğrenme yüzeyi",
      "home.cardLi_01_3": "Kullanıma dayalı bağımlılık",
      "home.cardLi_01_4": "Standart yetenek",
      "home.cardIndex02": "02 · Kurumsal Sahipli Yapay Zekâ",
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
        "İlk sinyalden kendini geliştiren operasyonlara kadar her katman işletmeniz etrafında tasarlanır ve tamamen sizin elinizde kalır.",
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
        "Kim ayrılmak üzere, neden ve bu hafta ne yapılmalı. Her sabah, aktif her öğrenci için.",
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
        "Slaytta kalan kavramlar değil: uçtan uca kurduğumuz, tasarımdan itibaren açıklanabilir ve kontrolünüzdeki altyapıda çalışabilen sistemler. Henüz hiçbiri bir müşteride canlı çalışmıyor. Sıradaki adım sizin verinizle bir backtest.",
      "home.eocTag": "ÇÖZÜM 01 · EĞİTİM · V1 · PİLOT AŞAMASINDA",
      "home.eocH3": "EO-Churn: Öğrenci Kaybı<br>Erken Uyarı Sistemi",
      "home.eocCopy":
        "Bir öğrenci bir sabah aniden ayrılmaz. Önce mesajlara geç döner, deneme netleri düşer, ödeme gecikir, derse devamı azalır. Bu sinyaller sisteminizde zaten kayıtlıdır, ama hiçbir yerde birlikte okunmaz. EO-Churn her sabah, aktif her öğrenci için üç soruyu cevaplar: kim ayrılmak üzere, neden ve ekibiniz bu hafta ne yapmalı.",
      "home.eocShot1Alt":
        "EO-Churn günlük risk listesi: ayrılma olasılığına göre sıralı öğrenciler ve her biri için öne çıkan üç SHAP sebebi",
      "home.eocShot1Cap":
        "Günlük risk listesi: olasılığa göre sıralı, her öğrenci için öne çıkan üç sebep.",
      "home.eocShot2Alt":
        "EO-Churn temas taslağı: onaylı şablonlardan seçilmiş, gönderilmemiş bir mentor mesajı",
      "home.eocShot2Cap":
        "Temas taslağı: kurumun onaylı şablonlarından seçilir, asla otomatik gönderilmez.",
      "home.eocFlow1Title": "Dışa aktarım ve eşleme",
      "home.eocFlow1Desc":
        "Hâlihazırda kullandığınız sistemden bir CSV veya LMS dışa aktarımı. Kolon başlıklarınız şemamıza bir kez eşlenir. Yeni veri toplamıyoruz.",
      "home.eocFlow2Title": "Kendi geçmişinizle eğitim",
      "home.eocFlow2Desc":
        "Başka bir kurumun verisiyle değil. Kullanılamayan satırlar ayrılır ve size raporlanır.",
      "home.eocFlow3Title": "Her sabah 09.00’da",
      "home.eocFlow3Desc":
        "Aktif öğrencilerin tamamı yeniden puanlanır. Ekibinizin kapasitesi kadar, sebepleriyle sıralı bir liste: panelde, e-postada, Telegram’da veya webhook ile.",
      "home.eocFlow4Title": "Mentor aksiyonu ve geri besleme",
      "home.eocFlow4Desc":
        "Mentor temas kurar, sonucu panele işler. Bu sonuç bir sonraki eğitime girer; model zamanla kurumunuza uyum sağlar.",
      "home.eocFact1": "Günlük risk listesi,<br>panele girmeye gerek yok",
      "home.eocFact2": "Öğrenci başına sebep,<br>kolon adıyla (SHAP)",
      "home.eocFact3": "Teslim kanalı:<br>e-posta, Telegram, webhook",
      "home.eocFact4": "İçinde ücretsiz backtest raporu,<br>kendi verinizle",
      "home.eocFact4Unit": " hafta",
      "home.eocFootLink": "Ücretsiz backtest isteyin",
      "home.eocPageLink": "EO-Churn’ü inceleyin",

      "home.solMoreP": "Daha fazla çözüm aktif olarak geliştiriliyor.",
      "home.solMoreLink": "Ne inşa etmemizi<br>istediğinizi anlatın",

      "home.kicker05": "EO-Churn nasıl çalışır",
      "home.caseTag": "GERÇEK MİMARİ",
      "home.caseH2": "Tek çekirdek motor.<br>Sizin <em>kolon eşlemeniz.</em>",
      "home.caseCopy":
        "EO-Churn her müşteri için sıfırdan yazılmaz. Çekirdek motor aynı kalır; yalnızca kolon başlıklarınızı şemamıza çeviren eşleme dosyası değişir. Model kendi öğrenci geçmişinizle eğitilir, sizin ortamınızda çalışır ve ağırlıkları size teslim edilir. İş ilişkimiz sona erse bile çalışmaya devam eder.",
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
        "Demodaki sayılar sentetik veriden geliyor. Boru hattının uçtan uca çalıştığını gösterir, ürünün doğruluğu değildir.",
      "home.claim3":
        "Gerçek sayı sizin verinizden çıkar. Anonimleştirilmiş iki CSV gönderin; iki hafta içinde geçen dönem kaç ayrılmayı, kaç gün önceden yakalardık görün. Sonuç zayıf çıkarsa bunu da aynı netlikte yazarız.",

      "home.kicker06": "Sorular, yanıtlandı",

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

      "churn.metaTitle": "EOAI Lab",
      "churn.navCta": "Backtest isteyin",
      "churn.ctaBacktest": "Ücretsiz backtest isteyin",
      "churn.heroEyebrow": "EO-Churn · Öğrenci kaybı erken uyarı sistemi",
      "churn.heroH1": "Ayrılığı<br><em>gerçekleşmeden yakalayın.</em>",
      "churn.heroLede":
        "Hangi öğrenci ayrılmak üzere, neden ve bu hafta ne yapılmalı. Her sabah, kendi verinizle.",
      "churn.heroCtaGhost": "Nasıl çalıştığını görün",
      "churn.shot1Alt":
        "EO-Churn günlük risk listesi: ayrılma olasılığına göre sıralı öğrenciler ve her biri için öne çıkan üç SHAP sebebi",
      "churn.shot2Alt":
        "EO-Churn temas taslağı: onaylı şablonlardan seçilmiş, gönderilmemiş bir mentor mesajı",
      "churn.k01": "Problem",
      "churn.probH2": "Bir öğrenci bir sabah<br><em>aniden ayrılmaz.</em>",
      "churn.probP1":
        "Önce mesajlara geç döner, deneme netleri düşer, ödeme gecikir, derse devamı azalır. Bu sinyaller kurumun sisteminde zaten kayıtlıdır, ancak hiçbir yerde birlikte okunmaz.",
      "churn.probP2":
        "Fark etmek mentorun sezgisine kalır ve çoğunlukla geç olur. Ayrılan bir öğrenci tek bir ödemeyi değil, kalan dönemin tamamını siler.",
      "churn.k02": "Her sabah",
      "churn.qH2": "Her sabah<br><em>üç soru.</em>",
      "churn.qP":
        "Sistem kimseye mesaj göndermez. Sıraya koyar, sebebini söyler, taslağı hazırlar. Gönderme kararı her zaman ilgilinindir.",
      "churn.q1T": "Kim",
      "churn.q1D":
        "Aktif her öğrenci için kalibre edilmiş ayrılma olasılığı. Liste riske göre sıralı gelir; ikili bir “riskli / değil” etiketi değil.",
      "churn.q2T": "Neden",
      "churn.q2D":
        "Her öğrenci için öne çıkan üç sebep, kolon bazında: “mesaj yanıt süresi +0.18”, “deneme sınavı trendi +0.17”.",
      "churn.q3T": "Ne yapılmalı",
      "churn.q3D":
        "Kurumun kendi onaylı şablonlarından seçilmiş bir temas taslağı ve bir başarı ölçütü.",
      "churn.k03": "Panel",
      "churn.dashH2": "Her şey<br><em>tek bir ekranda.</em>",
      "churn.dashP":
        "Üç bölüm: günlük risk listesi, eşiğin altındakiler dahil tüm öğrenciler ve model sağlığı: hangi eşik kullanıldı, kaç satır karantinaya alındı, son koşu ne zaman yapıldı.",
      "churn.shot1Cap":
        "Günlük risk listesi: olasılığa göre sıralı; her satırda öne çıkan üç sebep, plan ve üyelik süresi.",
      "churn.shot2Cap":
        "Temas taslağı: onaylı şablonlardan seçilir. Panelde gönderme düğmesi yoktur.",
      "churn.k04": "İş akışı",
      "churn.flowH2": "Dışa aktarımdan<br><em>mentorun aramasına.</em>",
      "churn.flowP":
        "Yeni veri toplamıyoruz. EO-Churn, sisteminizin zaten kaydettiklerini okur.",
      "churn.s1T": "Dışa aktarım",
      "churn.s1D":
        "Mevcut sisteminizden bir CSV veya LMS dışa aktarımı yeterlidir.",
      "churn.s2T": "Kolon eşleme",
      "churn.s2D":
        "Başlıklarınız tek bir eşleme dosyasıyla sistemin şemasına bir kez eşlenir.",
      "churn.s3T": "Eğitim",
      "churn.s3D":
        "Model başka bir kurumun verisiyle değil, sizin öğrenci geçmişinizle eğitilir. Kullanılamayan satırlar ayrılır ve size raporlanır.",
      "churn.s4T": "Günlük skorlama",
      "churn.s4D":
        "Aktif öğrencilerin tamamı her sabah otomatik olarak yeniden puanlanır.",
      "churn.s5T": "Panel ve e-posta",
      "churn.s5D": "Sıralı liste, sebepler ve taslaklar ekibin önüne düşer.",
      "churn.s6T": "Mentor aksiyonu",
      "churn.s6D": "Mentor temas kurar, sonucu panele işler.",
      "churn.s7T": "Geri besleme",
      "churn.s7D":
        "Sonuç bir sonraki eğitime girer; model zamanla kurumunuza uyum sağlar.",
      "churn.k05": "Model",
      "churn.modelH2": "Sizin verinizde seçilir,<br><em>bizimkinde değil.</em>",
      "churn.modelP":
        "Birden fazla model verileriniz üzerinde eğitilir ve performansları ölçülür; ardından en iyi performansı gösteren seçilir.",
      "churn.m1T": "PR-AUC ile seçim",
      "churn.m1D":
        "Dengesiz bir veride asıl soru “kimi önce arayacağım?”dır. Cevabı PR-AUC verir; ROC-AUC tek başına yanıltır.",
      "churn.m2T": "Kalibrasyon",
      "churn.m2D":
        "Ham olasılıklar kalibre edilir; “%40” gerçekten %40 demek olsun diye.",
      "churn.m3T": "Maliyete dayalı eşik",
      "churn.m3D":
        "Yanlış alarm ile kaçan ayrılmanın maliyeti eşit değil. Eşik bu maliyet oranıyla hesaplanır ve ekip kapasitesine göre kesilir.",
      "churn.m4T": "Açıklanabilirlik",
      "churn.m4D":
        "SHAP ile öğrenci bazında ilk üç sebep. Model neyi gördüğünü kolon adıyla söyler: “mesaj yanıt süresi +0.18”.",
      "churn.k06": "Güvenilirlik",
      "churn.prH2": "Esnetmediğimiz<br><em>ilkeler.</em>",
      "churn.prP":
        "Bir backtest’i dürüst, günlük listeyi kullanılabilir tutan kurallar.",
      "churn.pr1T": "Bilgi sızıntısı<br>yok",
      "churn.pr1D":
        "Model, tahmin anında henüz oluşmamış hiçbir veriye erişemez. Bu önlem alınmadığında geçmişe dönük testler yanıltıcı derecede iyi sonuç verir.",
      "churn.pr2T": "Etiket değil,<br>olasılık",
      "churn.pr2D":
        "Sistem “riskli” demez; kalibre edilmiş bir yüzde verir. Müdahale eşiğine kurum karar verir.",
      "churn.pr3T": "Kapasiteniz<br>kadar liste",
      "churn.pr3D":
        "Günde yirmi görüşme yapılabiliyorsa en riskli yirmi öğrenci sunulur. Uygulanamayan bir liste, olmayan listeyle eşdeğerdir.",
      "churn.pr4T": "Eksik veri<br>raporlanır",
      "churn.pr4D":
        "Eksik veri tamamlanmaz. İlgili kayıt listeden ayrılır ve bildirilir; eksik oranı sınırı aşarsa o gün liste üretilmez.",
      "churn.pr5T": "Kurumun<br>mülkiyetinde",
      "churn.pr5D":
        "Model ağırlıkları kuruma teslim edilir; tedarikçi ilişkisi sona erse dahi sistem çalışmaya devam eder.",
      "churn.prCtaP": "Kendi verinizde görmek ister misiniz?",
      "churn.k07": "Teslimat",
      "churn.delH2": "Liste sabah<br><em>09.00’da hazır.</em>",
      "churn.delP":
        "Ekibin panele girmesi gerekmez. Liste her sabah, sizin seçtiğiniz kanallardan gelir: üçü birden, biri ya da hiçbiri.",
      "churn.ch1T": "E-posta",
      "churn.ch1D":
        "Günlük risk listesi, öğrenci bazında sebepleriyle birlikte. Birden fazla alıcıya gider; kurumun kendi SMTP sunucusu kullanılabilir.",
      "churn.ch2D":
        "Ekibinizin grubuna veya tek bir kişiye anlık bildirim. Kurumun kendi botu, kendi grubu.",
      "churn.ch3D":
        "Slack, Discord veya kurumun kendi iç sistemi. Mesajı kabul eden her uca gönderilebilir.",
      "churn.op1T": "Saat kurumun saati",
      "churn.op1D":
        "Çalışma saati ve zaman dilimi ayarlanabilir; varsayılan 09:00, Europe/Istanbul. Sunucu UTC’de çalışsa bile mentora sabah dokuzda ulaşır.",
      "churn.op2T": "Hafta günü seçilebilir",
      "churn.op2D":
        "Sadece hafta içi çalıştırılabilir. Pazartesi sabahı bir arıza gibi görünmez.",
      "churn.op3T": "Sistem susarsa haber veririz",
      "churn.op3D":
        "Belirlenen süre boyunca başarılı koşu olmazsa ayrı bir operatör kanalına uyarı gider. Sessiz bir sistemle sağlıklı bir sistem dışarıdan aynı görünür; bu kontrol o farkı yakalar.",
      "churn.roadmap":
        "WhatsApp yol haritasında: Business API, gönderici doğrulaması ve onaylı mesaj şablonları gerektiriyor.",
      "churn.k08": "Panel ve API",
      "churn.apiH2": "Panelimizi kullanmak<br><em>zorunda değilsiniz.</em>",
      "churn.apiP":
        "Paneldeki her veri sistemin kendi API’sinden geliyor ve aynı uçlar size de açık. API anahtarıyla korunuyor, OpenAPI şeması hazır; kendi CRM’inize, öğrenci takip sisteminize veya raporlama aracınıza bağlayabilirsiniz. Biz panel veriyoruz; siz isterseniz kullanırsınız.",
      "churn.apiTag": "API ANAHTARI · OPENAPI",
      "churn.ep1": "Eşiği aşan öğrenciler, sebepleriyle",
      "churn.ep2": "Tek öğrencinin anlık skoru",
      "churn.ep3": "Elinizdeki veriyle anlık tahmin",
      "churn.ep4": "Modelin performans metrikleri",
      "churn.ep5": "Sistem çalışır durumda mı",
      "churn.k09": "Temas taslakları",
      "churn.lmH2":
        "Liste kimi arayacağınızı söyler.<br><em>Taslak, nasıl başlayacağınızı.</em>",
      "churn.lmP":
        "Panelde gönderme düğmesi yoktur. Taslağı sorumlu ekip okur, onaylar veya değiştirir; gönderme kararı her zaman insandadır.",
      "churn.lm1T": "Açık ağırlıklı model",
      "churn.lm1D":
        "Kapalı bir servise değil, ağırlıkları açık bir modele dayanıyor. Model kurumun kendi ortamında çalışır; hiçbir öğrenci verisi dışarıya, üçüncü bir sağlayıcıya gitmez.",
      "churn.lm2T": "Kuruma uyarlanır",
      "churn.lm2D":
        "Model, kurumun kendi onaylı iletişim şablonlarıyla ve kendi terminolojisiyle çalışacak şekilde uyarlanır. Çıktı sizin kurumunuzun diliyle konuşur.",
      "churn.lm3T": "Metni model yazmaz, seçer",
      "churn.lm3D":
        "SHAP’in çıkardığı üç sebep, onaylı şablon kütüphanenizle eşleştirilir. Model hangi şablonun kime uyduğunu seçer ve taslağı hazırlar.",
      "churn.k10": "Veri ve güvenlik",
      "churn.dataH2":
        "Veriyi nasıl paylaşacağınıza<br><em>siz karar verirsiniz.</em>",
      "churn.dataP":
        "Kimlik bilgisi istemiyoruz; anonim bir öğrenci kodu yeterli. Kodu öğrenciye bağlayan anahtar sizde kalır.",
      "churn.d1T": "Arındırılmış<br>paylaşım",
      "churn.d1D":
        "Veri; ad, soyad, e-posta ve TC kimlik numarası olmadan, şifreli olarak iletilir. Yalnızca davranış verileri ve öğrenci numarası paylaşılır.",
      "churn.d2T": "Sentetik<br>veri",
      "churn.d2D":
        "Hiçbir gerçek kayıt paylaşmazsınız. Kolon adları ve istatistiksel özetler (ortalama, minimum, maksimum) yeterlidir; veri setini biz üretiriz.",
      "churn.d3T": "Veri kurumdan<br>hiç çıkmaz",
      "churn.d3D":
        "Sistem sizin sunucunuza veya bulut hesabınıza kurulur; eğitim ve tahmin sizin ortamınızda çalışır.",
      "churn.sec1":
        "Eşleme dosyasında tanımlı olmayan hiçbir kolon modele girmez. Ne gönderdiğinizi siz belirlersiniz.",
      "churn.sec2":
        "Talep ederseniz backtest sonrası ham veri ve ondan türeyen her şey silinir, yazılı olarak teyit edilir.",
      "churn.sec3":
        "Sistem kurulduğunda veri ve model sizin ortamınızda çalışır; dışarı veri akışı olmaz.",
      "churn.k11": "Ücretsiz backtest",
      "churn.offerTag": "ÜCRET YOK · KURULUM YOK · TAAHHÜT YOK",
      "churn.offerH2":
        "Çalışıp çalışmadığını<br><em>kendi verinizle görün.</em>",
      "churn.askH3": "Sizden istediğimiz",
      "churn.ask1": "İki CSV: geçmiş öğrenci kayıtları ve ayrılma tarihleri",
      "churn.ask2": "Anonimleştirilmiş: isim, telefon, kimlik numarası yok",
      "churn.ask3": "Tek seferlik; sistem kurulumu yok",
      "churn.ask4":
        "Kısa bilgi formu: ücret, temas maliyeti ve ekip kapasitesi",
      "churn.getH3": "Size vereceğimiz, 2 hafta içinde",
      "churn.get1": "Geçen dönemde kaç ayrılmayı, kaç gün önceden yakalardık",
      "churn.get2": "Kapasitenize göre günlük liste ne kadar uzun olurdu",
      "churn.get3":
        "Veri kalitesi raporu: hangi kolon eksik, kaç satır kullanılamıyor",
      "churn.get4": "Sonuç zayıf çıkarsa bunu da aynı netlikte yazarız",
      "churn.n1T": "BUGÜN",
      "churn.n1D": "Veriyi kimin, hangi sistemden çıkaracağına karar verin.",
      "churn.n2T": "1 HAFTA İÇİNDE",
      "churn.n2D": "Anonimleştirilmiş iki CSV bize ulaşır.",
      "churn.n3T": "+2 HAFTA",
      "churn.n3D": "Backtest raporu elinizde.",
      "churn.n4T": "SONRA",
      "churn.n4D": "Sayılara birlikte bakıp kuruluma başlarız.",
      "churn.contactH2": "Tek ihtiyacımız<br><em>iki CSV dosyası.</em>",
      "churn.footTag": "Öğrenci kaybı erken uyarı sistemi",

      "work.metaTitle": "EOAI Lab",
      "work.navCta": "Şimdi başvurun",
      "work.eyebrow": "İşe alıyoruz",
      "work.h1": "Sahipleneceğiniz<br>şeyi <em>inşa edin.</em>",
      "work.lede":
        "EOAI Lab, Kurumsal Sahipli Yapay Zekâ inşa eden küçük ve hızlı hareket eden bir girişim: zekâsını kiralamayı reddeden şirketler için özel modeller, ajanlar ve altyapı. Burada katmanlar ya da eski süreçler yok: gerçek sistemleri üretime taşıyan, bu süreçte tüm yığını öğrenen ve şirketle birlikte ilk günden büyüyen erken bir ekip var. İnşa ettiğiniz şey üzerinde doğrudan etki ve gerçek bir sahiplik istiyorsanız, aşağıda kendinizden bahsedin. Her başvuruyu kendimiz okuyoruz.",
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
        "Teşekkürler! Başvurunuz elimize ulaştı, sizinle iletişime geçeceğiz.",
      "work.statusError":
        "Bir şeyler ters gitti. Lütfen bunun yerine info@eoailab.com adresine e-posta gönderin.",

      "client.metaTitle": "EOAI Lab",
      "client.navCta": "Hemen başlayın",
      "client.eyebrow": "Hadi konuşalım",
      "client.h1": "Sizi <em>farklı kılanı</em><br>sahiplenin.",
      "client.lede":
        "EOAI Lab, Kurumsal Sahipli Yapay Zekâ inşa eder: zekâsını kiralamayı reddeden şirketler için özel modeller, ajanlar ve altyapı. İşletmeniz hakkında ve bizden ne inşa etmemizi istediğiniz hakkında biraz bilgi verin, doğru sonraki adımı bulmak için sizinle iletişime geçelim. Her başvuruyu kendimiz okuyoruz.",
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
        "Teşekkürler! Başvurunuz elimize ulaştı, sizinle iletişime geçeceğiz.",
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
