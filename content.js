//React経由でDOMが構築されきってから処理するために、少し遅延させる
//TODO:他に良い方法ある？
setTimeout(() => {
  const targetText = "Who to follow";
  const divElements = document.querySelectorAll("div[dir='ltr']");

  let targetDiv = null;

  for (let div of divElements) {
    const span = div.querySelector("span");
    if (span && span.textContent.trim() === targetText) {
      targetDiv = div; //who to followの文言を含むdiv要素を格納(基準となるdiv要素)
      break;
    }
  }

  if (targetDiv) {
    
    const parentDiv = targetDiv.closest("div[data-testid='cellInnerDiv']");

    // parentDivと連続する4つの後続するdiv要素を非表示
    parentDiv.style.display = "none";

    let count = 0;
    let nextSibling = parentDiv.nextElementSibling;

    while (nextSibling && count < 4) {
      if (nextSibling.tagName === "DIV") {
        // nextSibling.classList.add("hide-recommend");
        nextSibling.style.display = "none";
        count++;
      }
      nextSibling = nextSibling.nextElementSibling;
    }
  }
}, 1750);
