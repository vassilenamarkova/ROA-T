import { useEffect } from 'react';

function InstagramFeed() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://fouita.com/embed.js";
    script.async = true;
    script.onload = () => {
      window.fouitaEmbed({
        username: "coolcoffeeclub",
        container: "#fouita-instagram-widget",
        layout: "grid",
        cols: 3,
        cardHeight: 180,
        gap: 8
      });
    };
    document.body.appendChild(script);
  }, []);

  return <div id="fouita-instagram-widget"></div>;
}
