import { Link, useLocation } from "react-router-dom";

/**
 * 네비게이션 컴포넌트 - 마이크로 프론트엔드 간 이동을 위한 UI
 */
const Navigation = () => {
  const location = useLocation();

  return (
    <nav
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        width: "100%",
        backgroundColor: "#333",
        padding: "10px 0",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Link
        to="/"
        style={{
          margin: "0 20px",
          color: location.pathname === "/" ? "#fff" : "#ccc",
          textDecoration: "none",
          fontWeight: location.pathname === "/" ? "bold" : "normal",
        }}
      >
        A Project
      </Link>
      <Link
        to="/b"
        style={{
          margin: "0 20px",
          color: location.pathname === "/b" ? "#fff" : "#ccc",
          textDecoration: "none",
          fontWeight: location.pathname === "/b" ? "bold" : "normal",
        }}
      >
        B Project
      </Link>
    </nav>
  );
};

export default Navigation;
