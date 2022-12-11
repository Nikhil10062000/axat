import { useDispatch   } from "react-redux";
// import { Link } from 'react-router-dom';
import { Button } from "react-bootstrap";
import { useState } from "react";
import { productSearch } from "../redux/productAction";
import { productSmart , productHome , gross } from "../redux/productAction";
import Main from "./Main";
const Header = () => {
  const dispatch = useDispatch();

  const [search, setSearch] = useState();
  return (
    <div  >
      
      
      <div >
        <input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search Product"
          className="h-8 bg-amber-200"
        />
       
        <Button onClick={() => {
            dispatch(productSearch(search));
          }} variant="outline-warning">Warning</Button>{' '}
      </div>
     <div>
     
        <button onClick={()=> dispatch(productSmart())} className="btn">Smartphones</button>
        <button onClick={()=> dispatch(productHome())} className="btn">Home Decor</button>
        <button onClick={()=> dispatch(gross())}className="btn">Gross</button>
     </div>
      <Main />
    </div>
  );
};

export default Header;
