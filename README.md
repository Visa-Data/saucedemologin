# SauceDemo Login Automation (Playwright)

This project demonstrates end‑to‑end browser automation using [Playwright](https://playwright.dev/).  
It automates the login flow on [SauceDemo](https://www.saucedemo.com/) and verifies successful login.

---

## 📂 Project Structure
- `tests/example.spec.ts` → Playwright test script for login
- `playwright.config.ts` → Configuration (headed mode, reports, screenshots, videos)
- `package.json` → Dependencies
- `.gitignore` → Keeps repo clean (ignores node_modules, reports)

---

## 🚀 How to Run

1. **Clone the repo**
   ```bash
   git clone https://github.com/<your-username>/saucedemologin.git
   cd saucedemologin

2. **Install dependencies**
npm install

3. **Run the test (headed mode)**
npx playwright test --headed

4. **View HTML report**
npx playwright show-report


✅ Test Scenario
1.Navigate to SauceDemo login page

2.Enter username: standard_user

3.Enter password: secret_sauce

4.Click login

5.Verify that the Products page is displayed

🖼️ Demo Evidence
Here are sample output from the test run:
Screenshot
(image.png)