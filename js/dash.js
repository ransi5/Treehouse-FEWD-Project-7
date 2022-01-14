const trafficCanvas = document.getElementById('traffic');
const barCanvas = document.getElementById('daily-traffic');
const btnhourly = document.getElementById('hourly');
const btndaily = document.getElementById('daily');
const btnweekly = document.getElementById('weekly');
const btnmonthly = document.getElementById('monthly');
const btn = document.getElementById('btns');
const search = document.getElementById('user');
const messform = document.getElementById('message');
const resbox = document.getElementById("resultbox");
const close = document.getElementById('close');
const bell = document.getElementById('beller');
const naughtify = document.querySelector('.naughtify');
let trafficHourly = ['1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12AM'];
let trafficHourlyData = [250, 445, 60, 535, 280, 320, 401, 372, 555, 362, 190, 125]
let trafficdaily = ['4 Aug', '5 Aug', '6 Aug', '7 Aug', '8 Aug', '9 Aug', '10 Aug', '11 Aug', '12 Aug', '13 Aug', '14 Aug', '15 Aug'];
let trafficdailyData = [2500, 4045, 3060, 5035, 2800, 3200, 4001, 3702, 5055, 3062, 1900, 4025];
let trafficweekly = ['week 40', 'week 41', 'week 42', 'week 43', 'week 44', 'week 45', 'week 46', 'week 47', 'week 48', 'week 49', 'week 50', 'week 51'];
let trafficweeklyData = [25050, 40445, 37060, 50435, 27800, 30200, 40001, 30702, 25055, 13062, 19800, 49025];
let trafficmonthly = ['January/2020', 'February/2020', 'March/2020', 'April/2020', 'May/2020', 'June/2020', 'July/2020', 'August/2020', 'September/2020', 'October/2020', 'November/2020', 'December/2020'];
let trafficmonthlyData = [205050, 440445, 137060, 350435, 127800, 390200, 450001, 340702, 225055, 143062, 519800, 349025];
const memberinfo = [
  {name: 'Victoria Chambers', mail: 'victoriachambers80@example.com', date: '10/15/20', img: 'images/member-1.jpg'},
  {name: 'Dale Byrd', mail: 'dale.byrd52@example.com', date: '10/15/20', img: 'images/member-2.jpg'},
  {name: 'Dawn Wood', mail: 'dawn.wood16@example.com', date: '10/15/20', img: 'images/member-3.jpg'},
  {name: 'Dan Oliver', mail: 'dan.oliver52@example.com', date: '10/15/20', img: 'images/member-4.jpg'},
];
let noteys = ['Congratulations!!! you have been Elected President of USA', 'Victoria and Dawn are very interested in you!!!', 'Congratulations, you are the most popular life form in multiverse!!!'];
let noofnoteys = 1;

window.addEventListener('load', (event) => {getStorage(event)}, false);

lineChart(trafficHourly, trafficHourlyData);

btn.addEventListener('click', (event)=>{
  removeActive();
  if (event.target.tagName === 'BUTTON') {
    event.target.className = 'active';
  }
  if (event.target.textContent === 'Hourly') {
    let oldcanv = document.getElementById('traffic');
    document.getElementById('line-charts').removeChild(oldcanv);
    let canv = document.createElement('canvas');
    canv.id = 'traffic';
    document.getElementById('line-charts').appendChild(canv);
    lineChart(trafficHourly, trafficHourlyData);
  }
  if (event.target.textContent === 'Daily') {
    let oldcanv = document.getElementById('traffic');
    document.getElementById('line-charts').removeChild(oldcanv);
    let canv = document.createElement('canvas');
    canv.id = 'traffic';
    document.getElementById('line-charts').appendChild(canv);
    lineChart(trafficdaily, trafficdailyData);
  }
  if (event.target.textContent === 'Weekly') {
    let oldcanv = document.getElementById('traffic');
    document.getElementById('line-charts').removeChild(oldcanv);
    let canv = document.createElement('canvas');
    canv.id = 'traffic';
    document.getElementById('line-charts').appendChild(canv);
    lineChart(trafficweekly, trafficweeklyData);
  }
  if (event.target.textContent === 'Monthly') {
    let oldcanv = document.getElementById('traffic');
    document.getElementById('line-charts').removeChild(oldcanv);
    let canv = document.createElement('canvas');
    canv.id = 'traffic';
    document.getElementById('line-charts').appendChild(canv);
    lineChart(trafficmonthly, trafficmonthlyData);
  }
});

search.addEventListener("keyup", searcher);

barChart();

doughnutChart();

createMembers(memberinfo);

activity(memberinfo);

close.addEventListener('click', ()=>{
  document.getElementsByClassName('alert-box')[0].style.display = 'none';
  naughtify.style.display = 'none';
});

messform.addEventListener('click', (event)=>{
  if (event.target.tagName === "LI") {
    text = event.target.textContent;
    user.value = text;
    event.target.parentNode.remove();
  }
}, 0);

window.addEventListener('click', (event)=>{
  resultbox = document.getElementById('resultbox');
  if (resultbox) {
    resultbox.remove();
  }
})

bell.addEventListener('click', (event)=>{
  naughtify.style.display = 'none';
  ul = document.createElement('ul');
  ul.className = 'notey-box';
  ul.setAttribute('onmouseout', 'closeNotty()')
  bell.appendChild(ul)
  left = bell.offsetLeft - 240
  ul.style.position = 'absolute';
  ul.style.top = bell.offsetHeight;
  ul.style.left = left;
  ul.style.display = 'block';
  for (var i = 0; i < noteys.length; i++) {
     notty = noteys[i]
     li = document.createElement('li');
     ul.appendChild(li);
     li.textContent = notty;
  }
  document.getElementsByClassName('alert-box')[0].style.display = 'none';
   return noofnoteys = noteys.length;
})

function closeNotty(){
  document.getElementsByClassName('notey-box')[0].remove();
}

window.addEventListener('click', (event)=>{
  if(event.target.tagName != 'svg'){
    if (document.getElementsByClassName('notey-box')[0]) {
      closeNotty();
    }
  }
})

function removeActive(){
  let child = btn.children;
  for ( let i = 0; i < child.length; i++){
    if ( child[i].className = 'active') {
      child[i].className = '';
    }
  }
}

function lineChart(x, y){
  let xData = x;
  let yData = y;
  new Chart("traffic", {
    type: "line",
    data: {
      labels: xData,
      datasets: [{
        borderColor: 'rgba(116, 119, 191)',
        tension: .5,
        data: yData,
        fill: true,
        backgroundColor: ['rgb(213, 214, 236, .4)'],
      }]
    },
    options: {
      elements: {
        point: {
          pointStyle: 'rectRounded',
          radius: 4,
          hoverRadius: 8,
        }
      },
      plugins: {
        legend: {display: false},
        tooltip: {
          backgroundColor: 'rgb(116, 119, 191, .7)',
        }
      }
    },
  });
}

function barChart() {
  var days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
  var dTraffic = [455, 449, 344, 524, 215, 578, 375];
  new Chart("daily-traffic", {
    type: "bar",
    data: {
      labels: days,
      datasets: [{
        label: 'Days',
        backgroundColor: 'rgb(116, 119, 191)',
        data: dTraffic,
      }]
    },
    options: {
      aspectRatio: 2,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: 'rgb(116, 119, 191, .7)',
        }
      }
    }
  });
}

function doughnutChart(){
  let doughnutX = ['Desktop', 'Tablet', 'Phones'];
  let doughnutY = [55, 15, 30];
  new Chart("mobile-users", {
    type: "doughnut",
    data: {
      labels: doughnutX,
      datasets: [{
        backgroundColor: ['rgb(116, 119, 191)', 'rgb(129, 201, 143)', 'rgb(81, 182, 200)'],
        data: doughnutY
      }]
    },
    options: {
      aspectRatio: 2,
      plugins: {
        legend: {
          position: 'right',
          labels: {
            boxWidth: 40,
            font: {
              size: 16,
              weight: 300,
              color: 'black',
            },
          },
        },
        tooltip: {
          backgroundColor: 'rgb(116, 119, 191, .7)',
        }
      }
    }
  });
}

function setDoughnutheight() {
  let bar = document.getElementById('bar-charts');
  let dough = document.getElementById('doughnut');
  let barheight = bar.offsetHeight;
  dough.offsetHeight = barheight;
}


function createMembers(x) {
  let members = x;
  const newMember = document.getElementById('new-member');
  for (var i = 0; i < members.length; i++) {
    let member = document.createElement('section');
    member.className = 'member';
    newMember.appendChild(member);

    let pic = document.createElement('img');
    pic.src = members[i]['img'];
    pic.alt = members[i]['name'];
    member.appendChild(pic);

    let para1 = document.createElement('p');
    para1.className = 'name';
    para1.textContent = members[i]['name'];
    member.appendChild(para1);

    let mail = document.createElement('a');
    mail.href = 'mailto:' + members[i]["mail"];
    mail.textContent = members[i]['mail'];
    member.appendChild(mail);

    let para2 = document.createElement('p');
    para2.className = 'date';
    para2.textContent = members[i]['date'];
    member.appendChild(para2);
  }
}

function activity(x) {
  let members = x;
  const nottyActs = [
    ["Victoria Chambers commented on <strong>WebApp's SEO tips</strong>" , "4 hours ago"],
    ["Dale Byrd liked the post <strong>Facebook's changes for 2021</strong>", "5 hours ago"],
    ["Dawn Wood commented on <strong>Facebook's changes for 2021</strong>", "5 hours ago"],
    ["Dan Oliver posted <strong>WebApp's SEO tips</strong>", "1 day ago"]
  ];
  const newMember = document.getElementById('notty-acts');
  for (var i = 0; i < nottyActs.length; i++) {
    let member = document.createElement('section');
    member.className = 'member';
    newMember.appendChild(member);

    let pic = document.createElement('img');
    pic.src = members[i]['img'];
    pic.alt = members[i]['name'];
    member.appendChild(pic);

    let para1 = document.createElement('p');
    para1.className = 'comment';
    para1.innerHTML = nottyActs[i][0];
    member.appendChild(para1);

    let para2 = document.createElement('p');
    para2.className = 'timer';
    para2.textContent = nottyActs[i][1];
    member.appendChild(para2);

    let notey = document.createElement('span');
    notey.className = 'notnotty';
    notey.textContent = '>';
    member.appendChild(notey);
  }
}

function searcher() {
  let str = search.value;
  let searchtext = str.toLowerCase();
  let resultarr = [];
  let resultbox = document.getElementById('resultbox');
  if (searchtext != '') {
    for (var i = 0; i < memberinfo.length; i++) {
      let searchname = memberinfo[i]['name'];
      let searchfield = searchname.toLowerCase();
      let result = searchfield.search(searchtext);
      if (result != -1) {
        resultarr.push(searchname);
      }
    }

    if (resultbox){
        resultbox.remove();
    }

    if (resultarr.length > 0) {

      let box = document.createElement('ul');
      box.setAttribute('id', 'resultbox');
      let messenger = document.getElementById('messenger');
      search.parentNode.insertBefore(box, messenger);

      for (var i = 0; i < resultarr.length; i++) {
        let text = resultarr[i];
        let li = document.createElement('li')
        li.textContent = text;
        box.appendChild(li);
        setResultboxWidth();
        setResultboxposition();
      }
    } else {
      let box = document.createElement('ul');
      box.setAttribute('id', 'resultbox');
      search.parentNode.insertBefore(box, messenger);

      let text = 'No matching user found';
      let li = document.createElement('li')
      li.textContent = text;
      box.appendChild(li);
      setResultboxWidth();
      setResultboxposition();
    }
  } else if (messform.contains(resultbox)){
      resultbox.remove();
    };
}

function setResultboxWidth() {
  let resultbox = document.getElementById("resultbox");
  let width = search.offsetWidth;
   return resultbox.style.width = width + "px";
}

function setResultboxposition() {
  let resultbox = document.getElementById("resultbox");
  let height = search.offsetHeight;
  let top = search.offsetTop;
  let bottom = top + height + 'px';
  let left = search.offsetLeft + 'px';
   return [resultbox.style.top = top, resultbox.style.top = bottom];
}

function setStorage(event) {
  event.preventDefault();
  let mailer = document.getElementById('mailer');
  let profile = document.getElementById('profile');
  let timezee = document.getElementById('timezee');

  if (mailer.checked == true) {
    localStorage.setItem("email", true);
  } else {
    localStorage.setItem("email", false);
  }
  if (profile.checked == true) {
    localStorage.setItem("profile", true);
  } else {
    localStorage.setItem("profile", false);
  }
  if (timezee.options[timezee.selectedIndex].value != '') {
    localStorage.setItem("timezone", timezee.options[timezee.selectedIndex].value);
  } else {
    localStorage.setItem("timezone", "");
  }
  console.log(localStorage.getItem("email"));
  console.log(localStorage.getItem("profile"));
  console.log(localStorage.getItem("timezone"));
}

function getStorage(event) {

  let maile = document.getElementById('mailer');
  let profil = document.getElementById('profile');
  let timeze = document.getElementById('timezee');

  if (localStorage.getItem("email") != null) {
    maile.checked = JSON.parse(localStorage.getItem("email"));
  }
  if (localStorage.getItem("profile") != null) {
    profil.checked = JSON.parse(localStorage.getItem("profile"));
  }
  if (localStorage.getItem("timezone") != null) {
    for (var i = 0; i < timeze.length; i++) {
      if (timeze.options[i].value == localStorage.getItem("timezone")) {
        timeze.selectedIndex = i;
      }
    }
  }
  console.log(localStorage.getItem("email"));
  console.log(localStorage.getItem("profile"));
  console.log(localStorage.getItem("timezone"));
}

function clearStorage(event) {
  event.preventDefault();
  localStorage.removeItem("email");
  localStorage.removeItem("profile");
  localStorage.removeItem("timezone");
}

function setSetting() {
  let mailer = document.getElementById('mailer');
  let profile = document.getElementById('profile');

  mailer.checked = localStorage.email;
  profile.checked = localStorage.profile
}

function checkMessage(event) {
  event.preventDefault();
  let receptor = document.getElementById('user').value;
  let message = document.getElementById('messenger').value;
  let response = document.getElementById('response');
  if (response.innerHTML != '') {
    response.innerHTML = '';
  }
  if (receptor === ''){
    response.innerHTML += " Please enter a receipient."
    if (response.classList.contains('error') === false) {
      response.className = '';
      response.className = 'error';
    }
  }
  if (message === '') {
    response.innerHTML += "<br> Please enter a message."
    if (response.classList.contains('error') === false) {
      response.className = '';
      response.className = 'error';
    }
  }
  if (receptor != '' && message != '') {
    response.textContent += "Message Sent"
    if (response.classList.contains('success') === false) {
      response.className = '';
      response.className = 'success';
    }
  }
}
