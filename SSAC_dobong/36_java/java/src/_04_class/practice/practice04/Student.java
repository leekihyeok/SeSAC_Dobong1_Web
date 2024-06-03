package _04_class.practice.practice04;

public class Student {
    // 인스턴스 필드
    private String name;
    private String studentID;
    private int grade;

    // 클래스 변수 (static 변수)
    private static int totalStudents = 0;

    // 생성자
    public Student(String name, String studentID, int grade) {
        this.name = name;
        this.studentID = studentID;
        this.grade = grade;
        totalStudents++;  // 새로운 인스턴스가 생성될 때마다 증가
    }

    // name 필드의 getter와 setter
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    // studentID 필드의 getter와 setter
    public String getStudentID() {
        return studentID;
    }

    public void setStudentID(String studentID) {
        this.studentID = studentID;
    }

    // grade 필드의 getter와 setter
    public int getGrade() {
        return grade;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }

    // 전체 학생 수를 반환하는 클래스 메소드
    public static int getTotalStudents() {
        return totalStudents;
    }

    // 학생 정보를 출력하는 메소드
    public void displayInfo() {
        System.out.println("=========학생 정보=========");
        System.out.println("이름: " + name);
        System.out.println("학번: " + studentID);
        System.out.println("학년: " + grade);
    }

    // 메인 메소드 (테스트용)
    public static void main(String[] args) {
        // Student 객체 생성
        Student student1 = new Student("홍길동", "20230001", 1);
        Student student2 = new Student("김철수", "20230002", 2);
        Student student3 = new Student("이기혁", "20230003", 3);

        // 학생 정보 출력
        student1.displayInfo();
        student2.displayInfo();
        student3.displayInfo();

        // 전체 학생 수 출력
        System.out.println();
        System.out.println("총 학생 수는 " + Student.getTotalStudents() + "명 입니다.");
    }
}
