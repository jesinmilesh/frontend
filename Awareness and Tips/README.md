# Cyber Security Awareness & Security Check

An interactive, frontend-only web application designed for cybersecurity awareness training and personal security practice evaluations.

---

## 🎯 Overview

The **Cyber Security Awareness & Security Check** application provides step-by-step educational guidance across 6 critical cybersecurity domains. Users first read essential safety tips and awareness explanations, then take a 5-question security assessment to compute their personal **Security Score** ($0 - 100$) and receive tailored feedback.

---

## 🔄 User Flow

1. **Select Topic**: Choose from 6 cybersecurity categories.
2. **Awareness & Safety Tips**: Read short educational explanations and 5 key safety guidelines.
3. **Take Security Check**: Answer 5 topic-specific Yes/No questions.
4. **Submit & Review**: Calculate your score ($0 - 100$), view your security rating badge, and review an answer breakdown.

---

## 📚 Topics & Questions Overview

### 1. 🔐 Password Security
- **Awareness**: Strong passwords protect accounts from unauthorized access. Avoid using personal information like names or phone numbers.
- **Safety Tips**:
  - Use long and unique passwords.
  - Do not reuse passwords across multiple websites.
  - Use a password manager.
  - Never share passwords with others.
  - Enable Multi-Factor Authentication (MFA).

### 2. 🎣 Phishing Protection
- **Awareness**: Phishing attacks attempt to trick users into revealing credentials, OTPs, or banking details.
- **Safety Tips**:
  - Always check the sender's full email address.
  - Avoid clicking suspicious links in unexpected messages.
  - Avoid opening unexpected email attachments.
  - Never share OTPs or sensitive passwords.
  - Verify urgent requests through trusted secondary channels.

### 3. 🌐 Safe Browsing
- **Awareness**: Malicious websites can host dangerous downloads, fake login portals, and phishing scams.
- **Safety Tips**:
  - Verify the website URL before entering credentials.
  - Ensure HTTPS encryption is active on sensitive pages.
  - Avoid downloading software from unverified third-party sites.
  - Pay attention to browser security warnings.
  - Keep web browsers updated regularly.

### 4. 📱 Mobile Security
- **Awareness**: Mobile devices store sensitive photos, messages, app accounts, and payment data requiring protection.
- **Safety Tips**:
  - Set a strong PIN, passcode, or biometric screen lock.
  - Install applications only from official app stores.
  - Review app permissions (camera, location, contacts).
  - Keep mobile operating systems updated.
  - Avoid unencrypted public Wi-Fi networks.

### 5. 💻 Device Security
- **Awareness**: Computers are susceptible to malware, ransomware, and spyware threats without proper defense measures.
- **Safety Tips**:
  - Keep operating systems updated with security patches.
  - Use active security/antivirus software.
  - Keep the system firewall enabled.
  - Avoid connecting unknown USB flash drives.
  - Maintain regular backups of important files.

### 6. 📶 Wi-Fi Security
- **Awareness**: Unsecured wireless networks can expose user data to packet sniffing and unauthorized access.
- **Safety Tips**:
  - Set a strong, complex Wi-Fi passphrase.
  - Use WPA2 or WPA3 security protocols.
  - Change default router administrator passwords.
  - Keep router firmware updated.
  - Avoid sensitive activities on public Wi-Fi.

---

## 📊 Scoring & Rating System

- **Scoring**: $5 \text{ questions} \times 20 \text{ points} = 100 \text{ points maximum}$.
- **Rating Badges**:
  - 🟢 **80 – 100**: **EXCELLENT** (*Your security practices are strong. Keep following good cybersecurity habits.*)
  - 🟡 **60 – 79**: **GOOD** (*You have good security habits, but there are a few areas to improve.*)
  - 🟠 **40 – 59**: **NEEDS IMPROVEMENT** (*Some of your security practices could put your accounts or devices at risk.*)
  - 🔴 **0 – 39**: **HIGH RISK** (*You should improve your cybersecurity habits immediately.*)

---

## 🛠️ Technology Stack

- **HTML5**: Semantic tags (`<form>`, `<button>`, `<label>`), simple structure.
- **CSS3**: Dark Slate palette (`#0F172A` background, `#1E293B` containers, `#22C55E` green accent), responsive grid layout.
- **JavaScript (Vanilla)**: DOM manipulation, topic switching, state handling, score calculation logic.

---

## 🚀 How to Run

1. Open `index.html` in any web browser.
2. Select any security topic button.
3. Read the safety tips, then click **Take Security Check**.
4. Answer the 5 Yes/No questions and click **Submit**.
