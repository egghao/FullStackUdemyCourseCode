let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();
// par1 是要控制的對象
// par2 是duration
// par3 是控制對象的原始狀態
// par4 是控制對象動畫結束後的狀態
// par5 提早幾秒跑
time_line
  .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
  .fromTo(
    hero,
    1.2,
    { width: "80%" },
    { width: "100%", ease: Power2.easeInOut }
  )
  .fromTo(
    slider,
    1,
    { x: "-100%" },
    { x: "0%", ease: Power2.easeInOut },
    "-=1.2"
  )
  .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

setTimeout(() => {
  animation.style.pointerEvents = "none"; //無法點擊此element object
}, 2500);

window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

// 防止form內部按鈕交出表單
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

// 選擇select內的option之後要改變相對應的顏色
function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "lightgreen";
    target.style.color = "black";
  } else if (
    target.value == "B+" ||
    target.value == "B" ||
    target.value == "B-"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C+" ||
    target.value == "C" ||
    target.value == "C-"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D+" ||
    target.value == "D" ||
    target.value == "D-"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "white";
    target.style.color = "black";
  }
}

function convertor(grade) {
  switch (grade) {
    case "A":
      return 4.0;
    case "A-":
      return 3.7;
    case "B+":
      return 3.4;
    case "B":
      return 3.0;
    case "B-":
      return 2.7;
    case "C+":
      return 2.4;
    case "C":
      return 2.0;
    case "C-":
      return 1.7;
    case "D+":
      return 1.4;
    case "D":
      return 1.0;
    case "D-":
      return 0.7;
    case "F":
      return 0.0;
    default:
      return 0;
  }
}

function setGPA() {
  let formLength = document.querySelectorAll("form").length;
  let credits = document.querySelectorAll(".class-credit");
  let selects = document.querySelectorAll("select");

  let sum = 0;
  let creditSum = 0;
  for (let i = 0; i < credits.length; i++) {
    let credit = 0;
    if (!isNaN(credits[i].valueAsNumber)) {
      // console.log(credits[i].valueAsNumber);
      credit = credits[i].valueAsNumber;
    }
    // console.log(credit);
    creditSum += credit;
    sum += credit * convertor(selects[i].value);
  }
  let gpa;
  if (creditSum <= 0) {
    gpa = 0;
  } else {
    gpa = (sum / creditSum).toFixed(2);
  }

  let gpaResult = document.querySelector("#result-gpa");
  gpaResult.innerText = gpa;
}

let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target); // e.target就是<selector>
  });
});

let credits = document.querySelectorAll(".class-credit");
credits.forEach((credit) => {
  credit.addEventListener("change", () => {
    setGPA();
  });
});

let addButton = document.querySelector(".plus-btn");
addButton.addEventListener("click", () => {
  let newForm = document.createElement("form");
  let newDiv = document.createElement("div");
  newDiv.classList.add("grader");
  // 製作五個小元素
  let newInputClass = document.createElement("input");
  newInputClass.setAttribute("type", "text");
  newInputClass.setAttribute("placeholder", "class category");
  newInputClass.setAttribute("class", "class-type");
  newInputClass.setAttribute("list", "opt");

  let newInputClsNum = document.createElement("input");
  newInputClsNum.setAttribute("type", "text");
  newInputClsNum.setAttribute("placeholder", "class number");
  newInputClsNum.setAttribute("class", "class-number");

  let newInputCredit = document.createElement("input");
  newInputCredit.setAttribute("type", "number");
  newInputCredit.setAttribute("placeholder", "credits");
  newInputCredit.setAttribute("class", "class-credit");
  newInputCredit.setAttribute("min", "0");
  newInputCredit.setAttribute("max", "6");
  newInputCredit.addEventListener("change", () => {
    setGPA();
  });

  let newSelect = document.createElement("select");
  newSelect.classList.add("select");
  var opt1 = document.createElement("option");
  opt1.setAttribute("value", "");
  let textNode1 = document.createTextNode("");
  opt1.appendChild(textNode1);
  var opt2 = document.createElement("option");
  opt2.setAttribute("value", "A");
  let textNode2 = document.createTextNode("A");
  opt2.appendChild(textNode2);
  var opt3 = document.createElement("option");
  opt3.setAttribute("value", "A-");
  let textNode3 = document.createTextNode("A-");
  opt3.appendChild(textNode3);
  var opt4 = document.createElement("option");
  opt4.setAttribute("value", "B+");
  let textNode4 = document.createTextNode("B+");
  opt4.appendChild(textNode4);
  var opt5 = document.createElement("option");
  opt5.setAttribute("value", "B");
  let textNode5 = document.createTextNode("B");
  opt5.appendChild(textNode5);
  var opt6 = document.createElement("option");
  opt6.setAttribute("value", "B-");
  let textNode6 = document.createTextNode("B-");
  opt6.appendChild(textNode6);
  var opt7 = document.createElement("option");
  opt7.setAttribute("value", "C+");
  let textNode7 = document.createTextNode("C+");
  opt7.appendChild(textNode7);
  var opt8 = document.createElement("option");
  opt8.setAttribute("value", "C");
  let textNode8 = document.createTextNode("C");
  opt8.appendChild(textNode8);
  var opt9 = document.createElement("option");
  opt9.setAttribute("value", "C-");
  let textNode9 = document.createTextNode("C-");
  opt9.appendChild(textNode9);
  var opt10 = document.createElement("option");
  opt10.setAttribute("value", "D+");
  let textNode10 = document.createTextNode("D+");
  opt10.appendChild(textNode10);
  var opt11 = document.createElement("option");
  opt11.setAttribute("value", "D");
  let textNode11 = document.createTextNode("D");
  opt11.appendChild(textNode11);
  var opt12 = document.createElement("option");
  opt12.setAttribute("value", "D-");
  let textNode12 = document.createTextNode("D-");
  opt12.appendChild(textNode12);
  var opt13 = document.createElement("option");
  opt13.setAttribute("value", "F");
  let textNode13 = document.createTextNode("F");
  opt13.appendChild(textNode13);

  newSelect.appendChild(opt1);
  newSelect.appendChild(opt2);
  newSelect.appendChild(opt3);
  newSelect.appendChild(opt4);
  newSelect.appendChild(opt5);
  newSelect.appendChild(opt6);
  newSelect.appendChild(opt7);
  newSelect.appendChild(opt8);
  newSelect.appendChild(opt9);
  newSelect.appendChild(opt10);
  newSelect.appendChild(opt11);
  newSelect.appendChild(opt12);
  newSelect.appendChild(opt13);

  newSelect.addEventListener("change", (e) => {
    setGPA();
    changeColor(e.target);
  });

  let newButton = document.createElement("button");
  newButton.classList.add("trash-button");
  let newItag = document.createElement("i");
  newItag.classList.add("fas");
  newItag.classList.add("fa-trash");
  newButton.appendChild(newItag);
  newButton.addEventListener("click", (e) => {
    e.preventDefault();
    e.target.parentElement.parentElement.style.animation =
      "scaleDown 0.3s ease forwards";
    e.target.parentElement.parentElement.addEventListener(
      "animationend",
      (e) => {
        e.target.remove();
        setGPA();
      }
    );
  });

  newDiv.appendChild(newInputClass);
  newDiv.appendChild(newInputClsNum);
  newDiv.appendChild(newInputCredit);
  newDiv.appendChild(newSelect);
  newDiv.appendChild(newButton);
  newForm.appendChild(newDiv);
  let parentDiv = document.querySelector(".all-inputs");
  parentDiv.appendChild(newForm);
  newForm.style.animation = "scaleUp 0.3s ease forwards";
});

let allTrash = document.querySelectorAll("button.trash-button");
allTrash.forEach((trash) => {
  trash.addEventListener("click", (e) => {
    e.target.parentElement.parentElement.classList.add("remove");
  });
});
allTrash.forEach((trash) => {
  let form = trash.parentElement.parentElement;
  form.addEventListener("transitionend", (e) => {
    e.target.remove();
    setGPA();
  });
});

function handleSorting(direction) {
  let graders = document.querySelectorAll("div.grader");
  let objArr = [];
  for (let i = 0; i < graders.length; i++) {
    let className = graders[i].children[0].value;
    let classNum = graders[i].children[1].value;
    let classCredit = graders[i].children[2].value;
    let classGrade = graders[i].children[3].value;
    let classGradeNum = convertor(graders[i].children[3].value);
    if (classCredit == "" || classGrade == "") {
      continue;
    }
    let class_obj = {
      className,
      classNum,
      classCredit,
      classGrade,
      classGradeNum,
    };
    objArr.push(class_obj);
  }
  objArr = mergeSort(objArr);
  console.log(objArr);
  if (direction === "descending") {
    objArr = objArr.reverse();
  }

  // Update UI
  let allInputs = document.querySelector(".all-inputs");
  allInputs.innerHTML = "";

  for (let i = 0; i < objArr.length; i++) {
    allInputs.innerHTML += `<form action="">
		<div class="grader">
				<input
				type="text"
				placeholder="class category"
				class="class-type"
				list="opt"
				value=${objArr[i].className}
				/><!--
						--><input
				type="text"
				placeholder="class number"
				class="class-number"
				value=${objArr[i].classNum}
				/><!--
				--><input
				type="number"
				placeholder="credits"
				min="0"
				max="6"
				class="class-credit"
				value=${objArr[i].classCredit}
				/><!--
				--><select name="select" class="select">
				<option value=""></option>
				<option value="A">A</option>
				<option value="A-">A-</option>
				<option value="B+">B+</option>
				<option value="B">B</option>
				<option value="B-">B-</option>
				<option value="C+">C+</option>
				<option value="C">C</option>
				<option value="C-">C-</option>
				<option value="D+">D+</option>
				<option value="D">D</option>
				<option value="D-">D-</option>
				<option value="F">F</option></select
				><!--
				--><button class="trash-button">
				<i class="fas fa-trash"></i>
				</button>
		</div>
		</form>`;
  }

  graders = document.querySelectorAll("div.grader");
  for (let i = 0; i < graders.length; i++) {
    graders[i].children[3].value = objArr[i].classGrade;
  }

  // Select change color event
  let allSelects = document.querySelectorAll("select");
  allSelects.forEach((select) => {
    changeColor(select);
    select.addEventListener("change", (e) => {
      setGPA();
      changeColor(e.target);
    });
  });

  // Credit event
  let allCredits = document.querySelectorAll(".class-credit");
  allCredits.forEach((credit) => {
    setGPA();
    credit.addEventListener("change", (e) => {
      setGPA();
    });
  });

  // Add trash button event
  let allTrash = document.querySelectorAll(".trash-button");
  allTrash.forEach((trash) => {
    trash.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.parentElement.parentElement.style.animation =
        "scaleDown 0.5s ease forwards";
      e.target.parentElement.parentElement.addEventListener(
        "animationend",
        (e) => {
          e.target.remove();
          setGPA();
        }
      );
    });
  });
}

function merge(a1, a2) {
  let result = [];
  let i = 0;
  let j = 0;
  while (i < a1.length && j < a2.length) {
    if (a1[i].classGradeNum < a2[j].classGradeNum) {
      result.push(a1[i]);
      i++;
    } else {
      result.push(a2[j]);
      j++;
    }
  }
  if (i < a1.length) {
    for (let m = i; m < a1.length; m++) {
      result.push(a1[m]);
    }
  }
  if (j < a2.length) {
    for (let m = j; m < a2.length; m++) {
      result.push(a2[m]);
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length == 0) {
    return;
  }

  if (arr.length == 1) {
    return arr;
  } else {
    let middle = Math.floor(arr.length / 2);
    let left = arr.slice(0, middle);
    let right = arr.slice(middle, arr.length);
    // post oreder traversal
    return merge(mergeSort(left), mergeSort(right));
  }
}

let ascendingSort = document.querySelector(".sort-ascending");
let descendingSort = document.querySelector(".sort-descending");
ascendingSort.addEventListener("click", () => {
  handleSorting("ascending");
});
descendingSort.addEventListener("click", () => {
  handleSorting("descending");
});
