document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('songRequestForm').addEventListener('submit', function(e){
        e.preventDefault();
        const formData = new FormData(this); 
		fetch(this.action, { 
			method: 'POST', 
			body: formData, 
		}) 
		.then(response => response.json()) 
		.then(data => {
            alert("Song submitted successfully. Thank you for participating in Karaoke Night!");
            document.getElementById('songRequestForm').reset();
		}) 
		.catch(error => console.error('Error:', error)); 
    });
});
