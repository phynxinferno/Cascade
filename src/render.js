function setUrl() {
    //sets the url of an image box using a specified numerical ID
    let elem = document.getElementById("numberI").value;
    let img = document.getElementById("imgInput").value;
    document.getElementById(elem).getElementsByTagName("img")[1].src = img;
    console.log("e");
    document.getElementById("imgMenu").style.display = "none";
  }
  //hides image replacement menu
  function hideImgMenu() {
    console.log("e");
    document.getElementById("imgMenu").style.display = "none";
  }
  function showImgMenu() {
    //shows image replacement menu
    console.log("e");
    document.getElementById("imgMenu").style.display = "block";
  }
  function download() {
    //inefficient download function that's about half code snippet
    var noteNum = parseInt(document.getElementById("numCreated").innerHTML);
    var params = [];
    params.push(document.getElementById("yes").value);
    for (let i = 1; !(i > noteNum); i++) {
      params.push(
        document.getElementById(i).getElementsByTagName("input")[0].value +
          " ["
      );
      params.push(
        `
` +
          document.getElementById(i).getElementsByTagName("textarea")[0]
            .value +
          "]"
      );
      params.push(`
`);
    }
    var contentString = "";
    for (const element of params) {
      contentString = contentString + element;
    }
    console.log(contentString);
    var element = document.createElement("a");
    element.setAttribute(
      "href",
      "data:text/plain;charset=utf-8," + encodeURIComponent(contentString)
    );
    element.setAttribute("download", "notes.txt");

    element.style.display = "none";
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }
  function cleer() {
    //clears all topics
    document.getElementById("inputs").innerHTML = null;
    document.getElementById("numCreated").innerHTML = 0;
    console.log("test");
  }
  function newTopic() {
    //creates new topic and appends it to the bottom of inputs div
    function delElem(eNum) {
      console.log(eNum);
      document
        .getElementById("inputs")
        .removeChild(document.getElementById(eNum.toString()));
      for (
        let eat = eNum + 1;
        !(eat > parseInt(document.getElementById("numCreated").innerHTML));
        eat++
      ) {
        console.log(eat);
        document.getElementById(eat).id = eat - 1;
      }
      document.getElementById("numCreated").innerHTML =
        parseInt(document.getElementById("numCreated").innerHTML) - 1;
    }
    let bigContainer = document.getElementById("inputs");
    let container = document.createElement("div");
    let spacer = document.createElement("div");
    let name = document.createElement("input");
    let imgContainer = document.createElement("div");
    let labele = document.createElement("label");
    let bullets = document.createElement("textarea");
    let delButton = document.createElement("img");
    let contextImg = document.createElement("img");
    let delF = document.createElement("script");
    let brea = document.createElement("hr");
    let numCr = parseInt(document.getElementById("numCreated").innerHTML);
    let realNum = (numCr += 1);
    let otheRealNum = parseInt(
      document.getElementById("tNumCreated").innerHTML
    );
    let otherRealNum = (otheRealNum += 1);
    name.className = "topicName";
    delButton.className = "delbut";
    delButton.id = otherRealNum + "b";
    name.name = realNum.toString();
    labele.for = realNum.toString();
    container.id = realNum;
    imgContainer.className = "imagee";
    contextImg.className = "imagee";
    container.className = "notecont";
    delButton.src = "./garbage.png";
    bullets.rows = "6";
    bullets.cols = "75";
    bullets.id = "test";
    bullets.className = "largeInput";
    imgContainer.appendChild(contextImg);
    container.appendChild(name);
    container.appendChild(delButton);
    container.appendChild(labele);
    container.appendChild(delF);
    container.appendChild(spacer);
    container.appendChild(bullets);
    container.appendChild(imgContainer);
    container.appendChild(brea);
    bigContainer.appendChild(container);
    delButton.addEventListener("click", () => {
      delElem(
        parseInt(
          document.getElementById(otherRealNum + "b").parentElement.id
        )
      );
    });
    document.getElementById("numCreated").innerHTML = realNum;
    document.getElementById("tNumCreated").innerHTML = otherRealNum;
    console.log("added topic");
  }