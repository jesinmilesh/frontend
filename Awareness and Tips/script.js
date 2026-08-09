// Database of 6 Topics (Title, Awareness, Tips, and 5 Questions)
const topics = {
    passwords: {
        title: "🔐 PASSWORD SECURITY",
        awareness: "Strong passwords help protect your accounts from unauthorized access. Use long, unique passwords and avoid using personal information such as your name, birthday, or phone number.",
        tips: [
            "🔐 Use long and unique passwords.",
            "🔐 Don't reuse the same password on multiple accounts.",
            "🔐 Use a password manager when possible.",
            "🔐 Never share your password with others.",
            "🔐 Enable MFA on important accounts."
        ],
        questions: [
            { q: "1. Do you use a unique password for every important account?", good: "Yes" },
            { q: "2. Do you use passwords shorter than 6 characters?", good: "No" },
            { q: "3. Do you reuse the same password on multiple websites?", good: "No" },
            { q: "4. Do you use a password manager?", good: "Yes" },
            { q: "5. Do you share your password with friends?", good: "No" }
        ]
    },
    phishing: {
        title: "🎣 PHISHING PROTECTION",
        awareness: "Phishing is a common cyberattack where attackers pretend to be trusted people or organizations to steal information such as passwords, OTPs, or banking details.",
        tips: [
            "🎣 Check the sender's email address.",
            "🎣 Don't click suspicious links.",
            "🎣 Don't open unexpected attachments.",
            "🎣 Never share OTPs or passwords.",
            "🎣 Verify urgent requests before responding."
        ],
        questions: [
            { q: "1. Do you check the sender before opening an email?", good: "Yes" },
            { q: "2. Do you click links from unknown senders?", good: "No" },
            { q: "3. Do you verify suspicious messages before responding?", good: "Yes" },
            { q: "4. Do you share OTPs when someone asks for them?", good: "No" },
            { q: "5. Do you open unexpected email attachments?", good: "No" }
        ]
    },
    browsing: {
        title: "🌐 SAFE BROWSING",
        awareness: "Unsafe websites can contain malicious downloads, fake login pages, and scams. Always check a website before entering sensitive information.",
        tips: [
            "🌐 Check the website address carefully.",
            "🌐 Look for HTTPS before entering sensitive information.",
            "🌐 Avoid downloading files from unknown websites.",
            "🌐 Don't ignore browser security warnings.",
            "🌐 Keep your browser updated."
        ],
        questions: [
            { q: "1. Do you check the website address before entering your password?", good: "Yes" },
            { q: "2. Do you download software from unknown websites?", good: "No" },
            { q: "3. Do you check for HTTPS before entering sensitive information?", good: "Yes" },
            { q: "4. Do you ignore browser security warnings?", good: "No" },
            { q: "5. Do you keep your browser updated?", good: "Yes" }
        ]
    },
    mobile: {
        title: "📱 MOBILE SECURITY",
        awareness: "Smartphones contain personal information, photos, messages, accounts, and sometimes financial information. Protecting your phone is therefore important.",
        tips: [
            "📱 Use a PIN, password, or biometric lock.",
            "📱 Install apps from trusted sources.",
            "📱 Review app permissions.",
            "📱 Keep your phone updated.",
            "📱 Avoid connecting to unknown Wi-Fi networks."
        ],
        questions: [
            { q: "1. Do you use a screen lock on your phone?", good: "Yes" },
            { q: "2. Do you install apps from unknown websites?", good: "No" },
            { q: "3. Do you review app permissions?", good: "Yes" },
            { q: "4. Do you share your phone PIN with others?", good: "No" },
            { q: "5. Do you keep your phone software updated?", good: "Yes" }
        ]
    },
    devices: {
        title: "💻 DEVICE SECURITY",
        awareness: "Computers can be affected by malware, ransomware, spyware, and other threats. Keeping your operating system and security software updated reduces common risks.",
        tips: [
            "💻 Keep your operating system updated.",
            "💻 Use trusted security software.",
            "💻 Keep the firewall enabled.",
            "💻 Avoid unknown USB devices.",
            "💻 Back up important files regularly."
        ],
        questions: [
            { q: "1. Do you keep your operating system updated?", good: "Yes" },
            { q: "2. Do you disable your firewall?", good: "No" },
            { q: "3. Do you use security software on your computer?", good: "Yes" },
            { q: "4. Do you use unknown USB drives on your computer?", good: "No" },
            { q: "5. Do you regularly back up important files?", good: "Yes" }
        ]
    },
    wifi: {
        title: "📶 WI-FI SECURITY",
        awareness: "An unsecured Wi-Fi network can expose your data and devices to various risks. Secure your home router and be careful when using public Wi-Fi.",
        tips: [
            "📶 Use a strong Wi-Fi password.",
            "📶 Use WPA2 or WPA3 security.",
            "📶 Change the router's default password.",
            "📶 Keep router firmware updated.",
            "📶 Avoid sensitive activities on unknown public Wi-Fi."
        ],
        questions: [
            { q: "1. Do you use a strong Wi-Fi password?", good: "Yes" },
            { q: "2. Do you keep the router's default password?", good: "No" },
            { q: "3. Do you use WPA2 or WPA3 security?", good: "Yes" },
            { q: "4. Do you connect to unknown public Wi-Fi for sensitive activities?", good: "No" },
            { q: "5. Do you change the router password from its default value?", good: "Yes" }
        ]
    }
};

let currentTopic = 'passwords';

// -----------------------------------------------------------------
// Step 1: Display Awareness Explanation & Safety Tips
// -----------------------------------------------------------------
function showTips(topicKey) {
    currentTopic = topicKey;
    const data = topics[topicKey];

    // Update Title & Awareness Text
    document.getElementById('topicTitle').textContent = data.title;
    document.getElementById('awarenessText').textContent = data.awareness;

    // Display Safety Tips List
    const tipsList = document.getElementById('tipsList');
    tipsList.innerHTML = '';
    data.tips.forEach(tip => {
        tipsList.innerHTML += `<li>${tip}</li>`;
    });

    // Show Tips Box, Hide Questions and Result Boxes
    document.getElementById('tipsBox').classList.remove('hidden');
    document.getElementById('quizBox').classList.add('hidden');
    document.getElementById('resultBox').classList.add('hidden');
}

// -----------------------------------------------------------------
// Step 2: Display 5 Yes/No Questions when "Take Security Check" clicked
// -----------------------------------------------------------------
function showQuestions() {
    const data = topics[currentTopic];
    const questionsList = document.getElementById('questionsList');
    questionsList.innerHTML = '';

    data.questions.forEach((item, index) => {
        questionsList.innerHTML += `
            <div class="q-item">
                <p>${item.q}</p>
                <div class="options">
                    <label><input type="radio" name="q${index}" value="Yes" required> Yes</label>
                    <label><input type="radio" name="q${index}" value="No" required> No</label>
                </div>
            </div>
        `;
    });

    // Show Quiz Box, Hide Tips Box
    document.getElementById('tipsBox').classList.add('hidden');
    document.getElementById('quizBox').classList.remove('hidden');
}

// -----------------------------------------------------------------
// Step 3: Calculate Score (+20 per correct answer) & Show Results
// -----------------------------------------------------------------
function checkScore(event) {
    event.preventDefault(); // Stop form submission refresh

    const data = topics[currentTopic];
    let correctCount = 0;
    let breakdownHTML = '';

    // Loop through all 5 questions
    data.questions.forEach((item, index) => {
        const selected = document.querySelector(`input[name="q${index}"]:checked`).value;
        const isCorrect = (selected === item.good);

        if (isCorrect) {
            correctCount++;
        }

        breakdownHTML += `
            <div class="review-item ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>${item.q}</strong><br>
                Your Choice: ${selected} | Recommended: ${item.good} ${isCorrect ? '✅' : '❌'}
            </div>
        `;
    });

    // Score calculation (20 points for each correct answer)
    const score = correctCount * 20;

    // Display Score & Summary
    document.getElementById('scoreText').textContent = `${score} / 100`;
    document.getElementById('countSummary').textContent = `Correct: ${correctCount} / 5 | Incorrect: ${5 - correctCount} / 5`;
    document.getElementById('breakdown').innerHTML = breakdownHTML;

    // Set Security Rating Badge
    const badge = document.getElementById('ratingBadge');
    const desc = document.getElementById('ratingDesc');

    if (score >= 80) {
        badge.textContent = '🟢 EXCELLENT';
        badge.className = 'badge excellent';
        desc.textContent = 'Your security practices are strong. Keep following good cybersecurity habits.';
    } else if (score >= 60) {
        badge.textContent = '🟡 GOOD';
        badge.className = 'badge good';
        desc.textContent = 'You have good security habits, but there are a few areas to improve.';
    } else if (score >= 40) {
        badge.textContent = '🟠 NEEDS IMPROVEMENT';
        badge.className = 'badge moderate';
        desc.textContent = 'Some of your security practices could put your accounts or devices at risk.';
    } else {
        badge.textContent = '🔴 HIGH RISK';
        badge.className = 'badge poor';
        desc.textContent = 'You should improve your cybersecurity habits immediately.';
    }

    // Hide Quiz Box, Show Result Box
    document.getElementById('quizBox').classList.add('hidden');
    document.getElementById('resultBox').classList.remove('hidden');
}

// Load default topic ('passwords') when page loads
window.onload = function() {
    showTips('passwords');
};
