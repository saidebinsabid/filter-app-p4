# 🎭 AI Face Filter App

![App Preview](https://img.shields.io/badge/Status-Active-brightgreen.svg) ![Technologies](https://img.shields.io/badge/Tech-HTML5_|_CSS3_|_Vanilla_JS-blue.svg) ![AI Powered](https://img.shields.io/badge/Powered_by-p5.js_&_ml5.js-purple.svg)

The **AI Face Filter** is a fun, interactive web application that uses your webcam and artificial intelligence to track your facial movements. It dynamically places a "funny sunglasses" filter accurately over your eyes in real-time. Designed with a professional, raw CSS dark-mode aesthetic, it offers a lucrative desktop experience without the need for complex frameworks.

## ✨ Features

*   **Real-Time Pose Estimation:** Powered by `ml5.js` PoseNet, the application tracks the user's facial movements with zero latency.
*   **Professional Raw CSS Aesthetics:** A heavily stylized, dark-mood gradient theme featuring glassmorphism cards, glowing shadow effects, and ultra-smooth CSS transitions.
*   **Desktop First:** Specifically built and locked for desktop environments, guaranteeing the best possible resolution and aspect ratio (min-width: 1024px).
*   **Beginner-Friendly Codebase:** The entire JavaScript logic (`script.js`) is written with highly detailed, simple, and educational comments so that beginners can easily read, comprehend, and edit the software.
*   **Plug-and-Play Filters:** The logic provides easy-to-swap dummy image links inside the JS comments for effortlessly creating new funny filters.
*   **One-Click Snapshot:** Includes a high-impact button that instantly saves the user's selfie direct to your local machine.

---

## 🛠️ Project Setup & Installation

This project is built purely with Frontend Web Technologies and relies on powerful libraries through direct Content Delivery Network (CDN) links. No heavy installations or Node.js environments are needed!

### Instructions:
1. **Download/Clone the Repository:** Save the folder to your local machine.
2. **Open `index.html`:** Simply double-click on `index.html` to open it in any modern browser (Chrome, Firefox, Edge).
   > **⚠️ IMPORTANT:** If you are using VS Code Live Server, make sure you close the server and restart it specifically on `index.html`. If your browser is still showing the old design, please **Hard Refresh** your page (`Ctrl + Shift + R`).
3. **Allow Webcam Permissions:** When the browser prompts you, click "Allow" so the AI can capture your video stream.

---

## 💻 Tech Required (Direct CDN Links)

The AI logic is driven entirely by three main scripts. They are already embedded in `index.html` using the following exact CDN links:

**1. p5.js Library** (Canvas & Media handling)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/p5.min.js"></script>
```

**2. p5.js DOM Library** (DOM extensions for p5.js)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.2/addons/p5.dom.min.js"></script>
```

**3. ml5.js Library** (Machine Learning PoseNet Models)
```html
<script src="https://unpkg.com/ml5@0.4.3/dist/ml5.min.js"></script>
```

---

## ⚙️ How It Works (Step-by-Step)

1. **Initialization (`setup` function):** When the app starts, JavaScript sets up a digital canvas (600x400) and turns on the user's webcam. It feeds the live video stream directly to our canvas.
2. **AI Model Injection (`ml5.poseNet`):** The app utilizes the **PoseNet model** provided by the ml5.js library. This pre-trained AI specifically looks at the video stream and identifies human body joints and facial landmarks.
3. **Real-Time Tracking (`gotPoses` function):** The AI constantly returns an array of detected people. If it finds a person, it extracts the precise `X` and `Y` coordinates of their **nose**. We then use simple math subtraction (`noseX - 120`, `noseY - 100`) to calculate where the sunglasses should sit so they cover the eyes!
4. **The Drawing Loop (`draw` function):** The `draw()` function loops 60 times a second. Every frame it draws the live video, and then paints the loaded funny sunglasses directly onto those calculated `eyeX` and `eyeY` coordinates.
5. **Snapshot Feature (`takeSnapshot` function):** Clicking the snapshot button triggers a simple `save()` function from p5.js, downloading the exact current state of the canvas directly to your computer.

---

## 🎨 Changing The Filter

To swap out filters in the future, open `script.js` and look inside the `preload()` function. Simply uncomment the desired link and replace the active one.

**Example of future copy-pasting:**
```javascript
// Active Filter
// We use your original filter image
filterImage = loadImage('https://i.postimg.cc/Jn8cq1CN/Image20250128191922.png'); 

// Disabled Filters
// filterImage = loadImage('https://raw.githubusercontent.com/CreativeCodeinK12/p5_ml5/master/12_poseNet_glasses/data/glasses.png'); 
// filterImage = loadImage('https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Thug_life_glasses_transparent.png/320px-Thug_life_glasses_transparent.png');
```

**Enjoy your highly professional and heavily optimized face-tracking application!** 🎉
