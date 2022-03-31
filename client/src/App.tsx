import React from "react";
import AppContent from "./AppContent";
import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

const App = () => {
  const myProps = {
    title: "My App!",
    subject: "My subject",
    favourite_color: "red",
  };
  return (
    <div>
      <AppHeader {...myProps} />
      <AppContent />
      <AppFooter />
    </div>
  );
};

export default App;
