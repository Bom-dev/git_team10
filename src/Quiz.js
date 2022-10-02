import questions from "./questions.json";
import { useState } from "react";

export default function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [selecting, setSelecting] = useState(false);

    const handleAnswerOption = (answer) => {
        setSelectedOptions([
            (selectedOptions[currentQuestion] = { answerByUser: answer }),
        ]);
        setSelectedOptions([...selectedOptions]);
    };

    const handlePrevious = () => {
        const prevQues = currentQuestion - 1;
        prevQues >= 0 && setCurrentQuestion(prevQues);
    };

    const handleNext = () => {
        const nextQues = currentQuestion + 1;
        nextQues < questions.length && setCurrentQuestion(nextQues);
    };

    const handleSubmitButton = () => {
        for (let i = 0; i < questions.length; i++) {
            questions[i].answerOptions.map(
                (answer) =>
                    answer.answer === selectedOptions[i]?.answerByUser
            );
        }
        setSelecting(true);
    };

    return (
        <div className="flex flex-col w-screen px-5 h-screen bg-white justify-center items-center">
            <title>Quiz App</title>
            {selecting ? (
                <div>
                    {/* {selectedOptions[0].answerByUser === "Art" ? <h1 className="text-3xl font-semibold text-center text-slate-500">Let's try to be a Graphic Designer!</h1> : null}
                    {selectedOptions[0].answerByUser === "Reading" ? <h1 className="text-3xl font-semibold text-center text-slate-500">Let's try to be a Data Entry !</h1> : null}
                    {selectedOptions[0].answerByUser === "Writing" ? <h1 className="text-3xl font-semibold text-center text-slate-500">Let's try to be a UX Researcher!</h1> : null}
                    {selectedOptions[0].answerByUser === "Math" ? <h1 className="text-3xl font-semibold text-center text-slate-500">Let's try to be a Web Developer!</h1> : null} */}
                    <h1 className="text-3xl font-semibold text-center text-slate-500">Thanks for the submitting!</h1>
                    <div className="flex justify-between w-full mt-4 text-white">
                        <button onClick={(e) => window.location.reload(false)}
                            className="w-[49%] py-3 bg-blue-600 rounded-lg">Go Back</button>
                    </div>
                </div>
            ) : (
                <>
                    <div className="flex flex-col items-start w-full">
                        <h4 className="mt-10 text-xl text-slate-500">
                            Question {currentQuestion + 1} of {questions.length}
                        </h4>
                        <div className="mt-4 text-2xl text-slate-500">
                            {questions[currentQuestion].question}
                        </div>
                    </div>
                    <div className="flex flex-col w-full">
                        {questions[currentQuestion].answerOptions.map((answer, index) => (
                            <div
                                key={index}
                                className="flex items-center w-full py-4 pl-5 m-2 ml-0 space-x-2 border-2 cursor-pointer border-black/10 rounded-xl bg-black/5"
                                onClick={(e) => handleAnswerOption(answer.answer)}
                            >
                                {currentQuestion === 2 || currentQuestion === 3 ? <input
                                    type="checkbox"
                                    name={answer.answer}
                                    value={answer.answer}
                                    onChange={(e) => handleAnswerOption(answer.answer)}
                                    className="w-6 h-6 bg-black"
                                /> : <input
                                    type="radio"
                                    name={answer.answer}
                                    value={answer.answer}
                                    checked={
                                        answer.answer ===
                                        selectedOptions[currentQuestion]?.answerByUser
                                    }
                                    onChange={(e) => handleAnswerOption(answer.answer)}
                                    className="w-6 h-6 bg-black"
                                />}
                                <p className="ml-6 text-slate-500">{answer.answer}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between w-full mt-4 text-white">
                        {currentQuestion === 0 ? null : <button
                            onClick={handlePrevious}
                            className="w-[49%] py-3 bg-blue-600 rounded-lg"
                        >Previous</button>}

                        {currentQuestion === 0 ? <button
                            onClick={
                                currentQuestion + 1 === questions.length
                                    ? handleSubmitButton
                                    : handleNext
                            }
                            className="w-[99%] py-3 bg-blue-600 rounded-lg"
                        >
                            {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                        </button> : <button
                            onClick={
                                currentQuestion + 1 === questions.length
                                    ? handleSubmitButton
                                    : handleNext
                            }
                            className="w-[49%] py-3 bg-blue-600 rounded-lg"
                        >
                            {currentQuestion + 1 === questions.length ? "Submit" : "Next"}
                        </button>}
                    </div>
                </>
            )}
        </div>
    );
}