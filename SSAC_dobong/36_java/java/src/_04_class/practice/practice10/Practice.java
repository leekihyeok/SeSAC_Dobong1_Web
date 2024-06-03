package _04_class.practice.practice10;

class Mp3Player implements Music {
    String name;
    public Mp3Player(String name) {
        this.name = name;
    }
    @Override
    public String play() {
        System.out.println("=== MP3 Player ===");
        System.out.println("MP3 플레이어에서 '" + this.name + "' 음악을 재생합니다.");
        return null;
    }

    @Override
    public String stop() {
        System.out.println("MP3 플레이어에서 '" + this.name + "' 음악을 정지합니다.");
        return null;
    }
}

class CdPlayer implements Music {
    String name;
    public CdPlayer(String name) {
        this.name = name;
    }
    @Override
    public String play() {
        System.out.println("=== CD Player ===");
        System.out.println("CD 플레이어에서 '" + this.name + "' 음악을 재생합니다.");
        return null;
    }

    @Override
    public String stop() {
        System.out.println("CD 플레이어에서 '" + this.name + "' 음악을 정지합니다.");
        return null;
    }
}

class MusicPlayer {
    private Mp3Player mp3Player;
    private CdPlayer cdPlayer;

    public MusicPlayer() {
        this.mp3Player = new Mp3Player("아이유 블루밍");
        this.cdPlayer = new CdPlayer("아이유 꽃같다");
    }

    public void playMp3() {
        mp3Player.play();
    }

    public void stopMp3() {
        mp3Player.stop();
    }

    public void playCd() {
        cdPlayer.play();
    }

    public void stopCd() {
        cdPlayer.stop();
    }

}

public class Practice{
    public static void main(String[] args) {
        MusicPlayer mp = new MusicPlayer();
        mp.playMp3();
        mp.stopMp3();
        mp.playCd();
        mp.stopCd();
    }
}
