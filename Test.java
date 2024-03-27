
//Important String manipulations for Java : String interpolation
import java.text.MessageFormat;

public class Test {
    public static void main(String[] args) {
        String Fname = "Swastik";
        String Lname = "Mullick";

        System.out.println(MessageFormat.format("My name is {0} {1}", Fname, Lname)); // MessageFormat.format(pattern, placeholders)

        System.out.println(String.format("My name is %1$s %2$s", Fname, Lname)); // String.format(pattern, placeholders)

        System.out.println(String.format("My name is %s %s. Everyone calls me %s", Fname, Lname, Fname));
    }
}