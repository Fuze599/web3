import BadButton from 'components/Buttons/BadButton';
import GoodButton from 'components/Buttons/GoodButton';
import OkButton from 'components/Buttons/OkButton';
import ResetButton from 'components/Buttons/ResetButton';
import { Context as CountersContext } from 'contexts/countersContext'
import { useContext } from "react";

function App() {
  const { good, bad, ok } = useContext(CountersContext)
  return (
    <div>
      good {good} <br/>
      ok {ok} <br/>
      bad {bad} <br/>
      <OkButton></OkButton>
      <BadButton></BadButton>
      <GoodButton></GoodButton>
      <ResetButton></ResetButton>
    </div>
  );
}

export default App;
