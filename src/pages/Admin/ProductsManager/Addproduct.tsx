import { FC, useState, useContext, ChangeEvent } from 'react'
import { Formik, Form, Field } from "formik";
import * as Yup from 'yup';
import { ProductsContext } from '../../../context/ProductsProvider';
import Loading from '../../../components/Loading';

interface ModalType {
  onCloseModal: any;
  productEdit: any;
  isModalAddProduct: boolean;
}


const Addproduct: FC<ModalType> = ({ onCloseModal, productEdit, isModalAddProduct }) => {

  const { products, handleSetProducts } = useContext(ProductsContext);

  const [loading, setLoading] = useState(false);

  const [baseImage, setBaseImage] = useState<any>('');

  const upLoadImg = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const file = e.target.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setBaseImage(reader.result)
      }
    }
  }

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    if (isModalAddProduct) {
      const data = {
        imgSrc: baseImage,
        name: e.target.name.value,
        desc: e.target.desc.value,
        retailPrice: e.target.retailPrice.value,
        ourPrice: e.target.ourPrice.value,
        sex: e.target.sex.value
      }

      fetch('https://63782c6a5c477765122d0c95.mockapi.io/perfume-products', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => { console.log(data) })
        .catch(error => console.log(error))
      const newProducts = [...products, { ...data, id: Number(products[products.length - 1].id) + 1 }];
      handleSetProducts(newProducts);
    } else {
      const data = {
        name: e.target.name.value,
        desc: e.target.desc.value,
        retailPrice: e.target.retailPrice.value,
        ourPrice: e.target.ourPrice.value,
        sex: e.target.sex.value
      }

      fetch('https://63782c6a5c477765122d0c95.mockapi.io/perfume-products/' + productEdit.id, {
        method: "PUT",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => console.log(data))
      const newProducts = products.map((product: any) => {
        if (product.id === productEdit.id) {
          return { ...product, ...data };
        }
        return product;
      })

      handleSetProducts(newProducts);
    }
    onCloseModal();
    setLoading(false)
  }

  return (
    <>
      {loading && <Loading />}
      {isModalAddProduct &&
        <div className="AddInput">
          <div className='flex justify-center items-center'>
            {baseImage === "" ? <label htmlFor="imgSrc" className='previewImg img-priview'></label>
            : <label 
                htmlFor="imgSrc" 
                className='previewImg' 
                style={{
                backgroundImage: `url(${baseImage})`
                }}>
              </label>
            }
            
          </div>
          <input id='imgSrc' name='imgSrc' type="file" onChange={(e: any) => { upLoadImg(e) }} className="AddInputBox hidden" />
        </div>
      }
      <Formik
        initialValues={{
          name: productEdit.name ? productEdit.name : '',
          desc: productEdit.desc ? productEdit.desc : "",
          retailPrice: productEdit.retailPrice ? productEdit.retailPrice : 0,
          ourPrice: productEdit.ourPrice ? productEdit.ourPrice : 0,
          sex: productEdit.sex ? productEdit.sex : ""
        }}

        validationSchema={Yup.object({
          name: Yup.string()
            .required("Please fill name field"),
          desc: Yup.string()
            .required("Please fill desc field"),
          retailPrice: Yup.number()
            .integer("Price must be an integer")
            .required("Please fill retail Price field"),
          ourPrice: Yup.number()
            .integer("Price must be an integer")
            .required("Please fill Phone field")
        })}
        onSubmit={(values) => {
          console.log('ok')
        }}
      >
        {({ errors, touched }: any) => (
          <Form onSubmit={handleSubmit}>
            <div className="AddInput">
              <label htmlFor="name">Name</label>
              <Field id='name' name="name" type="text" className="AddInputBox" />
              {errors.name && touched.name && (
                <div className="errMessage">{errors.name}</div>
              )}
            </div>
            <div className="AddInput">
              <label htmlFor="desc">Desc</label>
              <Field id='desc' name="desc" type="text" className="AddInputBox" />
              {errors.desc && touched.desc && (
                <div className="errMessage">{errors.desc}</div>
              )}
            </div>
            <div className="AddInput">
              <label htmlFor="retailPrice">Retail Price</label>
              <Field id='retailPrice' name="retailPrice" type="text" className="AddInputBox" />
              {errors.retailPrice && touched.retailPrice && (
                <div className="errMessage">{errors.retailPrice}</div>
              )}
            </div>
            <div className="AddInput">
              <label htmlFor="ourPrice">Our Price</label>
              <Field id='ourPrice' name="ourPrice" type="text" className="AddInputBox" />
              {errors.ourPrice && touched.ourPrice && (
                <div className="errMessage">{errors.ourPrice}</div>
              )}
            </div>
            <div className="AddInput">
              <label htmlFor="sex">Sex</label>
              <Field as='select' id='sex' name="sex" className="AddInputBox">
                <option value="men">Men</option>
                <option value="women">Women</option>
              </Field>
            </div>
            {/* <button type='submit' className='px-5 bg-black text-white'>ADD</button> */}

            <div className='flex justify-end mt-6'>
              <button className='px-1 border-2 border-black' type='button' onClick={onCloseModal}>CANCEL</button>
              <button className='px-5 bg-black text-white' type='submit' >ADD</button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default Addproduct