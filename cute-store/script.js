import { CUTE_ITEM_LIST } from "./CUTE_ITEM_LIST.js";

//카테고리 태그 부분
const allBtn = document.querySelector(".category-all");
const dogBtn = document.querySelector(".category-dog");
const catBtn = document.querySelector(".category-cat");
const etcBtn = document.querySelector(".category-etc");
const textAllBtn = document.querySelector(".text--all");
const textDogBtn = document.querySelector(".text--dog");
const textCatBtn = document.querySelector(".text--cat");
const textEtcBtn = document.querySelector(".text--etc");

//카테고리 상태
let previousCategoryDog = "";
let previousCategoryCat = "";
let previousCategoryEtc = "";

//필터 함수<공통>
function filterList(categoryName, isAll) {
  const filteredItems = CUTE_ITEM_LIST.filter(
    (item) => item.category === categoryName
  );

  const container = document.querySelector(".card--list");
  filteredItems.map((item) => {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add(categoryName);

    const isRenderedBy = isAll ? "all" : categoryName;
    card.innerHTML = `
    <div class = "card--inner selected_${isRenderedBy}">
      <h3>${item.name}</h3>
      <img src="${item.profile}" alt="${item.name}">
      <div class="hashtag">
        ${item.hashtag
          .slice(0, 2)
          .map((tag) => `<p class="hashtagItems">#${tag} </p>`)
          .join("")} ${
      item.hashtag.length > 2
        ? `<button class="showMore ${item.name}" type="button"> + </button>`
        : "" //온클릭 바로주기는 안됨 => 지역 변수만 인식(?)
    }
      </div>
      <div class="card--inner__footer">♥</div>
    </div>
    <div class="modal ${item.name}">
      <div class="modal-content">
        <button class="close ${item.name}">x</button>
        <div class="modal-body"></div>
      </div>
    </div>
  `;
    container.appendChild(card);
  });
  addEventHashTagBtn();
  closeEventBtn();
}

//디폴트로 전체 버튼 눌려있기!
window.onload = function () {
  allBtn.click();
};

//카테고리 클릭시 이벤트 //카테고리 리스트 filter <전체>
allBtn.onclick = function () {
  const selectAll = document.getElementById("category-all").value;
  const textAll = document.querySelector("#text--all");
  textAll.style.display = "block";

  //버튼 눌려있기
  allBtn.classList.add("active");

  document.getElementById("text--all").innerText = selectAll;
  const dogCard = document.querySelectorAll(".dog");
  const catCard = document.querySelectorAll(".cat");
  const etcCard = document.querySelectorAll(".ect");

  // 클래스에 all 추가하는 함수
  const addClassAll = (category) => {
    const cardInnerList = document.querySelectorAll(
      `.${category} > .card--inner`
    );
    cardInnerList.forEach((item) => {
      item.classList.add("selected_all");
    });
  };

  // 이미 card가 있으면 all만 추가하고 아니면 새로 렌더링
  dogCard.length === 0 ? filterList("dog", true) : addClassAll("dog");
  catCard.length === 0 ? filterList("cat", true) : addClassAll("cat");
  etcCard.length === 0 ? filterList("etc", true) : addClassAll("etc");
};

//지울 때 => 셀렉 도그를 데려와서 if selected_dog를 포함하고 있나?
// 있으면 selected_all만 지워라!
// else 포함 안하면 그냥 없애자!
// 이것을 강아지, 고양이, 기타 모두 검색해야하기 떄문에 => 함수를 사용해서 공통된 것을 묶음!
// 이때 for문 반복 부분은 forEach를 사용해서 더 간결하게 만들어줌!
textAllBtn.onclick = function () {
  const textAllClick = document.querySelector("#text--all");
  if (textAllClick.style.display === "none") {
    textAllClick.style.display = "block";
  } else {
    textAllClick.style.display = "none";
    // 버튼 눌린 거 지우기
    allBtn.classList.remove("active");

    const handleRemoveCard = (category) => {
      const card = document.querySelectorAll(`.${category}`);
      const container = document.querySelectorAll(
        `.${category} > .card--inner`
      );

      if (container[0].classList.contains(`selected_${category}`)) {
        container.forEach(({ classList }) => {
          classList.remove(`selected_all`);
        });
      } else {
        card.forEach((card) => {
          card.remove();
        });
      }
    };

    handleRemoveCard("dog");
    handleRemoveCard("cat");
    handleRemoveCard("etc");
  }
};

//카테고리 클릭시 이벤트 //카테고리 리스트 filter <강아지>
dogBtn.onclick = function () {
  const selectDog = document.getElementById("category-dog").value;
  const textDog = document.querySelector("#text--dog");
  textDog.style.display = "block";

  dogBtn.classList.add("active");

  document.getElementById("text--dog").innerText = selectDog;
  const dogCard = document.querySelectorAll(".dog");

  // 클래스에 all 추가하는 함수
  const addClassDog = () => {
    const cardInnerList = document.querySelectorAll(`.dog > .card--inner`);
    cardInnerList.forEach((item) => {
      item.classList.add("selected_dog");
    });
  };

  if (selectDog !== previousCategoryDog) {
    dogCard.length === 0 ? filterList("dog", false) : addClassDog("dog");
    previousCategoryDog = selectDog;
  }
};

textDogBtn.onclick = function () {
  const textDogClick = document.querySelector("#text--dog");
  if (textDogClick.style.display === "none") {
    textDogClick.style.display = "block";
  } else {
    dogBtn.classList.remove("active");
    textDogClick.style.display = "none";
    const card = document.querySelectorAll(".dog");
    const container = document.querySelectorAll(".dog > .card--inner");

    if (container[0].classList.contains("selected_all")) {
      for (let i = 0; i < container.length; i++) {
        container[i].classList.remove("selected_dog");
      }
    } else {
      for (let i = 0; i < card.length; i++) {
        card[i].remove();
      }
    }

    previousCategoryDog = "";
  }
};

//카테고리 클릭시 이벤트 //카테고리 리스트 filter <고양이>
catBtn.onclick = function () {
  const selectCat = document.getElementById("category-cat").value;
  const textCat = document.querySelector("#text--cat");
  textCat.style.display = "block";
  catBtn.classList.add("active");

  document.getElementById("text--cat").innerText = selectCat;

  const catCard = document.querySelectorAll(".cat");

  // 클래스에 all 추가하는 함수
  const addClassCat = () => {
    const cardInnerList = document.querySelectorAll(`.cat > .card--inner`);
    cardInnerList.forEach((item) => {
      item.classList.add("selected_cat");
    });
  };

  if (selectCat !== previousCategoryCat) {
    catCard.length === 0 ? filterList("cat", false) : addClassCat("cat");
    previousCategoryCat = selectCat;
  }
};
textCatBtn.onclick = function () {
  const textCatClick = document.querySelector("#text--cat");
  if (textCatClick.style.display === "none") {
    textCatClick.style.display = "block";
  } else {
    textCatClick.style.display = "none";
    catBtn.classList.remove("active");
    const card = document.querySelectorAll(".cat");
    const container = document.querySelectorAll(".cat > .card--inner");
    if (container[0].classList.contains("selected_all")) {
      for (let i = 0; i < container.length; i++) {
        container[i].classList.remove("selected_cat");
      }
    } else {
      for (let i = 0; i < card.length; i++) {
        card[i].remove();
      }
    }

    previousCategoryCat = "";
  }
};

//카테고리 클릭시 이벤트 //카테고리 리스트 filter <기타>
etcBtn.onclick = function () {
  const selectEtc = document.getElementById("category-etc").value;
  const textEtc = document.querySelector("#text--etc");
  textEtc.style.display = "block";
  etcBtn.classList.add("active");

  document.getElementById("text--etc").innerText = selectEtc;
  const etcCard = document.querySelectorAll(".etc");

  // 클래스에 all 추가하는 함수
  const addClassEtc = () => {
    const cardInnerList = document.querySelectorAll(`.etc > .card--inner`);
    cardInnerList.forEach((item) => {
      item.classList.add("selected_etc");
    });
  };

  if (selectEtc !== previousCategoryEtc) {
    etcCard.length === 0 ? filterList("etc", false) : addClassEtc("etc");
    previousCategoryEtc = selectEtc;
  }
};

textEtcBtn.onclick = function () {
  const textEtcClick = document.querySelector("#text--etc");
  if (textEtcClick.style.display === "none") {
    textEtcClick.style.display = "block";
  } else {
    textEtcClick.style.display = "none";
    etcBtn.classList.remove("active");
    const card = document.querySelectorAll(".etc");
    const container = document.querySelectorAll(".etc > .card--inner");
    if (container[0].classList.contains("selected_all")) {
      for (let i = 0; i < container.length; i++) {
        container[i].classList.remove("selected_etc");
      }
    } else {
      for (let i = 0; i < card.length; i++) {
        card[i].remove();
      }
    }
    previousCategoryEtc = "";
  }
};

//모달
function openModal(className) {
  // 같은 class 이름 가진 모달 찾기
  document.querySelector(`.card > div.modal.${className}`).style.display =
    "block";
}

function closeModal(className) {
  document.querySelector(`.card > div.modal.${className}`).style.display =
    "none";
}

//지울 부분 찾기
function searchCloseBtn(className) {
  const modalContent = document.querySelector(
    `.card > div.modal.${className}.close`
  );
  modalContent.style.display = "none";
}

function closeEventBtn() {
  const closeBtn = document.querySelectorAll(".close");

  closeBtn.forEach((item) => {
    item.addEventListener("click", function (e) {
      const { classList } = e.target;
      closeModal(classList[1]);
      searchCloseBtn(closeBtn, classList[1]);
    });
  });
}

// // 모달 닫기 버튼 클릭 시 모달을 닫음
// const closeBtn = document.querySelector(".close");
// closeBtn.addEventListener("click", closeModal);

// 해시태그를 띄우는 함수
function showHashtags(hashtags, className) {
  const modalBody = document.querySelector(
    `.card > div.modal.${className} .modal-body`
  );
  modalBody.innerHTML = "";
  hashtags.forEach((tag) => {
    const tagEl = document.createElement("p");
    tagEl.textContent = "#" + tag;
    modalBody.appendChild(tagEl);
  });
}

// 해시태그 버튼 클릭 시 모달을 열고 해시태그를 띄움
function addEventHashTagBtn() {
  const hashtagBtn = document.querySelectorAll(".showMore");

  hashtagBtn.forEach((item) => {
    item.addEventListener("click", function (e) {
      const hashtags = CUTE_ITEM_LIST.filter(
        (item) =>
          item.name ===
          e.target.parentNode.parentNode.querySelector("h3").textContent
      )[0].hashtag;
      const { classList } = e.target;
      openModal(classList[1]);
      showHashtags(hashtags, classList[1]);
    });
  });
}

//뉴 귀요미 클릭시 폼 열리기
function toggleNewCuteForm() {
  const newCuteForm = document.getElementById("new-cute-form");
  newCuteForm.style.display =
    newCuteForm.style.display === "none" || newCuteForm.style.display === ""
      ? "block"
      : "none";
}
document
  .querySelector(".add-new-cute")
  .addEventListener("click", toggleNewCuteForm);

//폼 닫기
function closeNewCuteForm() {
  const closeCuteForm = document.getElementById("new-cute-form");
  closeCuteForm.style.display = "none";
}
document
  .querySelector(".submit-add-cute")
  .addEventListener("click", closeNewCuteForm);
document
  .querySelector(".close-add-cute")
  .addEventListener("click", closeNewCuteForm);
