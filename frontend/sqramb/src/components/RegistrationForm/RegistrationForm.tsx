import { Link } from "react-router-dom";
import "./registrationForm.scss";
import React, { ChangeEvent, useState, FocusEvent } from "react";

interface FormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber: string;
  dob: string;
  gender: string;
  address: string;
  terms: boolean;
}

const RegistrationForm = () => {
  const initialFormState: FormState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: "",
    dob: "",
    gender: "",
    address: "",
    terms: false,
  };

  const [form, setForm] = useState<FormState>(initialFormState);
  const [isDateInputVisible, setIsDateInputVisible] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === "checkbox") {
      const isChecked = (e.target as HTMLInputElement).checked;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: isChecked,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    setForm(initialFormState);
  };

  const handleDateFocus = () => {
    setIsDateInputVisible(true);
  };

  const handleDateBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsDateInputVisible(false);
    }
  };

  return (
    <form className="reg-form" onSubmit={handleSubmit}>
      <input
        type="text"
        id="username"
        name="username"
        value={form.username}
        onChange={handleChange}
        placeholder="username"
        required
      />

      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="E-mail"
        required
      />

      <input
        type="password"
        id="password"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />

      <input
        type="password"
        id="confirmPassword"
        name="confirmPassword"
        value={form.confirmPassword}
        onChange={handleChange}
        placeholder="Confirm Password"
        required
      />

      <input
        type="text"
        id="fullName"
        name="fullName"
        value={form.fullName}
        onChange={handleChange}
        placeholder="Full Name"
      />

      <input
        type="tel"
        id="phoneNumber"
        name="phoneNumber"
        value={form.phoneNumber}
        onChange={handleChange}
        placeholder="Phone Number"
      />

      <div className="date-input-wrapper">
        {!isDateInputVisible && (
          <input
            type="text"
            placeholder="Date of Birth"
            onFocus={handleDateFocus}
            className="placeholder-input"
          />
        )}
        {isDateInputVisible && (
          <input
            type="date"
            id="dob"
            name="dob"
            value={form.dob}
            onChange={handleChange}
            onBlur={handleDateBlur}
          />
        )}
      </div>

      <select id="gender" name="gender" value={form.gender} onChange={handleChange}>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
        <option value="prefer-not-to-say">Prefer not to say</option>
      </select>

      <input
        type="text"
        id="address"
        name="address"
        value={form.address}
        onChange={handleChange}
        placeholder="Address"
      />

      <div className="reg-form__terms-box">
        <input type="checkbox" id="terms" name="terms" checked={form.terms} onChange={handleChange} required />
        <label htmlFor="terms"> I agree to the Terms and Conditions </label>
      </div>
      <Link to= "/terms">  <p>Read Terms And Conditions</p>  </Link>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
