var eyeicon = document.getElementById("eyeicon");
eyeicon.onclick = function () {
  if (password.type === "password") {
    password.type = "text";
    eyeicon.src = "eye-closed-icon-2048x1839-9ebpliym.png";
  } else {
    password.type = "password";
    eyeicon.src = "eye-open-icon-512x344-pos22o8k.png";
  }
};
