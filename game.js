const sourcesBySubject = {
  ai: [
    // End-of-text AI reference (new) examples
    {
      mode: 'end-reference',
      source: { title: 'Ethical implications prompt', type: 'AI Tool Output', authors: 'OpenAI', year: '2025' },
      prompt: 'Explain the ethical implications of AI in secondary education, focusing on assessment integrity.',
      correct: 'OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Prompt: "Explain the ethical implications of AI in secondary education, focusing on assessment integrity." Generated 19 September 2025. Available at: https://chat.openai.com/ (Accessed: 19 September 2025).',
      options: [
        'OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Prompt: "Explain the ethical implications of AI in secondary education, focusing on assessment integrity." Generated 19 September 2025. Available at: https://chat.openai.com/ (Accessed: 19 September 2025).',
        'OpenAI. (2025). ChatGPT output about ethical implications.',
        'ChatGPT (2025) AI ethics answer (unverified).'
      ]
    },
    {
      mode: 'end-reference',
      source: { title: 'Paraphrase assistance prompt', type: 'AI Tool Output', authors: 'OpenAI', year: '2025' },
      prompt: 'Paraphrase: "Photosynthesis efficiency is constrained by enzyme kinetics." Keep technical precision.',
      correct: 'OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Prompt: "Paraphrase: \"Photosynthesis efficiency is constrained by enzyme kinetics.\" Keep technical precision." Generated 22 September 2025. Available at: https://chat.openai.com/ (Accessed: 22 September 2025).',
      options: [
        'OpenAI. (2025). ChatGPT (Sep 2025 version) [Large language model]. Prompt: "Paraphrase: \"Photosynthesis efficiency is constrained by enzyme kinetics.\" Keep technical precision." Generated 22 September 2025. Available at: https://chat.openai.com/ (Accessed: 22 September 2025).',
        'ChatGPT paraphrase help (2025).',
        'OpenAI ChatGPT. (2025). Paraphrase output.'
      ]
    },
    
    // Appendix style question: selecting best practice about including prompt transcript (editable vs screenshot)
    {
      mode: 'appendix',
      source: { title: 'Appendix A: Example AI Prompt Transcript', type: 'Appendix', authors: 'OpenAI', year: '2025' },
      chatTranscript: [
        'User Prompt (19 Sep 2025, 10:14 BST): Explain overfitting in two exam-friendly sentences.',
        'ChatGPT: Overfitting occurs when a model memorises training data patterns including noise, reducing generalisation.',
        'ChatGPT: It is detected by a widening gap between low training error and higher validation error.'
      ],
      correct: 'Make this uneditable (screenshot).',
      options: [
        'Provide a searchable, clearly labelled appendix (e.g., Appendix A) with full prompt, model name/version, date/time, and indicate any edits — do NOT use a non-searchable screenshot.',
        'Include only a brief note in references (no prompt text) and omit appendix.',
        'Make this uneditable (screenshot).'
      ]
    },
    // Added supplementary appendix-focused practice scenarios (user requested duplicates of pattern)
    {
      mode: 'appendix',
      source: { title: 'Appendix B: Brainstorming Prompt', type: 'Appendix', authors: 'OpenAI', year: '2025' },
      chatTranscript: [
        'User Prompt (21 Sep 2025, 08:02 UTC): Suggest three alternative hooks for an essay on biodiversity loss.',
        'ChatGPT: 1) "A silent collapse is unfolding ..."',
        'ChatGPT: 2) "Within a single human lifetime, ecosystems once vibrant ..."',
        'ChatGPT: 3) "Biodiversity loss is reshaping food webs before we finish mapping them."'
      ],
      correct: 'Make this uneditable (screenshot).',
      options: [
        'No need to reference as this is common knowledge.',
        'Add a generic note only: "Used AI for brainstorming."',
        'Make this uneditable (screenshot).'
      ]
    },
    {
      mode: 'appendix',
      source: { title: 'Appendix C: Paraphrase Assistance', type: 'Appendix', authors: 'OpenAI', year: '2025' },
      chatTranscript: [
        'User Prompt (22 Sep 2025, 18:46 BST): Paraphrase: "Photosynthesis efficiency is constrained by enzyme kinetics." Keep technical precision.',
        'ChatGPT: Photosynthesis efficiency is limited by how fast key enzymes can catalyse their reactions.'
      ],
      correct: 'Document original text + AI paraphrase + prompt + model version in an appendix segment and include an uneditable (screenshot).',
      options: [
        'Document original text + AI paraphrase + prompt + model version in an appendix segment and include an uneditable (screenshot).',
        'List only final paraphrased sentence with no context.',
        'Paraphrasing does not require citation.'
      ]
    },
    {
      mode: 'appendix',
      source: { title: 'Appendix D: Data Explanation Prompt', type: 'Appendix', authors: 'OpenAI', year: '2025' },
      chatTranscript: [
        'User Prompt (23 Sep 2025, 14:11 UTC): Explain in plain language why a confusion matrix shows high false positives.',
        'ChatGPT: High false positives may reflect threshold choice, class imbalance, or overlapping feature distributions.'
      ],
      correct: 'If this is used to help you understand a concept, you do not need to reference it. Double-check accuracy independently.',
      options: [
        'If this is used to help you understand a concept, you do not need to reference it. Double-check accuracy independently.',
        'Exclude the prompt; only keep model line.',
        'Make this uneditable (screenshot).'
      ]
    },
    {
      mode: 'appendix',
      source: { title: 'Appendix E: Citation Generation Prompt', type: 'Appendix', authors: 'OpenAI', year: '2025' },
      chatTranscript: [
        'User Prompt (24 Sep 2025, 09:27 BST): Provide Harvard reference for the book Deep Learning by Goodfellow et al. 2016 MIT Press.',
        'ChatGPT: Goodfellow, I., Bengio, Y. & Courville, A. (2016). Deep Learning. Cambridge, MA: MIT Press.'
      ],
      correct: 'Make this uneditable (screenshot).',
      options: [
        'Include prompt + AI output; then independently verify accuracy before use.',
        'Use AI output directly with no verification disclaimer.',
        'Make this uneditable (screenshot).'
      ]
    }
  ]
};

let current = 0;
let fallingInterval;
let score = 0;
// Default subject now focuses on AI referencing
let subject = 'ai';
let sources = sourcesBySubject[subject];

// Expanded question types, adding appendix prompt + end-reference evaluation
const QUESTION_TYPES = {
  FULL_REFERENCE: 'reference-to-full',
  INTEXT_CITATION: 'intext-citation',
  APPENDIX_PROMPT: 'appendix-prompt',
  END_REFERENCE: 'end-reference'
};
let currentType = QUESTION_TYPES.FULL_REFERENCE;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function startGame() {
  current = 0;
  score = 0;
  document.getElementById('game-over').style.display = 'none';
  const sampleText = document.getElementById('sample-text');
  if (sampleText) sampleText.style.display = 'none';
  const falling = document.getElementById('falling-source');
  if (falling) { falling.style.display = 'block'; falling.style.top = '0px'; }
  updateScore();
  sources = sourcesBySubject[subject];
  nextQuestion();
}

function updateScore() {
  const scoreEl = document.getElementById('score');
  if (!scoreEl) return;
  const flair = scoreFlair(score);
  scoreEl.textContent = `Score: ${score} ${flair}`.trim();
  scoreEl.setAttribute('aria-label', `Score ${score}`);
}

// Return progressively more flamboyant emoji sets for higher scores
function scoreFlair(val) {
  if (val < 2) return '✨';               // getting started
  if (val < 3) return '✨⭐';             // warming up
  if (val < 6) return '🌟🚀';            // building momentum
  if (val < 8) return '🔥🚀🌈';          // on fire
  if (val < 10) return '🔥🚀🌈💎';        // elite tier
  if (val < 30) return '🔥🚀🌈💎👑';      // regal streak
  if (val < 40) return '🔥🚀🌈💎👑🧠';    // mastery
  if (val < 55) return '🔥🚀🌈💎👑🧠🎯';  // precision master
  if (val < 70) return '🔥🚀🌈💎👑🧠🎯⚡'; // unstoppable
  return '🔥🚀🌈💎👑🧠🎯⚡🌍';            // legend status
}

function blankOutReference(ref) {
  // Randomly blank out one or two parts (author, year, title, publisher, city)
  // Use regex to find parts
  let parts = ref.match(/^(.*?), (\d{4})\. (.*?)\. (.*?): (.*?)\.$/);
  if (!parts) return ref;
  // parts: [full, author, year, title, city, publisher]
  let indices = [1,2,3,4,5];
  shuffle(indices);
  let blanks = indices.slice(0, Math.random() > 0.5 ? 2 : 1);
  let display = [parts[1], parts[2], parts[3], parts[4], parts[5]];
  blanks.forEach(i => {
    display[i-1] = '______';
  });
  return `${display[0]}, ${display[1]}. ${display[2]}. ${display[3]}: ${display[4]}.`;
}

function nextQuestion() {
  if (current >= sources.length) current = 0;
  const q = sources[current];
  let options = [...q.options];
  shuffle(options);
  const falling = document.getElementById('falling-source');
  const sampleText = document.getElementById('sample-text');

  // Decide question type: explicit appendix mode takes priority
  if (q.mode === 'appendix') {
    currentType = QUESTION_TYPES.APPENDIX_PROMPT;
  } else if (q.mode === 'end-reference') {
    currentType = QUESTION_TYPES.END_REFERENCE;
  } else {
    const r = Math.random();
    if (r < 0.5) currentType = QUESTION_TYPES.FULL_REFERENCE;
    else if (r < 0.8) currentType = QUESTION_TYPES.INTEXT_CITATION;
    else currentType = QUESTION_TYPES.APPENDIX_PROMPT;
  }

  if (currentType === QUESTION_TYPES.FULL_REFERENCE) {
    if (sampleText) sampleText.style.display = 'none';
    falling.style.display = 'block';
    falling.style.top = '0px';
    falling.textContent = buildSourceSummary(q.source);
    animateFalling();
  } else if (currentType === QUESTION_TYPES.INTEXT_CITATION) {
    const intext = buildInTextOptions(q.correct);
    options = intext.options;
    q.correctInText = intext.correct;
    if (sampleText) {
      sampleText.style.display = 'block';
      sampleText.textContent = q.correct;
    }
    falling.style.display = 'block';
    falling.style.top = '0px';
    falling.textContent = intext.sampleParagraphMasked;
    animateFalling();
  } else if (currentType === QUESTION_TYPES.APPENDIX_PROMPT) {
    if (sampleText) sampleText.style.display = 'none';
    falling.style.display = 'block';
    falling.style.top = '0px';
    falling.innerHTML = '';
    const wrapper = document.createElement('div');
    wrapper.className = 'appendix-wrapper';
    const heading = document.createElement('div');
    heading.className = 'appendix-heading';
    heading.textContent = 'Appendix A: Chat Transcript (Editable Text)';
    const transcriptBox = document.createElement('div');
    transcriptBox.className = 'appendix-transcript';
    transcriptBox.setAttribute('contenteditable', 'true');
    transcriptBox.setAttribute('aria-label', 'Editable AI prompt transcript. DO NOT replace with screenshot.');
    (q.chatTranscript || []).forEach(line => {
      const p = document.createElement('div');
      p.textContent = line;
      transcriptBox.appendChild(p);
    });
    const note = document.createElement('div');
    note.className = 'appendix-note';
    note.textContent = 'Best practice: Include prompt, model/version, date & time.';
    wrapper.appendChild(heading);
    wrapper.appendChild(transcriptBox);
    wrapper.appendChild(note);
    falling.appendChild(wrapper);
    animateFalling();
  } else if (currentType === QUESTION_TYPES.END_REFERENCE) {
    if (sampleText) sampleText.style.display = 'none';
    falling.style.display = 'block';
    falling.style.top = '0px';
    falling.classList.add('end-ref');
    falling.textContent = 'End-of-text reference required: ' + (q.prompt ? 'Prompt "' + q.prompt.slice(0, 70) + (q.prompt.length > 70 ? '…"' : '"') : buildSourceSummary(q.source));
    animateFalling();
  }

  options.forEach((opt, i) => {
    const btn = document.getElementById('option' + (i + 1));
    btn.textContent = opt;
    btn.onclick = () => checkAnswer(opt);
  });
}

function animateFalling() {
  const falling = document.getElementById('falling-source');
  let pos = 0;
  clearInterval(fallingInterval);
  // Make the falling much slower and dynamic based on container height
  const container = document.getElementById('game-container');
  const optionsEl = document.getElementById('options');
  const buffer = optionsEl ? (container.offsetHeight - optionsEl.offsetTop + 12) : 100;
  const maxPos = Math.max(60, container.offsetHeight - buffer); // keep safe area above options
  fallingInterval = setInterval(() => {
    if (pos >= maxPos) {
      gameOver();
      clearInterval(fallingInterval);
    } else {
      pos += 1.2; // much slower fall
      falling.style.top = pos + 'px';
    }
  }, 16); // ~60fps
}

function checkAnswer(selected) {
  clearInterval(fallingInterval);
  const q = sources[current];
  let isCorrect = false;
  if (currentType === QUESTION_TYPES.FULL_REFERENCE) {
    isCorrect = selected === q.correct;
  } else if (currentType === QUESTION_TYPES.INTEXT_CITATION) {
    isCorrect = selected === q.correctInText;
  } else if (currentType === QUESTION_TYPES.APPENDIX_PROMPT) {
    isCorrect = selected === q.correct;
  } else if (currentType === QUESTION_TYPES.END_REFERENCE) {
    isCorrect = selected === q.correct;
  }
  if (isCorrect) {
    score++;
    updateScore();
    current++;
    nextQuestion();
  } else {
    gameOver();
  }
}

function gameOver() {
  const over = document.getElementById('game-over');
  over.style.display = 'flex';
}

// Build in-text citation options for a given Harvard reference
function buildInTextOptions(reference) {
  // Try to parse "Author, A. (Year). Title. City: Publisher." and multi-author variants.
  // Fallback to simple patterns if regex fails.
  const sampleBase = 'This study provides evidence supporting the central claim ';
  let authorsPart = '';
  let year = '';
  const authorYearMatch = reference.match(/^(.*?)\s*\((\d{4})\)/);
  if (authorYearMatch) {
    authorsPart = authorYearMatch[1];
    year = authorYearMatch[2];
  }
  // Normalize authors for in-text, handling corporate authors and & separators
  let correct;
  if (!authorsPart) {
    correct = `(Unknown, ${year || 'n.d.'})`;
  } else if (/\b&\b|,\s*\&/.test(authorsPart)) {
    // Already has ampersand, keep surnames only
    const surnames = authorsPart.split(/\s*&\s*|,\s*&\s*/).map(s => s.split(',')[0].trim());
    correct = `(${surnames.join(' & ')}, ${year})`;
  } else if (/,/.test(authorsPart)) {
    // Format like "Surname, A." possibly with second author like "Surname, A., Surname, B."
    const parts = authorsPart.split(/,\s*/);
    const surnames = [];
    for (let i = 0; i < parts.length; i += 2) {
      surnames.push(parts[i]);
    }
    if (surnames.length > 2) {
      correct = `(${surnames[0]} et al., ${year})`;
    } else if (surnames.length === 2) {
      correct = `(${surnames[0]} & ${surnames[1]}, ${year})`;
    } else {
      correct = `(${surnames[0]}, ${year})`;
    }
  } else {
    // Corporate author or single word
    correct = `(${authorsPart}, ${year})`;
  }

  const wrong1 = correct.replace('(', '(').replace(/\d{4}/, (y)=>String(Number(y)+1));
  const wrong2 = correct.replace('(', '(').replace(', ', ' ');

  const sampleParagraph = sampleBase + correct + ', highlighting methodological rigor.';
  // Masked version for the falling snippet to avoid revealing the answer
  const sampleParagraphMasked = sampleBase + '(Citation needed)' + ', highlighting methodological rigor.';
  // Return shuffled options
  const options = [correct, wrong1, wrong2];
  shuffle(options);
  return { correct, options, sampleParagraph, sampleParagraphMasked };
}

// Build a non-1:1 summary for the falling bubble using the full reference
function buildSourceSummary(refOrObj) {
  // If an object is provided, prefer its metadata
  if (typeof refOrObj === 'object' && refOrObj !== null) {
    const { title = 'Untitled', type = 'Source', authors = 'Unknown', year = 'n.d.' } = refOrObj;
    const icon = type === 'Book' ? '📘' : type === 'Webpage' ? '🌐' : type === 'Journal Article' ? '📰' : '📄';
    return `${icon} ${type} — ${title} • ${authors} (${year})`;
  }
  const fullReference = String(refOrObj);
  // Extract authors and year
  const ay = fullReference.match(/^(.*?)\s*\((\d{4})\)/);
  const authors = ay ? ay[1] : 'Unknown';
  const year = ay ? ay[2] : 'n.d.';
  // Extract title between ") . Title . " pattern
  const titleMatch = fullReference.match(/\)\.\s*(.*?)\./);
  const title = titleMatch ? titleMatch[1] : 'Untitled';
  // Infer type from cues
  const lower = fullReference.toLowerCase();
  let type = 'Source';
  let icon = '📄';
  if (lower.includes('available at:') || lower.includes('http')) {
    type = 'Webpage'; icon = '🌐';
  } else if (/\d+\s*\(\d+\)/.test(fullReference) || lower.includes('review') || lower.includes('journal')) {
    type = 'Journal Article'; icon = '📰';
  } else if (/[^:]+:\s*[^.]+\./.test(fullReference)) {
    // City: Publisher.
    type = 'Book'; icon = '📘';
  } else if (lower.includes('technical report') || lower.includes('report')) {
    type = 'Report'; icon = '📄';
  }
  // Compose concise summary
  return `${icon} ${type} — ${title} • ${authors} (${year})`;
}

// Single-subject mode (AI only) – listener retained in case of future expansion
const subjectSelect = document.getElementById('subject-select');
if (subjectSelect) {
  subjectSelect.disabled = true; // prevent implying multiple modes
}

window.onload = () => {
  if (!document.getElementById('score')) {
    const scoreDiv = document.createElement('div');
    scoreDiv.id = 'score';
    document.getElementById('game-container').appendChild(scoreDiv);
  }
  // Wire restart button
  const restart = document.getElementById('restart-btn');
  if (restart) restart.addEventListener('click', startGame);
  startGame();
};
