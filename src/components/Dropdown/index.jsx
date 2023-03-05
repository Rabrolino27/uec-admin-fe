import React,{useState} from 'react';
import './index.css'

function Index({selected, setSelected, setOpen}){
    const options = ['Vue', 'React']
    const [DropD, SetDrop] = useState(false);

    return (
        <div className="dropdown">
            <div className="dropdown-btn" onClick={(e) => {SetDrop(!DropD)} }>
                {selected}
                <i className="fa fa-caret-down"> </i> 
           </div>
   {DropD && (
   <div className="dropdown-content">
    {options.map(option => (
        <div  onClick ={(e) => {setSelected(option) 
            SetDrop(false)
            setOpen(false)
        } }
className="dropdown-item">
            {option}
</div>
    ))}


        </div>
        )}

            





        </div>
    )

     
    
} 
export default Index