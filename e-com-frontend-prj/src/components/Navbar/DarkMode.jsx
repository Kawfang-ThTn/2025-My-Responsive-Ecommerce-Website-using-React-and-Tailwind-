import React from 'react';
import LightButton from '../../assets/website/light-mode-button.png';
import DarkButton from '../../assets/website/dark-mode-button.png';

function DarkMode() {
  // set ค่าให้ theme โดยเช็คว่าถ้ามีค่าใน localStorage ให้ใช้ค่านั้น ถ้าไม่มีให้ใช้ค่า 'light'
  const [theme, setTheme] = React.useState(() => localStorage.getItem("theme") || 'light');
  // เข้าถึง html element เพื่อปรับแต่งสไตล์ของ <html> โดยตรง
  const element = document.documentElement;
  // set ค่า theme ให้ localStorage และ html element
  React.useEffect(() => {
    localStorage.setItem("theme", theme);
    if (theme === 'dark') {
      element.classList.add('dark');
      element.classList.remove('light');
    } else {
      element.classList.add('light');
      element.classList.remove('dark');
    }
  }, [theme]);

  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        src={theme === 'dark' ? DarkButton : LightButton}
        alt="Theme Toggle Button"
        className="w-12 cursor-pointer transition-all duration-500"
      />
    </div>
  );
}

export default DarkMode;
