let currentQuestion = 1;
const questions = [
    "请问您感到幸福吗？",
    "您每天是否有足够的睡眠？",
    "您是否感到紧张或焦虑？",
    "您是否有足够的社交互动？",
    "您是否感到孤独？",
    "您是否有积极的生活态度？",
    "您是否感到疲倦或沮丧？",
    "您是否有良好的饮食习惯？",
    "您是否参与适量的体育锻炼？",
    "您是否有足够的休闲时间？"
];
const answers = [];

function nextQuestion() {
    const radios = document.getElementsByName("question" + currentQuestion);
    if (radios[0].checked || radios[1].checked) {
        const answer = document.querySelector('input[name="question' + currentQuestion + '"]:checked').value;
        answers.push(answer);
        currentQuestion++;
        if (currentQuestion <= 10) {
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
    questionDiv.innerHTML = `<p>问题 ${questionNumber}: ${questions[questionNumber - 1]}</p>
        <label>
            <input type="radio" name="question${questionNumber}" value="yes"> 是
        </label>
        <label>
            <input type="radio" name="question${questionNumber}" value="no"> 否
        </label>`;
}

function updateProgressBar() {
    const progress = (currentQuestion - 1) * 10;
    document.getElementById("progress").style.width = progress + "%";
}

function showResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>测评结果：</h2>";
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "yes") {
            score++;
        }
        resultDiv.innerHTML += `<p>问题 ${i + 1}: ${questions[i]} - 您的答案：${answers[i]}</p>`;
    }
    resultDiv.innerHTML += `<p>总分：${score} / 10</p>`;
    resultDiv.style.display = "block";
    document.getElementById("next-btn").disabled = true;
    document.getElementById("result-btn").disabled = true;
}

showQuestion(currentQuestion);
updateProgressBar();

function showResult() {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = "<h2>测评结果：</h2>";
    let score = 0;
    for (let i = 0; i < answers.length; i++) {
        if (answers[i] === "yes") {
            score++;
        }
        resultDiv.innerHTML += `<p>问题 ${i + 1}: ${questions[i]} - 您的答案：${answers[i]}</p>`;
    }

    if (score <= 3) {
        resultDiv.innerHTML = "<h2><strong>正常</strong></h2>" + resultDiv.innerHTML;
    } else if (score >= 4 && score <= 7) {
        resultDiv.innerHTML = "<h2><strong>危险</strong></h2>" + resultDiv.innerHTML;
    } else {
        resultDiv.innerHTML = "<h2><strong>需要咨询</strong></h2>" + resultDiv.innerHTML;
    }

    resultDiv.innerHTML += `<p>总分：${score} / 10</p>`;
    resultDiv.style.display = "block";
    document.getElementById("next-btn").disabled = true;
    document.getElementById("result-btn").disabled = true;
}

showQuestion(currentQuestion);
updateProgressBar();
