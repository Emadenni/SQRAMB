import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./registrationForm.scss";
import TermsAndConditions from "../TermsAndConditions/TermsAndConditions";
import countries from "react-select-country-list";

interface FormState {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  fullName: string;
  phoneNumber: string;
  dob: string;
  gender: string;
  city: string;
  country: string;
  state: string;
  terms: boolean;
}

const initialFormState: FormState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
  fullName: "",
  phoneNumber: "",
  dob: "",
  gender: "",
  city: "",
  country: "",
  state: "",
  terms: false,
};

// Schema di validazione con Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Required"),
  fullName: Yup.string().required("Required"),
  phoneNumber: Yup.string(),
  dob: Yup.string().required("Required"),
  gender: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  terms: Yup.boolean().oneOf([true], "You must accept the terms and conditions").required("Required"),
});

const RegistrationForm: React.FC = () => {
  const [isDateInputVisible, setIsDateInputVisible] = useState(false);
  const [isTermsOverlayOpen, setIsTermsOverlayOpen] = useState(false);

  const formik = useFormik<FormState>({
    initialValues: initialFormState,
    validationSchema,
    onSubmit: async (values) => {
      try {
        const response = await fetch("http://localhost:5001/api/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        });

        if (!response.ok) {
          throw new Error("Failed to register user");
        }

        const data = await response.json();
        console.log("User registered successfully:", data);

        formik.resetForm();
      } catch (error) {
        console.error("Error registering user:", error);
      }
    },
  });

  const handleDateFocus = () => {
    setIsDateInputVisible(true);
  };

  const handleDateBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsDateInputVisible(false);
    }
    formik.handleBlur(e);
  };

  const handleCountryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    formik.handleChange(event);
    formik.setFieldValue("state", "");
  };

  const openTermsOverlay = () => {
    setIsTermsOverlayOpen(true);
  };

  const closeTermsOverlay = () => {
    setIsTermsOverlayOpen(false);
  };

  return (
    <>
      <form className="reg-form" onSubmit={formik.handleSubmit}>
        <input
          type="text"
          id="username"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Username"
        />
        {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}

        <input
          type="email"
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="E-mail"
        />
        {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}

        <input
          type="password"
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Password"
        />
        {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}

        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Confirm Password"
        />
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div>{formik.errors.confirmPassword}</div>
        ) : null}

        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formik.values.fullName}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Full Name"
        />
        {formik.touched.fullName && formik.errors.fullName ? <div>{formik.errors.fullName}</div> : null}

        <input
          type="tel"
          id="phoneNumber"
          name="phoneNumber"
          value={formik.values.phoneNumber}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Phone Number"
        />
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? <div>{formik.errors.phoneNumber}</div> : null}

        <div className="date-input-wrapper">
          {!isDateInputVisible && (
            <input type="text" placeholder="Date of Birth" onFocus={handleDateFocus} className="placeholder-input" />
          )}
          {isDateInputVisible && (
            <input
              type="date"
              id="dob"
              name="dob"
              value={formik.values.dob}
              onChange={formik.handleChange}
              onBlur={handleDateBlur}
            />
          )}
          {formik.touched.dob && formik.errors.dob ? <div>{formik.errors.dob}</div> : null}
        </div>

        <select
          id="gender"
          name="gender"
          value={formik.values.gender}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
          <option value="prefer-not-to-say">Prefer not to say</option>
        </select>
        {formik.touched.gender && formik.errors.gender ? <div>{formik.errors.gender}</div> : null}

        <input
          type="text"
          id="city"
          name="city"
          value={formik.values.city}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="City"
        />
        {formik.touched.city && formik.errors.city ? <div className="error-message">{formik.errors.city}</div> : null}

        <select
          id="country"
          name="country"
          value={formik.values.country}
          onChange={handleCountryChange}
          onBlur={formik.handleBlur}
        >
          <option value="">Select Country</option>
          {countries()
            .getData()
            .map((country: any) => (
              <option key={country.label} value={country.label}>
                {country.label}
              </option>
            ))}
        </select>
        {formik.touched.country && formik.errors.country ? (
          <div className="error-message">{formik.errors.country}</div>
        ) : null}

        <div className="reg-form__terms-box">
          <input
            type="checkbox"
            id="terms"
            name="terms"
            checked={formik.values.terms}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          <label htmlFor="terms">I agree to the Terms and Conditions</label>
        </div>
        {formik.touched.terms && formik.errors.terms ? <div>{formik.errors.terms}</div> : null}

        <p onClick={openTermsOverlay} className="terms-par">
          Read Terms And Conditions
        </p>
        <button type="submit">Register</button>
      </form>
      <TermsAndConditions isOpen={isTermsOverlayOpen} onClose={closeTermsOverlay} />
    </>
  );
};

export default RegistrationForm;
