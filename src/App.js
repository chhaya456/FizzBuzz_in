import "./styles.css";

export default function App() {
  const runCallback = (cb) => {
    return cb();
  };

  // let i;
  // for (i = 0; i < 5; i++) {
  //   return i;
  // }

  // for (i = 1; i <= 20; i++) {
  //   i % 15 === 0
  //     ? console.log("FizzBuzz")
  //     : i % 5 === 0
  //     ? console.log("Buzz")
  //     : i % 3 === 0
  //     ? console.log("Fizz")
  //     : console.log(i);
  // }

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {runCallback(() => {
        const row = [];
        for (var i = 1; i <= 20; i++) {
          i % 15 === 0
            ? row.push(<p key={i}>FizzBUzz</p>)
            : i % 5 === 0
            ? row.push(<p key={i}>BUzz</p>)
            : i % 3 === 0
            ? row.push(<p key={i}>Fizz</p>)
            : row.push(<p key={i}>{i}</p>);
        }
        return row;
      })}
    </div>
  );
}
