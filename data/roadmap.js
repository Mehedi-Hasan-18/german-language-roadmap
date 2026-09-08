// All content sourced from the German learning roadmap.
// Grouped by CEFR level, plus a month-by-month action plan, common mistakes,
// exam options, and a full free-resource library.

export const overview = {
  fsiHours: 750,
  fsiNote: 'FSI estimate to reach professional proficiency — more than Spanish or French, far less than Arabic or Mandarin.',
  timeline: 'Most learners reach B1 in 6–9 months and B2 in 12–18 months with structured practice.',
  harder: [
    'Four grammatical cases (nominative, accusative, dative, genitive)',
    'Three noun genders (masculine, feminine, neuter)',
    'Separable verbs that split across the sentence',
    'Compound words that stack into long single words',
  ],
  easier: [
    'Pronunciation rules are consistent, unlike English',
    'Shared vocabulary with English (Haus/house, Mutter/mother, Garten/garden)',
    'Word formation follows logical patterns',
    'Free, high-quality learning resources are abundant',
  ],
  goals: [
    { label: 'Academic', detail: 'B2/C1 for university admission — TestDaF or DSH.' },
    { label: 'Career', detail: 'Business German for professional communication.' },
    { label: 'Relocation', detail: 'Practical everyday German for life in Germany, Austria or Switzerland.' },
    { label: 'Personal', detail: 'Literature, film, or a connection to heritage.' },
  ],
};

export const levels = [
  {
    id: 'a1',
    code: 'A1',
    name: 'Elementary',
    span: 'Months 1–2',
    hours: '80–100 hours',
    vocab: '500–800 words',
    tagline: 'Building your foundation.',
    canDo: [
      'Introduce yourself and others',
      'Ask and answer simple questions (name, age, where you live)',
      'Understand slow, clear speech in familiar situations',
      'Write simple texts about yourself',
    ],
    grammar: [
      { id: 'a1-gender', title: 'Noun gender & articles', detail: 'der (masculine), die (feminine), das (neuter). Always learn a noun together with its article — never just "Tisch", always "der Tisch".' },
      { id: 'a1-present', title: 'Present tense conjugation', detail: 'Regular pattern: ich -e, du -st, er/sie/es -t, wir -en, ihr -t, sie/Sie -en.' },
      { id: 'a1-wordorder', title: 'Basic word order', detail: 'Subject–Verb–Object in statements (Ich lerne Deutsch); verb moves to the front in yes/no questions (Lernst du Deutsch?).' },
      { id: 'a1-pronouns', title: 'Personal pronouns, du vs. Sie', detail: 'du with friends, family, children, fellow students. Sie with strangers and authority figures until invited to switch.' },
    ],
    vocabPriorities: [
      'Numbers 0–1000', 'Days, months, seasons', 'Family members', 'Common occupations',
      'Basic foods & drinks', 'Colors', 'Body parts', 'Core verbs: sein, haben, machen, gehen, kommen, sehen',
    ],
    keyPhrases: [
      { de: 'Wie heißt du?', en: 'What is your name?' },
      { de: 'Ich heiße …', en: 'My name is …' },
      { de: 'Woher kommst du?', en: 'Where are you from?' },
      { de: 'Ich komme aus …', en: 'I come from …' },
      { de: 'Wie geht es dir?', en: 'How are you?' },
      { de: 'Was machst du beruflich?', en: 'What do you do for work?' },
    ],
    resources: [
      { name: 'Nicos Weg — A1', org: 'Deutsche Welle', type: 'Video course', url: 'https://learngerman.dw.com' },
      { name: 'Easy German', org: 'YouTube', type: 'Street interviews, slow German', url: 'https://www.youtube.com/results?search_query=Easy+German+YouTube' },
      { name: 'Coffee Break German', org: 'Podcast', type: 'Commute-length lessons', url: 'https://www.youtube.com/results?search_query=Coffee+Break+German+podcast' },
    ],
  },
  {
    id: 'a2',
    code: 'A2',
    name: 'Pre-Intermediate',
    span: 'Months 3–4',
    hours: '150–200 hours',
    vocab: '1,000–1,500 words',
    tagline: 'Expanding communication.',
    canDo: [
      'Describe your background, education, work',
      'Handle routine exchanges and shopping',
      'Understand the main points of simple texts',
      'Write short personal letters and notes',
    ],
    grammar: [
      { id: 'a2-cases', title: 'Nominative & accusative cases', detail: 'The article changes with the object: der Mann liest (subject) → Ich sehe den Mann (object). Only masculine articles shift in accusative: der/ein → den/einen.' },
      { id: 'a2-modal', title: 'Modal verbs', detail: 'können, müssen, wollen, sollen, dürfen, mögen/möchten. Structure: modal (conjugated) + infinitive at the very end — Ich kann Deutsch sprechen.' },
      { id: 'a2-perfect', title: 'Perfect tense (spoken past)', detail: 'haben/sein (conjugated) + past participle. Most verbs take haben; motion and change-of-state verbs (gehen, fahren, kommen, werden, bleiben) take sein.' },
      { id: 'a2-separable', title: 'Separable verbs', detail: 'The prefix detaches and moves to the end: aufstehen → Ich stehe um 7 Uhr auf.' },
    ],
    vocabPriorities: [
      'Weather expressions', 'Household items', 'Clothing', 'Transportation',
      'Time expressions', 'Simple emotions & descriptions', 'Prepositions: in, auf, unter, vor, hinter, neben, zwischen',
    ],
    keyPhrases: [
      { de: 'Ich denke, dass …', en: 'I think that …' },
      { de: 'Ich glaube, dass …', en: 'I believe that …' },
      { de: 'Können Sie mir helfen?', en: 'Can you help me?' },
      { de: 'Wo ist …?', en: 'Where is …?' },
    ],
    resources: [
      { name: 'Nicos Weg — A2', org: 'Deutsche Welle', type: 'Video course', url: 'https://learngerman.dw.com' },
      { name: 'Slow German', org: 'Annik Rubens', type: 'Podcast with transcripts', url: 'https://www.youtube.com/results?search_query=Slow+German+podcast+Annik+Rubens' },
      { name: 'Extr@ auf Deutsch', org: 'Sitcom', type: 'Scripted show for learners', url: 'https://www.youtube.com/results?search_query=Extra+auf+Deutsch' },
    ],
  },
  {
    id: 'b1',
    code: 'B1',
    name: 'Intermediate',
    span: 'Months 5–8',
    hours: '350–400 hours',
    vocab: '2,000–3,000 words',
    tagline: 'Achieving conversational fluency.',
    canDo: [
      'Discuss familiar topics: work, hobbies, current events',
      'Handle most travel situations independently',
      'Understand the main ideas of complex texts',
      'Write clear, connected texts on familiar subjects',
    ],
    grammar: [
      { id: 'b1-dative', title: 'Dative case', detail: 'Marks the indirect object: Ich gebe dem Mann das Buch. Always-dative prepositions: aus, bei, mit, nach, seit, von, zu, gegenüber. Two-way prepositions (in, an, auf, über, unter, vor, hinter, neben, zwischen) take dative for location, accusative for motion.' },
      { id: 'b1-genitive', title: 'Genitive case', detail: 'Shows possession, like English \'s: das Auto des Mannes. Spoken German often substitutes von + dative instead: das Auto von dem Mann.' },
      { id: 'b1-subordinate', title: 'Subordinate clauses', detail: 'The verb moves to the very end: Ich denke, dass Deutsch schwer ist. Common conjunctions: dass, weil, obwohl, wenn, als, nachdem.' },
      { id: 'b1-konjunktiv2', title: 'Konjunktiv II (conditional)', detail: 'For polite requests and hypotheticals: Ich würde gern Deutsch sprechen. Könntest du mir helfen?' },
    ],
    vocabPriorities: [
      'Abstract concepts: happiness, freedom, responsibility', 'Professional vocabulary for your field',
      'Current events & social issues', 'Opinion and argumentation phrases', 'Idioms & colloquial expressions',
    ],
    keyPhrases: [
      { de: 'Vor- und Nachteile', en: 'Pros and cons' },
      { de: 'Was würdest du machen, wenn …?', en: 'What would you do if …?' },
      { de: 'Ich stimme dir zu / Ich stimme dir nicht zu.', en: 'I agree / I disagree with you.' },
    ],
    resources: [
      { name: 'Langsam gesprochene Nachrichten', org: 'Deutsche Welle', type: 'Daily news, slow reading', url: 'https://learngerman.dw.com' },
      { name: 'Easy German', org: 'YouTube', type: 'Street interviews at normal speed', url: 'https://www.youtube.com/results?search_query=Easy+German+YouTube' },
    ],
  },
  {
    id: 'b2',
    code: 'B2',
    name: 'Upper-Intermediate',
    span: 'Months 9–18',
    hours: '600–750 hours',
    vocab: '4,000–6,000 words',
    tagline: 'Refining your German.',
    canDo: [
      'Express yourself fluently and spontaneously',
      'Understand complex texts and abstract topics',
      'Communicate effectively with native speakers',
      'Write detailed texts on a wide range of subjects',
    ],
    grammar: [
      { id: 'b2-passive', title: 'Passive voice', detail: 'werden (conjugated) + past participle: Das Buch wird gelesen. Das Haus wurde gebaut. Shifts focus from the doer to the action.' },
      { id: 'b2-relative', title: 'Relative clauses', detail: 'Der Mann, der dort steht, ist mein Lehrer. The relative pronoun matches its antecedent\'s gender/number but takes the case of its role in the clause.' },
      { id: 'b2-konjunktiv1', title: 'Konjunktiv I (reported speech)', detail: 'Used mainly in news and formal writing: Er sagt, er habe keine Zeit. Sie behauptet, sie sei krank gewesen.' },
      { id: 'b2-linkers', title: 'Advanced conjunctions & linkers', detail: 'trotzdem, außerdem, allerdings, einerseits … andererseits, je … desto — the connectors that make writing sound sophisticated.' },
    ],
    vocabPriorities: [
      'Nuanced synonyms (gut → hervorragend, ausgezeichnet, fabelhaft)', 'Field-specific terminology',
      'Abstract academic vocabulary', 'Register awareness: formal vs. informal', 'Fixed expressions & idioms',
    ],
    keyPhrases: [
      { de: 'Einerseits …, andererseits …', en: 'On the one hand …, on the other hand …' },
      { de: 'Trotzdem', en: 'Nevertheless' },
      { de: 'Je mehr, desto besser.', en: 'The more, the better.' },
    ],
    resources: [
      { name: 'Die Zeit / Der Spiegel', org: 'Newspapers', type: 'Reading practice', url: 'https://www.zeit.de' },
      { name: 'Fest & Flauschig', org: 'Comedy podcast', type: 'Native-speed listening', url: 'https://www.youtube.com/results?search_query=Fest+und+Flauschig+podcast' },
      { name: 'Lage der Nation', org: 'Politics podcast', type: 'Native-speed listening', url: 'https://www.youtube.com/results?search_query=Lage+der+Nation+podcast' },
    ],
  },
];

export const actionPlan = [
  {
    id: 'month-1',
    label: 'Month 1',
    sub: 'A1 foundation',
    tasks: [
      { id: 'm1-words', text: 'Learn 400–500 core words: numbers, greetings, family, food' },
      { id: 'm1-present', text: 'Master present-tense conjugation' },
      { id: 'm1-gender', text: 'Understand the noun gender system' },
      { id: 'm1-nicosweg', text: 'Complete Deutsche Welle Nicos Weg A1' },
      { id: 'm1-speak', text: 'Speak 5 minutes daily, even if just self-talk' },
    ],
  },
  {
    id: 'months-2-3',
    label: 'Months 2–3',
    sub: 'A1 → A2',
    tasks: [
      { id: 'm23-words', text: 'Add 800–1,000 new words' },
      { id: 'm23-perfect', text: 'Learn perfect tense and modal verbs' },
      { id: 'm23-accusative', text: 'Practice the accusative case extensively' },
      { id: 'm23-diary', text: 'Start writing simple diary entries' },
      { id: 'm23-conversation', text: 'Have your first conversation with a native speaker or tutor' },
    ],
  },
  {
    id: 'months-4-6',
    label: 'Months 4–6',
    sub: 'A2 → B1',
    tasks: [
      { id: 'm46-words', text: 'Expand vocabulary to 2,500–3,000 words' },
      { id: 'm46-dative', text: 'Master the dative case and two-way prepositions' },
      { id: 'm46-subordinate', text: 'Practice subordinate clauses' },
      { id: 'm46-book', text: 'Read your first German book (graded reader or simple novel)' },
      { id: 'm46-subtitles', text: 'Watch a German series with German subtitles' },
    ],
  },
  {
    id: 'months-7-12',
    label: 'Months 7–12',
    sub: 'B1 → B2',
    tasks: [
      { id: 'm712-words', text: 'Build vocabulary to 5,000+ words' },
      { id: 'm712-cases', text: 'Refine all four cases' },
      { id: 'm712-passive', text: 'Master passive voice and relative clauses' },
      { id: 'm712-essays', text: 'Write opinion essays weekly' },
      { id: 'm712-authentic', text: 'Consume authentic content daily: news, podcasts' },
      { id: 'm712-native', text: 'Have regular conversations with native speakers' },
    ],
  },
  {
    id: 'months-13-18',
    label: 'Months 13–18',
    sub: 'B2 consolidation',
    tasks: [
      { id: 'm1318-words', text: 'Deepen vocabulary to 6,000–8,000 words' },
      { id: 'm1318-subjunctive', text: 'Polish subjunctive and reported speech' },
      { id: 'm1318-films', text: 'Read novels, watch films without subtitles' },
      { id: 'm1318-exam', text: 'Prepare for a certification exam, if needed' },
      { id: 'm1318-think', text: 'Practice thinking in German instead of translating' },
    ],
  },
];

export const mistakes = [
  {
    id: 'cases',
    title: 'Avoiding cases',
    body: 'Cases are hard, so many learners default to nominative everywhere and hope context saves them — this fossilizes errors that are painful to fix later.',
    fix: 'Bite the bullet from day one. Practice with targeted exercises, not just passive reading; build sentences, get them corrected, let the pattern sink in.',
  },
  {
    id: 'literal',
    title: 'Literal translation from English',
    body: '"Ich bin heiß" does not mean "I am hot" (temperature) — it means something else entirely. The correct phrase is "Mir ist heiß."',
    fix: 'Learn phrases as whole units, not word-by-word translations. German sentence logic often differs from English.',
  },
  {
    id: 'verbposition',
    title: 'Ignoring verb position',
    body: 'Verb-position rules are non-negotiable. Position shifts in questions and subordinate clauses — ignoring this makes you hard to understand.',
    fix: 'Write 10 sentences daily, then convert each one into a question and into a subordinate clause.',
  },
  {
    id: 'notready',
    title: 'Not speaking because "I\'m not ready"',
    body: 'You will never feel ready. Waiting for readiness just delays the skill that only comes from use.',
    fix: 'Start speaking from week one. Make mistakes. Sound ridiculous. It is the only path to fluency.',
  },
  {
    id: 'textbookonly',
    title: 'Only using textbooks',
    body: 'Textbooks teach formal written German — real Germans speak differently in daily life.',
    fix: 'Balance textbook study with authentic content: YouTube, podcasts, and real conversations.',
  },
];

export const exams = [
  { name: 'Goethe-Zertifikat', levels: 'A1–C2', note: 'Internationally recognized; required by some universities.' },
  { name: 'TestDaF', levels: 'B2–C1', note: 'Required for university admission in Germany.' },
  { name: 'telc Deutsch', levels: 'Varies', note: 'Alternative certification, widely accepted.' },
  { name: 'ÖSD', levels: 'Varies', note: 'Austrian German certification, accepted in Austria and Germany.' },
];

export const examStrategy = [
  { title: 'Identify your required level', detail: 'Universities typically require B2 or C1 — confirm the exact number before you plan backwards from it.' },
  { title: 'Understand the format', detail: 'Each exam has its own task types; study the format before you study the content.' },
  { title: 'Practice under timed conditions', detail: 'Speed matters as much as accuracy once you sit the real exam.' },
  { title: 'Focus on your weak skills', detail: 'Most candidates struggle with speaking or writing — spend disproportionate time there.' },
  { title: 'Use official practice materials', detail: 'Download past exams from the official exam-board sites rather than third-party guesses.' },
];

export const resourceLibrary = [
  {
    category: 'Structured courses',
    items: [
      { name: 'Deutsche Welle (DW)', level: 'A1–C1', desc: 'Comprehensive free courses, the Nicos Weg video series, grammar explanations, and news articles with vocabulary help.', url: 'https://learngerman.dw.com' },
      { name: 'Goethe-Institut', level: 'A1–C2', desc: 'Free exercises, cultural content, self-assessment tests, and community forums.', url: 'https://www.goethe.de' },
    ],
  },
  {
    category: 'YouTube channels',
    items: [
      { name: 'Easy German', level: 'A2–B2', desc: 'Street interviews and real conversations at varying speeds.', url: 'https://www.youtube.com/results?search_query=Easy+German+YouTube' },
      { name: 'Learn German with Anja', level: 'A1–B1', desc: 'Grammar explanations and vocabulary building.', url: 'https://www.youtube.com/results?search_query=Learn+German+with+Anja' },
      { name: 'Get Germanized', level: 'A2–B2', desc: 'Cultural insights and practical language tips.', url: 'https://www.youtube.com/results?search_query=Get+Germanized' },
      { name: 'Deutsch für Euch', level: 'A1–B2', desc: 'Comprehensive grammar lessons.', url: 'https://www.youtube.com/results?search_query=Deutsch+fuer+Euch' },
      { name: 'Easy Languages', level: 'A1–B2', desc: 'Multi-language channel network with a strong German focus.', url: 'https://www.youtube.com/results?search_query=Easy+Languages+German' },
    ],
  },
  {
    category: 'Podcasts',
    items: [
      { name: 'Coffee Break German', level: 'A1–A2', desc: 'Structured, commute-length lessons.', url: 'https://www.youtube.com/results?search_query=Coffee+Break+German+podcast' },
      { name: 'GermanPod101', level: 'A1–A2', desc: 'Beginner-focused audio lessons.', url: 'https://www.youtube.com/results?search_query=GermanPod101' },
      { name: 'Slow German', level: 'B1–B2', desc: 'Annik Rubens speaks slowly, with transcripts available.', url: 'https://www.youtube.com/results?search_query=Slow+German+podcast' },
      { name: 'News in Slow German', level: 'B1–B2', desc: 'Current events at a reduced pace.', url: 'https://www.youtube.com/results?search_query=News+in+Slow+German' },
      { name: 'Easy German Podcast', level: 'B1–B2', desc: 'The podcast companion to the YouTube channel.', url: 'https://www.youtube.com/results?search_query=Easy+German+Podcast' },
      { name: 'Fest & Flauschig', level: 'B2–C1', desc: 'Comedy, for native-speed immersion.', url: 'https://www.youtube.com/results?search_query=Fest+und+Flauschig' },
      { name: 'Zeit Wissen', level: 'B2–C1', desc: 'Science topics at native speed.', url: 'https://www.youtube.com/results?search_query=Zeit+Wissen+Podcast' },
      { name: 'Lage der Nation', level: 'B2–C1', desc: 'Politics and current affairs at native speed.', url: 'https://www.youtube.com/results?search_query=Lage+der+Nation' },
    ],
  },
  {
    category: 'Vocabulary apps',
    items: [
      { name: 'Anki', level: 'All levels', desc: 'Spaced-repetition flashcards, free and the most effective for long-term retention.', url: 'https://apps.ankiweb.net' },
      { name: 'Memrise', level: 'All levels', desc: 'Community-built courses with native-speaker videos.', url: 'https://www.memrise.com' },
      { name: 'Quizlet', level: 'All levels', desc: 'User-friendly interface with pre-made decks.', url: 'https://quizlet.com' },
    ],
  },
  {
    category: 'Dictionaries & tools',
    items: [
      { name: 'dict.cc', level: 'All levels', desc: 'The strongest German–English dictionary, with example sentences.', url: 'https://www.dict.cc' },
      { name: 'PONS', level: 'All levels', desc: 'Comprehensive dictionary with grammar information built in.', url: 'https://en.pons.com' },
      { name: 'DeepL', level: 'All levels', desc: 'Translation quality that beats Google Translate for German specifically.', url: 'https://www.deepl.com' },
      { name: 'Forvo', level: 'All levels', desc: 'Native-speaker pronunciation recordings for almost any word.', url: 'https://forvo.com' },
    ],
  },
];
