const phases = [
  {
    kicker: "第 1-2 個月",
    title: "發音、拼讀、問候、自我介紹",
    body:
      "每天聽 10 分鐘族語 E 樂園音檔，跟讀 5 句。建立 100 個核心詞，先會說自己的名字、身分、家人、年齡、住哪裡。",
    tasks: ["聽同一主題音檔", "背 20 句自我介紹句", "每週錄 30 秒", "建立第一批 100 詞"],
  },
  {
    kicker: "第 3-4 個月",
    title: "名詞句、代名詞、疑問句",
    body:
      "開始讀《語法概論》的音韻、詞類、名詞組與代名詞。每天用 3 句描述身邊的人事物。",
    tasks: ["整理 yaku / isu / hiya 例句", "練 ima 問句", "每週寫一段家人介紹", "標記 ka / o / hug"],
  },
  {
    kicker: "第 5-6 個月",
    title: "動詞句、存在句、否定",
    body:
      "練會有、沒有、去、來、吃、喝、看、說、學等高頻動詞。每天做 5 句中文轉太魯閣語，再查網站比對。",
    tasks: ["練 Niqan 句型", "練 Aji 否定", "建立錯誤本", "每週修正 10 句"],
  },
  {
    kicker: "第 7-8 個月",
    title: "時地、活動、生活對話",
    body:
      "把學習拉到生活場景：交通、買東西、吃飯、工作、學校、天氣、興趣。每週寫 8 句對話。",
    tasks: ["每週一個場景", "抄官方對話", "替換人名與地點", "跟讀情境族語"],
  },
  {
    kicker: "第 9-10 個月",
    title: "短文、文化篇、敘事",
    body:
      "每週讀一篇短文或文化篇，抓出誰、做什麼、在哪裡、為什麼。用 3 到 5 句太魯閣語復述。",
    tasks: ["讀文化篇", "做中文摘要", "用 5 句復述", "累積文化詞"],
  },
  {
    kicker: "第 11-12 個月",
    title: "對談輸出與修正",
    body:
      "每週一次 10 分鐘族語對談。最後一個月每天錄 1 分鐘，輪流談自己、家人、學習、工作、飲食、部落與文化。",
    tasks: ["準備 12 個主題", "每週 10 分鐘對談", "每天 1 分鐘錄音", "請真人修正"],
  },
];

const phrases = [
  ["Embiyax ku balay, isu ga?", "我很好，你呢？", "intro"],
  ["Ima su ka isu hug?", "請問你是誰？", "question"],
  ["Ima hangan su ka isu?", "你叫什麼名字？", "question"],
  ["Hangan mu o Mowna.", "我的名字是 Mowna。", "intro"],
  ["Piya hngkwasan su ka isu?", "你幾歲？", "question"],
  ["Ima ka hiya?", "他是誰？", "question"],
  ["Ima ka seejiq gaga?", "那個人是誰？", "question"],
  ["Ima hangan na ka tama su?", "你爸爸叫什麼名字？", "family"],
  ["Piya lupung su ka isu?", "你有幾個朋友？", "question"],
  ["Laqi su empatas ka isu hug?", "你是學生嗎？", "intro"],
  ["Seejiq su Tmpusu ka isu hug?", "你是原住民嗎？", "intro"],
  ["Usa mlaq qsiya ka isu.", "你去澆水。", "action"],
  ["Mqaras ku bi qmita sunan.", "真高興遇見你。", "intro"],
  ["Mhuway su balay.", "謝謝你。", "intro"],
  ["Qbsuran mu snaw ka hiya.", "他是我的哥哥。", "family"],
];

const listeningLessons = [
  ["Ima su ka isu hug?", "請問你是誰？", "初級第 1 課：自我介紹", "https://web.klokah.tw/extension/sp_junior/practice.php?d=33&c=17&i=12237"],
  ["Ima hangan su ka isu?", "你叫什麼名字？", "初級第 1 課：名字", "https://web.klokah.tw/extension/sp_junior/practice.php?d=33&c=17&i=12237"],
  ["Embiyax ku balay, isu ga?", "我很好，你呢？", "族語 E 樂園查詞：embiyax", "https://web.klokah.tw/api/multiSearchResult.php?d=33&txt=embiyax&type=all&l=no&f=yes"],
];

const categoryNames = {
  intro: "自我介紹",
  question: "問句",
  family: "家人",
  action: "行動",
};

const quizQuestions = [
  { prompt: "Ima su ka isu hug? 的意思是？", choices: ["請問你是誰？", "你幾歲？", "我很好，你呢？"], answer: 0, kind: "辨義" },
  { prompt: "看到「Ima hangan su ka isu?」，你要回答哪一類資訊？", choices: ["自己的名字", "自己的年齡", "自己的住址"], answer: 0, kind: "句型" },
  { prompt: "Embiyax ku balay, isu ga? 的意思是？", choices: ["我很好，你呢？", "謝謝你。", "你是學生嗎？"], answer: 0, kind: "辨義" },
  { prompt: "哪一句是在問『他是誰？』？", choices: ["Ima ka hiya?", "Ima hangan su ka isu?", "Mhuway su balay."], answer: 0, kind: "辨句" },
  { prompt: "看到 Ima su?，最適合先理解成？", choices: ["誰呀？", "你叫什麼名字？", "你有幾個朋友？"], answer: 0, kind: "辨義" },
];

const quarters = [
  ["第一季", "1-3 月", "建立發音、問候、自我介紹與 100 個核心詞。"],
  ["第二季", "4-6 月", "讀懂基本句型、代名詞、疑問句、存在與否定。"],
  ["第三季", "7-9 月", "把語法放進生活場景，練短文、時間地點與敘事。"],
  ["第四季", "10-12 月", "用錄音與對談輸出，整理錯誤並請族語老師修正。"],
];

const phaseKicker = document.querySelector("#phaseKicker");
const phaseTitle = document.querySelector("#phaseTitle");
const phaseBody = document.querySelector("#phaseBody");
const phaseTasks = document.querySelector("#phaseTasks");
const tabs = document.querySelectorAll(".tab");
const phraseGrid = document.querySelector("#phraseGrid");
const filters = document.querySelectorAll(".filter");
const checkboxes = document.querySelectorAll("[data-check]");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const resetDay = document.querySelector("#resetDay");
const lookupForm = document.querySelector("#lookupForm");
const listeningList = document.querySelector("#listeningList");
const quizForm = document.querySelector("#quizForm");
const quizScore = document.querySelector("#quizScore");
const quizFeedback = document.querySelector("#quizFeedback");
const resetQuiz = document.querySelector("#resetQuiz");
const quarterGrid = document.querySelector("#quarterGrid");

function openOfficialAudio(url) {
  window.open(url, "_blank", "noopener,noreferrer");
}

function renderListening() {
  listeningList.innerHTML = "";
  listeningLessons.forEach(([text, chinese, source, url], index) => {
    const item = document.createElement("article");
    item.className = "listening-item";
    item.innerHTML = `<span class="listening-number">0${index + 1}</span><div><strong>${text}</strong><small>${chinese} · ${source}</small></div><button type="button" class="audio-button">▶ 播放官方音檔</button>`;
    item.querySelector("button").addEventListener("click", () => openOfficialAudio(url));
    listeningList.appendChild(item);
  });
}

function renderQuiz() {
  quizForm.innerHTML = "";
  quizQuestions.forEach((question, index) => {
    const fieldset = document.createElement("fieldset");
    fieldset.innerHTML = `<legend><span>0${index + 1}</span>${question.prompt}<small>${question.kind}</small></legend>`;
    question.choices.forEach((choice, choiceIndex) => {
      const label = document.createElement("label");
      label.className = "quiz-choice";
      label.innerHTML = `<input type="radio" name="q${index}" value="${choiceIndex}" required><span>${choice}</span>`;
      fieldset.appendChild(label);
    });
    quizForm.appendChild(fieldset);
  });
  const submit = document.createElement("button");
  submit.type = "submit";
  submit.className = "quiz-submit";
  submit.textContent = "交卷看結果";
  quizForm.appendChild(submit);
}

function scoreQuiz(event) {
  event.preventDefault();
  const formData = new FormData(quizForm);
  const score = quizQuestions.reduce((total, question, index) => total + (Number(formData.get(`q${index}`)) === question.answer ? 1 : 0), 0);
  quizScore.textContent = `${score} / ${quizQuestions.length} 題答對`;
  quizFeedback.textContent = score === 5 ? "很好！下一步：把今天三句各錄音一次，再找族語老師確認。" : score >= 3 ? "已掌握基本意思。請回到句卡，重聽答錯的句子 3 次。" : "先回到句卡與官方音檔，完成『聽 3 次、跟讀 5 次』後再測一次。";
  quizForm.querySelectorAll("fieldset").forEach((fieldset, index) => fieldset.classList.toggle("correct", Number(formData.get(`q${index}`)) === quizQuestions[index].answer));
}

function renderPhase(index) {
  const phase = phases[index];
  phaseKicker.textContent = phase.kicker;
  phaseTitle.textContent = phase.title;
  phaseBody.textContent = phase.body;
  phaseTasks.innerHTML = "";
  phase.tasks.forEach((task) => {
    const li = document.createElement("li");
    li.textContent = task;
    phaseTasks.appendChild(li);
  });
  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.phase === String(index)));
}

function renderPhrases(filter = "all") {
  phraseGrid.innerHTML = "";
  phrases
    .filter((phrase) => filter === "all" || phrase[2] === filter)
    .forEach(([truku, chinese, category]) => {
      const card = document.createElement("button");
      card.className = "phrase-card";
      card.type = "button";
      card.innerHTML = `<em>${categoryNames[category]}</em><strong>${truku}</strong><span>${chinese}</span>`;
      card.addEventListener("click", () => {
        const strong = card.querySelector("strong");
        const span = card.querySelector("span");
        const showingTruku = strong.textContent === truku;
        strong.textContent = showingTruku ? chinese : truku;
        span.textContent = showingTruku ? truku : chinese;
      });
      const audioUrl = listeningLessons.find((lesson) => lesson[0] === truku)?.[3] || `https://web.klokah.tw/api/multiSearchResult.php?d=33&txt=${encodeURIComponent(truku)}&type=all&l=no&f=yes`;
      if (audioUrl) {
        const audioButton = document.createElement("span");
        audioButton.className = "card-audio";
        audioButton.textContent = "▶ 官方音檔";
        audioButton.setAttribute("role", "button");
        audioButton.addEventListener("click", (event) => {
          event.stopPropagation();
          openOfficialAudio(audioUrl);
        });
        card.appendChild(audioButton);
      }
      phraseGrid.appendChild(card);
    });
}

function storageKey() {
  const now = new Date();
  const localDate = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
  return `truku-practice-${localDate}`;
}

function historyKey() {
  return "truku-practice-history";
}

function renderQuarterHistory() {
  const history = JSON.parse(localStorage.getItem(historyKey()) || "{}");
  quarterGrid.innerHTML = "";
  quarters.forEach(([name, months, goal], index) => {
    const quarterNumber = index + 1;
    const records = Object.entries(history).filter(([date]) => {
      const month = Number(date.slice(5, 7));
      return month >= index * 3 + 1 && month <= index * 3 + 3;
    });
    const days = records.filter(([, record]) => record.done > 0).length;
    const minutes = records.reduce((total, [, record]) => total + (record.done > 0 ? 30 : 0), 0);
    const card = document.createElement("article");
    card.className = "quarter-card";
    card.innerHTML = `<span class="quarter-number">0${quarterNumber}</span><div><p>${months}</p><h3>${name}</h3><small>${goal}</small></div><strong>${days}<small>天</small></strong><footer>${minutes} 分鐘練習</footer>`;
    quarterGrid.appendChild(card);
  });
}

function updateProgress() {
  const done = [...checkboxes].filter((box) => box.checked).length;
  progressText.textContent = `${done}/5 完成`;
  progressBar.style.width = `${(done / checkboxes.length) * 100}%`;
  const state = {};
  checkboxes.forEach((box) => {
    state[box.dataset.check] = box.checked;
  });
  localStorage.setItem(storageKey(), JSON.stringify(state));
  const history = JSON.parse(localStorage.getItem(historyKey()) || "{}");
  history[storageKey().replace("truku-practice-", "")] = { done, total: checkboxes.length };
  localStorage.setItem(historyKey(), JSON.stringify(history));
  renderQuarterHistory();
}

function restoreProgress() {
  const saved = JSON.parse(localStorage.getItem(storageKey()) || "{}");
  checkboxes.forEach((box) => {
    box.checked = Boolean(saved[box.dataset.check]);
  });
  updateProgress();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => renderPhase(Number(tab.dataset.phase)));
});

filters.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    filters.forEach((button) => button.classList.remove("active"));
    filterButton.classList.add("active");
    renderPhrases(filterButton.dataset.filter);
  });
});

checkboxes.forEach((box) => box.addEventListener("change", updateProgress));

resetDay.addEventListener("click", () => {
  checkboxes.forEach((box) => {
    box.checked = false;
  });
  updateProgress();
});

lookupForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = new FormData(lookupForm).get("lookupWord").toString().trim() || "ima";
  const url = `https://web.klokah.tw/api/multiSearchResult.php?d=33&txt=${encodeURIComponent(value)}&type=all&l=no&f=yes`;
  window.open(url, "_blank", "noopener,noreferrer");
});

renderPhase(0);
renderQuarterHistory();
renderListening();
renderPhrases();
renderQuiz();
restoreProgress();

quizForm.addEventListener("submit", scoreQuiz);
resetQuiz.addEventListener("click", () => {
  quizForm.reset();
  quizForm.querySelectorAll("fieldset").forEach((fieldset) => fieldset.classList.remove("correct"));
  quizScore.textContent = "尚未作答";
  quizFeedback.textContent = "完成 5 題後會顯示下一步建議。";
});
