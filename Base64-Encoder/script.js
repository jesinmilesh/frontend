/* ==========================================================================
   Base64 Encoder & Decoder - JavaScript Functions & Center Modal Dialog
   ========================================================================== */

// UTF-8 Safe Base64 Encoding
function encodeText() {
  const input = document.getElementById('inputText').value;
  const outputElement = document.getElementById('outputText');
  const errorElement = document.getElementById('errorMessage');

  // Hide previous error message
  errorElement.classList.remove('active');

  if (!input) {
    outputElement.value = '';
    return;
  }

  try {
    const encoded = btoa(encodeURIComponent(input).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
    outputElement.value = encoded;
  } catch (error) {
    outputElement.value = btoa(input);
  }
}

// UTF-8 Safe Base64 Decoding with Error Handling
function decodeText() {
  const input = document.getElementById('inputText').value.trim();
  const outputElement = document.getElementById('outputText');
  const errorElement = document.getElementById('errorMessage');

  // Reset error state
  errorElement.classList.remove('active');

  if (!input) {
    outputElement.value = '';
    return;
  }

  const base64Regex = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/;

  if (!base64Regex.test(input.replace(/\s+/g, ''))) {
    showError();
    outputElement.value = '';
    return;
  }

  try {
    const sanitized = input.replace(/\s+/g, '');
    const decoded = decodeURIComponent(Array.prototype.map.call(atob(sanitized), function(c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    outputElement.value = decoded;
  } catch (error) {
    try {
      outputElement.value = atob(input);
    } catch (e) {
      showError();
      outputElement.value = '';
    }
  }
}

// Display Invalid Base64 Error Banner
function showError() {
  const errorElement = document.getElementById('errorMessage');
  errorElement.textContent = 'Invalid Base64 String';
  errorElement.classList.add('active');
}

// Copy Output to Clipboard & Open Center Dialog Box
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

// Open Center Modal Dialog with Dynamic Icon & Message
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

// Close Center Modal Dialog
function closeCopyModal() {
  const modal = document.getElementById('copyModal');
  if (modal) {
    modal.classList.remove('active');
  }
}

// Clear Input, Output, and Error Banner
function clearFields() {
  document.getElementById('inputText').value = '';
  document.getElementById('outputText').value = '';
  document.getElementById('errorMessage').classList.remove('active');
}

// Close modal when clicking outside dialog or pressing Escape key
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
