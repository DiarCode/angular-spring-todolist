import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class BrowserTitleService {
  constructor(private browserTitle: Title) {}

  setTitle(title: string) {
    this.browserTitle.setTitle(`${title} - TodoList`);
  }

  getTitle(): string {
    return this.browserTitle.getTitle();
  }
}
