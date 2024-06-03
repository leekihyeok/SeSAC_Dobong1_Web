package _04_class.practice.practice08;

abstract class Student {
    private String name;
    private String school;
    private int age;
    private String studentId;

    // 생성자
    public Student(String name, String school, int age, String studentId) {
        this.name = name;
        this.school = school;
        this.age = age;
        this.studentId = studentId;
    }

    // getter 메소드
    public String getName() {
        return name;
    }

    public String getSchool() {
        return school;
    }

    public int getAge() {
        return age;
    }

    public String getStudentId() {
        return studentId;
    }

    public abstract void todo();
}

class Kim extends Student {
    public Kim(String name, String school, int age, String studentId) {
        super(name, school, age, studentId);
    }

    @Override
    public void todo() {
        System.out.println("점심은 김가네 김밥");
    }
}

class Baek extends Student {
    public Baek(String name, String school, int age, String studentId) {
        super(name, school, age, studentId);
    }

    @Override
    public void todo() {
        System.out.println("점심은 백종원 피자");
    }
}

public class Practice {
    public static void main(String[] args) {
        Kim kimStudent = new Kim("김철수", "ABC 고등학교", 17, "20220101");
        Baek baekStudent = new Baek("백영희", "XYZ 고등학교", 18, "20220102");

        System.out.println("=== " + kimStudent.getName() + " 학생 정보 ===");
        System.out.println("학교: " + kimStudent.getSchool());
        System.out.println("나이: " + kimStudent.getAge());
        System.out.println("학번: " + kimStudent.getStudentId());
        kimStudent.todo();

        System.out.println("\n=== "+ baekStudent.getName() +" 학생 정보 ===");
        System.out.println("학교: " + baekStudent.getSchool());
        System.out.println("나이: " + baekStudent.getAge());
        System.out.println("학번: " + baekStudent.getStudentId());
        baekStudent.todo();
    }
}
