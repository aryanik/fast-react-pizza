/* eslint-disable react-refresh/only-export-components */
import {useLoaderData} from "react-router-dom";
import { getMenu } from "../../services/apiRestaurant";
import MenuItem from "./MenuItem.jsx"

function Menu() {
  const menu = useLoaderData();
  // useLoaderData() is called to get the pre-fetched menu data from the loader function. This ensures the data is available when the component is rendered.
  return(
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => <MenuItem pizza={pizza} key={pizza.id} />)}
    </ul>
  ) 

}

export async function loader(){
  const menu = await getMenu();
  return menu;
}

export default Menu;
