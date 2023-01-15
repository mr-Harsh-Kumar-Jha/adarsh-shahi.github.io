const sendEmail = function () {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "adarshshahi1009@gmail.com",
		Password: "adarsh1009",
		To: "adarshshahi1009@gmail.com",
		From: document.querySelector(".email input").value,
		Subject: document.querySelector(".subject input").value,
		Body: document.querySelector(".message input"),
	}).then((message) => alert(message));
};

document.querySelector(".submit").addEventListener("click", (event) => {
	sendEmail();
});
