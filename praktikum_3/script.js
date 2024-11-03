// Definisikan Variabel Body
const body = document.body;

// Fungsi untuk menambahkan tugas
const taskInput = document.getElementById("newtask");
document.getElementById("add-task-btn");
document.addEventListener("click", function () {
  const taskText = taskInput.value;

  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Tombol hapus
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.classList.add("delete");
    deleteBtn.addEventListener("click", function () {
      li.remove();
    });

    // Tambahkan tombol hapus ke li
    li.appendChild(deleteBtn);

    // Fungsi edit tugas (double-click)
    li.addEventListener("dblclick", function () {
      const newText = prompt(
        "Edit tugas:",
        li.textContent.replace("X", "").trim()
      );
      if (newText.trim() !== "") {
        li.firstChild.textContent = newText;
      }
    });

    // Tambahkan li ke ul
    document.getElementById("tasklist").appendChild(li);

    // Kosongkan input
    taskInput.value = "";
  }
});

// Selector background-color
const selectbg = document.getElementById("selectbg");
document.getElementById("selectbg").addEventListener("change", () => {
  body.style.backgroundColor = selectbg.value;
});

// Fungsi Membesarkan Ukuran Font
let fontsize = 16;
const increasefont = document.getElementById("increasefont");
document.getElementById("increasefont").addEventListener("click", () => {
  fontsize += 1;
  body.style.fontSize = fontsize + "px";
});

// Fungsi Memperkecil Ukuran Font
const decreasefont = document.getElementById("decreasefont");
document.getElementById("decreasefont").addEventListener("click", () => {
  fontsize -= 1;
  body.style.fontSize = fontsize + "px";
});

// Darkmode
let isDarkMode = false;
const darkmode = document.getElementById("darkmode");
const container = document.getElementsByClassName("container");
document.getElementById("darkmode").addEventListener("click", () => {
  isDarkMode = !isDarkMode;

  if (isDarkMode) {
    body.style.backgroundColor = "#1A1A19";
    darkmode.textContent = "Toggle Light Mode";
  } else {
    body.style.backgroundColor = "#F7F7F7";
    darkmode.textContent = "Toggle Dark Mode";
  }
});

// Font Style Changer
let isRoboto = false;
const fontstyle = document.getElementById("fontstyle");
document.getElementById("fontstyle").addEventListener("click", () => {
  isRoboto = !isRoboto;

  if (isRoboto) {
    body.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";
  } else {
    body.style.fontFamily =
      "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif";
  }
});
