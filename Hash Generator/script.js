// Function to generate Cryptographic Hash (SHA-256, SHA-1, SHA-512, SHA-384)
async function generateHash() {
    // 1. Get input text and selected algorithm
    const inputText = document.getElementById('inputText').value;
    const selectedAlgo = document.getElementById('hashAlgo').value;
    const outputField = document.getElementById('hashOutput');

    // Check if input is empty
    if (inputText === '') {
        alert('Please enter text first!');
        outputField.value = '';
        return;
    }

    // 2. Convert text string into bytes (TextEncoder)
    const encoder = new TextEncoder();
    const data = encoder.encode(inputText);

    // 3. Generate hash bytes using Web Crypto API
    const hashBuffer = await crypto.subtle.digest(selectedAlgo, data);

    // 4. Convert byte buffer to hexadecimal string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // 5. Display hash output in the text area
    outputField.value = hashHex;
}

// Function to copy generated hash to clipboard
function copyHash() {
    const hashOutput = document.getElementById('hashOutput');

    if (hashOutput.value === '') {
        alert('No hash to copy!');
        return;
    }

    // Select and copy text
    hashOutput.select();
    navigator.clipboard.writeText(hashOutput.value);
    alert('Hash copied to clipboard!');
}

// Function to clear input and output fields
function clearFields() {
    document.getElementById('inputText').value = '';
    document.getElementById('hashOutput').value = '';
}
