import { useEffect } from "react";

export default function Loader() {
  useEffect(() => {
    async function getLoader() {
      const { dotWave } = await import("ldrs");
      dotWave.register();
    }
    getLoader();
  }, []);

  return (
    // Default values shown
    <l-dot-wave size="47" speed="1" color="#b49c9c"></l-dot-wave>
  );
}
