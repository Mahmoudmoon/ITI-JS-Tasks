document.getElementById("add-btn").addEventListener("click", function() {
  let task = document.getElementById("todo-input").value;
  if (task === "") {
      alert("Please enter a task!");
      return;
  }

  let listItem = document.createElement("li");
  listItem.textContent = task;

  // إنشاء radio button للتحقق من اكتمال المهمة
  let radioButton = document.createElement("input");
  radioButton.type = "radio";
  
  // إضافة حدث لتغيير حالة المهمة إلى مكتملة
  radioButton.addEventListener("change", function() {
      if (radioButton.checked) {
          listItem.classList.add("completed");
      }
  });

  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("delete-btn");

  deleteButton.addEventListener("click", function() {
      this.parentElement.remove();
  });

  // إضافة radio button وزر الحذف إلى العنصر
  listItem.prepend(radioButton);
  listItem.appendChild(deleteButton);
  document.getElementById("todo-list").appendChild(listItem);

  // Clear the input field after adding the task
  document.getElementById("todo-input").value = "";
});
