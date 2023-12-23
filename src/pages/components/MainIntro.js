import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";

const greetings = [
  "Hey there",
  "Hello",
  "Hola",
  "Xin Chao",
  "你好",
  "Bonjour",
  "Ciao",
  "안녕",
];

var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };

var randomIndex = function (excluding) {
  var values = __spreadArray([], greetings, true);
  if (excluding) {
    values = values.filter(function (_, i) {
      return i !== excluding;
    });
  }
  var value = Math.floor(Math.random() * values.length);
  return value;
};

function MainIntro() {
  const initialGreetingIndex = new Date().getDate() % greetings.length;
  const [index, setIndex] = useState(initialGreetingIndex);

  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((index) => randomIndex(index));
      },
      4000 // every 4 sec
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <div className="flex flex-col">
      <div className="text-3xl md:text-5xl font-inter font-bold flex flex-row">
        <TextTransition inline={true} springConfig={presets.slow}>
          {greetings[index % greetings.length]}
        </TextTransition>
        <div>, I&apos;m Bach!</div>
      </div>
    </div>
  );
}

export default MainIntro;
