const hamburger = document.getElementById("hamburger")
const navLinks = document.getElementById("navLinks")
const form = document.getElementById("messageForm")

const nameInput = document.getElementById("name");
const dateInput = document.getElementById("date");
const genderInputs = document.querySelectorAll("input[name='gender']");
const messageInput = document.getElementById("message-area");

const previewName = document.getElementById("preview-name");
const previewDate = document.getElementById("preview-date");
const previewGender = document.getElementById("preview-gender");
const previewMessage = document.getElementById("preview-message");
const previewTime = document.getElementById("preview-time")

const alertBox = document.getElementById("alertBox");
const alertMessage = document.getElementById("alertMessage");

const nameOverlay =document.getElementById("nameOverlay");
const welcomeOverlay = document.getElementById("welcomeOverlay");
const welcomeText = document.getElementById("welcomeText");

const saveNameBtn = document.getElementById("saveNameBtn");
const enterWebsiteBtn = document.getElementById("enterWebsiteBtn");
const userNameInput = document.getElementById("userNameInput");

let userName = "";

window.addEventListener("load", () => {
    nameOverlay.classList.add("show");
});

saveNameBtn.addEventListener("click", () => {
    const inputName = userNameInput.value.trim();

    if (!inputName) {
        userNameInput.style.borderColor = "red";
        return;
    }
    userNameInput.style.borderColor = "";

    userName = inputName;
    welcomeText.textContent = `Halo, ${userName}! 👋`;

    nameOverlay.classList.remove("show");
    setTimeout(() => {
        welcomeOverlay.classList.add("show");
        setTimeout(() => {
            welcomeOverlay.classList.remove("show");
        },2000);
    }, 300);
});

enterWebsiteBtn.addEventListener("click", () => {
    welcomeOverlay.classList.remove("show");
});

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// validation and submit 
form.addEventListener("submit", (e) => {
    e.preventDefault(); //stop refresh

    const name = nameInput.value.trim();
    const date = dateInput.value;
    let gender = "";
    genderInputs.forEach(radio => {
        if (radio.checked) gender = radio.value;
    });
    const message = messageInput.value.trim();

    const time = new Date();
    const formatdate = new Intl.DateTimeFormat("id-ID", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    }).format(time);

    console.log(formatdate);

    if (!name) {
        showAlert("Nama wajib diisi!", "error");
        nameInput.focus();
        return;
    }

    if (!date) {
        showAlert("Tanggal lahir wajib diisi!", "error");
        dateInput.focus();
        return;
    }

    if (!gender) {
        showAlert("silahkan pilih jenis kelamin!", "error");
        return;
    }

    if (message.length < 2) {
        showAlert("Pesan wajib diisi minimal 2 karakter!", "error");
        messageInput.focus();
        return;
    }

    showAlert("Pesan berhasil dikirim", "success")
    // alert("Pesan berhasil dikirim")
    
    previewName.textContent = name;
    previewDate.textContent = date;
    previewGender.textContent = gender;
    previewMessage.textContent = message;
    previewTime.textContent = formatdate;
});

function showAlert(message, type= "error") {
    alertBox.className = `alert show ${type}`;
    alertMessage.textContent = message;

    setTimeout(() => {
        alertBox.classList.remove("show");
    }, 3000);
}

