import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type ErrorAlertState = {
  message: string;
  open: boolean;
};

const initialState: ErrorAlertState = {
  message: '',
  open: false,
};

@Injectable({ providedIn: 'root' })
export class ErrorAlertService {
  private maxOpenInterval = 5000;
  state$ = new BehaviorSubject<ErrorAlertState>(initialState);

  showErrorAlert(message: string) {
    this.state$.next({ message, open: true });

    setTimeout(() => {
      this.clearState();
    }, this.maxOpenInterval);
  }

  closeErrorAlert() {
    this.state$.next(initialState);
  }

  private clearState() {
    this.state$.next(initialState);
  }
}
