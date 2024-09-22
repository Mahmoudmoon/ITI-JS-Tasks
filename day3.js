const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

// لتبديل واجهة المستخدم
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});

// معالجة بيانات تسجيل الدخول
document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const email = document.getElementById("login-email").value;
    const password = document.getElementById("login-password").value;
    alert(`Login with\nEmail: ${email}\nPassword: ${password}`);
});

// معالجة بيانات التسجيل
document.getElementById("register-form").addEventListener("submit", function(event) {
    event.preventDefault(); // منع إعادة تحميل الصفحة
    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const password = document.getElementById("reg-password").value;
    alert(`Register with\nName: ${name}\nEmail: ${email}\nPassword: ${password}`);
});
