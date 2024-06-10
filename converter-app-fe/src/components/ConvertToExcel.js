import React, { useState } from 'react';
import { useConvertToExcelMutation } from '../redux/fileSlice';

const ConvertToExcel = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadFile, { isLoading }] = useConvertToExcelMutation();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      uploadFile(formData);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={isLoading}>
        {isLoading ? 'Uploading...' : 'Upload File'}
      </button>
    </div>
  );
};

export default ConvertToExcel;