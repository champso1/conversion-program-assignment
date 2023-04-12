import java.util.Scanner;

public class CurrencyConversion {
    private static float currency;
    Scanner sc = new Scanner(System.in);

    public CurrencyConversion() {
        currency = 0;
    }

    void convert() {
        System.out.print("Ammount: ");
        currency = sc.nextInt();
        System.out.print("\nWhat conversion?\n1) Dollar to Euro\n2) Euro to Dollar\nChoice: ");
        int convert = sc.nextInt();
        switch (convert) {
            case 1:
                System.out.println(DtoE() + " Euro\n");
                break;
            case 2:
                System.out.println(EtoD() + " Dollar\n");
                break;
            default:
                System.out.println("Invalid choice\n");
        }
    }

    public static float DtoE(){
        return (float) (currency * 0.91);
    }
    public static float EtoD(){
        return (float) (currency * (1 / 0.91));
    }

}
