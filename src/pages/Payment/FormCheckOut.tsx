import { FC, useState, useContext } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { FiChevronLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import useFetchAxios from "../../hooks/UseFetchAxios";
import Loading from "../../components/Loading";
import { UserContext } from "../../context/UserContextProvider";
import OrderSuccess from "./OrderSuccess";
import { useSelector } from "react-redux";
import { selectUser } from "../Customeraccount/featurnes/useSlice";


const FormCheckOut: FC = () => {
    const {idUser} = useSelector(selectUser);
    const [isSuccess, setIsSuccess] = useState(false);
    const {responses: responsesDeleteCart, doFetch: deleteCart} = useFetchAxios('https://63782c6a5c477765122d0c95.mockapi.io/users/' + idUser);
    const {isLoading: isLoadingDeleteCart} = responsesDeleteCart;

    const { userData: data, handleSetCart, handleSetTotalItems, totalItems, totalPrice, cart} = useContext(UserContext)

    const { responses, doFetch: postOrder } = useFetchAxios(
        "https://63f7976de40e087c95925720.mockapi.io/order-management"
    );
    const { isLoading } = responses;

    return (
        <>
            {(isLoading || isLoadingDeleteCart) && <Loading />}
            {data && (
                <Formik
                    initialValues={{
                        email: data.email,
                        country: "VietNam",
                        fullName: data.fullName,
                        address: data.address,
                        phone: data.phone,
                    }}
                    validationSchema={Yup.object({
                        email: Yup.string()
                            .required("Please fill Email field")
                            .email("Please fill in the correct email"),
                        country: Yup.string().required("Please fill Country field"),
                        fullName: Yup.string().required("Please fill full name Field"),
                        address: Yup.string().required("Please fill Address field"),
                        phone: Yup.number()
                            .required("Please fill Phone field")
                            .integer("Phone must be an integer"),
                    })}
                    onSubmit={(value) => {
                        postOrder({
                            method: "POST",
                            data: {
                                email: value.email,
                                country: value.country,
                                fullName: value.fullName,
                                address: value.address,
                                phone: value.phone,
                                totalItems: totalItems,
                                totalPrice: totalPrice,
                                products: cart,
                                isDone: false
                            },
                        });
                        deleteCart({
                            method: "PUT",
                            data: {
                                cart: []
                            }
                        })
                        handleSetCart([])
                        setIsSuccess(true);
                        handleSetTotalItems(0);
                    }}
                >
                    {({ errors, touched }: any) => (
                        <Form>
                            {isSuccess && <OrderSuccess />}

                            <h3 className=" text-base mt-4">Contact information</h3>
                            <div className="relative mt-4">
                                <label className="absolute top-1 left-2 text-xs text-gray-400">
                                    Email
                                </label>
                                <Field
                                    name="email"
                                    className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"
                                />
                                {errors.email && touched.email && (
                                    <div className="errMessage">{errors.email}</div>
                                )}
                            </div>
                            <div className="relative mt-4">
                                <label className="absolute top-1 left-2 text-xs text-gray-400">
                                    Country
                                </label>
                                <Field
                                    name="country"
                                    className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"
                                />
                                {errors.country && touched.country && (
                                    <div className="errMessage">{errors.country}</div>
                                )}
                            </div>
                            <div className="relative mt-4">
                                <label className="absolute top-1 left-2 text-xs text-gray-400">
                                    Full Name
                                </label>
                                <Field
                                    name="fullName"
                                    className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"
                                />
                                {errors.fullName && touched.fullName && (
                                    <div className="errMessage">{errors.fullName}</div>
                                )}
                            </div>
                            <div className="relative mt-4">
                                <label className="absolute top-1 left-2 text-xs text-gray-400">
                                    Address
                                </label>
                                <Field
                                    name="address"
                                    className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"
                                />
                                {errors.address && touched.address && (
                                    <div className="errMessage">{errors.address}</div>
                                )}
                            </div>
                            <div className="relative mt-4">
                                <label className="absolute top-1 left-2 text-xs text-gray-400">
                                    Phone
                                </label>
                                <Field
                                    name="phone"
                                    className="w-full px-5 pt-5 pb-1 border h-12 outline-cyan-500 text-xs"
                                />
                                {errors.phone && touched.phone && (
                                    <div className="errMessage">{errors.phone}</div>
                                )}
                            </div>
                            <div className="flex justify-between items-center mt-6">
                                <Link to="/cart">
                                    <div className="flex items-center cursor-pointer">
                                        <FiChevronLeft size={12} className="mr-2 text-teal-500" />
                                        <span className="text-teal-500">Return to Cart</span>
                                    </div>
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-teal-500 py-2 px-2 sm:px-4 lg:px-12 rounded-md hover:bg-slate-800 text-white"
                                >
                                    Continue to shipping
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            )}
        </>
    );
};

export default FormCheckOut;

// {
//     "id": "1",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "2",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "3",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "4",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "5",
//     "imgSrc": "https://cdn.shopify.com/s/files/1/0269/7763/2389/products/Calvin-Klein-Obsession-Mens-Eau-de-Toilette-Spray-4-Best-Price-Fragrance-Parfume-FragranceOutlet.com-Details_medium.jpg?v=1580827686",
//     "name": "CALVIN KLEIN",
//     "desc": "Obsession For Men By Calvin Klein Eau De Toilette Spray",
//     "retailPrice": "86.00",
//     "ourPrice": "63.95",
//     "amount": "2"
// },
// {
//     "id": "6",
//     "imgSrc": "https://marvel-b1-cdn.bc0a.com/f00000000246772/cdn…fume-FragranceOutlet.com-Details.jpg?v=1579124475",
//     "name": "VERSACE",
//     "desc": "Versace Pour Homme For Men By Gianni Versace Eau De Toilette Spray",
//     "retailPrice": "55.00",
//     "ourPrice": "44.95",
//     "amount": "1"
// }
