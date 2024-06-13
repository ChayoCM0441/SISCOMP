document.getElementById('loginForm').addEventListener('submit', function(event) {
	event.preventDefault();

	const formData = new FormData(event.target);
	const username = formData.get('username');
	const password = formData.get('password');

	console.log(`Username: ${username}, Password: ${password}`);
});

document.getElementById("loginButton").addEventListener("click", function() {
    window.location.href = "index.html";
  });
  

	
