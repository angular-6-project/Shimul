import { DailyIndentModule } from './daily-indent.module';

describe('DailyIndentModule', () => {
  let dailyIndentModule: DailyIndentModule;

  beforeEach(() => {
    dailyIndentModule = new DailyIndentModule();
  });

  it('should create an instance', () => {
    expect(dailyIndentModule).toBeTruthy();
  });
});
