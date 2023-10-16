const express = require("express")
const dotenv = require("dotenv");
const emailRoutes = require("./routes/emailRoutes");
const mongoose = require("mongoose")
const UserModel = require('./models/User')
const cors = require("cors")
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const app = express()
dotenv.config();
app.use(express.json())
app.use(cors())



// MongoDB Connection 
mongoose.connect("mongodb://localhost:27017/user");

//Signup and login
app.use("/email", emailRoutes);


// Function to generate a four-digit unique user ID
const generateUniqueUserId = async () => {
    // Find the highest existing user ID in the database
    const highestUserId = await UserModel.findOne({}, { userId: 1 }, { sort: { userId: -1 } });

    let nextUserId;

    if (highestUserId) {
        // Increment the highest user ID by 1 and pad it with leading zeros
        nextUserId = String(Number(highestUserId.userId) + 1).padStart(4, '0');
    } else {
        // If there are no existing users, start with "0001"
        nextUserId = '0001';
    }
    return nextUserId;
};


// User Login  
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    UserModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("The Password is Incorrect")
                }
            } else {
                res.json("No Record Exist")
            }
        })
})

// Post Method    
app.post('/register', async (req, res) => {
    try {
        const { role, type, teamLeaderName, member1, member2, member3, member4, name, email, mobileNo, password } = req.body;
        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            // User with the same email already exists
            return res.status(400).json({ msg: 'User with this email already exists.' });
        }
        if (!email || !password) {
            return res.status(400).json({ message: 'Name, Email, and Password are required fields.' });
        }
        // Generate a unique four-digit user ID       
        const userId = await generateUniqueUserId();
        const user = await UserModel.create({ userId, role, type, teamLeaderName, member1, member2, member3, member4, name, email, mobileNo, password })
        res.status(201).json(user);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Server error' });
    }
})


//pdf code
 
//Set up Multer for file uploads  
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, './public/images');
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname);
    },
  });
  const upload = multer({ storage });
  
  app.post('/upload',upload.single('file'),async(req,res)=>{
      const userId = await generateUniqueUserId();
      const pdfPath = req.file.path; // Get the file path

      // Check if the file exists
      if (!fs.existsSync(pdfPath)) {
        return res.status(404).json({ message: 'PDF file not found' });
      }
  
      // Read the file to get its content type
      const pdfBuffer = fs.readFileSync(pdfPath);
      const contentType = 'application/pdf';
        UserModel.create({ pdf: { data: pdfBuffer, contentType }, userId })
        .then(result=>res.json(result))
        .catch(err=>console.log(err))  
      })  
    
  // Endpoint for downloading a PDF file  
  app.get('/download-pdf/:userId', async (req, res) => {
    try {
      const userId = req.params.userId
      
      const user = await UserModel.findOne({ userId });
     console.log(user)
      if (!user || !user.pdf) {
        return res.status(404).json({ message: 'PDF file not found' });
      }
      if (!user.pdf.contentType) {
        return res.status(500).json({ message: 'PDF content type is missing' });
      }
      // Set the response content type to PDF
     res.contentType(user.pdf.contentType);  
      
      // Send the PDF file data         
      res.send(user.pdf.data);
        
    } catch (error) {
      console.error(error);   
      return res.status(500).json({ message: 'Internal server error' });      
    }
  });
   
 

// Server Listen    
const PORT = process.env.PORT;
app.listen(PORT, () => {  
    console.log("Server is Running on port 3001")

})       