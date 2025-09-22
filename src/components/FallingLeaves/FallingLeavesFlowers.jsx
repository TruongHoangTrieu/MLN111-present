// FallingLeavesFlowersSVG.jsx
import React, { useEffect, useState } from "react";

const emojis = ["🍃", "🍁", "🌿", "🌸", "🌺"];
const colors = ["#a8e6cf", "#dcedc1", "#ffd3b6", "#ffaaa5", "#ff8b94", "#f5c7b8", "#fcd5ce"];

function random(min, max) {
  return Math.random() * (max - min) + min;
}

export default function FallingLeavesFlowers() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const newItems = Array.from({ length: 25 }).map(() => ({
      x: random(0, window.innerWidth),
      y: random(-200, -50),
      size: random(20, 40),
      speed: random(1, 3),
      emoji: emojis[Math.floor(random(0, emojis.length))],
      rotate: random(0, 360),
      rotateSpeed: random(-2, 2),
    }));
    setItems(newItems);

    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) => {
          let newY = item.y + item.speed;
          let newX = item.x + Math.sin(item.y / 50); // tạo nhấp nhô
          let newRotate = item.rotate + item.rotateSpeed;
          if (newY > window.innerHeight + 50) newY = -50;
          return { ...item, y: newY, x: newX, rotate: newRotate };
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 9999,
      }}
    >
      {items.map((item, idx) => (
        <div
          key={idx}
          style={{
            position: "absolute",
            left: item.x,
            top: item.y,
            fontSize: item.size,
            transform: `rotate(${item.rotate}deg)`,
            transition: "transform 0.03s linear",
          }}
        >
          {item.emoji}
        </div>
      ))}
    </div>
  );
}
