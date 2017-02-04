import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

	articles: Article[];
 	
 	constructor(){
 		this.articles = [
 			new Article('Angular CLI', 'https://cli.angular.io/', 8),
 			new Article('Fullstack', 'http://fullstack.io', 5),
 			new Article('React Native', 'https://facebook.github.io/react-native/', 16),
 			new Article('CSS Tricks', 'https://css-tricks.com/snippets/javascript/get-url-and-url-parts-in-javascript/', 9)

 		];
 	}

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
  	// console.log(`${title.value} / ${link.value}`);
  	this.articles.push(new Article(title.value, link.value, 0));
  	title.value = '';
  	link.value = '';
  	return false;
  }

  sortedArticles(): Article[] {
  	return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }
}
 