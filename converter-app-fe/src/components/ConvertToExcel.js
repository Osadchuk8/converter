import React, { useState } from 'react';
import { useConvertToExcelMutation } from '../redux/fileSlice';

const ConvertToExcel = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [convertedFileUrl, setConvertedFileUrl] = useState(null);
  const [convertCsvFile, { isLoading }] = useConvertToExcelMutation();

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setConvertedFileUrl(null); // Clear previous converted file URL
  };

  const handleUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);
      convertCsvFile(formData)
        .unwrap()
        .then((data) => {
          console.log(data);
          const blob = new Blob([data], { type: 'application/vnd.ms-excel' });

          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = 'converted_file.xlsx';
          a.click();
          
          URL.revokeObjectURL(url);
        })  
        .catch((error) => {
          console.error('Error converting file:', error);
        });
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