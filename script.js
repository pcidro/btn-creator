const controles = document.getElementById("controles");
const css = document.querySelector(".css");
const btn = document.querySelector(".btn");
controles.addEventListener("change", HandleChange);

const HandleStyle = {
  element: btn,
  backgroundColor(value) {
    this.element.style.backgroundColor = value;
  },
  height(value) {
    this.element.style.height = value + "px";
  },

  width(value) {
    this.element.style.width = value + "px";
  },

  text(value) {
    this.element.innerText = value;
  },

  color(value) {
    this.element.style.color = value;
  },

  border(value) {
    this.element.style.border = value;
  },

  borderRadius(value) {
    this.element.style.borderRadius = value + "px";
  },

  fontSize(value) {
    this.element.style.fontSize = value + "px";
  },
};

function HandleChange(event) {
  const name = event.target.name;
  const value = event.target.value;
  HandleStyle[name](value);
  showCss();
  saveButtonStyle();
}

function showCss() {
  css.innerHTML =
    "<span>" + btn.style.cssText.split("; ").join(";</span> <span>");
}

function saveButtonStyle() {
  const buttonData = {
    text: btn.innerText,
    style: btn.style.cssText,
  };
  localStorage.setItem("@buttonData", JSON.stringify(buttonData));
}

function loadButtonStyle() {
  const saved = localStorage.getItem("@buttonData");
  if (saved) {
    const buttonData = JSON.parse(saved);
    btn.innerText = buttonData.text;
    btn.style.cssText = buttonData.style;
  }
  showCss();
}
loadButtonStyle();
