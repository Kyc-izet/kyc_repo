import React from "react";
import { useFormik } from 'formik'
import css from "./contactus.css";
import axios from "axios";
import { useState } from "react";
import { FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram } from "react-icons/fa";
import validator from 'validator'


const validate = (values) => {
  const errors = {}

  if (!values.email) {
    errors.email = 'Required'
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }

  return errors
}


export default function Contactme() {
  const [email, setEmail] = useState("");
  const [mobileno, setMobileno] = useState("");
  const [num, setNum] = useState('');


  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validate,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2))
    },
  })

  const [emailError, setEmailError] = useState('')
  const validateEmail = (e) => {
    var email = e.target.value

    if (validator.isEmail(email)) {
      setEmailError('Valid Email :)')
    } else {
      alert("Enter valid email")
    }
  }

  async function submit(e) {

    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/register", {
        email,
        mobileno,
      });

      if (response.data === "exist") {
        console.log("User already exists");
      } else if (response.data === "success") {
        alert("registration succesful");
        console.log("Registration successful");
        // You can also redirect the user to a login page or perform other actions here.
      } else {
        console.log(
          "Registration failed with an unknown response:",
          response.data
        );
      }
    } catch (error) {
      console.log("Axios Error:", error);
      alert("registration unnsucessful");
    }
  }
  return (
    <div className="container_8">
      <div className="contactme flex_8">
        <div className="form_8 flex_8 col_8">
          <svg
            width="72"
            height="72"
            viewBox="0 0 72 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M56 53C62.6 53 68 47.6 68 41C68 34.4 62.6 29 56 29V53Z"
              fill="#00BC4C"
            />
            <path
              d="M16 29C9.4 29 4 34.4 4 41C4 47.6 9.4 53 16 53V29Z"
              fill="#00BC4C"
            />
            <path
              d="M47 67H36C34.3 67 33 65.7 33 64C33 62.3 34.3 61 36 61H47C48.1 61 49 61.9 49 63V65C49 66.1 48.1 67 47 67Z"
              fill="#00BC4C"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36 4.5C24.7295 4.5 15.5 13.6115 15.5 24.7628V28.5099C8.85332 28.7746 3.5 34.2913 3.5 41C3.5 47.8761 9.12386 53.5 16 53.5H16.5V24.7628C16.5 14.175 25.2705 5.5 36 5.5C46.7295 5.5 55.5 14.175 55.5 24.7628V53.5H56C57.2137 53.5 58.3884 53.3248 59.5 52.9984V60.2205C59.5 61.9967 57.9509 63.5 56 63.5H49.5V63C49.5 61.6239 48.3761 60.5 47 60.5H36C34.0239 60.5 32.5 62.0239 32.5 64C32.5 65.9761 34.0239 67.5 36 67.5H47C48.3761 67.5 49.5 66.3761 49.5 65V64.5H56C58.4491 64.5 60.5 62.6017 60.5 60.2205V52.6578C65.1691 50.842 68.5 46.2918 68.5 41C68.5 34.2913 63.1467 28.7746 56.5 28.5099V24.7628C56.5 13.6115 47.2705 4.5 36 4.5ZM4.5 41C4.5 34.8436 9.40558 29.775 15.5 29.5108V52.4892C9.40558 52.225 4.5 47.1564 4.5 41ZM56.5 29.5108V52.4892C62.5944 52.225 67.5 47.1564 67.5 41C67.5 34.8436 62.5944 29.775 56.5 29.5108ZM36 61.5C34.5761 61.5 33.5 62.5761 33.5 64C33.5 65.4239 34.5761 66.5 36 66.5H47C47.8239 66.5 48.5 65.8239 48.5 65V63C48.5 62.1761 47.8239 61.5 47 61.5H36Z"
              fill="#001E2B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.0988 30.6165C33.1479 30.6165 30.7357 33.0292 30.7357 35.9804C30.7357 38.9316 33.1479 41.3442 36.0988 41.3442C39.0497 41.3442 41.4619 38.9316 41.4619 35.9804C41.4619 33.0292 39.0497 30.6165 36.0988 30.6165ZM31.7357 35.9804C31.7357 33.5813 33.7003 31.6165 36.0988 31.6165C38.4973 31.6165 40.4619 33.5813 40.4619 35.9804C40.4619 38.3794 38.4973 40.3442 36.0988 40.3442C33.7003 40.3442 31.7357 38.3794 31.7357 35.9804Z"
              fill="#001E2B"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36.9657 22.6103C35.6028 22.2209 34.1117 22.8934 33.6058 24.2087L33.6018 24.2193L33.0862 25.7661V25.77C33.0759 25.7913 33.0619 25.8216 33.0497 25.8541C33.0414 25.8762 33.032 25.9042 33.0239 25.9371C32.6324 26.7047 31.6723 27.036 30.9054 26.623L30.8935 26.6166L29.4955 25.9586L29.4875 25.9552C28.7943 25.6581 28.0034 25.6579 27.3103 25.955L27.2978 25.9608C25.9965 26.5614 25.3962 28.1539 25.9997 29.4615L26.62 30.7799C26.6282 30.8143 26.638 30.8435 26.6466 30.8664C26.6588 30.8989 26.6728 30.9293 26.6831 30.9505V30.9598L26.7123 31.0414C27.0201 31.9035 26.6056 32.758 25.7228 33.0758L24.2495 33.567L24.2304 33.5752C23.5702 33.8582 22.9645 34.3503 22.6623 35.1562L22.6597 35.1636C22.1576 36.5697 22.8757 37.9837 24.2591 38.4779L25.7378 38.9708L25.7579 38.9909L25.8389 39.0283C26.646 39.4009 27.0037 40.389 26.5808 41.1746L26.5744 41.1865L25.9165 42.5847L25.913 42.5927C25.616 43.2859 25.6158 44.0769 25.9129 44.7701L25.9186 44.7826C26.5168 46.0788 28.1143 46.6941 29.4339 45.9928L30.7375 45.3793C30.8522 45.3516 30.9366 45.2992 30.9761 45.2728L30.991 45.2626C31.8275 45.0032 32.6427 45.4188 32.9515 46.2767L33.4426 47.7503L33.4508 47.7694C33.7338 48.4296 34.2258 49.0354 35.0316 49.3377L35.0391 49.3403C36.4164 49.8323 37.944 49.1517 38.3596 47.7208L38.8458 46.2618L38.8659 46.2416L38.9033 46.1607C39.2759 45.3533 40.2637 44.9957 41.049 45.4186L41.061 45.425L42.459 46.083L42.467 46.0865C43.1602 46.3836 43.951 46.3838 44.6442 46.0866L44.6567 46.0809C45.958 45.4802 46.5582 43.8878 45.9548 42.5802L45.3343 41.2614C45.3067 41.1467 45.2543 41.0624 45.2279 41.0228L45.2177 41.0079C44.9583 40.1711 45.3739 39.3557 46.2316 39.0469L47.705 38.5557L47.7241 38.5475C48.3829 38.2651 48.9874 37.7745 49.2902 36.9716C49.8715 35.5108 49.1933 33.9966 47.8687 33.487L47.8581 33.4829L46.3788 32.9898L46.3587 32.9696L46.2777 32.9323C45.4706 32.5597 45.1129 31.5716 45.5358 30.786L45.5422 30.7741L46.2001 29.3759L46.2035 29.3678C46.5006 28.6746 46.5008 27.8837 46.2037 27.1905L46.198 27.178C45.5998 25.8818 44.0023 25.2664 42.6826 25.9678L41.3791 26.5813C41.2644 26.609 41.18 26.6614 41.1405 26.6878L41.1255 26.6979C40.2875 26.9578 39.471 26.5402 39.1635 25.6791L38.588 24.199L38.5847 24.1912C38.3018 23.5309 37.8097 22.9252 37.0039 22.6229L36.985 22.6159L36.9657 22.6103ZM34.0765 25.9576L34.543 24.5578C34.8495 23.7771 35.7746 23.3204 36.6714 23.5664C37.1493 23.7518 37.4614 24.1126 37.6623 24.5776L38.2241 26.0223C38.7203 27.4013 40.1316 28.1166 41.5354 27.6152L41.6413 27.5773L41.6681 27.5505L43.1323 26.8614L43.1442 26.8549C43.9275 26.4331 44.9123 26.7878 45.2871 27.5908C45.4726 28.0284 45.4727 28.5287 45.2876 28.9664L44.6486 30.3245C43.9588 31.6227 44.5428 33.1899 45.7958 33.8102C45.8094 33.8205 45.8246 33.8316 45.8414 33.8428C45.8855 33.8721 45.9848 33.9336 46.1198 33.9575L47.5195 34.4242C48.2947 34.7286 48.7457 35.6397 48.3596 36.6052L48.3558 36.6154C48.174 37.1002 47.814 37.4168 47.3484 37.6205L45.91 38.0999L45.9 38.1035C44.5165 38.5976 43.7984 40.0115 44.3005 41.4176L44.3383 41.5235L44.3651 41.5503L45.0468 42.9992L45.0475 43.0007C45.4146 43.7985 45.045 44.796 44.2438 45.1701C43.8062 45.3556 43.3062 45.3557 42.8685 45.1705L41.5106 44.5314C40.2125 43.8415 38.6455 44.4258 38.0253 45.6789C38.015 45.6924 38.004 45.7077 37.9927 45.7245C37.9634 45.7685 37.9019 45.8679 37.878 46.0029L37.4042 47.4247L37.4012 47.4351C37.164 48.2653 36.2665 48.7147 35.3792 48.3999C34.8966 48.2177 34.5811 47.8584 34.3779 47.3938L33.8986 45.9552L33.895 45.9451C33.4009 44.5616 31.9873 43.8432 30.5812 44.3454L30.4753 44.3832L30.4485 44.41L28.9843 45.0992L28.9723 45.1056C28.189 45.5275 27.2043 45.1728 26.8295 44.3698C26.644 43.9321 26.6438 43.4319 26.829 42.9941L27.468 41.636C28.1577 40.3379 27.5737 38.7706 26.3208 38.1504C26.3072 38.14 26.2919 38.129 26.2751 38.1178C26.2311 38.0885 26.1317 38.0269 25.9968 38.003L24.5908 37.5343C23.7093 37.2169 23.2948 36.3645 23.6001 35.5036C23.7823 35.0209 24.1416 34.7054 24.6061 34.5022L26.0445 34.0228L26.0545 34.0192C27.4202 33.5314 28.1376 32.1474 27.6728 30.7593C27.6636 30.7091 27.6501 30.6674 27.6386 30.6369C27.6264 30.6044 27.6124 30.574 27.6021 30.5528V30.5183L26.9069 29.0409C26.5399 28.2431 26.9095 27.2457 27.7107 26.8716C28.1482 26.6861 28.6483 26.6859 29.086 26.8711L30.4438 27.5102C31.7635 28.2115 33.361 27.5962 33.9592 26.3L34.0052 26.2003V26.1678C34.0155 26.1465 34.0295 26.1162 34.0417 26.0836C34.0534 26.0524 34.0674 26.0094 34.0765 25.9576Z"
              fill="#001E2B"
            />
          </svg>

          <p>Fill your details & get assisted by Team KYC</p>
          <form action="POST" className="width100 flex_8 col_8" style={{gap:'1rem'}}>
            <input required type="text" placeholder="Name" />
            <input
              required
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="number"
              placeholder="Mobile Number"
              value={num}
              onChange={(e) => {
                setMobileno(e.target.value)
                const limit = 10;
                setNum(e.target.value.slice(0, limit));
              }}
            />
            <select className="select">
              <option disabled selected hidden value="actual value 1">Current Status</option>
              <option value="actual value 1">In 12th</option>
              <option value="actual value 2">Dropper</option>
            </select>
            <input type="submit" value="Submit" onClick={submit} />
          </form>
        </div>
        <div className="content_8 flex_8 col_8">
          <h1>
            WE'LL <apn className="span_8">REACH</apn>{" "}
          </h1>
          <h1>YOU SOON</h1>
          <div className="linksOfContact">
            <p>Help & Support</p>
            <div className="n1 flex_8">
              <a target="_blank" href="https://www.linkedin.com/company/know-your-colleges/
"><FaLinkedin color="#011f2b" size="2rem" /></a>
              <a target="_blank" href="https://chat.whatsapp.com/LhMiXCqeYg6Lm7hJa8nseW"><FaWhatsapp color="#011f2b" size="2rem" /></a>
              <a target="_blank" href="https://instagram.com/knowyourcolleges_kyc?igshid=OGQ5ZDc2ODk2ZA=="><FaInstagram color="#011f2b" size="2rem" /></a>
              <a target="_blank" href="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSDbthsFlCqnjPcBwKRVWnhKNwRPrZfjpfMVcDdRdCKRcqGnpPLmpsRtWPHtghxdVZLWhmxK"><FaEnvelope color="#011f2b" size="2rem" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
