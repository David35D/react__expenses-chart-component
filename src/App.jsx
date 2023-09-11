import jsonData from './data.json';

import './App.css'
import Balance from './components/Balance/Balance';
import Expenses from './components/Expenses/Expenses';
import Attribution from './components/Attribution/Attribution';

function App() {

  return (
    <>
      <main>
        <Balance />
        <Expenses 
          data={jsonData}
        />
      </main>
      <footer>
        <Attribution />
      </footer>
    </>
  )
}

export default App
