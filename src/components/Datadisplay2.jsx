import { Mycontext } from "./Mycontext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
function Dis() {
    const nav = useNavigate()
    function Likebtn() {
        nav("/like")
    }
    function Cartbtn() {
        nav("/cart")
    }
    const { likeproducts, setLikeproducts } = useContext(Mycontext)
    const addtolikeproducts = (symbols) => {
        if (likeproducts.includes(symbols)) {
            setLikeproducts(likeproducts.filter((dt) => dt !== symbols))
        } else {
            setLikeproducts([...likeproducts, symbols])
        }
    }
    const { prod, cartproducts, setCartproducts } = useContext(Mycontext)
    console.log("dt", prod);
    const addtoCartproducts = (prod) => {
        if (cartproducts.includes(prod)) {
            setCartproducts(cartproducts.filter((dt) => dt !== prod))
        } else {
            setCartproducts([...cartproducts, prod])
        }
    }
    const [searchQuery, setSearchQuery] = useState("")
    const [filteredProds, setFilteredProds] = useState(prod)
    function handleSearch(e) {
        const query = e.target.value
        setSearchQuery(query)
        const filteredResults = prod.filter((product) => {
            const { Id, Name, Author } = product
            return (
                Id.toString().includes(query) ||
                Name.toLowerCase().includes(query.toLowerCase()) ||
                Author.toLowerCase().includes(query.toLowerCase())
            )
        })
        setFilteredProds(filteredResults)
    }
    const [selectCat, setSelectCat] = useState("")
    const handleCat = (e) => {
        const selectedCat = e.target.value
        if (selectedCat !== selectCat) {
            setSelectCat(selectedCat)
            nav(`/cat/${selectedCat}`)
        }
    }
    const getFilteredProds = (selectCat) => {
        const newProds = prod.filter((item) => item.Category === selectCat)
        return newProds
    }
    const distinctCategory=[...new Set(prod.map(item=>item.Category))]
    return (
        <div>
            <div>
                <select name="" id="" onChange={handleCat}>
                    <option value="">Select Category</option>
                    {distinctCategory.map((Category) =>
                        <option value={Category}>{Category}</option>
                    )}
                </select>
            </div><br />
            <input type="text" name="search" onChange={handleSearch} placeholder="Search Here" /> <br /><br />
            <button onClick={Likebtn}>LIKED PRODUCTS</button><br /><br />
            <button onClick={Cartbtn}>CART</button>
            {
                filteredProds.map((ink) =>
                    <div>
                        <h1>{ink.Id}</h1>
                        <h2>{ink.Name}</h2>
                        <h3>{ink.Author}</h3>
                        <h4>{ink.Category}</h4>
                        <img width={300} height={300} src={ink.Image} alt="img" />
                        <br />
                        <button onClick={() => addtolikeproducts(ink)}>{
                            likeproducts.includes(ink) ? "UNLIKE" : "LIKE"
                        }</button>
                        <button onClick={() => addtoCartproducts(ink)}>ADD TO CART</button>

                    </div>
                )

            }

        </div>
    )

}
export default Dis