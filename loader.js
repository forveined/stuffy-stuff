const button = document.createElement('button');
button.textContent = 'help';
button.style.position = 'fixed';
button.style.bottom = '20px';
button.style.right = '20px';
button.style.zIndex = '9999';

const iframe = document.createElement('iframe');
iframe.width = '600';
iframe.height = '400';
iframe.style.position = 'fixed';
iframe.style.bottom = '20px';
iframe.style.right = '20px';
iframe.style.border = 'none';
iframe.style.display = 'none';

document.body.appendChild(button);
document.body.appendChild(iframe);

button.addEventListener('click', () => {
  if (iframe.style.display === 'none') {
    iframe.style.display = 'block';
    const url = prompt('Enter the URL you want to load:');
    iframe.src = url;
  } else {
    iframe.style.display = 'none';
  }
});
