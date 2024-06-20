import React, { useState } from 'react';

const ImagePreview = () => {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageChange} />
      {imageUrl && <img src={imageUrl} alt="Preview" style={{ maxWidth: '300px', marginTop: '10px' }} />}
    </div>
  );
};

export default ImagePreview;
