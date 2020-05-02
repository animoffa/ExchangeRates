import React from 'react';
import "./App.css"

const App = (props) => {
    let Month= props.formatDate.getMonth()+1;
     let MonthToPrint= Month > 9 ? Month : "0" + Month;

    return (<div>
            <h1>Актуальный курс валют</h1>
            <div className="container">
                <section className="total">
                    <div className="total__header">
                        <h3>Последнее обновление курса: {props.formatDate.getDate() > 9 ? props.formatDate.getDate() : "0" + props.formatDate.getDate()}.
                            {MonthToPrint}.
                            {props.formatDate.getFullYear()}
                        </h3>

                    </div>
                    <div className="total__main">
                        <div className="total__main-item total__income">
                            <h4>Доллар </h4>

                            <p className="total__money total__money-income">
                                {props.dollar} ₽
                            </p>
                        </div>
                        <div className="total__main-item total__expenses">
                            <h4>Евро</h4>
                            <p className="total__money total__money-expenses">
                                {props.euro} ₽
                            </p>
                        </div>
                    </div>
                </section>

                <section className="operation">
                    <h3>Операции</h3>
                    <div id="form">
                        <label>
                            <button type="submit" className="operation__add" onClick={(e) => {
                                props.getDollar()
                            }}>Получить курс доллара
                            </button>
                        </label>
                        <label>
                            <button type="submit" className="operation__add" onClick={(e) => {
                                props.getEuro()
                            }}>Получить курс Евро
                            </button>
                        </label>
                        <button type="submit" className="operation__add" onClick={(e) => {
                            props.getRate()
                        }}>Получить все курсы
                        </button>
                    </div>
                </section>
                <p><a href="https://www.cbr-xml-daily.ru/" className="cb-href">Курсы ЦБ РФ в XML и JSON, API</a></p>
            </div>
        </div>

    )
};
export default App;