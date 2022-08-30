// import React, { useState } from "react";
// import { Form, Input, Button, notification } from "antd";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import Swal from "sweetalert2";
// // import { suscribeNewsletterApi } from "../../../api/newsletter";

// // import "./Newsletter.scss";

// function Newsletter() {
//   const [email, setEmail] = useState("");
//   const [errorMessage, setErrorMessage] = useState("");
//   const navigate = useNavigate();

//   const onSubmit = (e) => {
//     e.preventDefault();
//     const emailValid =
//       /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//     const resultValidation = emailValid.test(email);

//     if (!resultValidation) {
//       notification["error"]({
//         message: "El correo electronico no es valido.",
//       });
//     } else {
//       const requestBody = {
//         email: email,
//       };
//       axios
//         .post(`/api/newsletter/suscribe-newsletter/${email}`, requestBody)
//         .then((response) => {
//           console.log(response);

//           Swal.fire({
//             title: "Custom animation with Animate.css",
//             showClass: {
//               popup: "animate__animated animate__fadeInDown",
//             },
//             hideClass: {
//               popup: "animate__animated animate__fadeOutUp",
//             },
//           });

//           navigate("/contact");
//         })
//         .catch((err) => {
//           const errorDescription = err.response.data.message;
//           setErrorMessage(errorDescription);
//         });
//       setEmail("");
//     }

//     return (
//       <div className="newsletter">
//         <h3>Newsletter</h3>
//         <Form onSubmit={onSubmit}>
//           <Form.Item>
//             <Input
//               // prefix={
//               //   <Icon type="user" style={{ color: "rgba(0,0,0,0.25)" }} />
//               // }
//               placeholder="Correo electronico"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Item>
//           <Form.Item>
//             <Button
//               type="primary"
//               htmlType="submit"
//               className="login-form-button"
//             >
//               ¡Me suscribo!
//             </Button>
//           </Form.Item>
//         </Form>
//       </div>
//     );
//   };
// }

// export default Newsletter;
