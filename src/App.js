import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
        // 불러온 다음에 로딩 false로 바꿔야
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length}개)`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <ul>
        {coins.map((item) => {
          return (
            <li key={item.id}>
              {item.name} ({item.symbol}) ({item.quotes.USD.price} USD)
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
