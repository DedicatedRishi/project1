import React,{useState} from "react"
import axios from 'axios';

const UploadPdf=()=>{
    const[file,setFile]=useState()
    const [userId, setUserId] = useState('0001')
    console.log(userId)
    
    const upload =()=>{
     const formData =new FormData()
     formData.append('file',file,'file.pdf')
     axios.post(`http://localhost:3001/upload?userId=${userId}`, formData,{
        headers: {
            'Content-Type': 'multipart/form-data',
          },  
     })
     .then(res=>{console.log('File uploded Successfuly',res)})
     .catch(err=>console.log(err))
    }
   
    const handleDownload = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/download-pdf/${userId}`, {
          responseType: 'blob', // Specify that the response should be treated as binary data
        });
  
        // Create a temporary URL for the PDF data and trigger the download
        const url = window.URL.createObjectURL(new Blob([response.data],{type:response.data.type}));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', 'user.pdf');  
        document.body.appendChild(link);
        link.click();
  
        // Clean up the temporary URL
        window.URL.revokeObjectURL(url);
      } catch (error) {
        console.error('Error downloading PDF file:', error);
      }
    };
    return(
        <div>
        <input type='file'  onChange={(e)=>setFile(e.target.files[0])}/>
        <button type='button' onClick={upload}>Upload</button>
        <button onClick={handleDownload}>Download PDF</button>
      </div>
    )
}
export default UploadPdf;