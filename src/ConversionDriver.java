import java.util.Scanner;

class ConversionDriver {
    public static void main(String[] args) {
        int choice = 0;
        Scanner sc = new Scanner(System.in);

        do {
            System.out.println("What would you like to do?");
            System.out.println("1) Temperature convert");
            System.out.println("2) Weight convert");
            System.out.println("3) Currency convert");
            System.out.println("4) Time convert");
            System.out.println("5) Quit");
            System.out.print("Choice: ");
            choice = sc.nextInt();

            switch (choice) {
                case 1:
                    TempConversion temp = new TempConversion(sc);
                    temp.convert();
                    break;
                case 2:
                    WeightConversion weight = new WeightConversion(sc);
                    weight.convert();
                    break;
                case 3:
                    CurrencyConversion currency = new CurrencyConversion();
                    currency.convert();
                    break;
                case 4:
                    TimeConversion time = new TimeConversion();
                    time.convert();
                    break;
                case 5: 
                    System.out.print("Good Bye!");
                    break;
                default:
                    System.out.println("Error");
            }

        } while (choice != 5);

        sc.close();

    }
}
