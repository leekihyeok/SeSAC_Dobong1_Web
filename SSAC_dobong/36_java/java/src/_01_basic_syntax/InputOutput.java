package _01_basic_syntax;

import java.util.Scanner;
public class InputOutput {
    public static void main(String[] args) {
        System.out.print("안녕하세요? \n"); // \n - 개행문자
        System.out.print("안녕하세요?");
        System.out.print("반갑습니다.\t"); // \t - 탭
        System.out.println("잘 부탁드립니다.");

        // 입력
        Scanner scan = new Scanner(System.in);
        System.out.println("공백으로 구분하여 이름/나이/키/결혼여부 입려해주세요.");
        String name = scan.next();
        int age = scan.nextInt();
        double height = scan.nextDouble();
        boolean isSingle = scan.nextBoolean();
        scan.close();

        System.out.println("입력 결과 출력");
        System.out.println("이름: " + name);
        System.out.println("나이: " + age);
        System.out.println("키: " + height);
        System.out.println("결혼여부: " + isSingle);
    }
}
