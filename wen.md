SignupPage.js
```js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function SignupPage(props) {
 
  const [name, setName] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);
  const navigate = useNavigate();
  const handleName = (e) => setName(e.target.value);
  const [image, setImage] = useState("");
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    const data = new FormData()
    data.append("file", image)
    data.append("upload_preset", "third-project")
    data.append("cloud_name", "dsy2gebem")
    fetch("  https://api.cloudinary.com/v1_1/dsy2gebem/image/upload", {
      method: "post",
      body: data
    })
      .then(response => response.json())
      .then(data => {
        const requestBody = { name, url: data.url };
        axios.post(`/auth/signup`, requestBody)
          .then((response) => {
            navigate("/login");
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <form className='Signup-9' onSubmit={handleSignupSubmit}>
       
            <label>name :</label>
            <input style={{ width: '11.5vw', marginRight: '0.5vw', borderTopRightRadius: '10px' }} type="text" name="name" value={name} onChange={handleName} required />
          
          <label>upload profile photo :</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} required></input>

          <button style={{ borderRadius: '30px', marginTop: '1.5vh' }} type="submit" >SIGN UP</button>

      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  )
}

export default SignupPage;

```

App.js
```js
        <Route path="/signup" element={<SignupPage />} />
```

User.model.js
```js
const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const userSchema = new Schema({
  name: String,
  url: String,
});

const User = model("User", userSchema);

module.exports = User;
```

auth.routes.js
```js
const express = require("express");
const User = require("../models/User.model");
const router = express.Router();
router.post('/signup', (req, res, next) => {
  const { name,  url } = req.body;
 
  User.findOne({ email })
  
    .then((createdUser) => {
      const { email, name,  url, _id } = createdUser;
      const user = { email, name, url, _id };
      res.status(201).json({ user: user });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Oh no! Server Error" })
    });
});

module.exports = router;
```

user.routes.js
```js
const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = require("../models/User.model");

router.get("/users", (req, res, next) => {
    User.find()
        .then((allUsers) => {
            res.json(allUsers)
        })
        .catch((err) => {
            console.log(err)
            res.json(err)
        });
});

router.get("/users/:userId", (req, res, next) => {
    const { userId } = req.params;
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        res.status(400).json({ message: "Specified id is not valid" });
        return;
    }
    User.findById(userId)
        .populate({
            path: 'messages',
            populate: [{
                path: 'userSend',
                model: 'User'
            },
            {
                path: 'userRecieve',
                model: 'User'
            }]
        })
        .then((user) => {
            res.status(200).json(user)
        })
        .catch((error) => res.json(error));
});

module.exports = router;
```

app.js
```js
require("dotenv/config");
require("./db");

const express = require("express");
const app = express();
require("./config")(app);

const authRouter = require("./routes/auth.routes");
app.use("/auth", authRouter);

const userRouter = require("./routes/user.routes");
app.use("/api", isAuthenticated, userRouter);


module.exports = app;
```