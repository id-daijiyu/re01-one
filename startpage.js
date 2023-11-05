// ！！！！！！！！！！！背景图轮播！！！！！！！！！！！！！！
// ！！！！！！！！！！！背景图轮播！！！！！！！！！！！！！！
var images = [
  "../images/pink-girl.png",
  "../images/pixel-girl.png",
  "../images/RX-7girl.jpg",
  "../images/smoking-girl.png",
]; // 背景图片数组
var currentIndex = 0;

function changeBackground() {
  document.body.style.backgroundImage = "url(" + images[currentIndex] + ")";
  currentIndex = (currentIndex + 1) % images.length; // 切换到下一个图片
}

setInterval(changeBackground, 30000); // 每两分钟切换一次背景图片（单位为毫秒）

// ！！！！！！！！！！！搜索框跳转！！！！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
let text = document.querySelector(".text");
let sear = document.querySelector(".se");
function search() {
  let textcontent = text.value;
  // 在当前页面跳转
  // location.href = "https://www.baidu.com/s?wd=" + textcontent;

  // 打开一个新的窗口，跳转
  window.open("https://www.baidu.com/s?wd=" + textcontent, "newWindow");
}
//   监听键盘事件，单击回车执行函数
document.addEventListener("keydown", function (event) {
  if (event.keyCode === 13) {
    search();
  }
});

// ！！！！！！！！！当前要事！！！！！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！！
let youShi = false;

function change() {
  let anNiu = document.getElementById("anNiu");
  let shuRuKuang = document.getElementById("shuRuKuang");

  if (youShi) {
    youShi = false;
    anNiu.innerHTML = "√";
    shuRuKuang.style.borderBottomColor = "#fff";
    shuRuKuang.value = "";
    shuRuKuang.readOnly = false;
    window.localStorage.removeItem("shi");

    // fetch("http://localhost:3000/", {
    //   method: "DELETE",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  } else {
    youShi = true;
    anNiu.innerHTML = "×";
    shuRuKuang.style.borderBottomColor = "transparent";
    shuRuKuang.readOnly = true;
    window.localStorage.setItem("shi", shuRuKuang.value);
    alert("种一棵树最好的时间是十年前，其次是现在。加油！！少年！！");

    // fetch("http://localhost:3000/" + shuRuKuang.value, {
    //   method: "POST",
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }
}

// fatch("http://localhost:3000/", {
//   method: "GET",
// })
//   .then((response) => response.json())
//   .then((jsonData) => {
//     console.log(jsonData);
//     if (jsonData.data) {
//       document.getElementById("shuRuKuang").value = jsonData.data;
//       youShi = true;
//       anNiu.innerText = "×";
//       shuRuKuang.style.borderBottomColor = "transparent";
//       shuRuKuang.readOnly = true;
//     }
//   });

let data = window.localStorage.getItem("shi");
if (data) {
  document.getElementById("shuRuKuang").value = data;
  change();
}

// ！！！！！！！！！时间函数！！！！！！！！！！！！！！
// ！！！！！！！！！！！！！！！！！！！！！！！！！！！
function getTime() {
  var date = new Date();
  var hour = date.getHours(); //获取小时
  hour = hour < 10 ? "0" + hour : hour;
  var minute = date.getMinutes(); // 获取分
  minute = minute < 10 ? "0" + minute : minute;
  var seconds = date.getSeconds(); //获取秒
  seconds = seconds < 10 ? "0" + seconds : seconds;
  return hour + ":" + minute + ":" + seconds;
}

setInterval(function () {
  document.querySelector(".time").innerHTML = getTime();
}, 1000);
