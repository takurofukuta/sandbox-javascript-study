import "./styles.css";

const addTask = () => {
  // 入力された値を取得し、入力フォームを空にする
  const inputText = document.getElementById("input-text").value;
  document.getElementById("input-text").value = "";

  // 未完了タスクの追加処理
  // liタグ作成
  const li = document.createElement("li");
  // divタグ作成
  const div = document.createElement("div");
  div.className = "list-row";

  // pタグ作成
  const p = document.createElement("p");
  p.innerText = inputText;

  // button(完了)タグを生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.className = "complete-button";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグを生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    const deleteTarget = deleteButton.parentNode.parentNode;
    console.log(deleteTarget);
    document.getElementById("uncompleted-task").removeChild(deleteTarget);
  });

  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);
  // 未完了タスクの追加
  document.getElementById("uncompleted-task").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => addTask());
