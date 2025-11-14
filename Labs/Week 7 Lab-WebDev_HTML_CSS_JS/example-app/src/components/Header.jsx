// src/components/Header.jsx
export default function Header({ img }) {
  // Provide defaults if no img prop is given
  const {
    src = "/SharingFood.jpg",
    alt = "Fresh Food For All",
  } = img || {};

  return (
    <header
      style={{
        textAlign: "center",
        margin: "auto",
        width: "100%",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />
    </header>
  );
}
