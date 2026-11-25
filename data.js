// Page content. Edit text here; index.html renders it.
window.SCALE = {
  title: "Career Version of the Iowa-Netherlands Comparison Orientation Measure",
  lead: "The original Iowa-Netherlands Comparison Orientation Measure (INCOM) was developed by Gibbons and Buunk (1999). The career version on this page was developed by Fukubayashi and Fuji (2021), who adapted the INCOM items to career-related comparison. This page provides its items, instructions, and scoring information. You are welcome to use it for non-commercial academic research — there is no need to email for permission.",
  updated: "2026-11-25",
  // Paste the Google Form URL here once it is created.
  contactForm: "",
  facts: [
    { k: "Items", v: "9 (items 5 and 11 of the INCOM excluded)" },
    { k: "Response scale", v: "5-point Likert" },
    { k: "Subscales", v: "Ability (5) / Opinion (4)" },
    { k: "Also available", v: "6-item state version (comparison direction)" },
    { k: "Languages", v: "Japanese (original) / English (back-translation)" }
  ],
  citations: [
    { text: "Fukubayashi, N., & Fuji, K. (2021). Social comparison on social media increases career frustration: A focus on the mitigating effect of companionship. <i>Frontiers in Psychology, 12</i>, 720960.", doi: "https://doi.org/10.3389/fpsyg.2021.720960" },
    { text: "Gibbons, F. X., & Buunk, B. P. (1999). Individual differences in social comparison: Development of a scale of social comparison orientation. <i>Journal of Personality and Social Psychology, 76</i>(1), 129–142.", doi: "https://doi.org/10.1037/0022-3514.76.1.129" }
  ],
  versions: {
    en: {
      label: "English (back-translation)",
      instruction: "People compare themselves with others from time to time. For example, people sometimes compare with others, their ways of feeling, opinions, abilities, circumstances that they are put in, and/or careers that they have built. There is no good or bad in comparing in such manner, but some people often compare themselves to another. This survey is to examine how often you compare yourself with others. For each item below, please answer the applicable number in five-point scale.",
      scale: "1 = I disagree strongly … 5 = I agree strongly"
    },
    ja: {
      label: "日本語（原版）",
      instruction: "あなたが［Facebook上で／現実場面（オフラインの場面）で］キャリアについてどのくらい自分と他者を比較する傾向があるか、お伺いします。各項目でもっともあてはまるものを選択してください。",
      scale: "1 = 全くあてはまらない、2 = あまりあてはまらない、3 = 少しあてはまる、4 = あてはまる、5 = 非常にあてはまる",
      note: "In our study, the instruction specified the context (on Facebook / in offline settings). Replace the bracketed part to fit your study."
    }
  },
  // sub: A = ability to drive one's own career, O = opinions on career development; used = false → excluded
  items: [
    { n: 1,  sub: "A", used: true,
      en: "I often compare the state of careers of the important person(s) in my life (ex. lover and/or family) with that of others",
      ja: "私はよく、他の人のキャリアと、自分の親しい人（恋人や家族など）のキャリアを比較する" },
    { n: 2,  sub: "A", used: true,
      en: "I always give attention to my way of building the career based on comparison with the way others build their career",
      ja: "私はいつも、他の人のキャリアの築き方と比較した自分のキャリアの築き方に、とても注意を払っている" },
    { n: 3,  sub: "A", used: true,
      en: "When I desire to understand how well I have been building my career, I compare my career with that of others",
      ja: "私は、自分が築いてきたキャリアがいかに良いものかを知りたいとき、自分のキャリアと他の人のキャリアを比較する" },
    { n: 4,  sub: "A", used: true,
      en: "I often compare myself with others regarding how well I am socially building my career (ex. social valuation of your career)",
      ja: "私はよく、社会的にみて、自分がどの程度のキャリアを築いているか（例：社会的な評価、地位、報酬など）について、他の人と比較する" },
    { n: 5,  sub: "A", used: false,
      en: "I am not the type of person that often compares my career with that of others (R)",
      ja: "私は、自分のキャリアと他者のキャリアを頻繁に比較するタイプの人間ではない（R）" },
    { n: 6,  sub: "A", used: true,
      en: "I often compare my career I have built within my life with that of others",
      ja: "私はよく、これまでに築いてきたキャリアについて、他の人と自分自身を比較する" },
    { n: 7,  sub: "O", used: true,
      en: "I often prefer to discuss with others the opinions and experiences regarding careers of each other",
      ja: "私はよく、他の人とお互いのキャリアに関する意見や経験について話すことを好む" },
    { n: 8,  sub: "O", used: true,
      en: "I often try to find out what people, who are facing similar career related problems as mine, are thinking",
      ja: "私はよく、自分と似たようなキャリア上の問題に直面している人が、何を考えているか知ろうとする" },
    { n: 9,  sub: "O", used: true,
      en: "I always desire to find out what people would do when they are in a similar circumstance as mine in terms of career",
      ja: "私はいつも、自分と同じようなキャリアの状況にある人が、どうするか知りたい" },
    { n: 10, sub: "O", used: true,
      en: "When I desire to learn about something more for my career development, I try to find out how others would feel regarding such matter",
      ja: "私は、自分のキャリアに関わる何かをさらに学びたいとき、他の人がそのことについてどう考えるかを知ろうとする" },
    { n: 11, sub: "O", used: false,
      en: "I have never considered my career in comparison with that of others (R)",
      ja: "私は、自分のキャリアについて、他の人のキャリアと比べて考えたことは、一度もない（R）" }
  ],
  // Study 2: state version distinguishing comparison direction (experience sampling)
  state: {
    intro: "In Study 2 (experience sampling; 7 days), six items adapted from the career INCOM measured the direction of career-related social comparison as a state. Following Steers et al. (2014), two items each capture non-directional, upward, and downward comparison.",
    instruction: "Participants were asked to respond according to their activities in the preceding 3 hours.",
    scale: "9-point scale: 1 = strongly disagree … 9 = strongly agree",
    ref: { text: "Steers, M.-L. N., Wickham, R. E., & Acitelli, L. K. (2014). Seeing everyone else’s highlight reels: How Facebook usage is linked to depressive symptoms. <i>Journal of Social and Clinical Psychology, 33</i>(8), 701–731.", doi: "https://doi.org/10.1521/jscp.2014.33.8.701" },
    enNote: "Items 1, 2, and 4 are worded as in the article. Items 3, 5, and 6 are English translations prepared for this page.",
    items: [
      { n: 1, dir: "Non-directional",
        en: "I paid a lot of attention to how I have built my career compared with how other people have built their careers",
        ja: "他の人のキャリアの築き方と比較した自分のキャリアの築き方に、注意を向けていた" },
      { n: 2, dir: "Upward",
        en: "I felt less confident about the career I have developed compared to other people",
        ja: "自分がこれまでに築いてきたキャリアについて、他の人と自分自身を比較して自信を失った" },
      { n: 3, dir: "Downward",
        en: "When I compared how I have built my career with how other people have built theirs, I thought I was building a better career",
        ja: "自分のキャリアの築き方と、他の人とを比べて、自分の方が良いキャリアの築き方をしていると思った" },
      { n: 4, dir: "Downward",
        en: "I believe that I have accomplished a better career than other people have",
        ja: "自分はこれまで他の人よりも良いキャリアを築いてきたと思った" },
      { n: 5, dir: "Non-directional",
        en: "I compared my career with other people’s careers because I wanted to know how good the career I have built is",
        ja: "自分が築いてきたキャリアがいかに良いものかを知りたくて、自分のキャリアと他の人のキャリアを比較した" },
      { n: 6, dir: "Upward",
        en: "I felt that, from a social point of view, my career is inferior to other people’s careers",
        ja: "社会的にみて自分のキャリアは他の人のキャリアよりも劣っていると感じた" }
    ],
    scoring: [
      "<b>Non-directional</b>: items 1 and 5. <b>Upward</b>: items 2 and 6. <b>Downward</b>: items 3 and 4.",
      "Compute a score for each direction by averaging its two items.",
      "Intraclass correlations in Study 2 (111 participants, 1,254 responses): upward .52, downward .54, non-directional .55. See the article for the multilevel results."
    ]
  },
  scoring: [
    "Each item is rated from 1 (strongly disagree) to 5 (strongly agree).",
    "Items 5 and 11 (reverse-coded) were excluded because their factor loadings were below .40 and because of the debate over reverse-coded items. The remaining 9 items contain no reverse-coded items.",
    "<b>Ability to drive one’s own career</b>: items 1, 2, 3, 4, 6 (5 items).",
    "<b>Opinions on career development</b>: items 7, 8, 9, 10 (4 items).",
    "Compute a score for each subscale by averaging its items."
  ],
  validityNote: "<b>Important:</b> The reliability and validity of the career version have been examined only for the Japanese version, with Japanese participants. The English wording is a back-translation and has not been validated. If you use the English (or any translated) version, please examine its reliability and validity in your own sample.",
  psychometrics: [
    "Reliability and validity have been examined only for the Japanese version. The English version has not been validated.",
    "Study 1 (Japanese employees, <i>N</i> = 309): a two-factor structure was supported after excluding items 5 and 11. Cronbach’s α = .95 (ability) and .94 (opinion).",
    "For the psychometric properties of the original INCOM, see Gibbons & Buunk (1999)."
  ],
  terms: [
    "Free to use for non-commercial academic research and education. No permission request is needed.",
    "Please cite both Fukubayashi & Fuji (2021) and Gibbons & Buunk (1999).",
    "The English wording is a back-translation of the Japanese items and has not been validated. If you use it (or another translation), please examine its reliability and validity in your sample and report this in your paper.",
    "You may translate or adapt the wording (e.g., to a specific platform) for your study; please describe the changes in your paper.",
    "For commercial use, please contact us using the form below."
  ],
  faq: [
    { q: "Do I need formal permission to use the scale?", a: "No. This page serves as permission for non-commercial academic use. If your ethics committee requires documentation, you may print or cite this page." },
    { q: "Can I use the Japanese version?", a: "Yes. Switch the item table to “日本語” to see the original Japanese items." },
    { q: "Can I adapt the items to a specific platform (e.g., LinkedIn, Instagram)?", a: "Yes, as long as you report the adaptation in your paper." }
  ]
};

// Download items as CSV (UTF-8 with BOM so Excel shows Japanese correctly).
window.downloadCSV = function () {
  const S = window.SCALE;
  const esc = s => '"' + String(s).replace(/"/g, '""') + '"';
  const rows = [["No", "Used", "Subscale", "English (back-translation)", "Japanese"]];
  S.items.forEach(i => rows.push([i.n, i.used ? "yes" : "excluded", i.sub === "A" ? "Ability" : "Opinion", i.en, i.ja]));
  rows.push([]);
  rows.push(["State version (Study 2)", "", "Direction", "English", "Japanese"]);
  S.state.items.forEach(i => rows.push([i.n, "", i.dir, i.en, i.ja]));
  const csv = "﻿" + rows.map(r => r.map(esc).join(",")).join("\r\n");
  const a = document.createElement("a");
  a.href = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
  a.download = "Career_INCOM_items.csv";
  a.click();
};
