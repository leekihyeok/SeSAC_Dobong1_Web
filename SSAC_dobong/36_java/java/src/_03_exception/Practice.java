package _03_exception;

import java.util.InputMismatchException;
import java.util.Scanner;
import java.util.HashSet;
import java.util.Set;
public class Practice {
    public static void main(String[] args) {
        int[] nums = {1,2,3,4};
        for (int i = 0; i <= 5; i++) {
            try{
                System.out.println(nums[i]);
            }catch (ArrayIndexOutOfBoundsException e){
                System.out.println("인덱스 범위가 벗어났습니다.");
            }
        }

        Scanner sc = new Scanner(System.in);
        System.out.println("배열 크기를 입력해주세요.");
        try{
            int num = sc.nextInt();
            int[] nums2 = new int[num];
            int avg = 0;
            int sum = 0;
            for (int i = 0; i < num; i++) {
                try{
                    nums2[i] = sc.nextInt();
                } catch (ArrayIndexOutOfBoundsException e) {
                    System.out.println("범위가 벗어났습니다.");
                }
                sum += nums2[i];
            }
            try{
                avg = sum / num;
                System.out.println("평균: " + avg);
            } catch (ArithmeticException e){
                System.out.println("0으로 나눠어 예외가 발생");
            }
        } catch (InputMismatchException e){
            System.out.println("정수를 입력해주세요");
        }

        Scanner scanner = new Scanner(System.in);
        int arraySize = 0;

        // 배열 크기 입력 받기 및 예외 처리
        while (true) {
            try {
                System.out.print("배열 크기를 입력하세요: ");
                arraySize = scanner.nextInt();
                if (arraySize <= 0) {
                    throw new IllegalArgumentException("배열 크기는 양수여야 합니다.");
                }
                break;
            } catch (InputMismatchException e) {
                System.out.println("숫자를 입력하세요.");
                scanner.next(); // 잘못된 입력을 제거
            } catch (IllegalArgumentException e) {
                System.out.println(e.getMessage());
            }
        }

        int[] array = new int[arraySize];
        System.out.println("7개의 정수를 입력하세요:");

        for (int i = 0; i < arraySize; i++) {
            while (true) {
                try {
                    System.out.print("정수 " +(i + 1) + "번째 요소: ");
                    array[i] = scanner.nextInt();
                    break;
                } catch (InputMismatchException e) {
                    System.out.println("숫자를 입력하세요.");
                    scanner.next(); // 잘못된 입력을 제거
                }
            }
        }

        // 중복 요소 찾기
        Set<Integer> seen = new HashSet<>();
        Set<Integer> duplicates = new HashSet<>();

        for (int num : array) {
            if (!seen.add(num)) {
                duplicates.add(num);
            }
        }

        // 중복된 요소 출력
        if (duplicates.isEmpty()) {
            System.out.println("중복된 요소가 없습니다.");
        } else {
            System.out.println("중복된 요소: " + duplicates);
        }

        scanner.close();



    }
}
