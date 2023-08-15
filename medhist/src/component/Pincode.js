import PinInput from 'react-pin-input';

// Make sure to import the PinInput component from the correct path

function App() {
 

  const onClear = () => {
    setValue("");
    if (pinRef.current) {
      pinRef.current.clear();
    }
  };

  return (
    <div className="app"> 
    <PinInput
        length={5}
        focus
        // disabled
        secret
        ref={pinRef}
        type="numeric"
        onChange={onChange}
      />
      <div>{value}</div>
      <button onClick={onClear}>Clear</button>
    </div>
  );
}

export default App;
