import React from "react";
import Question from "./Question";
import parsePath from "../libs/PathParser";

function Quiz(props) {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [path, setPath] = React.useState({});

    function finish() {
        const solutions = props.quiz.solutions;
        const parsedPath = parsePath(path);

        const actions = [];
        solutions.forEach(solution => {
            let win = true;
            solution.solution.forEach((step, index) => {
                step.forEach(s => {
                    if (!parsedPath[index].includes(s)) {
                        win = false;
                    }
                });
            });
            if (win) {
                actions.push(solution.action);
            }
        });

        if (typeof props.handleFinish !== 'undefined') {
            props.handleFinish(actions);
        }

    }
    function next() {
        setActiveIndex(val => {
            if (val < props.quiz.questions.length - 1) {
                return val + 1;
            }
            return val;
        });
    }

    function prev() {
        setActiveIndex(val => {
            if (val > 0) {
                return val - 1;
            }
            return val;
        });
    }

    function toggleAnswer(questionIndex, answer) {
        const limit = props.quiz.questions[questionIndex].select;
        setPath(prevPath => {
            let prevAnswers = prevPath[questionIndex];
            let newAnswer;
            if (limit === 1) {
                newAnswer = setSingleCheck(prevAnswers, answer);
            } else {
                newAnswer = setMultipleCheck(prevAnswers, answer, limit);
            }

            return {
                ...prevPath,
                [questionIndex]: newAnswer
            }
        });
    }

    function setSingleCheck(prevAnswers, answer) {
        if (typeof prevAnswers !== 'undefined' && typeof prevAnswers[answer] !== 'undefined') {
            return {
                [answer]: !prevAnswers[answer],
            }
        }
        return {
            [answer]: true,
        }
    }
    function setMultipleCheck(prevAnswers, answer, limit) {
        let newAnswer;
        if (typeof prevAnswers !== 'undefined') {
            if (typeof prevAnswers[answer] !== 'undefined') {
                newAnswer = {
                    ...prevAnswers,
                    [answer]: !prevAnswers[answer],
                }
            } else {
                newAnswer = {
                    ...prevAnswers,
                    [answer]: true,
                }
            }
            // Limit
            if (Object.values(newAnswer).filter(t => t).length > limit) {
                newAnswer = {...prevAnswers};
            }
        } else {
            newAnswer = {
                [answer]: true,
            }
        }
        return newAnswer;
    }

    const questions = props.quiz.questions.map((question, index,questions ) => {
       return (
           <Question
               key={index}
               index={index}
               question={question.question}
               answers={question.answers}
               select={question.select}
               description={question.description}
               active={index === activeIndex}
               last={index + 1 === questions.length}
               first={index === 0}
               handleLast={finish}
               handleNext={next}
               handlePrev={prev}
               toggleAnswer={toggleAnswer}
               path={path[index]}
           />
       );
    });

    return (
        <div className="quiz">
            <h2>{props.quiz.title}</h2>
            <div className="questions">
                {questions}
            </div>
        </div>
    )
}

export default Quiz;