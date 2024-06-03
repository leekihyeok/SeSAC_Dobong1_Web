package _04_class;

// Student 클래스 사용
public class StudentEx {
    public static void main(String[] args) {
        Student s1 = new Student("rekey", 4);
        /*
        * s1 = {name: "rekey", grede: 4, ....하위 메소드}
        * */
        System.out.println(s1);
        System.out.println(s1.toString());

        // 반환값 없이 출력만 하는 메소드
        s1.goToSchool();
        s1.study("자바");

        // 반환값 있는 메소드
        System.out.println(s1.getGrade());
        System.out.println(s1.getTestResult(100));

        Student s2 = new Student("Rumon", 2);
        System.out.println(s2);
        System.out.println("s2인스턴스의 이름: " + s2.name);
        System.out.println("s2인스턴스의 학년: " + s2.grade);
    }
}
