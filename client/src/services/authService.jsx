import { userLogin, userRegister } from "../redux/features/auth/authAction";
import store from "../redux/store";

export const handleLogin = (e, email, password, role) => {
  e.preventDefault();
  try {
    if (!role || !email || !password) {
      return alert("Please Proivde All Feilds");
    }
    console.log("login", email, password, role);
    store.dispatch(userLogin({ email, password, role }));
  } catch (error) {
    console.log(error);
  }
};

export const handleRegister = (
  e,
  name,
  role,
  email,
  password,
  phone,
  address,
  website
) => {
  e.preventDefault();

  try {
    console.log(
      "register",
      e,
      name,
      role,
      email,
      password,
      phone,
      address,
      website
    );
    store.dispatch(
      userRegister({ name, role, email, password, phone, address, website })
    );
  } catch (error) {
    console.log(error);
  }
};
