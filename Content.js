import {FaTrashAlt} from 'react-icons/fa'


const Content = ({items,handleCheck,handleDelete}) => {

 
  return (
      <main>
        {(items.length)?
        <ul>
          {items.map((item)=>{
            return(
              <li className="item" key={item.id}>
                <input type="checkbox" 
                checked={item.checked}
                onChange={()=>handleCheck(item.id)}
                />
                <label
                style={(item.checked)?{textDecoration:'line-through'}:null}
                onDoubleClick={()=>handleCheck(item.id)}
                >{item.item}</label>
                <FaTrashAlt
                role='button'
                tabIndex='0'
                onClick={()=>handleDelete(item.id)}
                />
              </li>
            )
          })}
        </ul>
        :(
          <p>No Items Left, Refresh to restart</p>
        )}
      </main>
  )
}

export default Content
