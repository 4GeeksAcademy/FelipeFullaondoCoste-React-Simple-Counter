import React from "react";

const SecondCounter = ({ digits }) => {

    return (
        <>
            <div className="card-title container d-flex justify-content-center p-4">
                <div className="card bg-dark text-white mx-2">
                    <div className="card-body d-flex justify-content-center">
                        <div className="icon-clock">
                            <i className="far fa-clock fa-3x text-light"></i>
                        </div>
                    </div>
                </div>
                <div className="card bg-dark text-white mx-2">
                    <div className="card-body d-flex justify-content-center">
                        <h1 className="card-title">{digits[0]}</h1>
                    </div>
                </div>
                <div className="card bg-dark text-white mx-2">
                    <div className="card-body d-flex justify-content-center">
                        <h1 className="card-title">{digits[1]}</h1>
                    </div>
                </div>
                <div className="card bg-dark text-white mx-2">
                    <div className="card-body d-flex justify-content-center">
                        <h1 className="card-title">{digits[2]}</h1>
                    </div>
                </div>
                <div className="card bg-dark text-white mx-2">
                    <div className="card-body d-flex justify-content-center">
                        <h1 className="card-title">{digits[3]}</h1>
                    </div>
                </div>
                <div className="card bg-dark text-white mx-2">
                    <div className="card-body d-flex justify-content-center">
                        <h1 className="card-title">{digits[4]}</h1>
                    </div>
                </div>
                <div className="card bg-dark text-white mx-2">
                    <div className="card-body d-flex justify-content-center">
                        <h1 className="card-title">{digits[5]}</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondCounter;