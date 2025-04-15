import { createSlice, current } from '@reduxjs/toolkit'
import questions from "../../quiz_questions.json"

const initialState = {
  questionIndex: 0,
  // time: 40,
  score: 0,
  questions: questions,
  selected: null,
  isCorrect: null
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    submitAnswer: (state , action) => {
      const answer = action.payload.ans;
      const currentQuestion = state.questions[state.questionIndex];

      state.selected = {id: action.payload.id , correct: currentQuestion.answer};
      state.isCorrect = currentQuestion.answer 
      if(answer === currentQuestion.answer){
        state.score += 1;
      }
      else{

      }
        
    },
    nextQuestion: (state) => {
      state.questionIndex += 1;
      state.selected = null;
      // state.time = 40;
      state.isCorrect = null;
    },
    backQuestion: (state) => {
      if(state.questionIndex > 0){
        state.questionIndex--;
      }
      state.selected = null;
      // state.time = 40;
      state.isCorrect = null;
    },
    resetGame: (state) => {
      return initialState
    }
  },
})

// Action creators are generated for each case reducer function
export const { submitAnswer , nextQuestion , backQuestion , resetGame } = quizSlice.actions

export default quizSlice.reducer