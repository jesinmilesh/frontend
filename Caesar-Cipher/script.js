function getShiftValue() {
  const shiftInput = document.getElementById('shiftValue');
  let shift = parseInt(shiftInput.value, 10);
  
  if (isNaN(shift) || shift < 1) shift = 1;
  if (shift > 25) shift = 25;

  shiftInput.value = shift;
  return shift;
}

function caesarTransform(text, shift, mode) {
  if (!text) return '';

  let effectiveShift = shift % 26;
  if (mode === 'decrypt') {
    effectiveShift = (26 - effectiveShift) % 26;
  }

  let result = '';

  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);

    if (code >= 65 && code <= 90) {
      result += String.fromCharCode(((code - 65 + effectiveShift) % 26) + 65);
    } else if (code >= 97 && code <= 122) {
      result += String.fromCharCode(((code - 97 + effectiveShift) % 26) + 97);
    } else {
      result += text[i];
    }
  }

  return result;
}

function encryptText() {
  const input = document.getElementById('inputText').value;
  const shift = getShiftValue();
  const outputElement = document.getElementById('outputText');

  if (!input) {
    outputElement.value = '';
    return;
  }

  outputElement.value = caesarTransform(input, shift, 'encrypt');
}

function decryptText() {
  const input = document.getElementById('inputText').value;
  const shift = getShiftValue();
  const outputElement = document.getElementById('outputText');

  if (!input) {
    outputElement.value = '';
    return;
  }

  outputElement.value = caesarTransform(input, shift, 'decrypt');
}

function copyOutput() {
  const outputText = document.getElementById('outputText').value;

  if (!outputText) {
    openCopyModal('⚠️', 'No output text to copy!');
    return;
  }

  navigator.clipboard.writeText(outputText).then(function() {
    openCopyModal('📋', 'Copied output to clipboard!');
  }).catch(function() {
    openCopyModal('📋', 'Copied output to clipboard!');
  });
}

function openCopyModal(icon, message) {
  const modal = document.getElementById('copyModal');
  const iconElement = document.getElementById('modalIcon');
  const titleElement = document.getElementById('modalTitle');

  if (iconElement) iconElement.textContent = icon || '📋';
  if (titleElement) titleElement.textContent = message || 'Copied output to clipboard!';

  if (modal) {
    modal.classList.add('active');
  }
}

function closeCopyModal() {
  const modal = document.getElementById('copyModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

function clearFields() {
  document.getElementById('inputText').value = '';
  document.getElementById('shiftValue').value = 3;
  document.getElementById('outputText').value = '';
}

document.addEventListener('click', function(e) {
  const modal = document.getElementById('copyModal');
  if (modal && e.target === modal) {
    closeCopyModal();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeCopyModal();
  }
});
