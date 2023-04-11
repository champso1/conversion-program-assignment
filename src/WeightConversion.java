import java.util.Scanner;

public class WeightConversion {
    private float weight;
    private Scanner sc;

    WeightConversion(Scanner p_sc) {
        this.sc = p_sc;
    }

    void convert() {
        System.out.print("Weight: ");
        this.weight = sc.nextInt();
        System.out.print("\nWhat conversion?\n1) Pounds to Kilograms\n2) Kilograms to Pounds\nChoice: ");
        int convert = sc.nextInt();
        switch(convert) {
            case 1: System.out.println(LBStoKG() + " Kilograms\n"); break;
            case 2: System.out.println(KGtoLBS() + " Pounds\n"); break;
            default: System.out.println("Invalid choice\n");
        }
    }

    float LBStoKG() {
        return weight/2.2f;
    }
    float KGtoLBS() {
        return weight*2.2f;
    }
}
