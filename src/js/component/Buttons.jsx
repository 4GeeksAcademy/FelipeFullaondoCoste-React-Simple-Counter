import React from "react";

const Buttons = ({pauseCount, stopCount, resumeCount}) => {

    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="btn-group btn-group-lg" role="group" aria-label="Large button group">
                    <button type="button" className="btn btn-outline-secondary text-light" onClick={pauseCount}>Pause</button>
                    <button type="button" className="btn btn-outline-secondary text-light" onClick={stopCount}>Stop</button>
                    <button type="button" className="btn btn-outline-secondary text-light" onClick={resumeCount}>Resume</button>
                </div>
            </div >
        </>
    );
};

export default Buttons;