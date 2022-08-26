```js
handleDrop = files => {
  const uploaders = files.map(file => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("tags", `codeinfuse, medium, gist`);
    formData.append("upload_preset", "pvhilzh7"); 
    formData.append("api_key", "1234567"); 
    formData.append("timestamp", (Date.now() / 1000) | 0);
    
    return axios.post("https://api.cloudinary.com/v1_1/codeinfuse/image/upload", formData, {
      headers: { "X-Requested-With": "XMLHttpRequest" },
    }).then(response => {
      const data = response.data;
      const fileURL = data.secure_url 
      console.log(data);
    })
  });

  // Once all the files are uploaded 
  axios.all(uploaders).then(() => {
    // ... perform after upload is successful operation
  });
}
```
```js
const handleSignupSubmit = (e) => {
    e.preventDefault();

  const uploaders = multiImageSelected.map(imageSelected => {


    const data = new FormData()
    data.append("file", imageSelected)
    data.append("upload_preset", "estela-garcia-website")
    data.append("cloud_name", "dsy2gebem")
    fetch("https://api.cloudinary.com/v1_1/dsy2gebem/image/upload", {
      method: "post",
      body: data
    })
      .then(response => response.json())
      .then(data => {
        const requestBody = { title, imageUrl: data.url };
        axios.post('/api/photos', requestBody)
          .then((response) => {
            navigate("/photos");
          })
          .catch((error) => {
            const errorDescription = error.response.data.message;
            setErrorMessage(errorDescription);
          })
      })
      .catch(err => console.log(err))
      })

  }
```