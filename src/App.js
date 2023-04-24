import Navbar from "./components/Navbar"
import BalanceSection from "./components/BalanceSection"
import ExpenseSection from "./components/ExpenseSection"
import ListGroup from "./components/ListGroup"
import { GlobalProvider } from "./context/GlobalContext"

function App() {
  
  
  return (
   <GlobalProvider>
   <Navbar/>
   <div className="container">
    <BalanceSection />
    <ExpenseSection />
    <ListGroup />
   </div>
   </GlobalProvider>
  );
}

export default App;
