// tabs
const tabs = document.querySelectorAll(".tab_button");
const allContent = document.querySelectorAll(".tab_content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    allContent.forEach((content) => {
      content.classList.remove("active");
    });
    allContent[index].classList.add("active");
  });
});

// sub toggle tab title

const checkbox_label2 = document.querySelectorAll(".checkbox_label2");
const sub_checkbox_title = document.querySelectorAll(".sub_checkbox_title");

checkbox_label2.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    checkbox_label2.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    sub_checkbox_title.forEach((content) => {
      content.classList.remove("active");
    });
    sub_checkbox_title[index].classList.add("active");
  });
});

// Sub tabs and content
const subTabs = document.querySelectorAll(".checkbox_label2");
const subAllContent = document.querySelectorAll(".sub_tab_content");

subTabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    subTabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    subAllContent.forEach((content) => {
      content.classList.remove("active");
    });
    subAllContent[index].classList.add("active");
  });
});

// toggle

let toggles = document.getElementsByClassName("toggle");
let contentDiv = document.getElementsByClassName("content");
let icons = document.getElementsByClassName("icon");

for (let i = 0; i < toggles.length; i++) {
  toggles[i].addEventListener("click", () => {
    if (parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight) {
      contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
      toggles[i].style.color = "#222222";
      icons[i].classList.remove("fa-plus");
      icons[i].classList.add("fa-minus");
    } else {
      contentDiv[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      icons[i].classList.remove("fa-minus");
      icons[i].classList.add("fa-plus");
    }

    for (let j = 0; j < contentDiv.length; j++) {
      if (j !== i) {
        contentDiv[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        icons[j].classList.remove("fa-minus");
        icons[j].classList.add("fa-plus");
      }
    }
  });
}

// Add to cart
const plus = document.getElementById("plus"),
  minus = document.getElementById("minus"),
  num = document.getElementById("num");
let a = 1;

plus.addEventListener("click", () => {
  a++;
  a = a < 10 ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", () => {
  if (a > 1) {
    a--;
    a = a < 10 ? "0" + a : a;
    num.innerText = a;
  }
});

// Select Cabinet Box Construction

const cabinet_btn = document.querySelectorAll(".cabinet_btn");
const select_cabinet = document.querySelectorAll(".select_cabinet");

cabinet_btn.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    cabinet_btn.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    select_cabinet.forEach((content) => {
      content.classList.remove("active");
    });
    select_cabinet[index].classList.add("active");
  });
});

// select button
const select_btn = document.querySelectorAll(".cabinet_btn");

select_btn.forEach((title) => {
  title.addEventListener("click", () => {
    select_btn.forEach((tab) => {
      tab.classList.remove("active");
    });
    title.classList.add("active");
  });
});

// Radio list and it Content Div
// const radio_tabs = document.querySelectorAll(".account_category_radio_div");
// const radio_list_content = document.querySelectorAll(".radio_list_content");

// radio_tabs.forEach((tab, index) => {
//   tab.addEventListener("click", (e) => {
//     radio_tabs.forEach((tab) => {
//       tab.classList.remove("active");
//     });
//     tab.classList.add("active");

//     radio_list_content.forEach((content) => {
//       content.classList.remove("active");
//     });
//     radio_list_content[index].classList.add("active");
//   });
// });
