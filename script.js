const apiKey = 'fcecaccca7264eebc1a188eca336286a';
let unit = 'metric';
let history = JSON.parse(localStorage.getItem('weather_history')) || [];

// Save to history
function saveHistory(loc) {
  if (!history.includes(loc)) {
    history.unshift(loc);
    if (history.length > 5) history.pop();
    localStorage.setItem('weather_history', JSON.stringify(history));
  }
}

// Render history list
function showHistoryList() {
  const list = document.getElementById('history-list');
  list.innerHTML = history.map(loc => `<div>${loc}</div>`).join('');
  list.querySelectorAll('div').forEach(el => {
    el.addEventListener('click', () => {
      document.getElementById('location-input').value = el.textContent;
      fetchAndDisplay(el.textContent);
      list.classList.add('hidden');
    });
  });
  list.classList.toggle('hidden');
}

async function fetchAndDisplay(q) {
  try {
    showLoading(true);
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${q}&appid=${apiKey}&units=${unit}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Status ${res.status}`);
    const data = await res.json();
    displayWeather(data);
    saveHistory(q);
  } catch (err) {
    alert('Error: ' + err.message);
  } finally {
    showLoading(false);
  }
}

function showLoading(loading) {
  document.querySelector('.intro').classList.toggle('hidden', !loading);
}

function displayWeather(data) {
  // Intro hide
  document.querySelector('.intro').classList.add('hidden');
  // set background
  const bg = document.querySelector('.overlay');
  bg.style.backgroundImage = `url(https://source.unsplash.com/360x640/?${data.list[0].weather[0].main})`;
  // populate
  document.querySelector('.location-date').classList.remove('hidden');
  document.getElementById('city-name').textContent = data.city.name;
  document.getElementById('date').textContent = new Date(data.list[0].dt*1000)
    .toLocaleDateString(undefined,{weekday:'short', day:'2-digit', month:'short'});
  document.querySelector('.current-weather').classList.remove('hidden');
  document.getElementById('weather-icon').src =
    `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;
  document.getElementById('temp').textContent =
    `${Math.round(data.list[0].main.temp)}°${unit==='metric'?'C':'F'}`;
  document.getElementById('desc').textContent = data.list[0].weather[0].main;
  document.querySelector('.details').classList.remove('hidden');
  document.getElementById('humidity').textContent = data.list[0].main.humidity;
  document.getElementById('wind').textContent = data.list[0].wind.speed;
  // forecast
  const forecastEl = document.getElementById('forecast');
  forecastEl.classList.remove('hidden');
  forecastEl.innerHTML = '';
  for (let i=1; i<=3; i++) {
    const day = data.list[i*8];
    const name = new Date(day.dt*1000)
      .toLocaleDateString(undefined,{month:'short', day:'numeric'});
    forecastEl.innerHTML +=
      `<div class="day"><div>${name}</div>
         <img src="https://openweathermap.org/img/wn/${day.weather[0].icon}.png" alt="">
         <div>${Math.round(day.main.temp)}°</div></div>`;
  }
}

// Events
document.getElementById('search-btn').addEventListener('click', () => {
  const q = document.getElementById('location-input').value.trim();
  if (q) fetchAndDisplay(q);
});
document.getElementById('toggle-unit').addEventListener('click', () => {
  unit = unit==='metric'?'imperial':'metric';
  document.getElementById('toggle-unit').textContent =
    unit==='metric'?'°C/°F':'°F/°C';
});
document.getElementById('locate-btn').addEventListener('click', () => {
  navigator.geolocation.getCurrentPosition(async pos => {
    const {latitude, longitude} = pos.coords;
    try {
      const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}` +
                  `&appid=${apiKey}&units=${unit}`;
      const res = await fetch(url);
      const data = await res.json();
      displayWeather(data);
      saveHistory(`${latitude},${longitude}`);
    } catch(e) { alert('Geo fetch error'); }
  });
});
document.getElementById('reset-btn').addEventListener('click', () => location.reload());
document.getElementById('show-history').addEventListener('click', showHistoryList);