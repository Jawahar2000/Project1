document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('login-form');
  const dataForm = document.getElementById('data-form');
  const uploadForm = document.getElementById('upload-form');
  const loginError = document.getElementById('login-error');
  const dataSuccess = document.getElementById('data-success');
  const uploadSuccess = document.getElementById('upload-success');
  const contentDisplay = document.getElementById('content-display');

  let authenticated = false;

  // Mock user data for authentication
  const mockUser = {
    username: 'user',
    password: 'password'
  };

  // Handle login
  loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === mockUser.username && password === mockUser.password) {
      authenticated = true;
      loginError.textContent = '';
      document.getElementById('auth-section').classList.add('hidden');
      document.getElementById('data-input-section').classList.remove('hidden');
      document.getElementById('file-upload-section').classList.remove('hidden');
      document.getElementById('content-display-section').classList.remove('hidden');
    } else {
      loginError.textContent = 'Invalid username or password';
    }
  });

  // Handle data input form submission
  dataForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = document.getElementById('data').value;
    contentDisplay.textContent = `You entered: ${data}`;
    dataSuccess.textContent = 'Data submitted successfully!';
    dataForm.reset();
  });

  // Handle file upload
  uploadForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const fileInput = document.getElementById('file-input');
    const file = fileInput.files[0];
    if (file) {
      uploadSuccess.textContent = `File "${file.name}" uploaded successfully!`;
      fileInput.value = ''; // Reset file input
    } else {
      uploadSuccess.textContent = 'Please select a file to upload';
    }
  });
});
