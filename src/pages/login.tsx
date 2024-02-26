import Breadcrumb from "@/components/Breadcrumb/breadcrumb";
import React from "react";
import { Form } from "./../components/Utility/form";

function Login() {
  return (
    <div>
      <Breadcrumb items={["Home", "Login"]} />
      <Form></Form>
    </div>
  );
}

export default Login;

// Create Login Screen

// Should contain the mobile number

// Should contain password

// Should contain submit button

// Should show loading state when login API is called

// Should show error toast on API failure

// Should redirect to home page on successful login
