import React, { useState, useEffect } from "react";

interface MathCaptchaProps {
  onCaptchaVerified: (isValid: boolean) => void;
}

const MathCaptcha: React.FC<MathCaptchaProps> = ({ onCaptchaVerified }) => {
  const [num1, setNum1] = useState<number>(0);
  const [num2, setNum2] = useState<number>(0);
  const [userInput, setUserInput] = useState<string>("");

  // Generate random numbers for the captcha
  const generateCaptcha = () => {
    const newNum1 = Math.floor(Math.random() * 10) + 1;
    const newNum2 = Math.floor(Math.random() * 10) + 1;
    setNum1(newNum1);
    setNum2(newNum2);
    setUserInput("");
    onCaptchaVerified(false);
  };

  // Validate the user's input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    // Ensure input is a valid number
    const sum = num1 + num2;
    if (parseInt(value, 10) === sum) {
      onCaptchaVerified(true);
    } else {
      onCaptchaVerified(false);
    }
  };

  // Regenerate captcha 
  useEffect(() => {
    generateCaptcha();
  }, []);

  return (
    <div className="captcha-container">
      <label>
        What is {num1} + {num2} ?
        <input
          type="number"
          value={userInput}
          onChange={handleChange}
          placeholder="Enter the sum"
        />
      </label>
      {userInput && isNaN(Number(userInput)) && (
        <p style={{ color: "red" }}>Please enter a valid number.</p>
      )}
    </div>
  );
};

export default MathCaptcha;
