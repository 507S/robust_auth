import { useEffect, useRef, useState } from "react";


export default function PasswordRecoveryOTPLayout() {
    const [otp, setOtp] = useState(Array(6).fill(""));
    const inputsRef = useRef([]);

    const otpSentNumber = "+880********";

    useEffect(() => {
      inputsRef.current[0].focus();
    }, []);

    const handleChange = (index, event) => {
      const value = event.target.value;
      if (isNaN(value)) {
        return;
      }
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value !== "" && index < 5) {
        inputsRef.current[index + 1].focus();
      }
      if (value === "" && index > 0) {
        inputsRef.current[index - 1].focus();
      }
    };

    const handleKeyDown = (index, event) => {
      if (event.key === "Backspace" && index > 0 && otp[index] === "") {
        inputsRef.current[index - 1].focus();
      }
      if (event.key === "Delete" && index < 5 && otp[index] === "") {
        inputsRef.current[index + 1].focus();
      }
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      const code = otp.join("");
      alert(`OTP entered: ${code}`);
    };

    // const handleResend = () => {
    //   alert("OTP resent");
    // };
  return (
    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
      {/* <HeaderCompanyLogo /> */}

      <div className="mt-5 d-flex flex-column align-items-center">
        <img
          // src={otpVerify}
          alt="OTP Verification"
          width="60px"
          height="60px"
        />
        <br />
        <h3 className="display-4">OTP Verification</h3>
        <div className="w-100 flex-1 mt-4">
          <div className="mx-auto max-w-xs">
            <br />
            <div className="d-flex flex-column mt-4">
              <span>
                Enter the OTP we have sent to <b>
                  {otpSentNumber}
                </b>
              </span>
            </div>
            <form
              onSubmit={handleSubmit}
            >
              <div className="d-flex flex-row justify-content-center text-center px-2 mt-5">
                {otp.map((value, index) => (
                  <input
                    key={index}
                    className="m-2 form-control"
                    type="text"
                    maxLength="1"
                    value={value}
                    onChange={(event) => handleChange(index, event)}
                    onKeyDown={(event) => handleKeyDown(index, event)}
                    ref={(el) => (inputsRef.current[index] = el)}
                  />
                ))}
              </div>
              <button className="mt-5 btn btn-primary w-100" type="submit">
                {/* <img src={verified} alt="" width="30px" height="30px" />
                <UserAuthenticationButtonText authButtonText="Resend" /> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
