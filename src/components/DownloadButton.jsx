// components/DownloadButton.jsx
const DownloadButton = () => {
    const handleDownload = () => {
      // Creating a link element
      const link = document.createElement('a');
      link.href = '/arbaz-murme.pdf';
      link.download = 'arbaz-murme.pdf';
      
      // Appending link to body (it has to be in the DOM)
      document.body.appendChild(link);
      
      // Triggering click
      link.click();
      
      // Removing link from body
      document.body.removeChild(link);
    };
  
    return (
      <button
        onClick={handleDownload}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Download PDF
      </button>
    );
  };
  
  export default DownloadButton;
  