import React from 'react';
import PDF from "";

const PDFViewer = () => {
 return (
 <div>
    <iframe src={PDF} width="100%" height="500px" />
 </div>
 );
};
export default PDFViewer;