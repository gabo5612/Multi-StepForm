import { useContext } from 'react';
import { Context } from '../Hooks/Hook';

const MoreInfo = () => {
   const context=useContext(Context)
    return (
        <div>
            <h3>Please enter all the asked infomation</h3>
            <button onClick={()=>context.setOpenModal(!context.openModal)}>Okay</button>
        </div>
    );
}

export  {MoreInfo}
