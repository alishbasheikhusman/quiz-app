let data = [
    {
        Q: "Q : js is used for?",
        a: "fronted",
        b: "Animation",
        c: "dynamically update content",
        d: "backend",
        ans: "ans3",


    },

    {
        Q: "Q : full form of js",
        a: "java-science",
        b: "java-scprit",
        c: "javaS",
        d: "java-sceure",
        ans: "ans2",


    },

    {
        Q: "Q : who devlop js?",
        a: "santa",
        b: "brenden Eich",
        c: "georage",
        d: "neck",
        ans: "ans2",


    },

    {
        Q: "Q : js is used for?",
        a: "fronted",
        b: "fronted",
        c: "fronted",
        d: "fronted",
        ans: "ans3",


    },
]
let question = document.getElementById("qus");
let option1 = document.getElementById("opt1");
let option2 = document.getElementById("opt2");
let option3 = document.getElementById("opt3");
let option4 = document.getElementById("opt4");

let num = 0;
let score = 0;
let myScore = document.querySelector(".myScore")
let nextBtn = document.getElementById('next');

question.innerHTML = data[num].Q;
option1.innerHTML = data[num].a;
option2.innerHTML = data[num].b;
option3.innerHTML = data[num].c;
option4.innerHTML = data[num].d;

function checkAns() {

    let ans;
    answers.forEach((curElement) => {
        if (curElement.checked) {
            ans = curElement.id;
            console.log(ans);
        }
        return ans;
    });
}
function disSelect() {

    answers.forEach((curElement) => {

        curElement.checked = false;

    })

}
disSelect();

function next() {
    num++;


    if (num < data.length) {



        question.innerHTML = data[num].Q;
        option1.innerHTML = data[num].a;
        option2.innerHTML = data[num].b;
        option3.innerHTML = data[num].c;
        option4.innerHTML = data[num].d;
    } else {
        myScore.innerHTML = `you scored ${score}/$(data.length)<br/><br/>
        <button onclick="location.reload()">play Again</button> 
        `;
        nextBtn.style.display = 'none';
    }

    let checkedAns = checkAns();
    if (checkedAns == data[num].ans) {

        score++;
    }






}