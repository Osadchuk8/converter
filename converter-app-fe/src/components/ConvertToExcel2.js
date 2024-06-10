import React from 'react';
import { useConvertToExcelMutation } from '../redux/fileSlice';

const ConvertToExcel2 = () => {
  const { data, isLoading } = useConvertToExcelMutation();

  return (
    <div>
      <button disabled={isLoading}>Convert to Excel</button>
      {isLoading ? (
        <p>Converting...</p>
      ) : (
        data && <a href={data.url}>Download Excel</a>
      )}
    </div>
  );
};

export default ConvertToExcel2;