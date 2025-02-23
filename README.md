# **LetMeCut** 🌐
**A Secure, Interactive, and Responsive URL Shortener**  

## **Overview**  
LetMeCut is a **Next.js-based** URL shortener that allows users to shorten URLs and manage their links effortlessly. It integrates **MongoDB** for data storage, enabling persistent storage of all shortened URLs. The app supports both dark and light modes, and it provides real-time feedback with Toastify notifications. The design is fully responsive, ensuring a seamless experience across all devices.

---
## **Features** 🚀
✅ **Shorten URLs** – Easily shorten long URLs for quick sharing.
✅ **Dark & Light Mode** – Switch between dark and light themes for better accessibility.
✅ **Interactive UI** – A modern, responsive design with real-time updates and feedback.
✅ **Link Management** – View and manage all your shortened links.
✅ **MongoDB Integration** – Persistent storage of all shortened URLs in MongoDB.
✅ **Toast Notifications** – Get real-time feedback for actions (success, errors, and warnings) using Toastify.
✅ **Responsive Design** – Optimized for mobile and desktop devices.

---

## **Tech Stack** 🛠  
- **Frontend:** Next.js, React.js, Tailwind CSS
- **State Management:** React Hooks (`useState`, `useEffect`)
- **Backend:** Next.js API routes for backend functionality 
- **Database:** MongoDB (for persistent storage of shortened URLs)
- **UI Components:** Font Awesome icons, Toastify notifications, TailwindCSS for responsive design
- **Other:** next.config.js for configuration, dotenv for environment variables

---

## **Installation & Setup** 🏗  
### **1. Clone the Repository**  
```bash
git clone https://github.com/mohammadhashim135/let-me-cut.git
cd let-me-cut
```


### **2. Install Dependencies**
```bash
npm install
```

### **3. Create .env.local**
```bash
MONGODB_URI=mongodb://localhost:27017/
```

### **4. Start the Application**
```bash
npm run dev
```
---

## **Usage Guide** 📝

🔹 **Enter URL** – Paste the URL you want to shorten in the input box.

🔹 **Click ‘Shorten URL’** – The URL will be shortened, and the result will appear below.

🔹 **Switch Between Dark/Light Mode** – Toggle the theme from dark to light mode and vice versa.

🔹 **View Shortened Links** – All your shortened URLs will be displayed in a list.

---

## **Project Structure** 📂
```bash
pages/
│── api/
│   │── shorten.js
│── index.tsx
components/
│── Navbar.js
lib/
│── mongodb.js
public/
│── favicon.ico
styles/
│── globals.css
│── tailwind.css
.env.local
.gitignore
next.config.ts
package.json
README.md

```
---

## **Screenshots 📸**


![Dark](https://github.com/user-attachments/assets/a4ff7c95-6d63-4e38-9a61-9da3d6aa6c31)
![Light](https://github.com/user-attachments/assets/9174cc9e-15d9-4ce5-b45a-6ea25ab54105)
![Working](https://github.com/user-attachments/assets/1982cd18-434b-4a85-bd75-4408b370ac8e)

---
## **Contributing** 🤝
Contributions are welcome! If you’d like to improve LetMeCut, feel free to fork the repo and submit a pull request.

### **Steps to Contribute:**
**Fork the repository**
### **1. Create a new branch:**
```bash
git checkout -b feature-branch
```

### **2. Make your changes and commit:**

```bash
git commit -m "Added new feature"
```
### **3. Push to the branch:**
```bash
git push origin feature-branch
```
### **Open a Pull Request**
---
## **License** 📜
This project is licensed under the MIT License.

💡 Developed with ❤️ by [Mohammad Hashim](https://github.com/mohammadhashim135/let-me-cut.git)

