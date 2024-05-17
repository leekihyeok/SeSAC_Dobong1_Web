package _01_practice1;
import java.util.Scanner;
public class Practice01 {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);
        System.out.println("이름을 입력하세요");
        String name = sc.next();
        System.out.println("나이를 입력하세요");
        int num = sc.nextInt();

        System.out.println("안녕하세요!\t" + name + "("+num+"세)");

    }
}
