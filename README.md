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

### 3. Hash Generator (`Hash Generator/`)
- **Design**: Terminal-Style Cybersecurity Tool
- **Theme**: Dark Mode (`#101010` background, `#181818` card container, Green accent `#00ff66`, Input `#222222`, Output `#0a0a0a`)
- **Features**:
  - One-way cryptographic hashing using Web Crypto API (`crypto.subtle.digest`).
  - Supports **SHA-256**, **SHA-512**, **SHA-384**, and **SHA-1** algorithms.
  - Action buttons for **Generate**, **Copy Hash**, and **Clear**.
  - Educational concept breakdown comparing **Hashing (One-Way)** vs **Encryption (Two-Way)**.

### 4. Cyber Security Awareness & Security Check (`Awareness and Tips/`)
- **Design**: Step-by-Step Interactive Card Flow
- **Theme**: Slate Dark Mode (`#0F172A` background, `#1E293B` card containers, `#22C55E` green accent)
- **Features**:
  - Interactive topic selector for **Passwords**, **Phishing**, **Browsing**, **Mobile**, **Devices**, and **Wi-Fi** security.
  - Step 1: Displays educational awareness background and 5 topic safety tips.
  - Step 2: Interactive 5-question Yes/No **Security Check** evaluation ($0 - 100$ score).
  - Step 3: Color-coded rating badges (🟢 EXCELLENT, 🟡 GOOD, 🟠 NEEDS IMPROVEMENT, 🔴 HIGH RISK) and full answer breakdown.

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
├── Hash Generator/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── Awareness and Tips/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── README.md
├── index.html
└── README.md
```

---

## 🚀 How to Run

Open `index.html` in any modern web browser or serve locally using any web server.