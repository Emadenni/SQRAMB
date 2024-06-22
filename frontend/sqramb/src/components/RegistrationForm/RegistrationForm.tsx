import "./registrationForm.scss";
import React, { ChangeEvent, useState } from "react";

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

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    // Gestione specifica per checkbox
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
    // Esempio di come potresti resettare il form dopo l'invio
    setForm(initialFormState); // Resetta il form agli stati iniziali
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

      <input type="date" id="dob" name="dob" value={form.dob} onChange={handleChange} placeholder="Date Of Birth" />

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
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
