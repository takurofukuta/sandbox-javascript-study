import "./styles.css";

const addTask = () => {
  // 入力された値を取得し、入力フォームを空にする
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  // 未完了タスクの追加処理
  // liタグ作成
  const li = document.createElement("li");
  li.innerText = inputText;
  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";
  div.appendChild(li);

  // 未完了タスクの追加
  document.getElementById("uncompleted-task").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => addTask());
