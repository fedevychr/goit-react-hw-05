import { RiseLoader } from "react-spinners";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={css.loader}>
      <RiseLoader color="#36d7b7" />
    </div>
  );
};

export default Loader;
