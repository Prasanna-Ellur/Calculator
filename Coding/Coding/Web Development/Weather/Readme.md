# 🌤️ Weather App

A simple and responsive Weather Application built using **HTML, CSS, and JavaScript** that fetches real-time weather data using the **OpenWeatherMap API**.

## 🚀 Features

* Search weather by city name
* Displays:

  * Temperature (°C)
  * Weather condition
  * Humidity
  * Wind speed
* Dynamic weather icons based on current weather
* Clean and responsive user interface

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)
* OpenWeatherMap API
* Font Awesome Icons

## 📂 Project Structure

```text
Weather-App/
│
├── assets/
│   ├── clear.png
│   ├── cloud.png
│   ├── mist.png
│   ├── rain.png
│   ├── snow.png
│   └── images.png
│
├── index.html
├── style.css
├── index.js
└── README.md
```

## 🔑 API Setup

1. Create an account at https://openweathermap.org/
2. Generate your API key.
3. Replace:

```javascript
const api_key = "YOUR_API_KEY";
```

with your own API key in `index.js`.

## 📸 Preview

Displays:

* Current temperature
* Weather description
* Humidity percentage
* Wind speed
* Weather image corresponding to the current condition

## ▶️ How to Run

1. Clone the repository:

```bash
git clone <repository-link>
```

2. Open the project folder.

3. Run `index.html` using Live Server in VS Code.

## 📚 Learning Outcomes

This project helped me understand:

* API integration using Fetch API
* Asynchronous JavaScript (`async/await`)
* DOM manipulation
* Event handling
* Dynamic UI updates

## 🌟 Future Improvements

* Add error handling for invalid city names
* Add loading animations
* Add 5-day weather forecast
* Detect user's current location automatically
* Improve mobile responsiveness

---

Made with ❤️ using HTML, CSS, and JavaScript.
