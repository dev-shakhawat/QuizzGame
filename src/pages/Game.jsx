import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


// reducers
import { submitAnswer } from '../redux/slices/quizSlice'
import { nextQuestion } from '../redux/slices/quizSlice'
import { backQuestion } from '../redux/slices/quizSlice'
import { resetGame } from '../redux/slices/quizSlice'


// icons
import { FcNext } from "react-icons/fc";
import { FcProcess } from "react-icons/fc";
import { FcPrevious } from "react-icons/fc";

export const Game = () => {

    const dispatch = useDispatch();
    const questionIndex = useSelector(state => state.quiz.questionIndex);
    const questions = useSelector(state => state.quiz.questions);
    const score = useSelector(state => state.quiz.score);
    const selected = useSelector(state => state.quiz.selected);
    const isCorrect = useSelector(state => state.quiz.isCorrect);

    const handelSubmitAnswer = (option , index) => {
        dispatch(submitAnswer({ans: option , id:index}))
        setTimeout(() => {
            dispatch(nextQuestion());
          }, 2000);
    }
  return (
    <div className='grid  h-screen place-items-center   '>
        <div className=" p-5 shadow-lg rounded-lg lg:w-1/2 w-full  ">
            <h3 className="text-2xl flex justify-between border-b  ">
                <span> Question : {questions[questionIndex].id}</span>
                <span>Score : {score}</span>
            </h3>
            <h4 className="text-xl mt-10  ">{questions[questionIndex].question}</h4>

            <div className="mt-5">
                {questions[questionIndex].options.map((option , index) => (
                    <button key={index} onClick={() => handelSubmitAnswer(option , index)} className={`text-left w-full block my-3 p-2 bg-gray-300/10 rounded-md hover:bg-gray-400/10 pl-5  
                        ${selected?.id === index && selected?.correct === option && "bg-green-400 hover:bg-green-400 text-black " }
                        ${selected?.id === index && selected?.correct !== option && "bg-red-400 hover:bg-red-400 "}
                        ${selected?.correct === option && "bg-green-400 hover:bg-green-400 text-black "}   `}>{option}</button>
                ))}
            </div>
            <div className="flex justify-between  ">
                {/* back button */}
                <button type="button" className='btn' onClick={()=> dispatch(backQuestion())}><FcPrevious className='text-xl'/>Back</button>

                {/* reset button */}
                <button type="button" className='btn' onClick={()=> dispatch(resetGame())}>Reset <FcProcess className='text-xl'/></button>

                {/* next button */}
                <button type="button" className='btn' onClick={()=> dispatch(nextQuestion())}  >Next <FcNext className='text-xl'/></button>
            </div>
        </div>
    </div>
  )
}
