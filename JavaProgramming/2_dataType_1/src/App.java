public class App {
    public static void main(String[] args) throws Exception {
        // == != 참조 타입
        int[] arr1;
        int[] arr2;
        int[] arr3;

        arr1 = new int[] {1,2,3};
        arr2 = new int[] {1,2,3};
        arr3 = arr2;

        System.out.println(arr1 == arr2); // false - 안에 있는 배열의 값은 같으나 힙 영역의 번지(객체)가 다름
        System.out.println(arr2 == arr3); // true - 안에 있는 배열의 값은 같고 힙 영역의 번지도(객체) 같음


        // null 과 NullPointerException
        String  refVar1 = "자바";
        String  refVar2 = null;

        System.out.println(refVar1 == null);
        System.out.println(refVar2 == null); // null도 비교 연산 가능

        int[] intArr = null; // intArr[0] = 10; // NullPointerExeption - 예외가 발생 -> 참조변수가 객체를 참조하지 않음

        String str = null; // string은 참조타입이라 null 가능 -> 기본타입은 null 대입 불가

        String hobby = "여행";
        // hobby = null; // 참조하는 번지를 강제로 없애줌
        hobby = "영화"; // 기존에 있던 번지는 쓰레기 객체가 되고 다른 번지(객체)로 값이 생김 -> 같은 번지에 값이 바뀌는 것이 아님

        String kind1 = "자동차";
        String kind2 = kind1;
        kind1 = null;
        System.out.println("kind2 " + kind2); // kind2 는 쓰레기 객체가 되지 않음


        // String
        String name1 = "홍길동"; // 리터럴로 생성된 객체를 참조하기 때문에 같음
        String name2 = "홍길동"; //
        String name3 = new String("홍길동"); // 새로운 string 객체로 생성되기 때문에 새로 생기게 됨

        System.out.println(name1 == name2); // true
        System.out.println(name1 == name3); // false - 번지가 다르게됨
    }
}
