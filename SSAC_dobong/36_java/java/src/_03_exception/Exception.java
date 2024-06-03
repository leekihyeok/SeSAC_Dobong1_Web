package _03_exception;

import java.util.InputMismatchException;
import java.util.Scanner;

//- Error - 시스템이 비정상적인 상황에 발생한 경우
//- 코드에 의해 수습할 수 없는 심각한 오류
//
/*
* 일반 예외 (Exception, checked Exception), 실행 예외(Runtime Exception/unchecked Exception)
* - 일반 예외
*   - 확인 시점: 컴파일 시점, 명시적으로 예외처리 반드시 해야 함
*   - IOExcetion, FileNotFoundException
* - 실행 예외
*   - 확인 시점: 런타임 시점, 예외처리를 강제되지 않지만 프로그램의 정상적인 작동을 위해 예외처리를 해주는게 좋다
*   - NullPointException, InputMismathException
* */
public class Exception {

    public static String divide(int x, int y){
        return x+"/"+y+"="+(x/y);
    }
    public static int getLength(String str){
        return str.length();
    }
    public static int getValue(int[] arr, int idx){
        return arr[idx];
    }
    public static void main(String[] args) {
        System.out.println(divide(6,2));

        try {
            System.out.println("나누기 연산 시작");
            System.out.println(divide(6,0));
        } catch(ArithmeticException error) {
            System.out.println("나누기 중 예외 발생" + error.getMessage()); // 예외가 발생한 이유만 보여줌
            System.out.println("나누기 중 예외 발생" + error.toString()); // 예외 종류를 return
            
        } finally {
            System.out.println("나누기 연산 종료");
        }


        // case2. null에 접근
        try{
            System.out.println(getLength("hello"));
            System.out.println(getLength(null));
        } catch (NullPointerException e){
            System.out.println("단어 길이 연산 중 error 발생" + e.getMessage());
            System.out.println("단어 길이 연산 중 error 발생" + e.toString());
        }

        // case3. index 값으로 배열 접근 시 범위에 없는 값으로 접근
        int[] nums = {10,20,30,40,50};

        try{
            System.out.println(getValue(nums, 2));
            System.out.println(getValue(nums, 7));
        }catch (ArrayIndexOutOfBoundsException e){
            System.out.println("예외 발생" + e.getMessage());
            System.out.println("예외 발생" + e.toString());
        }

        // case4. 입력 형식 예외
        Scanner sc = new Scanner(System.in);
        try {
            System.out.println("정수를 하나 입력해주세요");
            int num = sc.nextInt();
            System.out.println("입력한 정수 : " + num);
        } catch (InputMismatchException e){
            System.out.println("입력 예외 발생: " + e.getMessage());
            System.out.println("입력 예외 발생: " + e.toString());
        }
    }
}