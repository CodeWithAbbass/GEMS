import React, { useContext, useState } from 'react';
import stateContext from '../../context/stateContext';
import "../../Css/AddProduct.css"
const AddProduct = (props) => {
    const [product, setProduct] = useState({
        id: '', 
        name: '',
        category: '',
        quantity: '',
        weight: '',
        discount: '',
        date: '',
        author: '',
        description: '', 
        pMainImage: '',
        pOtherImage: '',
    });
    const context = useContext(stateContext);
    const {  } = context;
    const handleAdd = (e) => {
        e.preventDefault();
        // addNote(note.title, note.description, note.tag)
        // setNote({ title: '', description: '', tag: 'default' });
    }
    const onChange = (e) => {
        // console.log('Onchange');
        setProduct({ ...product, [e.target.name]: e.target.value })
    }
    return (
        <div className='AddProduct text-center'>
            <h2>What's New</h2>
            <p>Please fill in the information below:</p>

            {/* <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" value={note.title} className="form-control" id="title" name='title' aria-describedby="emailHelp" onChange={onChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" value={note.description} className="form-control" id="description" name='description' onChange={onChange} required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" value={note.tag} className="form-control" id="tag" name='tag' onChange={onChange} />
                    </div>
                    <button disabled={note.title.length<3 || note.description.length<5} type="submit" className="btn btn-success " onClick={handleAdd}>Add Note</button>
                </form> */}

            <form className="my-4">
                <fieldset>
                    <input id="product_id" name="product_id" placeholder="PRODUCT ID" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" required="" type="text" value={product.id} onChange={onChange}/>
                    <input id="product_name" name="product_name" placeholder="PRODUCT NAME" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" required="" type="text" value={product.name}  onChange={onChange}/>
                    <select className="form-select form-select outline-none shadow-none rounded-0 mb-3 py-2 px-3" aria-label=".form-select-sm example" value={product.category} onChange={onChange}>
                        <option selected>PRODUCT CATEGORY</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <input id="available_quantity" name="available_quantity" placeholder="AVAILABLE QUANTITY" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" required="" type="text" value={product.quantity} onChange={onChange}/>
                    <input id="product_weight" name="product_weight" placeholder="PRODUCT WEIGHT" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" required="" type="text" value={product.weight}  onChange={onChange}/>
                    <input id="percentage_discount" name="percentage_discount" placeholder="PERCENTAGE DISCOUNT" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" required="" type="text" value={product.discount} onChange={onChange}/>
                    <input id="date" name="date" type="date" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" required="" value={product.date} onChange={onChange}/>
                    <input id="author" name="author" placeholder="AUTHOR" className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" required="" type="text" value={product.author} onChange={onChange}/>
                    <textarea id="product_description" name="product_description" placeholder='DESCRIPTION' className="form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" value={product.description} onChange={onChange}></textarea>
                    <input id="filebutton" name="filebutton" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" type="file" value={product.pMainImage} onChange={onChange}/>
                    <input id="filebutton" name="filebutton" className="input-file form-control outline-none shadow-none rounded-0 mb-3 py-2 px-3" type="file" value={product.pOtherImage} onChange={onChange}/>
                    <button type="submit" id="singlebutton" name="singlebutton" className="btn rounded-0 border border-1 border-dark w-100 py-2 px-3" onClick={handleAdd}>ADD PRODUCT</button>

                </fieldset>
            </form>
        </div>
    );
}

export default AddProduct;