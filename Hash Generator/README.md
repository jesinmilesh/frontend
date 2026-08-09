# Hash Generator - Cybersecurity Web Utility

A clean, terminal-styled web application built with HTML, CSS, JavaScript, and the browser's native **Web Crypto API**. This project allows users to generate secure one-way cryptographic hashes for text input using various cryptographic algorithms.

---

## 🚀 Features

- **Multiple Cryptographic Algorithms**: Supports **SHA-256**, **SHA-512**, **SHA-384**, and **SHA-1**.
- **Terminal Cybersecurity Aesthetic**: Dark mode theme with green `#00ff66` accents and dark contrast containers.
- **Copy Hash to Clipboard**: Quick copy functionality with single-click feedback.
- **Clear Utility**: Instant field reset button for testing multiple inputs.
- **Educational Concept Section**: Includes a visual breakdown of **Hashing (One-Way)** vs **Encryption (Two-Way)**.

---

## 🛠️ Technology Stack

- **HTML5**: Form controls, textareas, algorithm dropdown selection, and layout structure.
- **CSS3**: Terminal-style theme (`#101010` background, `#181818` card container, `#222222` input, `#0a0a0a` output, monospace typography).
- **JavaScript (ES6+)**: Asynchronous hash calculation using `crypto.subtle.digest()`.
- **Web Crypto API**: Native browser API for fast and secure cryptographic computations.

---

## 📐 Project Structure

```
Hash Generator/
├── index.html     # Page structure & controls
├── style.css      # Terminal dark mode styling
├── script.js      # Hash generation & clipboard logic
└── README.md      # Project documentation
```

---

## 💡 How it Works (JavaScript Explanation)

The application uses the browser's built-in **Web Crypto API** to compute hashes without sending any data to external servers.

### Step-by-Step Code Logic:

1. **Text Encoding (`TextEncoder`)**:
   JavaScript converts plain text into a byte array (`Uint8Array`) because cryptographic algorithms operate on raw binary data.
   ```javascript
   const encoder = new TextEncoder();
   const data = encoder.encode(inputText);
   ```

2. **Digest Calculation (`crypto.subtle.digest`)**:
   Computes the cryptographic hash asynchronously based on the selected algorithm (`SHA-256`, `SHA-512`, `SHA-384`, or `SHA-1`).
   ```javascript
   const hashBuffer = await crypto.subtle.digest(selectedAlgo, data);
   ```

3. **Hexadecimal Conversion**:
   Converts raw hash bytes into a readable hexadecimal string representation.
   ```javascript
   const hashArray = Array.from(new Uint8Array(hashBuffer));
   const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
   ```

---

## 🛡️ Important Cybersecurity Concept: Hashing vs Encryption

| Feature | Hashing (e.g. SHA-256) | Encryption (e.g. AES, RSA) |
| :--- | :--- | :--- |
| **Direction** | **One-Way** (Irreversible) | **Two-Way** (Reversible) |
| **Key Requirement** | No Key required | Requires Encryption & Decryption Key |
| **Purpose** | Data Integrity, Password Storage, Digital Signatures | Confidential Data Transmission & Storage |
| **Output** | Fixed length (e.g., SHA-256 always produces 64 hex characters) | Variable length depending on plain text size |

---

## 💻 How to Run

1. Clone or download the repository.
2. Navigate to the `Hash Generator/` folder.
3. Open `index.html` in any modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari).
