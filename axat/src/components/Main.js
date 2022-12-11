import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import KitchenSinkExample from "./Cardd";
function Main() {
  const [load, setload] = useState(true);
  const dispatch = useDispatch();
  
  let data = useSelector((state) => state.productData);

  let result = data.products;
  console.log(result)
  useEffect(() => {
    dispatch(productList());
    setload(false);
  }, []);

  return (
    <div>
      {load ? (
        <div>Loading...</div>
      ) : (
        <div className="flex flex-row justify-content-between flex-wrap gap-6">
          {result?.map((item, id) => {
            return <KitchenSinkExample item={item} key={id} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
