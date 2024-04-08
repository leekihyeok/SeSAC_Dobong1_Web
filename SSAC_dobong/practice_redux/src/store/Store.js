// import { createStore } from 'redux';
import { configureStore } from "@reduxjs/toolkit";

// 초기 상태 정의
const initialState = {
  balance: 0,
};

// 액션 타입 정의
const DEPOSIT = "DEPOSIT";
const WITHDRAW = "WITHDRAW";

// 액션 생성자 함수
export const depositAmount = (amount) => ({
  type: DEPOSIT,
  amount,
});

export const withdrawAmount = (amount) => ({
  type: WITHDRAW,
  amount,
});

// 리듀서 함수
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.amount,
      };
    case WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.amount,
      };
    default:
      return state;
  }
};

// 스토어 생성
const Store = configureStore({ reducer: reducer });

export default Store;
