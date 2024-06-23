document.getElementById('ctt_form').addEventListener('submit', function(event) {
    event.preventDefault();

    var statusBox = document.querySelector('.status');

    var formData = new FormData(this);
    formData.forEach((value, key) => {
        var line = document.createElement('p');
        line.textContent = key + ': ' + value;

        statusBox.appendChild(line);
    })
    this.reset();
})