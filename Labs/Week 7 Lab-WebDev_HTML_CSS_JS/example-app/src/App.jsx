// src/App.jsx
import "./CS2701-Week7-Registration.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import RegistrationForm from "./components/RegistrationForm";

export default function App() {
  return (
    <>
      {/* You can change this to use the logo if you like */}
      <Header img={{ src: "/SharingFood.jpg", alt: "Fresh Food For All" }} />

      <main>
        <Sidebar />
        <section>
          <RegistrationForm />
        </section>
      </main>
    </>
  );
}
