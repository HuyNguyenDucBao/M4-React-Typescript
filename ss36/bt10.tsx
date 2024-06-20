import React, { useState, useEffect } from 'react';

// Lưu trữ thông tin bàn phím
const KeyPress = () => {
  const [keyInfo, setKeyInfo] = useState({ key: '', code: '' });

  // cập nhật phím khi người dùng ấn
  useEffect(() => {
    const handleKeyPress = (event: any) => {
      setKeyInfo({ key: event.key, code: event.keyCode });
    };

    window.addEventListener('keydown', handleKeyPress);

    // dọn dẹp khi ng dùng ấn phim khác sẽ xóa từ cũ thay mới
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, []);

  return (
    <div>
      <p>Bạn đã nhấn phím: {keyInfo.key}</p>
      <p>Mã phím: {keyInfo.code}</p>
    </div>
  );
};

export default KeyPress;
