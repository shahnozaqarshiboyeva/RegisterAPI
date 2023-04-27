import { ToastContainer ,toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
const Notification =(par)=>{
toast(par.text,{
    position:"top-right",
    autoClose:2000,
    hideProgressBar:false,
    closeOnClick:true,
    pauseOnHover:true,
    draggable:true,
    progress:undefined,
    theme:"light",
    type:par.type
});
}
export default Notification