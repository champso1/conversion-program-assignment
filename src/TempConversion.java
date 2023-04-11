import java.util.Scanner;

public class TempConversion {
    private Scanner sc;
    private int temp;


    TempConversion(Scanner p_sc) {
        this.sc = p_sc;
    }


    void convert() {
        System.out.print("Temperature: ");
        this.temp = sc.nextInt();
        System.out.print("\nWhat conversion?\n1) Celcius to Fahrenheit\n2) Fahrenheit to Celcius\nChoice: ");
        int convert = sc.nextInt();
        switch(convert) {
            case 1: System.out.println(CtoF() + " degrees Fahrenheit\n"); break;
            case 2: System.out.println(FtoC() + " degrees Celcius\n"); break;
            default: System.out.println("Invalid choice\n");
        }
    }

    float CtoF() {
        return (this.temp*9.0f/5.0f) + 32.0f;
    }

    float FtoC() {
        return ((this.temp - 32.0f) * (5.0f/9.0f));
    }
}
