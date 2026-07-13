import React from "react";
import { Link, useRouteError } from "react-router";

const Error = () => {
  const error = useRouteError();
  const status = error?.status || 404;
  const message = error?.statusText || "The page you are looking for does not exist.";

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "#f9fafb",
        padding: "20px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "420px",
          background: "#fff",
          padding: "32px",
          borderRadius: "12px",
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.08)",
        }}
      >
        <h1 style={{ fontSize: "3rem", margin: "0 0 8px" }}>{status}</h1>
        <h2 style={{ margin: "0 0 8px" }}>Oops! Page not found</h2>
        <p style={{ color: "#6b7280", margin: "0 0 20px" }}>{message}</p>
        <Link
          to="/"
          style={{
            display: "inline-block",
            padding: "10px 16px",
            background: "#f97316",
            color: "#fff",
            borderRadius: "8px",
            textDecoration: "none",
          }}
        >
          Go back home
        </Link>
      </div>
    </div>
  );
};

export default Error;