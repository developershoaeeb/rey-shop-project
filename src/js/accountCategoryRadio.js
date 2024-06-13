// Radio list and it Content Div
const radio_tabs = document.querySelectorAll(".account_category_radio_div");
const radio_list_content = document.querySelectorAll(".radio_list_content");

radio_tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    radio_tabs.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    radio_list_content.forEach((content) => {
      content.classList.remove("active");
    });
    radio_list_content[index].classList.add("active");
  });
});

// Radio list and it Content Div
const radio_tabs2 = document.querySelectorAll(".account_category_radio_div2");
const radio_list_content2 = document.querySelectorAll(".radio_list_content2");

radio_tabs2.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    radio_tabs2.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    radio_list_content2.forEach((content) => {
      content.classList.remove("active");
    });
    radio_list_content2[index].classList.add("active");
  });
});

// Radio list and it Content Div
const radio_tabs3 = document.querySelectorAll(".account_category_radio_div3");
const radio_list_content3 = document.querySelectorAll(".radio_list_content3");

radio_tabs3.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    radio_tabs3.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    radio_list_content3.forEach((content) => {
      content.classList.remove("active");
    });
    radio_list_content3[index].classList.add("active");
  });
});

// Radio list and it Content Div44
const radio_tabs44 = document.querySelectorAll(".account_category_radio_div44");
const radio_list_content44 = document.querySelectorAll(".radio_list_content44");

radio_tabs44.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    radio_tabs44.forEach((tab) => {
      tab.classList.remove("active");
    });
    tab.classList.add("active");

    radio_list_content44.forEach((content) => {
      content.classList.remove("active");
    });
    radio_list_content44[index].classList.add("active");
  });
});
