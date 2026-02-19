import { useState } from "react";
import { Vibration } from "react-native";

// Define types for form input and form error
type FormInput = Record<string, string>;
type FormError = Record<string, string | null>;

const useFormValidation = (initialState: FormInput) => {
  const [formInput, setFormInput] = useState<FormInput>(initialState);
  const [formError, setFormError] = useState<FormError>({});

  const handleInputChange = (name: string, value: string) => {
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    validateField(name, value);
  };

  const validateField = (name: string, value: string) => {
    let error: string | null = null;

    switch (name) {
      case "firstName":
        if (!/^[a-zA-Z]+$/.test(value)) {
          error = "First name should contain only alphabetic characters";
        } else if (value.length <= 2) {
          error = "First name should be at least three characters long";
        }
        break;

      case "lastName":
        if (!/^[a-zA-Z]+$/.test(value)) {
          error = "Last name should contain only alphabetic characters";
        } else if (value.length <= 2) {
          error = "Last name should be at least three characters long";
        }
        break;

      case "email":
        if (!value) {
          error = "Email cannot be empty";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = "Invalid email address";
        }
        break;

      case "phone":
        if (
          !/^0\d{10}$/.test(value) &&
          !/^\+[1-9]\d{1,3}\d{4,14}$/.test(value)
        ) {
          error = "Invalid phone number";
        }
        break;

      case "gender":
        if (!value.trim()) {
          error = "Please select a gender";
        }
        break;

      case "address":
        if (!value.trim()) {
          error = "Address cannot be empty";
        }
        break;

      case "userGroup":
        if (!value.trim()) {
          error = "Invalid user group";
        }
        break;

      case "department":
        if (!value.trim()) {
          error = "Invalid department";
        }
        break;

      case "estimatedEngagementPeriod":
        if (!value.trim()) {
          error = "Please select a timeframe";
        }
        break;

      case "tripPurpose":
        if (!value.trim()) {
          error = "What is the purpose of the trip";
        }
        break;

      case "password":
        if (!value.trim()) {
          error = "Password cannot be empty";
        } else if (value.trim() !== formInput.passwordRetype) {
          setFormError((prev) => ({
            ...prev,
            passwordRetype: "Passwords don't match",
          }));
        } else {
          setFormError((prev) => ({
            ...prev,
            passwordRetype: null,
          }));
        }
        break;

      case "passwordRetype":
        if (!value.trim()) {
          error = "Retype password cannot be empty";
        } else if (value.trim() !== formInput.password) {
          error = "Passwords don't match";
        }
        break;

      default:
        break;
    }

    setFormError((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const validateForm = (): boolean => {
    const errors: FormError = {};

    Object.keys(formInput).forEach((field) => {
      validateField(field, formInput[field]);
      if (formError[field]) {
        errors[field] = formError[field];
      }
    });

    if (Object.keys(errors).length > 0) {
      Vibration.vibrate([0, 50, 50, 50]);
      setFormError(errors);
    }

    return Object.keys(errors).length === 0;
  };

  return {
    formInput,
    formError,
    handleInputChange,
    validateForm,
  };
};

export default useFormValidation;
