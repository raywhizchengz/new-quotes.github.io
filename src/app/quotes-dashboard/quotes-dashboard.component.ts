import { Component, OnInit } from "@angular/core";
import { Quotes } from "../quotes";

@Component({
  selector: "app-quotes-dashboard",
  templateUrl: "./quotes-dashboard.component.html",
  styleUrls: ["./quotes-dashboard.component.css"]
})
export class QuotesDashboardComponent implements OnInit {
  //creating an object and initializing it
  quotes: Quotes[] = [
    new Quotes(
      0,
      0,
      "Ray",
      "Trojan Horse",
      "einstein",
      "Made a large contribution in the field of chromatography",
      new Date(2, 25, 1992)
    ),
    new Quotes(
      0,
      0,
      "Pio Gama Pinto",
      "Platypus",
      "Boyle's Law",
      "In the field of physics, he commented on Boyle's law and its importance to the human world",
      new Date(3, 6, 2003)
    ),
    new Quotes(
      0,
      0,
      "Roddy Ricch",
      "ATL",
      "the box",
      "contributed largely in the music industry",
      new Date(4, 10, 2010)
    ),
    new Quotes(
      0,
      0,
      "Chris Adams",
      "chanel",
      "Unplugged",
      "he added changes in the perfuming and fragrance sector",
      new Date()
    )
  ];

  //showing and hiding quotes
  toggleQuote(index) {
    this.quotes[index].showQuote = !this.quotes[index].showQuote;
  }

  //deleting the quotes
  deleteQuote(index) {
    let deleteThis = confirm("Are you sure you want to delete quote: ");

    if (deleteThis) {
      this.quotes.splice(index, 1);
    }
  }

  //voting for the quotes
  public likeQuote: boolean = true;

  like(index) {
    if (this.likeQuote) {
      this.quotes[index].upVote += 1;
    }
  }

  public dislikeQuote: boolean = true;

  dislike(index) {
    if (this.dislikeQuote) {
      this.quotes[index].downVote += 1;
    }
  }

  //find quote with the largest quote
  biggestNoInArray(arr, index) {
    var i = 0,
      n = arr.length;

    let count = (this.quotes[index].upVote += 1);
    let previous = this.quotes[index].upVote;

    for (; i != n; ++i) {
      let newCount = Math.max.apply(Math, count);

      if (previous == newCount) {
        return newCount;
      }
    }
  }

  ngOnInit() {
    //read values from local storage and add to list
    let retrievedData = localStorage.getItem("quotesFromTheUser");
    let addQuote = JSON.parse(retrievedData);

    this.quotes.push(addQuote);
  }
}
