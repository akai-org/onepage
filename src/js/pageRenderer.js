import Header from "header";
import About from "about";
import DateAndVenue from "dateAndVenue";
import EventDetails from "eventDetails";
import Contact from "contact";
import Footer from "footer";

(() => {
  const compiledHeader = Header();
  const compiledAbout = About();
  const compiledDateAndVenue = DateAndVenue();
  const compiledEventDetails = EventDetails();
  const compiledContact = Contact();
  const compiledFooter = Footer();

  const compiledPage =
    compiledHeader +
    compiledAbout +
    compiledDateAndVenue +
    compiledEventDetails +
    compiledContact +
    compiledFooter;

  $("#content").append(compiledPage);
})();
