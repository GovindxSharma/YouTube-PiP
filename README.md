
# <img width="48" height="48" alt="image" src="https://github.com/user-attachments/assets/30fd2be8-f57b-40a3-9052-ffcc59ef1e3b" />
YouTube Picture-in-Picture (PiP)

**YouTube Picture-in-Picture** is a simple Chrome extension that allows you to toggle Picture-in-Picture (PiP) mode for any video on the current page with a single click — not just YouTube!

> ✅ Works on any website that has an HTML `<video>` element.

---

## 🚀 Features

* 🎬 Enables Picture-in-Picture mode for videos.
* 🖱️ One-click toggle from the extension toolbar.
* 🌐 Supports **YouTube**, **Vimeo**, **Twitter**, **Instagram**, and more.
* 🔄 Automatically exits PiP if already active.

---

## 📥 Installation

To try this extension locally, follow these steps:

1. **Download or Clone the Repo**

   ```bash
   git clone https://github.com/yourusername/youtube-picture-in-picture.git
   cd youtube-picture-in-picture
   ```

2. **Open Chrome and go to:**

   ```
   chrome://extensions/
   ```

3. **Enable Developer Mode** (top right corner)

4. **Click “Load unpacked”** and select the folder where your extension files are located (containing `manifest.json`, `background.js`, and the `icons` folder).

5. The extension icon should now appear in your Chrome toolbar!

---

## 🧪 How to Use

1. Navigate to any webpage that has a video (e.g., YouTube, Vimeo, etc.).

2. Play the video (optional but recommended).

3. Click on the **extension icon** in the Chrome toolbar.

4. If a video is found, it will enter **Picture-in-Picture mode**.

5. Click again to exit PiP.

> ℹ️ If no video is detected, you'll see an alert: “No video found on this page!”

---

## 🛠️ Project Structure

```
youtube-picture-in-picture/
├── background.js        # Service worker to trigger PiP toggle
├── manifest.json        # Chrome extension manifest
└── icons/
    ├── pip-16.png
    ├── pip-48.png
    └── pip-128.png
```

---

## ⚙️ Permissions

The extension uses the following permissions:

* `activeTab`: To access the current tab’s contents.
* `scripting`: To inject the script that enables PiP mode.

---

## 📌 Notes

* This extension works only on pages with native HTML5 `<video>` elements.
* Some websites might load custom video players that don’t expose a standard `<video>` tag.

---


