const button = document.createElement('button');
button.textContent = 'help';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '9999';

const iframe1 = document.createElement('iframe');
iframe1.src = 'https://chat.openai.com/';
iframe1.width = '600';
iframe1.height = '400';
iframe1.style.position = 'fixed';
iframe1.style.bottom = '20px';
iframe1.style.right = '20px';
iframe1.style.border = 'none';
iframe1.style.display = 'none';

const iframe2 = document.createElement('iframe');
iframe2.src = 'https://www.google.com/';
iframe2.width = '600';
iframe2.height = '400';
iframe2.style.position = 'fixed';
iframe2.style.bottom = '20px';
iframe2.style.right = '20px';
iframe2.style.border = 'none';
iframe2.style.display = 'none';

document.body.appendChild(button);
document.body.appendChild(iframe1);
document.body.appendChild(iframe2);

button.addEventListener('click', () => {
  if (iframe1.style.display === 'none') {
    iframe1.style.display = 'block';
    iframe2.style.display = 'none';
  } else {
    iframe1.style.display = 'none';
    iframe2.style.display = 'block';
  }
});
