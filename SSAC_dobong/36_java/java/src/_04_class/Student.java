package _04_class;
// 패키지? -> 여러 클래스를 가지고 있는 디렉토리
// 클래스를 유일하게 만들어주는 식별자
public class Student {
    // 1. 클래스의 필드
    public String name;
    public int grade;

    // 2. 클래스의 메소드
    // 2-1) 클래스의 생성자
    public Student(String name, int g){
        // Student s1 = new Student("rekey");
        // 생성자의 인자를 이용해서 클래스의 필드를 초기화할 수 있다.
        this.name = name; // 클래스의 변수 초기화
        // this 키워드를 사용하지 않아도 가능하긴 함 (단, 명확하게 하기 위해 쓰는 것이 일반적)
        grade = g;
    }

    // 2-2) 클래스(생성자가 아닌)의 메소드
    public void goToSchool(){ // 반환값 X, 매개변수 X
        System.out.println("학교에 갑니다.");
    }

    public void  study(String subject){ // 반환값 X, 매겨변수 O
        System.out.println(subject + " 공부중..");
    }

    public int getGrade(){ // 반환값 O, 매내변수 X
        return this.grade;
    }

    public String getTestResult(int score){
        return (this.name + "학생의 점수: " + score);
    }

    @Override
    public String toString(){
        return "Student {name=\"" + name + "\", grade=" + grade + "}"; // 메소드 재정의
    }
}
