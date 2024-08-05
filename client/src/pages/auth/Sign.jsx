
 import Form from "../../components/shared/Form";
import {useSelector} from 'react-redux'
import Spinner from "../../components/shared/spinner";


const Sign = () => {
    const { loading, error } = useSelector((state) => state.auth);
    return (
      <>
        {error && <span>{alert(error)}</span>}
        {loading ? (
          <Spinner/>
        ) : (
        <div>
            <div className="row g-0">
                <div className="col-md-7 form-banner">
                    <img src="./src/assets/images/banner2.svg" alt="LoginImage" />
                </div>
                <div className="col-md-5 form-container">
                <Form submitBtn={'Login'} formTitle={'Login Page'} formType={'login'}/>
                </div>
            </div>
        </div>
      )
      }
      </>
    );
  };

export default Sign;
