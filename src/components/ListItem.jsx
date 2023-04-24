import { useContext } from 'react'
import {FaTrash} from 'react-icons/fa'
import { deleteTransaction } from '../context/GlobalActions'
import GlobalContext from '../context/GlobalContext'

const ListItem = ({transaction}) => {
 
  const {dispatch} = useContext(GlobalContext)


  const handleDelete = (id) => {
    const data = deleteTransaction(id)

    
    dispatch({
      type : "DELETE",
      payload : data
    })

  }
 
 
  return (
    <li className="list-item">
    <span>
      <h3 className={transaction.amount > 0 ? "income-transaction" : "expense-transaction"}>₹{transaction.amount}</h3>
      <h4>{transaction.text}</h4>
    </span>
    <button className="delbtn" onClick={()=>handleDelete(transaction.id)}><FaTrash/></button>
  </li>
  )
}

export default ListItem
