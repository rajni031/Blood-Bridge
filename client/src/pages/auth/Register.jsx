import { useSelector } from "react-redux";
import Form from "../../components/shared/Form"
import Spinner from "../../components/shared/spinner";


const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
    
  return (
    <>
    {error && <span>{alert(error)}</span>}
    {loading ? <Spinner/> : ( <div className="row g-0">
      <div className="col-md-7 form-banner">
        <img src= "./src/assets/images/banner1.svg" alt="registerImage"/>
      </div>
      <div className="col-md-5 form-container">
        <Form formTitle={'Register YourSelf'} submitBtn={'Register'} formType={'register'}/>
      </div>
     </div>)}
    
    </>
  )
}

export default Register
