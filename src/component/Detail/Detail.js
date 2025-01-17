import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import "./styles.css";
import volver from "../../Assest/img/Iconos/izquierda.png";
import ItemCount from "../ItemCount/ItemCount";
import { CartContext } from "../Context/CartProvider";
import { ToastContainer } from "react-toastify";

const Detail = ({ courses }) => {
  const [quantityAdd, setQuantityAdd] = useState(0);
  const { addCourse } = useContext(CartContext);

  const handleAddToCart = (number) => {
    setQuantityAdd(number);
    addCourse(courses, number);
  };

  return (
    <div className="detail">
      <Link to="/cursos">
        <img src={volver} alt="volver" width={50} height={50} />
      </Link>
      <div className="card-box" key={courses.id}>
        <div className="card-header">{courses.name}</div>
        <div className="card-body text-secondary">
          <h5 className="card-title">
            Incluye {courses.number_courses} cursos
          </h5>
          {courses.course_list && (
            <ul className="card-list">
              {courses.course_list.map((courses, index) => (
                <li key={index}>{courses}</li>
              ))}
            </ul>
          )}
          <h5 className="card-title">Tiempo de cursada:</h5>
          <p className="week">
            {courses.number_weeks} semanas / 2 clases semanales
          </p>
          <span className="price">${courses.price}</span>
        </div>

        {quantityAdd > 0 ? (
          <Link className="fill" to="/cart">
            Ver Carrito
          </Link>
        ) : (
          <ItemCount
            initial={1}
            stock={courses.stock}
            productAdd={handleAddToCart}
            courseName={courses.name}
          />
        )}
      </div>
      <ToastContainer />
    </div>
  );
};
export default Detail;
