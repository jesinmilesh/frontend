# Information Security Frontend Suite

A collection of interactive web applications for classical cryptography and data encoding concepts built using HTML5, CSS3, and JavaScript.

---

## 🛠️ Included Projects

### 1. Caesar Cipher Encryptor & Decryptor (`Caesar-Cipher/`)
- **Design**: Modern Card Layout
- **Theme**: Light Blue (`#EAF6FF`) background with white card container
- **Features**:
  - Message encryption and decryption using substitution shift keys ($1 - 25$).
  - Preserves spaces, numbers, and special symbols.
  - Side-by-side button controls (`[ Encrypt ] [ Decrypt ]` & `[ Copy ] [ Clear ]`).
  - Center popup dialog for copy confirmation and empty output alerts.

### 2. Base64 Encoder & Decoder (`Base64-Encoder/`)
- **Design**: Split Panel Layout (Side-by-Side)
- **Theme**: Light Gray (`#F5F5F5`) background with White Input and Light Green (`#F0FFF4`) Output panels
- **Features**:
  - Encodes text into Base64 format and decodes Base64 back into plain text (UTF-8 safe).
  - Validation error banner for malformed Base64 inputs (`Invalid Base64 String`).
  - Side-by-side horizontal green action buttons (`[ Encode ] [ Decode ] [ Copy Output ] [ Clear ]`).
  - Center popup dialog for copy status.

### 3. Advanced Base64 Codec (`Base64-Encoder-Decoder/`)
- Advanced suite featuring a 6-bit chunking visualizer, live data expansion ratios, and image file upload to Base64 Data URIs.

---

## 📁 Repository Structure

```
.
├── Base64-Encoder/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Caesar-Cipher/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── Base64-Encoder-Decoder/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── index.html
└── README.md
```

---

## 🚀 How to Run

Open `index.html` in any modern web browser or serve locally using any web server.