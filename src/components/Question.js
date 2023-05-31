import React from "react";
import lang from "../lang";

function Question(props) {
    const answers = props.answers.map((answer, index) => {
        const checked = props.path && props.path[answer];
        return (
            <button
                key={index}
                className={`btn btn-outline-primary ${ checked ? 'checked' : '' }`}
                onClick={() => props.toggleAnswer(props.index, answer)}
            >
                {answer}
            </button>
        );
    });

    const checkCounter = props.answers.reduce((total, answer) => {
        if (props.path && props.path[answer]) {
            return total + 1;
        } else {
            return total;
        }
    }, 0);

    return (
        <div className="question" style={!props.active ? { display: 'none'} : {}}>
            <h3>{props.question}</h3>
            <p>{props.description}</p>
            <div className="answers">
                {answers}
            </div>
            <div className="actions">
                { props.last ? (
                    <button type="button" className="btn btn-primary" onClick={props.handleLast} disabled={!checkCounter}>
                        {lang['last']}
                    </button>
                ): (
                    <button type="button" className="btn btn-primary" onClick={props.handleNext} disabled={!checkCounter}>
                        {lang['next']}
                    </button>
                )}
                { !props.first && (
                    <button type="button" className="btn btn-link" onClick={props.handlePrev}>
                        {lang['prev']}
                    </button>
                )}
            </div>
        </div>
    )
}
export default Question;