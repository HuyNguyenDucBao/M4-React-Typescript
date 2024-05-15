function greetingWithWeather(name, weather) {
    if (weather.includes("sunny")) {
      return `Chào ${name}! Hôm nay trời nắng tuyệt vời!`;
    } else if (weather.includes("rainy")) {
      return `Chào ${name}! Hôm nay trời mưa, hãy mang theo ô!`;
    } else {
      return `Chào ${name}! Hôm nay thời tiết không xác định.`;
    }
  }
  