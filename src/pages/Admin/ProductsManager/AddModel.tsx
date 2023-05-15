import Addproduct from "./Addproduct";
import Overflay from "../../../components/overflay/Overflay";
import ViewBills from "../ViewBills";

export default function Modal({showModal, onCloseModal, productEdit, isModalAddProduct,showModalBills,dataModelBills} : any) {

  return (
    <>
      {showModal &&
        <div>
          <Overflay />
          <div className="modal-overlay" >
            <div className=" modal-box w-full md:w-3/5">
              <Addproduct  
                onCloseModal = {onCloseModal}
                productEdit = {productEdit}
                isModalAddProduct = {isModalAddProduct}
              />
            </div>
          </div>
        </div>
      }
      {showModalBills&&
         <div>
         <Overflay />
         <div className="modal-overlay" >
           <div className=" modal-box-bills">
             <ViewBills dataModelBills={dataModelBills}/>
           </div>
         </div>
       </div>       
      }
    </>
  );
}