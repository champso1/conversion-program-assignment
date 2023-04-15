import java.util.Scanner;
public class TimeConversion {
    static String initialTime, initialState, newState;
    static Scanner sc = new Scanner(System.in);
    static private final String[] EST = {"Eastern Time (EST)", "Connecticut", "CT", "Delaware", "DE", "District of Columbia", "DC", "Florida", "FL", "Georgia", "GA", "Indiana", "IN", "Kentucky", "KY", "Maine", "ME", "Maryland", "MD", "Massachusetts", "MA", "Michigan", "MI", "New Hampshire", "NH", "New Jersey", "NJ", "New York", "NY", "North Carolina", "NC", "Ohio", "OH", "Pennsylvania", "PA", "Rhode Island", "RI", "South Carolina", "SC", "Tennessee", "TN", "Vermont", "VT", "Virginia", "VA", "West Virginia", "WA"};
    static private final String[] CST = {"Central Time (CST)", "Alabama", "AL", "Arkansas", "AR", "Illinois", "IL", "Indiana", "IN", "Iowa", "IA", "Kansas", "KY", "Louisiana",  "LA", "Minnesota", "MN", "Missouri", "MO", "Mississippi", "MS", "Nebraska", "NE", "North Dakota", "ND", "Oklahoma", "OK", "South Dakota", "SD", "Tennessee", "TN", "Texas", "TX", "Wisconsin", "WI"};
    static private final String[] MST = {"Mountain Time (MST)", "Arizona", "AZ", "Colorado", "CO", "Idaho", "ID", "Kansas", "KS", "Montana", "MT", "Nebraska", "NE", "New Mexico", "NM", "North Dakota", "ND", "Oregon", "OR", "South Dakota", "SD", "Texas", "TX", "Utah", "UT", "Wyoming", "WY"};
    static private final String[] PST = {"Pacific Time (PST)", "California", "CA", "Idaho", "ID", "Nevada", "NV", "Oregon", "OR", "Washington", "WA"};
    static private final String[] AKST = {"Alaska Standard Time (AKST)", "Alaska", "AK"};
    static private final String[] HST = {"Hawaii Standard Time", "Hawaii", "HI"};
    static private final String[][] allStates = {EST, CST, MST, PST, AKST, HST}; //can add as many as you wish as long as it is in descending time order
    static int hour;

    public void convert(){
        do {
            System.out.print("Initial State: ");
            initialState = sc.nextLine();
        }while (!stateValidator(initialState));

        do {
            System.out.print("Initial time (hh:mm): ");
            initialTime = sc.nextLine();
        }while (!timeValidator(initialTime));
        hour = Integer.parseInt(initialTime.substring(0,2));

        do {
            System.out.print("New State: ");
            newState = sc.nextLine();
        }while (!stateValidator(newState));

        System.out.println(initialState + " is located in the " + printTimeZone(findTimeZoneIndex(initialState)) +"\n" + newState + " is located in the " + printTimeZone(findTimeZoneIndex(newState)) +"\nwhen it is " + initialTime + " in " + initialState + ", it is " + newTime(findTimeZoneIndex(initialState), findTimeZoneIndex(newState)) + initialTime.substring(2,5) + " in " + newState);

    }
    private static String printTimeZone(int x){
        /* enter row number from array allStates and take out time zone.
        used with findTimeZoneIndex method */

        return allStates[x][0];
    }
    private static int newTime(int initialTimeZone, int newTimeZone){
        //formula to convert the time.
       return hour -((6 - findTimeZoneIndex(initialState)) - (6 - findTimeZoneIndex(newState)));
    }
    private static int findTimeZoneIndex(String x){
        // method to find the given state timezone
        int j = 0, timeZoneIndex = -1;
        for(int i=0;i<allStates.length;i++){
            switch (i) {
                case 0 -> j = EST.length;
                case 1 -> j = CST.length;
                case 2 -> j = MST.length;
                case 3 -> j = PST.length;
                case 4 -> j = AKST.length;
                case 5 -> j = HST.length;
            }
            for (int k = 1; k < j; k ++){
                if (allStates[i][k].equalsIgnoreCase(x)) {
                    timeZoneIndex = i;
                    break;
                }
            }
        }
        return timeZoneIndex;
    }

    private static boolean stateValidator(String x) {
        //method to validate state input
        int j = 0;
        boolean validator = false, found = false;
        for (int i = 0; i < allStates.length; i++) {

            if (found)break;

            switch (i) {
                case 0:
                    j = EST.length;
                    break;
                case 1:
                    j = CST.length;
                    break;
                case 2:
                    j = MST.length;
                    break;
                case 3:
                    j = PST.length;
                    break;
                case 4:
                    j = AKST.length;
                    break;
                case 5:
                    j = HST.length;
                    break;
            }

            for (int l = 0; l < j; l++) {
                if (x.equalsIgnoreCase(allStates[i][l])) {
                    validator = true;
                    found = true;
                    break;
                }
            }
        } return validator;
    }

    private static boolean timeValidator(String x){
        //method to validate time input
        boolean validator = true;
        char test;

        if (initialTime.length() != 5){validator = false;}
        else {
            for (int i = 0; i < 2; i++) {
                test = x.charAt(i);
                if (test > 47 && test < 58) {
                } else validator = false;
            }

            for (int i = 3; i < 5; i++) {
                test = x.charAt(i);
                if (test > 47 && test < 58) {
                } else validator = false;
            }
            if (x.charAt(2) == ':'){}
            else validator = false;
        }

        return validator;
    }





}
