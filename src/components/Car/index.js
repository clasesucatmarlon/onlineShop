import React from 'react';

import Card from '../../assets/images/img01.jpg'

function Car() {
    return (
        <div className="cars show">
            <div className="car show">

                <div className="car__close">
                    <box-icon name="x"></box-icon>
                </div>

                <h2>Your Car</h2>

                <div className="car__center">
                    <div className="car__item">
                        <div className="image">
                            <img src={Card} alt="" />
                        </div>
                        <div className="title__price">
                            <h3>Acer Nitro 5 Gaming, Core i5-9300H</h3>
                            <p className="price">$545</p>
                        </div>
                        <div className="cant__remove">
                            <div className="cant">
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className="cant">2</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className="remove__item">
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="car__center">
                    <div className="car__item">
                        <div className="image">
                            <img src={Card} alt="" />
                        </div>
                        <div className="title__price">
                            <h3>Acer Nitro 5 Gaming, Core i5-9300H</h3>
                            <p className="price">$545</p>
                        </div>
                        <div className="cant__remove">
                            <div className="cant">
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className="cant">2</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className="remove__item">
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="car__center">
                    <div className="car__item">
                        <div className="image">
                            <img src={Card} alt="" />
                        </div>
                        <div className="title__price">
                            <h3>Acer Nitro 5 Gaming, Core i5-9300H</h3>
                            <p className="price">$545</p>
                        </div>
                        <div className="cant__remove">
                            <div className="cant">
                                <box-icon name="up-arrow" type="solid"></box-icon>
                                <p className="cant">2</p>
                                <box-icon name="down-arrow" type="solid"></box-icon>
                            </div>
                            <div className="remove__item">
                                <box-icon name="trash" type="solid"></box-icon>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="car__footer">
                    <h3>Total: <span>$456</span></h3>
                    <button className="btn">Payment</button>
                </div>

            </div>
        </div>
    )
}

export default Car;
