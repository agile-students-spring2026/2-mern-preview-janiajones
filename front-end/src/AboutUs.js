import React, { useEffect, useState } from "react";
import "./AboutUs.css";

export default function AboutUs() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5002/api/about")
      .then((res) => res.json())
      .then(setData);
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="about-container">
      <h1 className="about-title">{data.title}</h1>

      <img
        src={data.imageUrl}
        alt="About"
        className="about-image"
      />

      {data.paragraphs.map((p, idx) => (
        <p key={idx}>{p}</p>
      ))}
    </div>
  );
}
