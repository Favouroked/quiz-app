import { TestBed, inject } from '@angular/core/testing';

import { GetQuizService } from './get-quiz.service';

describe('GetQuizService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetQuizService]
    });
  });

  it('should be created', inject([GetQuizService], (service: GetQuizService) => {
    expect(service).toBeTruthy();
  }));
});
