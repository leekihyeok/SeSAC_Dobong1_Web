package _04_class.d_inheritence;

public class StudentEx {
    public static void main(String[] args) {
//        Student std1 = new Student("이기혁", 28, "도봉");
//        System.out.println(std1.name);
//        System.out.println(std1.age);
//        System.out.println(std1.campus);
//        std1.setCampus("Dobong"); // 자식 클래스의 메소드
//        std1.say(); // 부모 클래스에게 상속받은 메소드
//        std1.eat("바나나");
        Student std2 = new Student("이기혁", 28);
        System.out.println(std2.getName());
        System.out.println(std2.getAge());
        System.out.println(std2.getCampus());
        std2.setCampus("도봉");
    }
}
