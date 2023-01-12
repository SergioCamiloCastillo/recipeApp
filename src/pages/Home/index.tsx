import Banner from '../../components/Banner';
import NewRecipes from "../../components/NewRecipes";

export default function Home() {
  return (
    <>
    <Banner />
    <div className="container">
      <NewRecipes />
    </div>
    </>
  )
}
