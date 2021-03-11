import React, { useContext } from 'react';

import { DataContext } from '../../context/Dataprovider';


function Car() {

    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [car, setCar] = value.car;
    const [total] = value.total;

    const toogleFalse = (id) => {
        setMenu(false);
    }

    const show1 = menu ? 'cars cars__show' : 'cars';
    const show2 = menu ? "car car__show" : "car";

    const rest = (id) => {
        car.forEach(item => {
            if (item.id === id) {
                item.cantidad === 1 ? item.cantidad = 1 : item.cantidad -= 1
            }
            setCar([...car]);
        })
    }

    const add = (id) => {
        car.forEach(item => {
            if (item.id === id) {
                item.cantidad += 1
            }
            setCar([...car]);
        })
    }

    const removeItem = (id) => {
        if (window.confirm("Do you want remove this element of car?")) {
            car.forEach((item, index) => {
                if (item.id === id) {
                    item.cantidad = 1;
                    car.splice(index, 1)
                }
            })
            setCar([...car])
        }
    }

    return (
        <div className={show1}>
            <div className={show2}>

                <div className="car__close" onClick={toogleFalse}>
                    <box-icon name="x"></box-icon>
                </div>

                <h2>Your Car</h2>

                {
                    car.length === 0 ?
                        <h2
                            style={{ textAlign: "center", fontSize: "3rem" }}>
                            Vacío
                        </h2> : <>
                            {
                                car.map(item => (
                                    <div className="car__center" key={item.id}>

                                        <div className="car__item">
                                            <div className="image">
                                                <img src={item.image.default} alt="" />
                                            </div>
                                            <div className="title__price">
                                                <h3>{item.title}</h3>
                                                <p className="price">${item.price}</p>
                                            </div>
                                            <div className="cant__remove">
                                                <div className="cant">
                                                    <box-icon name="up-arrow" type="solid" onClick={() => add(item.id)}></box-icon>
                                                    <p className="cant">{item.cantidad}</p>
                                                    <box-icon name="down-arrow" type="solid" onClick={() => rest(item.id)}></box-icon>
                                                </div>
                                                <div className="remove__item" onClick={() => removeItem(item.id)}>
                                                    <box-icon name="trash" type="solid"></box-icon>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </>
                }



                <div className="car__footer">
                    <h3>Total: <span>${total}</span></h3>
                    <button className="btn">Payment</button>
                </div>

            </div>
        </div >
    )
}

export default Car;
