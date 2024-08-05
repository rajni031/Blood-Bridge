// /* eslint-disable no-unused-vars */
import { useEffect,useState } from "react";
import Layout from "../../components/shared/Layout/Layout";
import API from "../../services/API";

const DonarDashboard = () => {
  const [data, setData] = useState([]);
  const getDonars = async () => {
    try {
      const { data } = await API.get('/inventory/get-donars')
        console.log(data);
      if (data?.success) {
        setData(data?.donars);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonars();
  }, []);
  
  return (
    <Layout>
      <h4>donar</h4>
    </Layout>
  )
}

export default DonarDashboard
