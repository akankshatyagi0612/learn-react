import Expenses from './Components/Expenses';
import './App.css';

function App() {
  const expenses=[
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.67,
      date: new Date(2023, 3, 22),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 254.67,
      date: new Date(2023, 5, 17),
    },
    {
      id: 'e3',
      title: 'New TV',
      amount: 345.67,
      date: new Date(2023, 3, 26),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 954.67,
      date: new Date(2023, 7, 28),
    },
  ];

  return (
    <div className="App">
        <Expenses items={expenses}/>
    </div>
  );
}

export default App;
