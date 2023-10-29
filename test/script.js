let currentQuestion = 1;
const questions = [
    "最近一段时间您是否存在脱发现象",
    "比起您的同龄人，您是否头发过早变白？",
    "当您罹患口腔溃疡或者头疼时，是否对于疼痛更加敏感？",
    "您经常出现身体发热、流汗的现象？",
    "喉咙里根本没有任何东西，却常常会觉得自己无法下咽？",
    "一周内曾出现过经历持续性的单耳或双耳耳鸣，或者耳边发出蜂鸣声？",
    "时不时的腹泻、便秘或者肠胃气胀？",
    "总会出现尿频的现象？",
    "受皮疹甚至湿疹或者银屑病等慢性皮肤病长期折磨？",
    "更容易生病？",
    "在工作日仿佛是被上紧了发条的钟表马不停蹄，但一到周末就浑身乏力，懒得动弹？",
    "常常感觉全身酸痛，尤其是肩颈、腰、臀、背等部位？",
    "很容易就出现腹泻等肠胃不适的状况，或者频繁感冒？",
    "莫名变得特别喜欢吃甜食及各种高热量的食物？",
    "习惯性拖延，不论是工作还是生活上的事务，都总要是拖到“死线”（deadline）来临前才着手处理？",
    "与他人相处时总是带有攻击性，敏感，很容易就把他人一句再平常不过的言辞当做是对自己的责难？",
    "情绪波动很大，时常会莫名地大发雷霆？",
    "心里感到很矛盾，一方面渴望独处，对周围人感到不耐烦；另一方面渴望被陪伴与倾听，希望得到他人的理解与支持？",
    "整个人很消极，也总忍不住以负面的态度思考一切？",
    "经常性的心跳加快或心率加快？",
    "经常咬手指？",
    "工作后担心自己的工作结果？",
    "难以做出决定？",
    "胸口有些时候发闷？",
    "便秘？",
    "眼睛经常发酸？",
    "经常认为自己做的不够好？",
    "与领导和前辈一起感觉窘迫？",
    "睡眠不安稳且时间少？",
    "脖子疼？",
];
const answers = [];

function nextQuestion() {
    const radios = document.getElementsByName("question" + currentQuestion);
    if (radios[0].checked || radios[1].checked) {
        const answer = document.querySelector('input[name="question' + currentQuestion + '"]:checked').value;
        answers.push(answer);
        currentQuestion++;
        if (currentQuestion <= 30) {
            showQuestion(currentQuestion);
        } else {
            document.getElementById("next-btn").disabled = true;
            document.getElementById("result-btn").style.display = "block";
        }
        updateProgressBar();
    } else {
        alert("請回答當前問題！");
    }
}

function prevQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        showQuestion(currentQuestion);
        updateProgressBar();
    }
}

function showQuestion(questionNumber) {
    const questionDiv = document.getElementById("question");
    questionDiv.innerHTML = `<p>問題 ${questionNumber}: ${questions[questionNumber - 1]}</p>
        <label>
            <input type="radio" name="question${questionNumber}" value="yes"> 是
        </label>
        <label>
            <input type="radio" name="question${questionNumber}" value="no"> 否
        </label>`;
}

function updateProgressBar() {
    const progress = (currentQuestion - 1) * 3.333333333333333333333333333333333333333333333333333333333333333333;
    document.getElementById("progress").style.width = progress + "%";
}

function showResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>測評結果：</h2>";
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "yes") {
            score++;
        }
        resultDiv.innerHTML += `<p>問題 ${i + 1}: ${questions[i]} - 您的答案：${answers[i]}</p>`;
    }
    resultDiv.innerHTML += `<p>總分：${score} / 30</p>`;
    resultDiv.style.display = "block";
    document.getElementById("next-btn").disabled = true;
    document.getElementById("result-btn").disabled = true;
}

showQuestion(currentQuestion);
updateProgressBar();

function showResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>測評結果：</h2>";
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "yes") {
            score++;
        }
        resultDiv.innerHTML += `<p>問題 ${i + 1}: ${questions[i]} - 您的答案：${answers[i]}</p>`;
    }

    if (score <= 6) {
        resultDiv.innerHTML = "<h2><strong>壓力過低！</strong>需要在工作、社交、娛樂等活動上增加刺激。</h2>" + resultDiv.innerHTML;
    } else if (score >= 7 && score <= 13) {
        resultDiv.innerHTML = "<h2><strong>壓力正常。</strong>您是一個相當放鬆的人！</h2>" + resultDiv.innerHTML;
    } else if (score >= 14 && score <= 18) {
        resultDiv.innerHTML = "<h2><strong>壓力中等。</strong>這種程度的壓力可能已經對您的健康造成影響。</h2>" + resultDiv.innerHTML;
    } else if (score >= 19 && score <= 25) {
        resultDiv.innerHTML = "<h2><strong>壓力太大！</strong>您的身心健康和人際關係已經遭到損壞。您必須花時間做練習學習控制壓力或尋求專業幫助。</h2>" + resultDiv.innerHTML;
    } else {
        resultDiv.innerHTML = "<h2><strong>壓力極大！</strong>您處於高度應激反應中，必須咨詢專業心理治療師。</h2>" + resultDiv.innerHTML;
    }

    resultDiv.innerHTML += `<p>總分：${score} / 30</p>`;
    resultDiv.style.display = "block";
    document.getElementById("next-btn").disabled = true;
    document.getElementById("result-btn").disabled = true;
}

showQuestion(currentQuestion);
updateProgressBar();
